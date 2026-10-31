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

export function finalBearing(lat1, lng1, lat2, lng2) {
  return normalize(initialBearing(lat2, lng2, lat1, lng1) + 180);
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

export function parseDMS(str) {
  if (!str || typeof str !== 'string') return null;
  const trimmed = str.trim();
  const match = trimmed.match(/^([-+]?\d+(?:\.\d+)?)[°\s]+(\d+(?:\.\d+)?)[′'\s]+(\d+(?:\.\d+)?)[″"\s]*([NSEWnsew])?$/);
  if (match) {
    const deg = parseFloat(match[1]);
    const min = parseFloat(match[2]);
    const sec = parseFloat(match[3]);
    const dir = match[4]?.toUpperCase();
    let val = Math.abs(deg) + min / 60 + sec / 3600;
    if (deg < 0 || dir === 'S' || dir === 'W') val = -val;
    return val;
  }
  const dec = parseFloat(trimmed);
  return Number.isNaN(dec) ? null : dec;
}

/* ---------------- UTM (Universal Transverse Mercator) WGS84 ---------------- */

export function toUTM(lat, lng) {
  if (lat < -80 || lat > 84) {
    return { error: 'UTM valid between 80°S and 84°N' };
  }
  const zone = Math.floor((lng + 180) / 6) + 1;
  const centralMeridian = (zone - 1) * 6 - 180 + 3;
  const latRad = lat * (Math.PI / 180);
  const lngRad = lng * (Math.PI / 180);
  const cmRad = centralMeridian * (Math.PI / 180);

  const a = 6378137.0;
  const f = 1 / 298.257223563;
  const e2 = 2 * f - f * f;
  const ePrime2 = e2 / (1 - e2);
  const k0 = 0.9996;

  const N = a / Math.sqrt(1 - e2 * Math.sin(latRad) ** 2);
  const T = Math.tan(latRad) ** 2;
  const C = ePrime2 * Math.cos(latRad) ** 2;
  const A = Math.cos(latRad) * (lngRad - cmRad);

  const M = a * (
    (1 - e2 / 4 - 3 * e2 ** 2 / 64 - 5 * e2 ** 3 / 256) * latRad -
    (3 * e2 / 8 + 3 * e2 ** 2 / 32 + 45 * e2 ** 3 / 1024) * Math.sin(2 * latRad) +
    (15 * e2 ** 2 / 256 + 45 * e2 ** 3 / 1024) * Math.sin(4 * latRad) -
    (35 * e2 ** 3 / 3072) * Math.sin(6 * latRad)
  );

  const easting = k0 * N * (
    A +
    (1 - T + C) * A ** 3 / 6 +
    (5 - 18 * T + T ** 2 + 72 * C - 58 * ePrime2) * A ** 5 / 120
  ) + 500000;

  let northing = k0 * (
    M +
    N * Math.tan(latRad) * (
      A ** 2 / 2 +
      (5 - T + 9 * C + 4 * C ** 2) * A ** 4 / 24 +
      (61 - 58 * T + T ** 2 + 600 * C - 330 * ePrime2) * A ** 6 / 720
    )
  );

  const hemisphere = lat >= 0 ? 'N' : 'S';
  if (lat < 0) {
    northing += 10000000;
  }

  const bands = 'CDEFGHJKLMNPQRSTUVWX';
  const bandIdx = Math.floor((lat + 80) / 8);
  const band = bands[Math.min(Math.max(bandIdx, 0), bands.length - 1)];

  return {
    zone,
    band,
    hemisphere,
    easting: Math.round(easting),
    northing: Math.round(northing),
    formatted: `${zone}${band} ${Math.round(easting)}m E ${Math.round(northing)}m N`,
  };
}

export function fromUTM(easting, northing, zone, hemisphere = 'N') {
  const a = 6378137.0;
  const f = 1 / 298.257223563;
  const e2 = 2 * f - f * f;
  const ePrime2 = e2 / (1 - e2);
  const e1 = (1 - Math.sqrt(1 - e2)) / (1 + Math.sqrt(1 - e2));
  const k0 = 0.9996;

  const x = easting - 500000;
  let y = northing;
  if (hemisphere.toUpperCase() === 'S') {
    y -= 10000000;
  }

  const M = y / k0;
  const mu = M / (a * (1 - e2 / 4 - 3 * e2 ** 2 / 64 - 5 * e2 ** 3 / 256));

  const phi1Rad = mu +
    (3 * e1 / 2 - 27 * e1 ** 3 / 32) * Math.sin(2 * mu) +
    (21 * e1 ** 2 / 16 - 55 * e1 ** 4 / 32) * Math.sin(4 * mu) +
    (151 * e1 ** 3 / 96) * Math.sin(6 * mu) +
    (1097 * e1 ** 4 / 512) * Math.sin(8 * mu);

  const N1 = a / Math.sqrt(1 - e2 * Math.sin(phi1Rad) ** 2);
  const T1 = Math.tan(phi1Rad) ** 2;
  const C1 = ePrime2 * Math.cos(phi1Rad) ** 2;
  const R1 = a * (1 - e2) / Math.pow(1 - e2 * Math.sin(phi1Rad) ** 2, 1.5);
  const D = x / (N1 * k0);

  const latRad = phi1Rad - (N1 * Math.tan(phi1Rad) / R1) * (
    D ** 2 / 2 -
    (5 + 3 * T1 + 10 * C1 - 4 * C1 ** 2 - 9 * ePrime2) * D ** 4 / 24 +
    (61 + 90 * T1 + 298 * C1 + 45 * T1 ** 2 - 252 * ePrime2 - 3 * C1 ** 2) * D ** 6 / 720
  );

  const centralMeridian = (zone - 1) * 6 - 180 + 3;
  const lngRad = (centralMeridian * Math.PI / 180) + (
    D -
    (1 + 2 * T1 + C1) * D ** 3 / 6 +
    (5 - 2 * C1 + 28 * T1 - 3 * C1 ** 2 + 8 * ePrime2 + 24 * T1 ** 2) * D ** 5 / 120
  ) / Math.cos(phi1Rad);

  return {
    lat: latRad * (180 / Math.PI),
    lng: lngRad * (180 / Math.PI),
  };
}

/* ---------------- Plus Codes (Open Location Code) ---------------- */

const OLC_CHARSET = '23456789CFGHJMPQRVWX';

export function encodePlusCode(latitude, longitude) {
  let lat = Math.min(Math.max(latitude, -90), 90);
  let lng = longitude;
  while (lng < -180) lng += 360;
  while (lng >= 180) lng -= 360;
  lat += 90;
  lng += 180;
  let code = '';
  let latDiv = 20;
  let lngDiv = 20;
  let latDigit = Math.floor(lat / latDiv);
  let lngDigit = Math.floor(lng / lngDiv);
  code += OLC_CHARSET[latDigit] + OLC_CHARSET[lngDigit];
  lat -= latDigit * latDiv;
  lng -= lngDigit * lngDiv;
  for (let i = 1; i < 5; i++) {
    latDiv /= 20;
    lngDiv /= 20;
    latDigit = Math.floor(lat / latDiv);
    lngDigit = Math.floor(lng / lngDiv);
    code += OLC_CHARSET[latDigit] + OLC_CHARSET[lngDigit];
    lat -= latDigit * latDiv;
    lng -= lngDigit * lngDiv;
    if (i === 3) code += '+';
  }
  return code;
}

export function decodePlusCode(code) {
  if (!code || typeof code !== 'string') return null;
  const clean = code.replace('+', '').toUpperCase();
  let lat = -90;
  let lng = -180;
  let latDiv = 20;
  let lngDiv = 20;
  for (let i = 0; i < clean.length; i += 2) {
    const latIdx = OLC_CHARSET.indexOf(clean[i]);
    const lngIdx = OLC_CHARSET.indexOf(clean[i + 1]);
    if (latIdx === -1 || lngIdx === -1) return null;
    lat += latIdx * latDiv;
    lng += lngIdx * lngDiv;
    latDiv /= 20;
    lngDiv /= 20;
  }
  return { lat: lat + latDiv * 10, lng: lng + lngDiv * 10 };
}

export function parseCoordinateInput(input) {
  if (!input || typeof input !== 'string') return null;
  const str = input.trim();

  // 1. Check Plus Code (e.g. 87G8P2X7+9P)
  if (/^[23456789CFGHJMPQRVWX]{4,8}\+[23456789CFGHJMPQRVWX]{2,3}$/i.test(str)) {
    return decodePlusCode(str);
  }

  // 2. Check UTM format: e.g. "18T 583959 4507351"
  const utmMatch = str.match(/^(\d{1,2})\s*([C-X])\s+(\d+(?:\.\d+)?)\s*m?\s*(?:E)?\s+(\d+(?:\.\d+)?)\s*m?\s*(?:N)?$/i);
  if (utmMatch) {
    const zone = parseInt(utmMatch[1], 10);
    const band = utmMatch[2].toUpperCase();
    const easting = parseFloat(utmMatch[3]);
    const northing = parseFloat(utmMatch[4]);
    const hemisphere = band >= 'N' ? 'N' : 'S';
    return fromUTM(easting, northing, zone, hemisphere);
  }

  // 3. Check DMS format separated by comma or semicolon
  if (str.includes(',') || str.includes(';') || str.match(/[NSEWnsew]/)) {
    let parts;
    if (str.includes(',')) parts = str.split(',');
    else if (str.includes(';')) parts = str.split(';');
    else {
      const dirMatch = str.match(/([NSns])\s*([+\-]?\d)/);
      if (dirMatch) {
        const splitIdx = str.indexOf(dirMatch[1]) + 1;
        parts = [str.slice(0, splitIdx), str.slice(splitIdx)];
      }
    }
    if (parts && parts.length === 2) {
      const lat = parseDMS(parts[0].trim());
      const lng = parseDMS(parts[1].trim());
      if (lat !== null && lng !== null && !Number.isNaN(lat) && !Number.isNaN(lng)) {
        return { lat, lng };
      }
    }
  }

  // 4. Check two plain decimal numbers
  const numMatch = str.match(/^([-+]?\d+(?:\.\d+)?)[,\s]+([-+]?\d+(?:\.\d+)?)$/);
  if (numMatch) {
    const lat = parseFloat(numMatch[1]);
    const lng = parseFloat(numMatch[2]);
    if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      return { lat, lng };
    }
  }

  return null;
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
  // azimuth() uses the astronomical convention (0=due south, +toward west).
  // Convert to a compass bearing measured clockwise from north (+180°).
  return {
    azimuth: normalize((azimuth(H, phi, c.dec) * 180) / Math.PI + 180),
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
    azimuth: normalize((az * 180) / Math.PI + 180),
    altitude: alt * (180 / Math.PI),
    distance: c.dist,
  };
}
