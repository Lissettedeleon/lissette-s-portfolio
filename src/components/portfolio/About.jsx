import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionTitle kicker="Who I Am">About</SectionTitle>
      <div className="max-w-2xl space-y-4 leading-relaxed text-cream/70">
        <p>
          I am a Computer Science graduate focused on software development,
          cloud applications, and secure engineering. My background combines
          technical education, teaching experience, Amazon operations,
          client-facing development, and cybersecurity training. I am currently
          building production applications and exploring agentic AI workflows
          for software quality and automation.
        </p>
      </div>
    </section>
  );
}
