import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const JOBS = [
  {
    role: "ICQA / Data Support Associate",
    org: "Amazon Fulfillment · San Antonio, TX",
    date: "Jan 2021 – Present",
    points: [
      "Performed detailed inventory audits and data validation in a high-compliance environment, maintaining 99.5% accuracy.",
      "Documented discrepancies, findings, and corrective actions while handling sensitive operational data with strict confidentiality.",
      "Followed structured workflows to investigate mismatches, verify records, and escalate unresolved issues.",
    ],
  },
  {
    role: "Teacher Assistant, Data Structures & Algorithms",
    org: "University of Texas at San Antonio",
    date: "Aug 2023 – May 2024",
    points: [
      "Graded and reviewed assignments for 140+ students, providing clear technical feedback.",
      "Explained complex concepts and assisted with problem-solving while maintaining academic integrity.",
      "Managed grading workflows to ensure accurate records and timely turnaround.",
    ],
  },
  {
    role: "Hardware Sales / Customer Service",
    org: "Home Depot · Katy, TX",
    date: "Jul 2018 – Dec 2020",
    points: [
      "Increased sales through product education and friendly, knowledgeable customer service.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="02 — The Growth">Experience</SectionTitle>

      <div className="relative mt-16 pl-8 sm:pl-12">
        {/* drawing line */}
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute left-[7px] top-2 h-full w-px origin-top sm:left-[11px]"
          style={{ background: "linear-gradient(180deg,#d4a853,rgba(212,168,83,0.1))" }}
        />

        <div className="space-y-14">
          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.2, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border border-gold bg-noir transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_16px_4px_rgba(212,168,83,0.6)] sm:-left-12" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif-display text-2xl italic text-cream">{job.role}</h3>
                <span className="text-xs uppercase tracking-[0.15em] text-gold/80">{job.date}</span>
              </div>
              <p className="mt-1 text-sm text-rose-dusty">{job.org}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-cream/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}