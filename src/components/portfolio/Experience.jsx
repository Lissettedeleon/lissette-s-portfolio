import React from "react";
import SectionTitle from "./SectionTitle";

const JOBS = [
  {
    role: "ICQA / Data Support Associate",
    org: "Amazon Fulfillment",
    date: "2021 — Present",
    desc: "Inventory audits and data validation in a high-compliance environment at 99.5% accuracy. Documented discrepancies and corrective actions while handling sensitive operational data.",
    tags: ["Data Validation", "Compliance", "Documentation"],
  },
  {
    role: "Teaching Assistant, Data Structures & Algorithms",
    org: "UT San Antonio",
    date: "2023 — 2024",
    desc: "Graded and reviewed assignments for 140+ students with clear technical feedback, explained complex concepts, and kept grading workflows accurate and on time.",
    tags: ["DSA", "Technical Communication", "Mentoring"],
  },
  {
    role: "Hardware Sales / Customer Service",
    org: "Home Depot",
    date: "2018 — 2020",
    desc: "Increased sales through product education and friendly, knowledgeable customer service.",
    tags: ["Customer Service"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionTitle>Experience</SectionTitle>
      <ul className="space-y-2">
        {JOBS.map((job) => (
          <li
            key={job.role}
            className="group grid gap-1 rounded-2xl p-5 transition-colors hover:bg-cream/[0.05] sm:grid-cols-[130px_1fr] sm:gap-6"
          >
            <span className="pt-1 font-mono text-xs uppercase tracking-wide text-rose-dusty">
              {job.date}
            </span>
            <div>
              <h3 className="font-semibold text-cream">
                {job.role} · <span className="text-cream/70">{job.org}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{job.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
