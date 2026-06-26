import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const CARDS = [
  {
    emoji: "🎓",
    title: "B.S. Computer Science",
    org: "University of Texas at San Antonio",
    meta: "San Antonio, TX · GPA: 3.55",
    desc: "Strong foundation in data structures, algorithms, and software engineering. Served as TA supporting 140+ students in DSA.",
    progress: false,
  },
  {
    emoji: "🛡️",
    title: "Cyber Defense Program",
    org: "Northeast Lakeview College",
    meta: "Aug 2025 – Dec 2026 · GPA: 3.0",
    desc: "Aligned with CompTIA Security+ and Network+. Focused on threat analysis, network defense, and security operations.",
    progress: true,
  },
];

const ACHIEVEMENTS = [
  "🚀 NASA Community College Aerospace Scholar (NCAS)",
  "💻 CodePath Advanced Technical Course",
  "⚡ RowdyHacks Hackathon Participant",
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="06 — The Foundation">Education</SectionTitle>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="shine rounded-2xl border border-gold/15 bg-cream/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45"
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl">{c.emoji}</span>
              {c.progress && (
                <span className="rounded-full border border-rose-dusty/40 bg-rose-dusty/10 px-3 py-1 text-xs text-rose-dusty">
                  in progress
                </span>
              )}
            </div>
            <h3 className="mt-5 font-serif-display text-2xl italic text-cream">{c.title}</h3>
            <p className="mt-1 text-sm text-gold">{c.org}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-cream/50">{c.meta}</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {ACHIEVEMENTS.map((a) => (
          <span key={a} className="rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-sm text-cream/80">
            {a}
          </span>
        ))}
      </div>
    </section>
  );
}