import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, FileText, ArrowRight, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <section id="hero" className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-24 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-[3.4rem]">
            Building <span className="gold-gradient-text">reliable software</span>,
            secure applications, and intelligent workflows.
          </h1>

          <p className="mt-5 max-w-lg leading-relaxed text-rose-dusty">
            Computer Science graduate developing cloud-connected applications,
            secure web experiences, and AI-assisted engineering workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/#projects" className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-noir transition-transform hover:scale-[1.02]">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-semibold text-cream/85 transition-colors hover:border-gold/60 hover:text-gold">
              <FileText className="h-4 w-4" /> View Résumé
            </a>
            <div className="flex items-center gap-1">
              <a href="https://github.com/lissettedeleon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="rounded-full p-2.5 text-cream/55 transition-colors hover:bg-cream/5 hover:text-gold">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="rounded-full p-2.5 text-cream/55 transition-colors hover:bg-cream/5 hover:text-gold">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <p className="mt-8 flex items-center gap-2 font-mono text-xs text-cream/45">
            <MapPin className="h-3.5 w-3.5 text-gold" /> San Antonio, Texas
          </p>
        </motion.div>

        {/* intro video — plays automatically, tap the speaker for sound */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="overflow-hidden rounded-2xl border border-cream/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <video
              ref={videoRef}
              src="/intro.mp4"
              className="aspect-[4/5] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute intro video" : "Mute intro video"}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-noir/70 text-cream backdrop-blur-sm transition-colors hover:bg-gold hover:text-noir"
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
          <p className="mt-3 text-center font-mono text-xs text-cream/45">
            30-second intro — tap the speaker for sound
          </p>
        </motion.div>
      </div>
    </section>
  );
}
