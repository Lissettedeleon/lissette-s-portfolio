import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const HOBBIES = [
  { emoji: "🏓", name: "Pickleball" },
  { emoji: "🥾", name: "Hiking" },
  { emoji: "🐕", name: "Dog Training" },
  { emoji: "💪", name: "Fitness" },
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
            className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-gold/15 bg-cream/[0.02] p-4 text-center transition-all duration-300 hover:scale-105 hover:rotate-2 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,168,83,0.18)]"
          >
            <span className="text-5xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-12">
              {h.emoji}
            </span>
            <span className="font-serif-display text-xl italic text-cream">{h.name}</span>
            <span className="text-xs text-cream/35">+ add photo</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}