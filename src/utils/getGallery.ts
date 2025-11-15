import fs from "fs";
import path from "path";

const galleryDir = path.resolve("./public/images");

export function getGalleryItems() {
  const files = fs.readdirSync(galleryDir).filter(f => /\.(jpg|png|jpeg|webp)$/i.test(f));
  return files.map(f => ({
    src: `/images/${f}`,
    alt: f.replace(/\.[^/.]+$/, ""),
    title: f.replace(/\.[^/.]+$/, "")
  }));
}
