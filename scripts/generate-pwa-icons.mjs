import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

function createSvg(size, maskable = false) {
  const center = size / 2;
  const radius = maskable ? size * 0.38 : size * 0.44;
  const needleNorth = radius * 0.85;
  const needleSouth = radius * 0.78;
  const needleWidth = radius * 0.14;
  const centerCap = radius * 0.12;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs>
      <radialGradient id="mesh" cx="30%" cy="20%" r="90%">
        <stop offset="0%" stop-color="#1e1e24" />
        <stop offset="100%" stop-color="#0e0e11" />
      </radialGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4" />
      </filter>
    </defs>

    <!-- Background for maskable or standalone icon -->
    <rect width="${size}" height="${size}" rx="${maskable ? 0 : size * 0.22}" fill="url(#mesh)" />

    <!-- Outer dial ring -->
    <circle cx="${center}" cy="${center}" r="${radius}" fill="#16161a" stroke="#2c2c34" stroke-width="${Math.max(2, size * 0.015)}" filter="url(#shadow)" />

    <!-- Cardinal markers -->
    <text x="${center}" y="${center - radius * 0.68}" text-anchor="middle" dominant-baseline="central" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${radius * 0.24}" font-weight="800" fill="#ee0000">N</text>
    <text x="${center + radius * 0.75}" y="${center}" text-anchor="middle" dominant-baseline="central" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${radius * 0.2}" font-weight="600" fill="#a1a1aa">E</text>
    <text x="${center}" y="${center + radius * 0.75}" text-anchor="middle" dominant-baseline="central" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${radius * 0.2}" font-weight="600" fill="#a1a1aa">S</text>
    <text x="${center - radius * 0.75}" y="${center}" text-anchor="middle" dominant-baseline="central" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${radius * 0.2}" font-weight="600" fill="#a1a1aa">W</text>

    <!-- Compass needle -->
    <!-- North (Red) -->
    <polygon points="${center},${center - needleNorth} ${center - needleWidth},${center} ${center + needleWidth},${center}" fill="#ee0000" filter="url(#shadow)" />
    <!-- South (Silver/White) -->
    <polygon points="${center},${center + needleSouth} ${center - needleWidth * 0.8},${center} ${center + needleWidth * 0.8},${center}" fill="#e4e4e7" />

    <!-- Center Pivot Cap -->
    <circle cx="${center}" cy="${center}" r="${centerCap}" fill="#ffffff" stroke="#27272a" stroke-width="${Math.max(1.5, size * 0.01)}" />
    <circle cx="${center}" cy="${center}" r="${centerCap * 0.4}" fill="#09090b" />
  </svg>`;
}

async function generate() {
  console.log('Generating PWA icons...');
  
  // 192x192
  await sharp(Buffer.from(createSvg(192, false)))
    .png()
    .toFile(join(publicDir, 'icon-192.png'));
  console.log('Created icon-192.png');

  // 512x512
  await sharp(Buffer.from(createSvg(512, false)))
    .png()
    .toFile(join(publicDir, 'icon-512.png'));
  console.log('Created icon-512.png');

  // 512x512 maskable
  await sharp(Buffer.from(createSvg(512, true)))
    .png()
    .toFile(join(publicDir, 'icon-maskable-512.png'));
  console.log('Created icon-maskable-512.png');

  // Apple touch icon (180x180)
  await sharp(Buffer.from(createSvg(180, false)))
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  console.log('All icons generated successfully!');
}

generate().catch(console.error);

