import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const JOBS = [
  {
    role: "ICQA Associate",
    org: "Amazon Fulfillment | San Antonio, TX",
    date: "January 2021 to Present",
    points: [
      "Conduct inventory control and quality assurance (ICQA) audits and data integrity validation in a high compliance environment, maintaining 99.5% accuracy while handling sensitive operational data with strict confidentiality.",
      "Investigate and resolve record mismatches, document findings and corrective actions, and escalate unresolved issues through structured compliance workflows.",
    ],
  },
  {
    role: "Teaching Assistant, Data Structures and Algorithms",
    org: "UTSA",
    date: "August 2023 to May 2024",
    points: [
      "Reviewed and graded code for 140+ students, explaining errors and recommending improvements in algorithm design and computational complexity.",
      "Mentored students on debugging strategies and problem decomposition.",
    ],
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
            className="border-t border-cream/20 pt-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-rose-dusty">{job.date}</p>
            <h3 className="mt-3 text-base font-semibold leading-snug text-cream">{job.role}</h3>
            <p className="mt-1 text-sm font-medium text-cream/60">{job.org}</p>
            <ul className="mt-4 space-y-2">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-cream/65">
                  <span className="mt-[11px] h-px w-4 shrink-0 bg-cream/40" />
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