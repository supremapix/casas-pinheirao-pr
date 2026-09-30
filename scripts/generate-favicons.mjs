import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

const targets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'apple-touch-icon-precomposed.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
  { file: 'mstile-150x150.png', size: 150 },
];

async function generate() {
  for (const target of targets) {
    const outPath = path.resolve('public', target.file);
    await sharp(svgBuffer)
      .resize(target.size, target.size)
      .png()
      .toFile(outPath);
    console.log(`Generated: ${target.file} (${target.size}x${target.size})`);
  }

  // Also create standard favicon.ico from 32x32 PNG
  const ico32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.resolve('public/favicon.ico'), ico32Buffer);
  console.log('Generated: favicon.ico');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
