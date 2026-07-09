import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, ArrowDown } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center sm:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="font-mono text-xs tracking-[0.4em] text-gold"
      >
        ✦ TRANSMITTING FROM SAN ANTONIO, TX ✦
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
        className="gold-gradient-text mt-6 text-6xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
      >
        Lissette
        <br />
        De Leon
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-6 font-mono text-sm tracking-[0.3em] text-cream/70"
      >
        CYBERSECURITY · QA · AI
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-6 max-w-md leading-relaxed text-cream/60"
      >
        Exploring the dark corners of software so you don't have to.
        I find how things break — then make sure they can't.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-9 flex flex-wrap justify-center gap-4"
      >
        <a href="#projects" className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-noir shadow-[0_0_28px_rgba(127,232,195,0.35)] transition-transform hover:scale-[1.03]">
          Explore my work
        </a>
        <a href="#contact" className="rounded-full border border-gold/40 px-8 py-3.5 text-sm font-bold text-gold transition-colors hover:bg-gold/10">
          Make contact
        </a>
      </motion.div>

      {/* floating video planet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.7 }}
        className="relative mt-14 sm:absolute sm:bottom-16 sm:right-16 sm:mt-0"
      >
        {/* orbit ring */}
        <div className="animate-orbit absolute -inset-5 rounded-full border border-dashed border-gold/25">
          <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_rgba(127,232,195,0.9)]" />
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Play intro video"
          className="animate-floaty group relative flex h-36 w-36 flex-col items-center justify-center gap-1 overflow-hidden rounded-full border border-gold/30 bg-gold/10 font-mono text-[10px] tracking-[0.15em] text-cream backdrop-blur-sm transition-colors hover:bg-gold/20"
        >
          <video src="/intro.mp4" muted playsInline preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-60" />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold text-noir">
            <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
          </span>
          <span className="relative mt-1">MEET ME</span>
          <span className="relative text-cream/60">0:30 · INTRO</span>
        </button>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/35 sm:flex">
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </div>

      {/* video lightbox */}
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
            <video src="/intro.mp4" className="aspect-[4/5] w-full rounded-2xl border border-gold/25 object-cover shadow-[0_0_60px_rgba(127,232,195,0.25)]" autoPlay controls playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
