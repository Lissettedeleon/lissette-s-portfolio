import React from "react";

const SKILLS = [
  "Python", "SQL", "Google Cloud", "Firebase", "NIST CSF", "FlutterFlow",
  "Wireshark", "Kali Linux", "AWS Security", "Data Validation",
  "Access Controls", "VS Code", "Git", "Linux", "Red Hat", "Technical Documentation",
];

export default function SkillTicker() {
  const doubled = [...SKILLS, ...SKILLS];
  return (
    <section className="group relative overflow-hidden border-y border-gold/10 bg-noir py-6">
      <div className="flex w-max animate-ticker gap-10 group-hover:[animation-play-state:paused]">
        {doubled.map((s, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-serif-display text-2xl italic text-cream/70 transition-colors hover:text-rose-dusty">
              {s}
            </span>
            <span className="text-gold/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}