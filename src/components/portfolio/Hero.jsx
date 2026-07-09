import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* single subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full opacity-[0.14] blur-[120px]" style={{ background: "#b9a382" }} />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-rose-dusty">
            CS Graduate · Cyber Defense Student
          </p>

          <h1 className="gold-gradient-text font-serif-display text-5xl italic leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem] xl:text-7xl">
            Lissette De Leon
          </h1>

          <div className="mt-5 font-serif-display text-2xl italic text-cream/90 sm:text-3xl">
            Cybersecurity · QA · AI
          </div>

          <p className="mt-5 max-w-md font-serif-display text-lg italic text-cream/60">
            "Curious enough to explore it. Careful enough to protect it."
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton
              as="a" href="#projects"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-noir hover:opacity-90"
            >
              See My Work
            </MagneticButton>
            <MagneticButton
              as="a" href="#contact"
              className="rounded-full border border-cream/25 px-7 py-3 text-sm font-semibold text-cream/85 hover:border-cream/50"
            >
              Resume
            </MagneticButton>
            <MagneticButton
              as="a" href="#contact"
              className="rounded-full px-7 py-3 text-sm font-semibold text-cream/70 hover:text-gold"
            >
              Say Hello
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right — intro video card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
          className="relative"
        >
          <div className="glass-card relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
            <div className="absolute right-4 top-4 z-10 rounded-full border border-gold/30 bg-noir/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
              Welcome
            </div>

            {/* Video */}
            <video
              ref={videoRef}
              src="/intro.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              controls={playing}
              onEnded={() => setPlaying(false)}
            />

            {/* Play overlay — hidden once playing */}
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
