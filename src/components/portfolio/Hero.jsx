import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const SPECS = [
  { k: "Focus", v: "Cybersecurity · QA · AI" },
  { k: "Currently", v: "Cyber Defense @ Northeast Lakeview College" },
  { k: "Previously", v: "B.S. Computer Science @ UTSA · TA for 140+ students" },
  { k: "Toolkit", v: "Python · SQL · Google Cloud · Wireshark · Kali Linux" },
  { k: "Based in", v: "San Antonio, TX" },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="hero" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="font-mono text-sm text-rose-dusty">
          Lissette De Leon — portfolio, 2025
        </p>

        <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-cream sm:text-5xl lg:text-6xl">
          I find how software breaks.
          <br />
          Then I make sure it <span className="underline decoration-gold decoration-[3px] underline-offset-8">can't</span>.
        </h1>

        <p className="mt-8 max-w-xl leading-relaxed text-cream/70">
          Curious enough to explore it, careful enough to protect it — security
          audits, QA testing, and AI-assisted builds. Currently seeking
          entry-level cybersecurity and QA engineering roles.
        </p>

        {/* spec sheet */}
        <div className="mt-12 max-w-2xl border-t border-cream/25">
          {SPECS.map((row) => (
            <div key={row.k} className="flex flex-col gap-1 border-b border-cream/15 py-3 sm:flex-row sm:gap-0">
              <span className="w-36 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-rose-dusty sm:pt-0.5">
                {row.k}
              </span>
              <span className="text-sm text-cream/85">{row.v}</span>
            </div>
          ))}
          <div className="flex flex-col gap-1 border-b border-cream/15 py-3 sm:flex-row sm:gap-0">
            <span className="w-36 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-rose-dusty sm:pt-0.5">
              Status
            </span>
            <span className="text-sm font-semibold text-gold">Open to work</span>
          </div>
        </div>

        {/* actions as plain underlined links */}
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm font-semibold">
          <a href="#projects" className="text-cream underline decoration-cream/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-gold">
            View selected work ↓
          </a>
          <button onClick={() => setOpen(true)} className="text-cream underline decoration-cream/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-gold">
            Watch the 30-second intro ▶
          </button>
          <a href="#contact" className="text-cream underline decoration-cream/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-gold">
            Get in touch →
          </a>
        </div>
      </motion.div>

      {/* video lightbox */}
      {open && (
        <div className="fixed inset-0 z-[9500] flex items-center justify-center bg-cream/75 p-5" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center bg-noir text-cream shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>
            <video src="/intro.mp4" className="aspect-[4/5] w-full border-2 border-noir object-cover shadow-2xl" autoPlay controls playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
