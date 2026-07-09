import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Play } from "lucide-react";

const TOOLKIT = ["Python", "SQL", "Google Cloud", "Wireshark", "Kali Linux"];

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* subtle blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,239,236,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(240,239,236,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
        }}
      />
      {/* single soft glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-[120px]" style={{ background: "#b9a382" }} />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          {/* availability status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs text-cream/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </div>

          <p className="mb-3 font-mono text-sm text-gold/80">hi, my name is</p>

          <h1 className="gold-gradient-text font-serif-display text-5xl italic leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem] xl:text-7xl">
            Lissette De Leon
          </h1>

          <h2 className="mt-4 font-serif-display text-2xl italic text-cream/80 sm:text-3xl">
            Cybersecurity · QA · AI
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/60">
            "Curious enough to explore it. Careful enough to protect it." I find how
            software breaks — then help make sure it can't.
          </p>

          {/* CTAs + socials */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-noir transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-cream/20 px-6 py-3 text-sm font-semibold text-cream/85 transition-colors hover:border-cream/45"
            >
              Get in Touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href="https://github.com/lissettedeleon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="rounded-lg p-2.5 text-cream/55 transition-colors hover:bg-white/[0.06] hover:text-gold">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="rounded-lg p-2.5 text-cream/55 transition-colors hover:bg-white/[0.06] hover:text-gold">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:Lissette.deleon@my.utsa.edu" aria-label="Email"
                className="rounded-lg p-2.5 text-cream/55 transition-colors hover:bg-white/[0.06] hover:text-gold">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* toolkit */}
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-cream/40">
            <span className="text-gold/60">// current toolkit</span>
            {TOOLKIT.map((t, i) => (
              <span key={t}>
                {t}
                {i < TOOLKIT.length - 1 && <span className="ml-3 text-cream/20">·</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — intro video in a terminal-style window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/40">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#f87171]/60" />
              <span className="h-3 w-3 rounded-full bg-[#fbbf24]/60" />
              <span className="h-3 w-3 rounded-full bg-[#34d399]/60" />
              <span className="ml-3 font-mono text-xs text-cream/45">intro.mp4 — lissette</span>
            </div>
            {/* video */}
            <div className="relative aspect-[4/5]">
              <video
                ref={videoRef}
                src="/intro.mp4"
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
                controls={playing}
                onEnded={() => setPlaying(false)}
              />
              {!playing && (
                <div className="absolute inset-0 flex items-center justify-center bg-noir/40 backdrop-blur-[2px]">
                  <button
                    aria-label="Play intro video"
                    onClick={handlePlay}
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold backdrop-blur-sm transition-colors hover:bg-gold/20"
                  >
                    <Play className="ml-1 h-8 w-8" fill="currentColor" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-3 w-3" />
      </div>
    </section>
  );
}
