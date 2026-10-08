import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const imagesDir = path.join(projectRoot, "public", "images");

async function main() {
  console.log("Processing and mapping images...\n");

  const mappings = [
    {
      source: "dr teals share sugar scrub.jpg",
      targets: ["cat-spa-body.jpg", "signature.jpg", "gallery-4.jpg"],
    },
    {
      source: "shea butter essence mask.jpg",
      targets: ["cat-skin.jpg", "gallery-2.jpg"],
    },
    {
      source: "Screenshot 2026-10-08 093138.png",
      targets: ["cat-nails-feet.jpg", "gallery-3.jpg"],
      convertPngToJpg: true,
    },
    {
      source: "products.jpg",
      targets: ["gallery-1.jpg", "gallery-8.jpg"],
    },
    {
      source: "Screenshot 2026-10-08 093011.png",
      targets: ["gallery-5.jpg"],
      convertPngToJpg: true,
    },
    {
      source: "mucin power essecnce.jpg",
      targets: ["gallery-6.jpg"],
    },
    {
      source: "Screenshot 2026-10-08 093201.png",
      targets: ["gallery-7.jpg"],
      convertPngToJpg: true,
    },
  ];

  for (const item of mappings) {
    const srcPath = path.join(imagesDir, item.source);
    if (!fs.existsSync(srcPath)) {
      console.warn(`Source not found: ${item.source}`);
      continue;
    }

    if (item.convertPngToJpg) {
      const buffer = await sharp(srcPath).jpeg({ quality: 90 }).toBuffer();
      for (const target of item.targets) {
        const destPath = path.join(imagesDir, target);
        fs.writeFileSync(destPath, buffer);
        console.log(`Converted & Saved: ${item.source} -> ${target} (${(buffer.length / 1024).toFixed(1)} KB)`);
      }
    } else {
      for (const target of item.targets) {
        const destPath = path.join(imagesDir, target);
        fs.copyFileSync(srcPath, destPath);
        const stat = fs.statSync(destPath);
        console.log(`Copied: ${item.source} -> ${target} (${(stat.size / 1024).toFixed(1)} KB)`);
      }
    }
  }

  console.log("\nImage mapping completed successfully.");
}

main().catch(console.error);
