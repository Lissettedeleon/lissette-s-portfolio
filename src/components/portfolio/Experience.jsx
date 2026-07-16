import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const JOBS = [
  {
    role: "Teaching Assistant — Data Structures & Algorithms",
    org: "UT San Antonio",
    date: "2023 — 2024",
    points: [
      "Supported more than 140 students",
      "Reviewed algorithm logic and code structure",
      "Explained debugging and technical problem-solving",
    ],
  },
  {
    role: "Fulfillment Center Associate — Tier 1",
    org: "Amazon",
    date: "2021 — Present",
    points: [
      "Cross-trained in ICQA and Ship Dock",
      "Maintained ~99.5% accuracy",
      "Discrepancy investigation, scanning, routing, quality, standardized workflows",
    ],
  },
  {
    role: "Hardware Sales / Customer Service",
    org: "Home Depot",
    date: "2018 — 2020",
    points: ["Customer communication", "Product education", "Problem-solving"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionTitle kicker="Where I've Worked">Experience</SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {JOBS.map((job, i) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-rose-dusty">{job.date}</p>
            <h3 className="mt-3 text-base font-semibold leading-snug text-cream">{job.role}</h3>
            <p className="mt-1 text-sm font-medium text-gold">{job.org}</p>
            <ul className="mt-4 space-y-2">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-cream/65">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
