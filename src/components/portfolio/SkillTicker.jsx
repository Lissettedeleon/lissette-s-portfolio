import React from "react";

const SKILLS = [
  "Python", "SQL", "Google Cloud", "Firebase", "NIST CSF", "FlutterFlow",
  "CompTIA Security+", "Gap Analysis", "OAuth 2.0", "Data Validation",
  "Cyber Defense", "Access Controls",
];

export default function SkillTicker() {
  const doubled = [...SKILLS, ...SKILLS];
  return (
    <section className="group relative overflow-hidden border-y border-gold/10 bg-noir py-6">
      <div className="flex w-max animate-ticker gap-10 group-hover:[animation-play-state:paused]">
        {doubled.map((s, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-serif-display text-2xl italic text-cream/70 transition-colors hover:text-gold">
              {s}
            </span>
            <span className="text-gold/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}