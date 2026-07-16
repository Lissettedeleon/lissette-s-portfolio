import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const GROUPS = [
  { title: "Programming", items: ["Python", "SQL", "JavaScript"] },
  { title: "Software Engineering", items: ["Data Structures", "Algorithms", "OOP", "Debugging", "Application Testing", "Git", "GitHub", "SDLC"] },
  { title: "Cloud & Applications", items: ["Firebase", "Firebase Authentication", "Google Cloud", "File Storage", "Authentication", "API Integration Concepts"] },
  { title: "AI-Assisted Development", items: ["Claude Sonnet", "Base44", "Agentic AI Workflows", "AI-Assisted Debugging", "Automated Quality Checks", "Human-in-the-Loop Review"] },
  { title: "Security", items: ["Authentication Testing", "Access-Control Review", "Input Validation", "Web Application Security", "Secure Development", "NIST-Aligned Assessments"] },
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
            className="grid grid-cols-1 gap-3 sm:grid-cols-[220px_1fr] sm:gap-6"
          >
            <h3 className="pt-1 font-mono text-xs uppercase tracking-[0.2em] text-rose-dusty">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-full bg-gold/10 px-3.5 py-1.5 text-sm font-medium text-gold transition-colors hover:bg-gold/20">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
