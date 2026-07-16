import React, { useState } from "react";
import { Play, X } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function About() {
  const [open, setOpen] = useState(false);

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

      <button
        onClick={() => setOpen(true)}
        className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-cream transition-colors hover:text-gold"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-noir">
          <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
        </span>
        Watch a 30-second intro
      </button>

      {open && (
        <div className="fixed inset-0 z-[9500] flex items-center justify-center bg-noir/85 p-5 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-noir shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>
            <video src="/intro.mp4" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl" autoPlay controls playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
