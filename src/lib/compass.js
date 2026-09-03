import { normalize, magneticDeclination } from './geo.js';

const isSecure = () => typeof window !== 'undefined' && window.isSecureContext === true;

// Angle the OS has rotated the UI by (0 portrait, 90/180/270 landscape).
// Chromium's alpha is referenced to the device's top edge, so in landscape
// the heading must be compensated for what the user is actually facing.
const screenAngle = () => {
  if (typeof screen !== 'undefined' && screen.orientation && typeof screen.orientation.angle === 'number') {
    return screen.orientation.angle;
  }
  if (typeof window !== 'undefined' && typeof window.orientation === 'number') return window.orientation;
  return 0;
};

// Small per-event filter applied ONLY to the alpha-derived path (Android and
// other W3C browsers) where the raw magnetometer is visibly jittery. It runs in
// the SENSOR handler — never in the render loop — so it tames input noise
// without adding rendering latency. iOS's webkitCompassHeading is already
// OS-fused/smoothed and is passed through untouched.
const ALPHA_SMOOTHING = 0.35;

/**
 * Compass engine.
 *
 * Sensor sources (one per platform, never both — subscribing to both
 * interleaves relative and absolute readings and makes the dial fight itself):
 *   - iOS/Safari: `deviceorientation`, read via `webkitCompassHeading`. This is
 *     used DIRECTLY; heading is never derived from alpha/beta/gamma when
 *     webkitCompassHeading exists.
 *   - Chromium/Android: `deviceorientationabsolute` (North-referenced alpha),
 *     with the small source-side filter above.
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
    this._smoothed = null;
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

  /* ---------------- Permission & start ---------------- */

  async requestPermission() {
    const iOS =
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function';
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
    this._setPermission('granted');
    return true;
  }

  start() {
    if (this._running) return;
    this._running = true;
    this._smoothed = null;
    this._history = [];

    if (!isSecure() && !('webkitCompassHeading' in (window.DeviceOrientationEvent?.prototype ?? {}))) {
      this._setStatus('insecure');
      return;
    }

    // Chromium/Android must use `deviceorientationabsolute` to get a
    // North-referenced reading; plain `deviceorientation` there is relative to
    // the page-load pose, which makes the dial drift and spin the wrong way.
    // iOS has no absolute event but delivers webkitCompassHeading on the plain
    // `deviceorientation` event.
    if ('ondeviceorientationabsolute' in window) {
      this._onDeviceOrientation = this._makeHandler();
      window.addEventListener('deviceorientationabsolute', this._onDeviceOrientation, true);
      this._setStatus('live');
      return;
    }
    if ('ondeviceorientation' in window) {
      this._onDeviceOrientation = this._makeHandler();
      window.addEventListener('deviceorientation', this._onDeviceOrientation, true);
      this._setStatus('live');
      return;
    }
    this._setStatus('unsupported');
  }

  stop() {
    this._running = false;
    window.removeEventListener('deviceorientationabsolute', this._onDeviceOrientation, true);
    window.removeEventListener('deviceorientation', this._onDeviceOrientation, true);
  }

  _makeHandler() {
    return (event) => {
      let headingMagnetic = null;
      let acc = null;
      let calibrated = false;
      let source = 'device';

      // iOS/Safari: webkitCompassHeading is available on the deviceorientation event.
      // Use it raw and immediate - the OS has already fused magnetometer + gyro,
      // corrected for screen rotation, and smoothed the value. Deriving a heading
      // from alpha/beta/gamma would reintroduce error AND latency.
      if (typeof event.webkitCompassHeading === 'number' && !Number.isNaN(event.webkitCompassHeading)) {
        headingMagnetic = normalize(event.webkitCompassHeading);
        acc = typeof event.webkitCompassAccuracy === 'number' ? event.webkitCompassAccuracy : null;
        calibrated = acc == null || acc < 10;
        source = 'webkitCompassHeading';
      }
      // Chromium/Android: use deviceorientationabsolute for a North-referenced
      // absolute reading. Plain deviceorientation there is relative to page-load
      // pose and makes the dial drift/spin the wrong way.
      else if (typeof event.alpha === 'number' && !Number.isNaN(event.alpha)) {
        // Alpha increases counter-clockwise from North. Convert to compass heading:
        // heading = 360 - alpha, then compensate for screen orientation.
        const heading = normalize(360 - event.alpha + screenAngle());
        // Only apply source-side filter for the alpha path (jittery on some Android);
        // iOS webkitCompassHeading path above passes through untouched.
        if (source !== 'webkitCompassHeading') {
          if (this._smoothed == null) {
            this._smoothed = heading;
          } else {
            const d = normalize(heading - this._smoothed);
            this._smoothed = normalize(this._smoothed + ALPHA_SMOOTHING * (d > 180 ? d - 360 : d));
          }
          headingMagnetic = this._smoothed;
        } else {
          headingMagnetic = heading;
        }
        source = 'device-absolute';
        calibrated = event.absolute === true;
      }

      if (headingMagnetic == null) return;
      const headingTrue = normalize(headingMagnetic + this.declination);
      this._reading({
        magnetic: normalize(headingMagnetic),
        trueHeading: headingTrue,
        accuracy: acc,
        source,
        calibrated,
      });
    };
  }
}