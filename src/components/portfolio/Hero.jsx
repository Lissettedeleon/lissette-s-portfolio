import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, FileText, ArrowRight } from "lucide-react";

// Animated architecture visual: client -> app -> cloud services, with an AI
// review loop. Lines animate with a moving dash to suggest data flow.
function ArchVisual() {
  const node = "fill-[#141c2e] stroke-[#2a3650]";
  const label = { fill: "#e9edf5", fontSize: 11, fontFamily: "ui-monospace, Menlo, monospace" };
  const sub = { fill: "#8e9bb3", fontSize: 9, fontFamily: "ui-monospace, Menlo, monospace" };
  return (
    <svg viewBox="0 0 420 300" className="w-full max-w-md" role="img" aria-label="Architecture diagram: client to application to cloud services with an AI review loop">
      {/* connections */}
      <line x1="90" y1="60" x2="185" y2="130" stroke="#4da3ff" strokeWidth="1.5" className="flow-line" />
      <line x1="330" y1="60" x2="235" y2="130" stroke="#4da3ff" strokeWidth="1.5" className="flow-line" />
      <line x1="210" y1="160" x2="110" y2="230" stroke="#38d1e0" strokeWidth="1.5" className="flow-line" />
      <line x1="210" y1="160" x2="210" y2="230" stroke="#38d1e0" strokeWidth="1.5" className="flow-line" />
      <line x1="210" y1="160" x2="310" y2="230" stroke="#8b7cf6" strokeWidth="1.5" className="flow-line" />

      {/* client */}
      <rect x="35" y="30" width="110" height="42" rx="10" className={node} strokeWidth="1" />
      <text x="90" y="48" textAnchor="middle" style={label}>Client</text>
      <text x="90" y="62" textAnchor="middle" style={sub}>web · mobile</text>

      {/* AI agent */}
      <rect x="275" y="30" width="110" height="42" rx="10" className={node} strokeWidth="1" />
      <text x="330" y="48" textAnchor="middle" style={label}>AI Agent</text>
      <text x="330" y="62" textAnchor="middle" style={sub}>review loop</text>

      {/* application */}
      <rect x="150" y="122" width="120" height="46" rx="10" className={node} strokeWidth="1.2" stroke="#4da3ff" />
      <text x="210" y="141" textAnchor="middle" style={label}>Application</text>
      <text x="210" y="156" textAnchor="middle" style={sub}>auth · routes · api</text>

      {/* services */}
      <rect x="55" y="228" width="110" height="42" rx="10" className={node} strokeWidth="1" />
      <text x="110" y="246" textAnchor="middle" style={label}>Cloud Storage</text>
      <text x="110" y="260" textAnchor="middle" style={sub}>firebase · gcp</text>

      <rect x="155" y="228" width="110" height="42" rx="10" className={node} strokeWidth="1" />
      <text x="210" y="246" textAnchor="middle" style={label}>Data</text>
      <text x="210" y="260" textAnchor="middle" style={sub}>entities · files</text>

      <rect x="255" y="228" width="110" height="42" rx="10" className={node} strokeWidth="1" />
      <text x="310" y="246" textAnchor="middle" style={label}>Integrations</text>
      <text x="310" y="260" textAnchor="middle" style={sub}>pos · apis</text>

      {/* status dots */}
      <circle cx="145" cy="30" r="3" fill="#3ecf8e" className="pulse-node" />
      <circle cx="385" cy="30" r="3" fill="#8b7cf6" className="pulse-node" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-24 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3ecf8e]/30 bg-[#3ecf8e]/10 px-4 py-1.5 text-xs font-medium text-[#3ecf8e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3ecf8e]" />
            Open to Software Engineering Opportunities
          </p>

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

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto hidden w-full max-w-md lg:block"
          aria-hidden="true"
        >
          <ArchVisual />
        </motion.div>
      </div>
    </section>
  );
}
