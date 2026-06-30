import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const HOBBIES = [
  {
    photo: "/hobby_pickleball.jpg",
    name: "Pickleball",
    note: "I got addicted to playing pickleball — I can play nonstop! 🏓",
  },
  {
    photo: "/hobby_hiking.jpg",
    name: "Hiking",
    note: "I'm an outdoor explorer — I love taking my dogs to hike and challenging myself. 🥾",
  },
  {
    photo: "/hobby_dogs.jpg",
    name: "Dog Lover",
    note: null,
  },
  {
    photo: "/hobby_adventure.jpg",
    name: "Adventurous",
    note: null,
  },
  {
    emoji: "✂️",
    name: "Couponing",
    note: null,
  },
];

function HobbyCard({ h, i }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      className="aspect-square cursor-pointer"
      style={{ perspective: "800px" }}
      onClick={() => h.note && setFlipped((f) => !f)}
    >
      <div
        className="relative h-full w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-gold/15 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {h.photo ? (
            <>
              <img src={h.photo} alt={h.name} className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-noir/40" />
              <span className="absolute bottom-4 left-0 right-0 text-center font-serif-display text-xl italic text-cream drop-shadow">
                {h.name}
              </span>
              {h.note && (
                <span className="absolute top-3 right-3 rounded-full bg-gold/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-noir font-semibold">
                  tap
                </span>
              )}
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-cream/[0.02] p-4">
              <span className="text-5xl">{h.emoji}</span>
              <span className="font-serif-display text-xl italic text-cream">{h.name}</span>
            </div>
          )}
        </div>

        {/* Back — index card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "#fdf8f0",
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 27px, #c9d8e8 27px, #c9d8e8 28px)",
          }}
        >
          {/* Red margin line */}
          <div className="absolute left-10 top-0 bottom-0 border-l-2 border-rose-300/70" />
          <div>
            <p className="font-serif-display text-sm italic leading-7 text-neutral-700 pl-6 mt-1">
              {h.note}
            </p>
          </div>
          <p className="text-right text-[10px] uppercase tracking-widest text-neutral-400 font-sans">
            — Lissette
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hobbies() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="05 — Off The Clock">Life Outside Code</SectionTitle>

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {HOBBIES.map((h, i) => (
          <HobbyCard key={h.name} h={h} i={i} />
        ))}
      </div>
    </section>
  );
}
