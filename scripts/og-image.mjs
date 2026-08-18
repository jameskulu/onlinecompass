import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og.png');

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="cy" cx="0.2" cy="0.1" r="0.9">
      <stop offset="0%" stop-color="#50e3c2" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#50e3c2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vi" cx="0.95" cy="0.15" r="0.8">
      <stop offset="0%" stop-color="#7928ca" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#7928ca" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="am" cx="0.9" cy="0.95" r="0.7">
      <stop offset="0%" stop-color="#f9cb28" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#f9cb28" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#fafafa"/>
  <rect width="${W}" height="${H}" fill="url(#cy)"/>
  <rect width="${W}" height="${H}" fill="url(#vi)"/>
  <rect width="${W}" height="${H}" fill="url(#am)"/>

  <!-- compass rose -->
  <g transform="translate(600,268)">
    <circle r="150" fill="#ffffff" stroke="#ebebeb" stroke-width="2"/>
    <g stroke="#a1a1a1">
      <line x1="0" y1="-138" x2="0" y2="-122" stroke-width="3"/>
      <line x1="0" y1="122" x2="0" y2="138" stroke-width="3"/>
      <line x1="-138" y1="0" x2="-122" y2="0" stroke-width="3"/>
      <line x1="122" y1="0" x2="138" y2="0" stroke-width="3"/>
    </g>
    <g stroke="#d4d4d4">
      <line x1="-98" y1="-98" x2="-86" y2="-86" stroke-width="2"/>
      <line x1="86" y1="-98" x2="98" y2="-86" stroke-width="2"/>
      <line x1="-98" y1="86" x2="-86" y2="98" stroke-width="2"/>
      <line x1="86" y1="86" x2="98" y2="98" stroke-width="2"/>
    </g>
    <text x="0" y="-78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" fill="#ee0000">N</text>
    <text x="92" y="12" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" fill="#4d4d4d">E</text>
    <text x="0" y="98" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" fill="#4d4d4d">S</text>
    <text x="-92" y="12" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" fill="#4d4d4d">W</text>
    <polygon points="0,-128 -16,0 16,0" fill="#ee0000"/>
    <polygon points="0,120 -12,0 12,0" fill="#a3a3a3"/>
    <circle r="14" fill="#ffffff" stroke="#ebebeb" stroke-width="2"/>
  </g>

  <text x="600" y="462" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#171717">Accurate Online Compass</text>
  <text x="600" y="512" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#4d4d4d">Free online compass — live heading, Qibla, bearing &amp; sun position</text>

  <text x="60" y="596" font-family="Courier New, monospace" font-size="22" fill="#888888">accurateonlinecompass.com</text>
</svg>`;

await sharp(Buffer.from(svg), { density: 144 }).png().toFile(out);
console.log('wrote', out);
