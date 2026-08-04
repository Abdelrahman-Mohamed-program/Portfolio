#!/usr/bin/env node
// Image optimization script using sharp
// Run with: node scripts/optimize-images.js

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.resolve('./src/assets');
const OUTPUT_DIR = path.resolve('./public/optimized');

const images = [
  { name: 'me.png', widths: [400, 600, 800, 1000] },
  { name: 'travling.png', widths: [400, 600, 800, 1000] },
  { name: 'mango.png', widths: [400, 600, 800, 1000] },
  { name: 'social.png', widths: [400, 600, 800] },
];

async function optimize() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const img of images) {
    const inputPath = path.join(ASSETS_DIR, img.name);
    const baseName = path.parse(img.name).name;

    console.log(`\nProcessing ${img.name}...`);

    for (const width of img.widths) {
      // WebP
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(path.join(OUTPUT_DIR, `${baseName}-${width}w.webp`));

      // AVIF (better compression)
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .avif({ quality: 50, effort: 9 })
        .toFile(path.join(OUTPUT_DIR, `${baseName}-${width}w.avif`));

      // Fallback JPEG/PNG at max width
      if (width === Math.max(...img.widths)) {
        await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true })
          .jpeg({ quality: 85, mozjpeg: true })
          .toFile(path.join(OUTPUT_DIR, `${baseName}-${width}w.jpg`));
      }

      console.log(`  ✓ ${width}w: WebP + AVIF + JPEG`);
    }

    // Also create a small placeholder/blur version (20px wide)
    await sharp(inputPath)
      .resize(20, null, { withoutEnlargement: true })
      .webp({ quality: 20 })
      .toFile(path.join(OUTPUT_DIR, `${baseName}-blur.webp`));

    console.log(`  ✓ blur placeholder`);
  }

  console.log('\n✅ All images optimized!');
  console.log(`Output: ${OUTPUT_DIR}`);
}

optimize().catch(console.error);