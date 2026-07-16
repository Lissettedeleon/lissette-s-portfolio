import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const PHOTOS = [
  { src: "/hobby_pickleball.jpg", label: "Pickleball" },
  { src: "/hobby_hiking.jpg", label: "Hiking" },
  { src: "/hobby_dogs.jpg", label: "Dog lover" },
  { src: "/hobby_adventure.jpg", label: "Adventurous" },
];

export default function Hobbies() {
  return (
    <section id="off-the-clock" className="scroll-mt-24">
      <SectionTitle kicker="Off the Clock">Life Outside the Terminal</SectionTitle>
      <p className="mb-8 max-w-xl leading-relaxed text-cream/70">
        Pickleball, hiking trails, my dogs, and an unreasonable talent for
        couponing.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.label}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            className="group"
          >
            <div className="overflow-hidden rounded-lg border border-cream/15 shadow-[0_12px_30px_rgba(24,36,32,0.12)]">
              <img
                src={p.src}
                alt={p.label}
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
    </section>
  );
}
