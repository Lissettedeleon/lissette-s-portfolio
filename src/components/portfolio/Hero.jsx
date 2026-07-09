import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="flex w-full flex-col items-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2 font-mono text-xs tracking-[0.2em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          OPEN TO WORK
        </span>

        <h1 className="mt-8 font-bold uppercase leading-[0.95] tracking-[-0.03em] text-cream text-6xl sm:text-7xl lg:text-8xl">
          Lissette
          <br />
          <span className="text-gold">De Leon</span>
        </h1>

        <div className="mt-8 w-full max-w-2xl border-y-[1.5px] border-cream py-3 font-mono text-sm tracking-[0.35em] text-cream/70">
          CYBERSECURITY&nbsp;&nbsp;✕&nbsp;&nbsp;QA&nbsp;&nbsp;✕&nbsp;&nbsp;AI
        </div>

        <p className="mt-7 max-w-md leading-relaxed text-cream/60">
          I find how software breaks — then make sure it can't. CS grad,
          cyber defense student, and professional question-asker.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="rounded-full bg-cream px-8 py-3.5 text-sm font-bold text-noir transition-opacity hover:opacity-85">
            View work
          </a>
          <a href="#contact" className="rounded-full border-[1.5px] border-cream px-8 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-cream/5">
            Contact
          </a>
        </div>
      </motion.div>

      {/* press-play sticker */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }} animate={{ opacity: 1, scale: 1, rotate: 6 }} transition={{ delay: 0.4, duration: 0.5 }}
        onClick={() => setOpen(true)}
        aria-label="Play intro video"
        className="mt-12 flex h-36 w-36 flex-col items-center justify-center gap-1.5 rounded-full bg-cream font-mono text-[11px] tracking-[0.1em] text-noir shadow-[0_18px_40px_rgba(44,38,40,0.25)] transition-transform hover:scale-105 sm:absolute sm:bottom-12 sm:right-14 sm:mt-0"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-gold text-gold">
          <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
        </span>
        PRESS PLAY
        <span className="text-noir/60">MEET ME · 0:30</span>
      </motion.button>

      {/* video lightbox */}
      {open && (
        <div className="fixed inset-0 z-[9500] flex items-center justify-center bg-cream/70 p-5 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-noir text-cream shadow-lg"
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
