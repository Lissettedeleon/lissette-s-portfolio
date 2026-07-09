import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const HOBBIES = [
  { emoji: "🏓", name: "Pickleball", photo: null },
  { emoji: "🥾", name: "Hiking", photo: null },
  { emoji: "🐕", name: "Dog Training", photo: null },
  { emoji: "💪", name: "Fitness", photo: null },
  { emoji: "✂️", name: "Couponing", photo: null },
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
            className="group relative flex aspect-square flex-col items-end justify-end overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] transition-all duration-300 hover:scale-105 hover:border-gold/50"
          >
            {/* photo or emoji background */}
            {h.photo ? (
              <img src={h.photo} alt={h.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-60 transition-transform duration-500 group-hover:scale-110">
                  {h.emoji}
                </span>
              </div>
            )}
            {/* label */}
            <div className="relative w-full bg-gradient-to-t from-noir/90 to-transparent px-4 py-3">
              <span className="font-serif-display text-lg italic text-cream">{h.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}