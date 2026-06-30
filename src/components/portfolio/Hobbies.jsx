import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const HOBBIES = [
  { photo: "/hobby_pickleball.jpg", name: "Pickleball" },
  { photo: "/hobby_hiking.jpg", name: "Hiking" },
  { photo: "/hobby_dogs.jpg", name: "Dog Lover" },
  { photo: "/hobby_adventure.jpg", name: "Adventurous" },
  { emoji: "✂️", name: "Couponing" },
];

export default function Hobbies() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="05 — Off The Clock">Life Outside Code</SectionTitle>

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {HOBBIES.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-gold/15 overflow-hidden text-center transition-all duration-300 hover:scale-105 hover:rotate-2 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,168,83,0.18)]"
          >
            {h.photo ? (
              <>
                <img src={h.photo} alt={h.name} className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-noir/40" />
                <span className="relative font-serif-display text-xl italic text-cream drop-shadow">{h.name}</span>
              </>
            ) : (
              <>
                <span className="text-5xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-12">{h.emoji}</span>
                <span className="font-serif-display text-xl italic text-cream">{h.name}</span>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
