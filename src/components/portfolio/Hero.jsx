import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Volume2, VolumeX } from "lucide-react";

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
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Building reliable software, secure applications, and intelligent workflows.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/65">
            Computer Science graduate developing cloud-connected applications,
            secure web experiences, and AI-assisted engineering workflows.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="/#projects" className="rounded-md bg-cream px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85">
              View Projects
            </a>
            <a href="https://github.com/lissettedeleon" target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-cream underline decoration-cream/30 decoration-2 underline-offset-[6px] hover:decoration-cream">
              GitHub
            </a>
          </div>

          <p className="mt-9 flex items-center gap-2 font-mono text-xs text-cream/45">
            <MapPin className="h-3.5 w-3.5" /> San Antonio, Texas
          </p>
        </motion.div>

        {/* intro video — plays automatically */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-xs">
          
          <div className="overflow-hidden rounded-xl border border-cream/15 shadow-[0_24px_60px_rgba(24,36,32,0.18)]">
            <video
              ref={videoRef}
              src="/intro.mp4"
              className="aspect-[4/5] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline />
            
          </div>
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute intro video" : "Mute intro video"}
            className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-cream shadow-md backdrop-blur-sm transition-colors hover:bg-cream hover:text-white">
            
            {muted ? <VolumeX className="h-4.5 w-4.5 h-[18px] w-[18px]" /> : <Volume2 className="h-[18px] w-[18px]" />}
          </button>
          

          
        </motion.div>
      </div>
    </section>);

}