import React from "react";
import SectionTitle from "./SectionTitle";

const SKILLS = [
  "Python", "SQL", "Google Cloud", "Firebase", "FlutterFlow", "AWS Security",
  "NIST CSF", "Wireshark", "Kali Linux", "VS Code", "Git", "Linux",
  "ChatGPT", "Claude", "Prompt Workflows",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionTitle>About</SectionTitle>
      <div className="space-y-5 leading-relaxed text-cream/70">
        <p>
          I'm a San Antonio-based CS grad who found her calling at the
          intersection of creativity and security. After earning my B.S. at{" "}
          <span className="font-semibold text-cream">UTSA</span> (3.55 GPA), I
          dove into the Cyber Defense Program at Northeast Lakeview College —
          all while working full-time at Amazon.
        </p>
        <p>
          I bring the same focus to a cybersecurity audit as I bring to the
          pickleball court — strategic, detail-oriented, and always showing up.
          Currently seeking entry-level roles in{" "}
          <span className="font-semibold text-cream">cybersecurity</span> or{" "}
          <span className="font-semibold text-cream">QA engineering</span>.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <span key={s} className="rounded-full bg-gold/10 px-3.5 py-1.5 text-sm font-medium text-gold">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
