import { normalize, magneticDeclination } from './geo.js';

const isSecure = () => typeof window !== 'undefined' && window.isSecureContext === true;

/**
 * Compass engine — acquires the best available heading source and emits
 * smoothed readings. Priority:
 *   1. AbsoluteOrientationSensor (Chrome)        -> true heading
 *   2. deviceorientationabsolute                 -> true reference
 *   3. iOS deviceorientation (webkitCompassHeading) -> magnetic heading
 *   4. deviceorientation (alpha)                 -> magnetic heading
 *   5. Magnetometer Generic Sensor               -> magnetic heading
 *   6. Geolocation heading (moving)              -> true heading
 */
export class Compass {
  constructor() {
    this.listeners = new Set();
    this.onStatus = null;
    this.onPermission = null;
    this.lat = null;
    this.lng = null;
    this.declination = 0;
    this.source = 'none';
    this.accuracy = null;
    this._running = false;
    this._history = [];
    this._cleanups = [];
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  setLocation(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.declination = lat != null ? magneticDeclination(lat, lng) : 0;
  }

  _emit(reading) {
    for (const fn of this.listeners) fn(reading);
  }

  _setStatus(status) {
    if (this.onStatus) this.onStatus(status);
  }

  _setPermission(state) {
    if (this.onPermission) this.onPermission(state);
  }

  _estimateAccuracy(heading) {
    this._history.push(heading);
    if (this._history.length > 12) this._history.shift();
    if (this._history.length < 6) return null;
    let sum = 0;
    for (let i = 1; i < this._history.length; i++) {
      sum += Math.abs(normalize(this._history[i] - this._history[i - 1]) || 0);
    }
    return sum / (this._history.length - 1);
  }

  _reading({ magnetic, trueHeading, accuracy, source, calibrated }) {
    const decl = trueHeading != null && magnetic != null ? normalize(trueHeading - magnetic) : this.declination;
    this.source = source;
    const acc = accuracy ?? this._estimateAccuracy(magnetic ?? trueHeading);
    this.accuracy = acc;
    this._emit({
      magnetic,
      trueHeading,
      declination: decl,
      accuracy: acc,
      source,
      calibrated,
      lat: this.lat,
      lng: this.lng,
    });
  }

  /* ------------------- Permission & start ------------------- */

  async requestPermission() {
    const iOS =
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function';
    const sensors = typeof window !== 'undefined' ? window : globalThis;

    if (iOS) {
      try {
        const state = await DeviceOrientationEvent.requestPermission();
        if (state !== 'granted') {
          this._setPermission('denied');
          this._setStatus('denied');
          return false;
        }
      } catch {
        /* fall through */
      }
    }

    if (typeof sensors.AbsoluteOrientationSensor !== 'undefined') {
      try {
        await navigator.permissions.query({ name: 'accelerometer' });
      } catch {
        /* older browsers */
      }
    }

    this._setPermission('granted');
    return true;
  }

  async start() {
    if (this._running) return;
    this._running = true;
    const s = globalThis;
    let started = false;

    if (!isSecure() && !('webkitCompassHeading' in (s.DeviceOrientationEvent?.prototype ?? {}))) {
      this._setStatus('insecure');
      return;
    }

    // 1. AbsoluteOrientationSensor -> true heading
    if (typeof s.AbsoluteOrientationSensor !== 'undefined') {
      try {
        const sensor = new s.AbsoluteOrientationSensor({ frequency: 30 });
        const onReading = () => {
          const q = sensor.quaternion;
          const heading = this._headingFromQuaternion(q);
          this._reading({ trueHeading: heading, source: 'orientation', calibrated: true });
        };
        sensor.addEventListener('reading', onReading);
        sensor.addEventListener(
          'error',
          () => {
            sensor.removeEventListener('reading', onReading);
            this._cleanups.push(() => sensor.stop());
            started = started || this._startDeviceOrientation();
          },
          { once: true },
        );
        sensor.start();
        this._cleanups.push(() => sensor.stop());
        this._setStatus('live');
        started = true;
        return;
      } catch {
        /* fall through */
      }
    }

    started = this._startDeviceOrientation();
    if (!started) this._startMagnetometer();
  }

  stop() {
    this._running = false;
    for (const cleanup of this._cleanups) cleanup();
    this._cleanups = [];
    window.removeEventListener('deviceorientation', this._onDeviceOrientation, true);
    window.removeEventListener('deviceorientationabsolute', this._onDeviceOrientation, true);
  }

  /* ------------------- DeviceOrientation ------------------- */

  _headingFromQuaternion(q) {
    // q maps device frame -> world frame (x east, y north, z up)
    const [w, x, y, z] = q;
    // rotate device +Y axis [0,1,0] by q into world frame
    const t0 = 2 * (y * 0 - z * 1);
    const t1 = 2 * (z * 0 - x * 0);
    const t2 = 2 * (x * 1 - y * 0);
    const vy = 1 + w * t1 + z * t0 - x * t2;
    const vx = 0 + w * t0 + y * t2 - z * t1;
    return normalize((Math.atan2(vx, vy) * 180) / Math.PI);
  }

  _startDeviceOrientation() {
    const s = globalThis;
    let used = false;

    const handler = (event) => {
      used = true;
      const isAbsolute = event.absolute === true;

      if (typeof event.webkitCompassHeading === 'number' && !isAbsolute) {
        // iOS — magnetic heading
        const magnetic = normalize(event.webkitCompassHeading);
        const acc = typeof event.webkitCompassAccuracy === 'number' ? event.webkitCompassAccuracy : null;
        const trueHeading = normalize(magnetic + this.declination);
        this._reading({ magnetic, trueHeading, accuracy: acc, source: 'device', calibrated: acc == null || acc < 10 });
        return;
      }

      const alpha = typeof event.alpha === 'number' ? event.alpha : 0;
      if (isAbsolute) {
        const trueHeading = normalize(360 - alpha);
        const magnetic = normalize(trueHeading - this.declination);
        this._reading({ magnetic, trueHeading, source: 'device-absolute', calibrated: true });
      } else {
        const magnetic = normalize(360 - alpha);
        const trueHeading = normalize(magnetic + this.declination);
        this._reading({ magnetic, trueHeading, source: 'device', calibrated: false });
      }
    };

    if ('ondeviceorientationabsolute' in window) {
      window.addEventListener('deviceorientationabsolute', handler, true);
      this._onDeviceOrientation = handler;
      this._setStatus('live');
      return true;
    }
    if ('ondeviceorientation' in window) {
      window.addEventListener('deviceorientation', handler, true);
      this._onDeviceOrientation = handler;
      this._setStatus('live');
      return true;
    }
    return false;
  }

  /* ------------------- Magnetometer sensor ------------------- */

  _startMagnetometer() {
    const s = globalThis;
    if (typeof s.Magnetometer === 'undefined') {
      this._setStatus('unsupported');
      return;
    }
    try {
      const sensor = new s.Magnetometer({ frequency: 30 });
      const onReading = () => {
        const { x, y } = sensor;
        const magnetic = normalize((Math.atan2(y, x) * 180) / Math.PI - 90);
        const trueHeading = normalize(magnetic + this.declination);
        this._reading({ magnetic, trueHeading, source: 'magnetometer', calibrated: false });
      };
      sensor.addEventListener('reading', onReading);
      sensor.addEventListener('error', () => {
        sensor.removeEventListener('reading', onReading);
        this._setStatus('unsupported');
      }, { once: true });
      sensor.start();
      this._cleanups.push(() => sensor.stop());
      this._setStatus('live');
    } catch {
      this._setStatus('unsupported');
    }
  }

  /* ------------------- Geolocation heading fallback ------------------- */

  startGeoHeading() {
    if (!navigator.geolocation) return;
    let lastLat = null;
    let lastLng = null;
    navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        if (lastLat != null && pos.coords.speed > 0.5) {
          const lat2 = latitude;
          const lng2 = longitude;
          const dLng = (lng2 - lastLng) * (Math.PI / 180);
          const φ1 = lastLat * (Math.PI / 180);
          const φ2 = lat2 * (Math.PI / 180);
          const y = Math.sin(dLng) * Math.cos(φ2);
          const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(dLng);
          const heading = normalize((Math.atan2(y, x) * 180) / Math.PI);
          this._reading({ trueHeading: heading, source: 'gps', calibrated: false });
        }
        lastLat = latitude;
        lastLng = longitude;
      },
      () => {},
      { enableHighAccuracy: true },
    );
  }
}
