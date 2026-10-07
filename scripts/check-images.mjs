import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const imagesDir = path.join(projectRoot, "public", "images");

// Exact expected images from docs/03-IMAGES.md
export const EXPECTED_IMAGES = [
  "logo.png",
  "logo-white.png",
  "hero-main.jpg",
  "signature.jpg",
  "training.jpg",
  "cat-spa-body.jpg",
  "cat-skin.jpg",
  "cat-nails-feet.jpg",
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
  "about.jpg",
  "team-photo.jpg",
  "location-front.jpg"
];

const MAX_SIZE_BYTES = 500 * 1024; // 500 KB

console.log("\n==========================================");
console.log("Sheillz Empire - Image Asset Health Check");
console.log("==========================================\n");

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const present = [];
const missing = [];
const oversized = [];

for (const filename of EXPECTED_IMAGES) {
  const filePath = path.join(imagesDir, filename);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    const sizeKB = (stat.size / 1024).toFixed(1);
    const isOver = stat.size > MAX_SIZE_BYTES;
    present.push({ filename, sizeKB, isOver });
    if (isOver) {
      oversized.push({ filename, sizeKB });
    }
  } else {
    missing.push(filename);
  }
}

console.log(`[Status] Expected: ${EXPECTED_IMAGES.length} | Present: ${present.length} | Missing: ${missing.length}\n`);

if (present.length > 0) {
  console.log("PRESENT FILES:");
  present.forEach((p) => {
    const warning = p.isOver ? ` [OVERSIZED: ${p.sizeKB} KB > 500 KB limit]` : ` (${p.sizeKB} KB)`;
    console.log(`  + ${p.filename}${warning}`);
  });
  console.log("");
}

if (missing.length > 0) {
  console.log("MISSING FILES (neutral placeholder will be shown):");
  missing.forEach((m) => {
    console.log(`  - ${m}`);
  });
  console.log("");
}

if (oversized.length > 0) {
  console.log("WARNING: The following files exceed 500 KB limit:");
  oversized.forEach((o) => {
    console.log(`  ! ${o.filename} (${o.sizeKB} KB)`);
  });
  console.log("");
}

console.log("Image check completed successfully.\n");
