import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, PlayCircle, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    category: "cybersecurity",
    emoji: "🔍",
    title: "Cybersecurity Audit",
    role: "Team Lead · Confidential Nonprofit",
    badge: "⛨ NDA Signed",
    desc: "Led a 5-person structured security audit for a real client under NDA. Evaluated NIST controls, access policies, and auth workflows. Delivered full findings and remediation report.",
    tags: ["NIST CSF", "Gap Analysis", "Auth Testing", "Risk Reporting"],
    links: [],
  },
  {
    category: "cybersecurity",
    emoji: "🔎",
    title: "API Key / Secret Leak Scanner",
    role: "Live Demo · Client-Side Detection Engine",
    desc: "Scans pasted code or config text for exposed secrets — AWS keys, private keys, DB credentials, GitHub/Slack tokens, JWTs — with masked previews, severity ratings, and a generated remediation checklist.",
    tags: ["JavaScript", "Regex Detection", "Secrets Management"],
    tryHref: "#demo-secrets",
  },
  {
    category: "cybersecurity",
    emoji: "🛡️",
    title: "Prompt Injection Sandbox",
    role: "Live Demo · Simulated AI Security",
    desc: "An interactive fake support bot with a visible system prompt. Try to 'jailbreak' it with real injection phrasing and watch detection rules catch (or miss) the attempt in real time.",
    tags: ["AI Security", "Prompt Injection", "Pattern Detection"],
    tryHref: "#demo-injection",
  },
  {
    category: "software",
    emoji: "☁️",
    title: "TidyMe Cloud Storage",
    role: "Secondary Project Lead · CS 4243 · UTSA 2023",
    desc: "AI-powered app auto-classifying files using Google APIs. Managed 3.15 TB across 86K+ objects. My work: FlutterFlow setup, Sign Up page, Text Classification, Kaggle dataset pipeline.",
    tags: ["FlutterFlow", "Firebase", "Cloud Vision API", "NLP API"],
    links: [
      { label: "GitHub", icon: Github, href: "https://github.com/joyee-c/LSDM" },
      { label: "Live App", icon: ExternalLink, href: "https://app.flutterflow.io/run/enQjGoUsrBVoUBRkVWPH" },
      { label: "Demo", icon: PlayCircle, href: "https://www.youtube.com/watch?v=6j9aHk2kmaw" },
    ],
  },
];

const TABS = [
  { key: "cybersecurity", label: "Cybersecurity" },
  { key: "software", label: "Software Development" },
];

export default function Projects() {
  const [tab, setTab] = useState("cybersecurity");
  const filtered = PROJECTS.filter((p) => p.category === tab);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle eyebrow="03 — The Tangible">Selected Projects</SectionTitle>

      <div className="mt-8 flex gap-3">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              tab === t.key
                ? "border-gold bg-gold text-noir"
                : "border-gold/25 text-cream/70 hover:border-gold/50 hover:text-cream"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: i * 0.07, duration: 0.6 }}
          >
            <TiltCard className="group h-full">
              <div className="shine relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-cream/[0.02] p-7 transition-colors duration-300 hover:border-gold/45">
                {/* scanner line */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px -translate-y-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-all duration-700 group-hover:translate-y-[120%] group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <span className="text-3xl">{p.emoji}</span>
                  {p.badge && (
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                      {p.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-serif-display text-2xl italic text-cream">{p.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-rose-dusty">{p.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/65">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-cream/10 bg-noir/40 px-2.5 py-1 text-xs text-cream/70">
                      {t}
                    </span>
                  ))}
                </div>

                {(p.links?.length || p.tryHref) && (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-gold/10 pt-5">
                    {p.tryHref && (
                      <a href={p.tryHref} className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-noir hover:opacity-90">
                        Try It Live <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {p.links?.map((l) => {
                      const Icon = l.icon;
                      return (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-cream/70 hover:text-gold">
                          <Icon className="h-3.5 w-3.5" /> {l.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
