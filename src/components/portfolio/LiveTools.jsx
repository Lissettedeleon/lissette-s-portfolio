import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import PasswordAnalyzer from "./tools/PasswordAnalyzer";
import CaesarCipher from "./tools/CaesarCipher";
import PhishingDetector from "./tools/PhishingDetector";

function ToolShell({ id, emoji, title, subtitle, children }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-28 rounded-3xl border border-gold/15 bg-cream/[0.02] p-6 sm:p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="text-2xl">{emoji}</span>
        <div>
          <h3 className="font-serif-display text-2xl italic text-cream">{title}</h3>
          <p className="text-xs uppercase tracking-[0.15em] text-rose-dusty">{subtitle}</p>
        </div>
      </div>
      {children}
    </motion.div>
  );
}

export default function LiveTools() {
  return (
    <section id="tools" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="04 — The Proof">Live Security Tools</SectionTitle>
      <p className="mt-5 max-w-xl text-cream/60">
        Hands-on, fully functional demos — try them right here in the browser.
      </p>

      <div className="mt-12 space-y-8">
        <ToolShell id="demo-pw" emoji="🔐" title="Password Strength Analyzer" subtitle="Real-time entropy engine">
          <PasswordAnalyzer />
        </ToolShell>
        <ToolShell id="demo-cipher" emoji="🔑" title="Caesar Cipher Encryptor" subtitle="Cryptography tool">
          <CaesarCipher />
        </ToolShell>
        <ToolShell id="demo-phish" emoji="🎣" title="Phishing URL Detector" subtitle="Threat analysis tool">
          <PhishingDetector />
        </ToolShell>
      </div>
    </section>
  );
}