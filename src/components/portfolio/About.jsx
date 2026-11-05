import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionTitle kicker="Who I Am">About</SectionTitle>
      <div className="max-w-2xl space-y-4 leading-relaxed text-cream/70">
        <p>
          I am a Computer Science graduate from the University of Texas at San
          Antonio with a 3.5 GPA. I delivered a live commercial application from
          client requirements through build, testing, and deployment.
        </p>
        <p>
          I bring a quality assurance and data validation background from Amazon
          at 99.5% accuracy, plus hands on experience with cloud services, APIs,
          and application testing. I use AI tooling and custom agents for code
          review and troubleshooting, and I am eager to grow into Microsoft
          Dynamics 365 and Power Platform.
        </p>
      </div>
    </section>
  );
}