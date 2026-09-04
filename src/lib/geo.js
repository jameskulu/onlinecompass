import * as geomag from 'geomag';

export const KAABA = { lat: 21.4225, lng: 39.8262 };

const rad = Math.PI / 180;

export const normalize = (deg) => ((deg % 360) + 360) % 360;

export const headingDiff = (a, b) => {
  let d = a - b;
  d = d % 360;
  if (d > 180) d -= 360;
  if (d <= -180) d += 360;
  return d;
};

const CARDINALS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
const EIGHT = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export function directionName(deg, fine = true) {
  const list = fine ? CARDINALS : EIGHT;
  const idx = Math.round(normalize(deg) / (360 / list.length)) % list.length;
  return list[idx];
}

export function magneticDeclination(lat, lng) {
  try {
    return geomag.field(lat, lng, 0).declination;
  } catch {
    return 0;
  }
}

/* ---------------- Geo helpers ---------------- */

export function haversine(lat1, lng1, lat2, lng2) {
  const dLat = (lat2 - lat1) * rad;
  const dLng = (lng2 - lng1) * rad;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) ** 2;
  return 6371.0088 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function initialBearing(lat1, lng1, lat2, lng2) {
  const φ1 = lat1 * rad;
  const φ2 = lat2 * rad;
  const dLng = (lng2 - lng1) * rad;
  const y = Math.sin(dLng) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(dLng);
  return normalize((Math.atan2(y, x) * 180) / Math.PI);
}

export function qiblaBearing(lat, lng) {
  return initialBearing(lat, lng, KAABA.lat, KAABA.lng);
}

export function formatCoord(lat, lng, precision = 5) {
  const latStr = `${Math.abs(lat).toFixed(precision)}° ${lat >= 0 ? 'N' : 'S'}`;
  const lngStr = `${Math.abs(lng).toFixed(precision)}° ${lng >= 0 ? 'E' : 'W'}`;
  return `${latStr}, ${lngStr}`;
}

export function formatDMS(lat, lng) {
  const dms = (value, pos, neg) => {
    const dir = value >= 0 ? pos : neg;
    const abs = Math.abs(value);
    const d = Math.floor(abs);
    const mFull = (abs - d) * 60;
    const m = Math.floor(mFull);
    const s = ((mFull - m) * 60).toFixed(1);
    return `${d}°${m}'${s}" ${dir}`;
  };
  return `${dms(lat, 'N', 'S')}, ${dms(lng, 'E', 'W')}`;
}

/* ---------------- Sun position (SunCalc-derived) ---------------- */

const dayMs = 1000 * 60 * 60 * 24;
const J1970 = 2440588;
const J2000 = 2451545;

const toJulian = (date) => date.valueOf() / dayMs - 0.5 + J1970;
const fromJulian = (j) => new Date((j + 0.5 - J1970) * dayMs);
const toDays = (date) => toJulian(date) - J2000;

const solarMeanAnomaly = (d) => rad * (357.5291 + 0.98560028 * d);
const eclipticLongitude = (M) => {
  const C = rad * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
  return M + C + rad * 102.9372 + Math.PI;
};
const declination = (l, b) =>
  Math.asin(
    Math.sin(b) * Math.cos(rad * 23.44) + Math.cos(b) * Math.sin(rad * 23.44) * Math.sin(l),
  );
const rightAscension = (l, b) =>
  Math.atan2(
    Math.sin(l) * Math.cos(rad * 23.44) - Math.tan(b) * Math.sin(rad * 23.44),
    Math.cos(l),
  );
const siderealTime = (d, lw) => rad * (280.16 + 360.9856235 * d) - lw;
const azimuth = (H, phi, dec) =>
  Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi));
const altitude = (H, phi, dec) =>
  Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
const J0 = 0.0009;
const julianCycle = (d, lw) => Math.round(d - J0 - lw / (2 * Math.PI));
const approxTransit = (Ht, lw, n) => J0 + (Ht + lw) / (2 * Math.PI) + n;
const solarTransitJ = (ds, M, L) => J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
const hourAngle = (h, phi, d) =>
  Math.acos((Math.sin(h) - Math.sin(phi) * Math.sin(d)) / (Math.cos(phi) * Math.cos(d)));
const getSetJ = (h, lw, phi, dec, n, M, L) =>
  solarTransitJ(approxTransit(hourAngle(h, phi, dec), lw, n), M, L);

export function sunPosition(date, lat, lng) {
  const lw = rad * -lng;
  const phi = rad * lat;
  const d = toDays(date);
  const c = sunCoords(d);
  const H = siderealTime(d, lw) - c.ra;
  return {
    azimuth: normalize((azimuth(H, phi, c.dec) * 180) / Math.PI),
    altitude: altitude(H, phi, c.dec) * (180 / Math.PI),
  };
}

function sunCoords(d) {
  const M = solarMeanAnomaly(d);
  const L = eclipticLongitude(M);
  return { dec: declination(L, 0), ra: rightAscension(L, 0) };
}

export function sunTimes(date, lat, lng) {
  const lw = rad * -lng;
  const phi = rad * lat;
  const d = toDays(date);
  const n = julianCycle(d, lw);
  const ds = approxTransit(0, lw, n);
  const M = solarMeanAnomaly(ds);
  const L = eclipticLongitude(M);
  const dec = declination(L, 0);
  const Jnoon = solarTransitJ(ds, M, L);
  const Jsunrise = getSetJ(-0.833 * rad, lw, phi, dec, n, M, L);
  const Jsunset = getSetJ(-0.833 * rad, lw, phi, dec, n + 1, M, L);

  const toDate = (j) => (Number.isFinite(j) ? fromJulian(j) : null);
  return {
    sunrise: toDate(Jsunrise),
    sunset: toDate(Jsunset),
    solarNoon: toDate(Jnoon),
  };
}

export function formatTime(date) {
  if (!date) return '—';
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/* ---------------- Moon position (SunCalc-derived) ---------------- */

const J1999 = 2451550.09766;

const moonCoords = (d) => {
  const L = rad * (218.316 + 481267.8813 * d);
  const M = rad * (134.963 + 477198.8676 * d);
  const F = rad * (93.272 + 483202.0175 * d);
  const l = L + rad * 6.289 * Math.sin(M);
  const b = rad * 5.128 * Math.sin(F);
  const dt = 385001 - 20905 * Math.cos(M);
  return {
    ra: rightAscension(l, b),
    dec: declination(l, b),
    dist: dt,
  };
};

export function moonPosition(date, lat, lng) {
  const lw = rad * -lng;
  const phi = rad * lat;
  const d = toDays(date);
  const c = moonCoords(d);
  const H = siderealTime(d, lw) - c.ra;
  const az = azimuth(H, phi, c.dec);
  const alt = altitude(H, phi, c.dec);
  return {
    azimuth: normalize((az * 180) / Math.PI),
    altitude: alt * (180 / Math.PI),
    distance: c.dist,
  };
}
