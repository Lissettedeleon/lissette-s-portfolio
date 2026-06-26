import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const GROUPS = [
  { title: "Languages", items: ["Python", "SQL"] },
  { title: "Cloud", items: ["Google Cloud", "Firebase", "FlutterFlow"] },
  { title: "Security", items: ["NIST CSF", "Access Controls", "Sec+"] },
  { title: "Strengths", items: ["Documentation", "Team Lead", "AI Tools"] },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="01 — Who I Am">About Me</SectionTitle>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-cream/75"
        >
          <p>
            I'm a San Antonio-based CS grad who found her calling at the intersection of
            creativity and security. After earning my B.S. at UTSA (3.55 GPA), I dove into the
            Cyber Defense Program — all while working full-time at Amazon.
          </p>
          <p>
            I bring the same focus to a cybersecurity audit as I bring to the pickleball court —
            strategic, detail-oriented, and always showing up. Seeking entry-level roles in
            cybersecurity or QA engineering.
          </p>
          <p className="font-serif-display text-xl italic text-gold">
            The best technologists never stop being curious. I definitely haven't. 🌿
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="shine group rounded-2xl border border-gold/15 bg-cream/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,168,83,0.15)]"
            >
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-rose-dusty">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-cream/10 bg-noir/40 px-3 py-1 text-sm text-cream/80">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}