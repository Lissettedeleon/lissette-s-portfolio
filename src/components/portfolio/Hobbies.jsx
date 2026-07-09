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
      <p className="mt-4 max-w-xl text-cream/55 text-sm leading-relaxed">
        Because the best technologists have a life outside the terminal.
      </p>

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {HOBBIES.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-cream/15 bg-white/60 text-center transition-all duration-300 hover:scale-105 hover:border-gold/50"
          >
            {h.photo ? (
              <>
                <img src={h.photo} alt={h.name} className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-noir/40" />
                <span className="relative font-bold text-xl text-cream drop-shadow">{h.name}</span>
              </>
            ) : (
              <>
                <span className="text-5xl opacity-70">{h.emoji}</span>
                <span className="font-bold text-xl text-cream">{h.name}</span>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
