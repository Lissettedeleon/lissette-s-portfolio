import React from "react";
import SectionTitle from "./SectionTitle";

const CARDS = [
  {
    title: "B.S. Computer Science",
    org: "University of Texas at San Antonio",
    date: "GPA 3.55",
    desc: "Strong foundation in data structures, algorithms, and software engineering. Served as TA supporting 140+ students in DSA.",
  },
  {
    title: "Cyber Defense Program",
    org: "Northeast Lakeview College",
    date: "2025 — 2026",
    desc: "Aligned with CompTIA Security+ and Network+. Focused on threat analysis, network defense, and security operations.",
    progress: true,
  },
];

const ACHIEVEMENTS = [
  "NASA Community College Aerospace Scholar (NCAS)",
  "CodePath Advanced Technical Course",
  "RowdyHacks Hackathon Participant",
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionTitle>Education</SectionTitle>
      <ul className="space-y-2">
        {CARDS.map((c) => (
          <li key={c.title} className="group grid gap-1 rounded-2xl p-5 transition-colors hover:bg-cream/[0.05] sm:grid-cols-[130px_1fr] sm:gap-6">
            <span className="pt-1 font-mono text-xs uppercase tracking-wide text-rose-dusty">{c.date}</span>
            <div>
              <h3 className="flex flex-wrap items-center gap-3 font-semibold text-cream">
                {c.title} · <span className="font-normal text-cream/70">{c.org}</span>
                {c.progress && (
                  <span className="rounded-full bg-gold/15 px-3 py-0.5 font-mono text-[11px] font-medium text-gold">
                    in progress
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{c.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul className="mt-6 space-y-2 pl-5">
        {ACHIEVEMENTS.map((a) => (
          <li key={a} className="flex gap-3 text-sm text-cream/65">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}
