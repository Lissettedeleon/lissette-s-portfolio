import React from "react";
import { motion } from "framer-motion";

const PHOTOS = [
  { src: "https://media.base44.com/images/public/6a34ab1480a9a94dcd8377fa/ef2533429_03_OG.jpg", label: "OG" },
  { src: "https://media.base44.com/images/public/6a34ab1480a9a94dcd8377fa/1a16d72f1_08_Dubai.jpg", label: "Dubai" },
  { src: "https://media.base44.com/images/public/6a34ab1480a9a94dcd8377fa/b957bf6c3_image.png", label: "Build Your Own Cup" },
];

// Product photos from the live site
export default function ShopPhotos() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {PHOTOS.map((p, i) => (
        <motion.figure
          key={p.label}
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.45 }}
          className="group"
        >
          <div className="overflow-hidden rounded-lg border border-cream/15 shadow-[0_12px_30px_rgba(24,36,32,0.12)]">
            <img
              src={p.src}
              alt={`${p.label} at The Strawberry Shop`}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-2 text-center font-mono text-xs uppercase tracking-wide text-cream/55">
            {p.label}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}