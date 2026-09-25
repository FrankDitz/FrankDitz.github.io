import { Buffer } from 'node:buffer';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const portraitPath = path.join(projectRoot, 'src/assets/frank-ditz-blue-suit-cutout.png');
const outputPath = path.join(projectRoot, 'public/og-image.png');

const portrait = await sharp(await readFile(portraitPath))
  .resize({ height: 610, fit: 'inside', withoutEnlargement: true })
  .png()
  .toBuffer();

const background = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fbfaf7"/>
  <rect x="785" width="415" height="630" fill="#0966d8"/>
  <rect x="1035" y="88" width="165" height="454" fill="#003b91"/>
  <path d="M48 74H112" stroke="#ff5f32" stroke-width="4"/>
  <text x="48" y="134" fill="#061747" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="5">FRANK DITZ</text>
  <text x="48" y="258" fill="#061747" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="800">Software</text>
  <text x="48" y="344" fill="#061747" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="400">Engineer</text>
  <text x="52" y="410" fill="#4f6697" font-family="Arial, Helvetica, sans-serif" font-size="27">Backend · Integrations · Full-stack</text>
  <text x="52" y="526" fill="#061747" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">frankditz.github.io</text>
</svg>`;

await sharp(Buffer.from(background))
  .composite([{ input: portrait, left: 650, top: 20 }])
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

process.stdout.write(`Generated ${outputPath}\n`);
