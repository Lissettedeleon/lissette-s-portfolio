import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Typewriter from "./Typewriter";

import Particles from "./Particles";

const NAME = "Lissette De Leon";

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  const { scrollY } = useScroll();
  const blobsY = useTransform(scrollY, [0, 800], [0, 80]);
  const ringsY = useTransform(scrollY, [0, 800], [0, 240]);
  const textY = useTransform(scrollY, [0, 800], [0, 400]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* aurora blobs (0.1x) */}
      <motion.div style={{ y: blobsY }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full opacity-30 blur-[120px]" style={{ background: "#b39ddb" }} />
        <div className="absolute -right-20 bottom-10 h-[26rem] w-[26rem] rounded-full opacity-20 blur-[120px]" style={{ background: "#80cbc4" }} />
      </motion.div>

      {/* decorative rings (0.3x) */}
      <motion.div style={{ y: ringsY }} className="pointer-events-none absolute right-[-6rem] top-1/4 hidden lg:block">
        <div className="h-[34rem] w-[34rem] rounded-full border border-gold/15 animate-spin-slow" />
        <div className="absolute inset-12 rounded-full border border-rose-dusty/15 animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </motion.div>

      <Particles count={22} />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left */}
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mb-5 text-xs uppercase tracking-[0.3em] text-rose-dusty"
          >
            ✦ CS Graduate · Cyber Defense Student
          </motion.p>

          <h1 className="font-serif-display text-6xl italic leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {"Lissette".split("").map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block gold-gradient-text"
                initial={{ opacity: 0, y: 30, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.5, ease: "easeOut" }}
              >
                {ch}
              </motion.span>
            ))}
            {"\u00A0"}
            <span className="whitespace-nowrap">
              {"De Leon".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block gold-gradient-text"
                  initial={{ opacity: 0, y: 30, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.4 + (i + 9) * 0.04, duration: 0.5, ease: "easeOut" }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
          </h1>

          <div className="mt-5 font-serif-display text-2xl italic text-cream/90 sm:text-3xl">
            <Typewriter
              words={[
                "Cybersecurity Enthusiast",
                "QA Engineering Explorer",
                "Cloud Builder",
                "Creative Problem Solver",
                "Always Curious",
              ]}
            />
          </div>

          <p className="mt-5 max-w-md font-serif-display text-lg italic text-cream/60">
            "Curious enough to explore it. Careful enough to protect it."
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton
              as="a" href="#projects"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-noir shadow-[0_0_30px_rgba(212,168,83,0.35)]"
            >
              See My Work
            </MagneticButton>
            <MagneticButton
              as="a" href="#contact"
              className="rounded-full border border-rose-dusty/60 px-7 py-3 text-sm font-semibold text-rose-dusty hover:bg-rose-dusty/10"
            >
              Resume
            </MagneticButton>
            <MagneticButton
              as="a" href="#contact"
              className="rounded-full px-7 py-3 text-sm font-semibold text-cream/80 hover:text-gold"
            >
              Say Hello
            </MagneticButton>
          </div>


        </motion.div>

        {/* Right — proof of life card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.7 }}
          className="relative"
        >
          <div className="glass-card shine relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <div className="absolute right-4 top-4 z-10 rounded-full border border-gold/30 bg-noir/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
              Welcome
            </div>
            <div className="absolute left-4 top-4 z-10 text-2xl animate-bob">👋</div>

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
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10 animate-bob text-gold backdrop-blur-sm hover:bg-gold/20 transition-colors"
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
        <div className="h-10 w-px bg-gold/40">
          <div className="h-full w-full origin-top bg-gold animate-scroll-line" />
        </div>
        <ArrowDown className="h-3 w-3" />
      </div>
    </section>
  );
}