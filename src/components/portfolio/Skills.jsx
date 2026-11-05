import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const GROUPS = [
  { title: "Technical", items: ["Python", "SQL", "GitHub", "APIs", "Google Cloud", "Firebase", "AI Tooling"] },
  { title: "Professional", items: ["Application Testing", "Debugging", "Troubleshooting", "Requirements Analysis", "Documentation", "Collaboration"] },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionTitle kicker="What I Work With">Skills</SectionTitle>
      <div className="space-y-6">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="grid grid-cols-1 gap-2 border-t border-cream/20 pt-5 sm:grid-cols-[220px_1fr] sm:gap-6"
          >
            <h3 className="pt-1 font-mono text-xs uppercase tracking-[0.2em] text-rose-dusty">{g.title}</h3>
            <p className="font-mono text-sm leading-relaxed text-cream/70">
              {g.items.join("  ·  ")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}