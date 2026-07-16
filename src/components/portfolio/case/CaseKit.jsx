import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Status chip: Live / In Development / Planned
export function Status({ kind }) {
  const styles = {
    Live: "bg-[#3ecf8e]/15 text-[#3ecf8e]",
    "In Development": "bg-gold/15 text-gold",
    "In Progress": "bg-gold/15 text-gold",
    Planned: "bg-[#8b7cf6]/15 text-[#a99cf9]",
  };
  return (
    <span className={`rounded-full px-3 py-1 font-mono text-[11px] font-medium ${styles[kind] || styles.Planned}`}>
      {kind}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold transition-colors hover:bg-gold/20">
      {children}
    </span>
  );
}

// Horizontal (wrapping) flow diagram with animated arrows
export function Flow({ steps, accent = "#4da3ff" }) {
  return (
    <div className="flex flex-wrap items-center gap-y-3 overflow-x-auto rounded-2xl bg-cream/[0.03] p-5">
      {steps.map((s, i) => (
        <React.Fragment key={`${s}-${i}`}>
          <span className="whitespace-nowrap rounded-lg border border-cream/10 bg-noir px-3.5 py-2 font-mono text-xs text-cream/85">
            {s}
          </span>
          {i < steps.length - 1 && (
            <svg width="34" height="10" className="mx-1 shrink-0" aria-hidden="true">
              <line x1="0" y1="5" x2="26" y2="5" stroke={accent} strokeWidth="1.5" className="flow-line" />
              <path d="M26 1 L33 5 L26 9 Z" fill={accent} />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function Section({ title, status, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <h2 className="text-xl font-bold text-cream sm:text-2xl">{title}</h2>
        {status && <Status kind={status} />}
      </div>
      {children}
    </motion.section>
  );
}

export function Bullets({ items, cols = 2 }) {
  return (
    <ul className={`grid grid-cols-1 gap-x-8 gap-y-2.5 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-sm leading-relaxed text-cream/70">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          {it}
        </li>
      ))}
    </ul>
  );
}

export function ChallengeCards({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div key={c.title} className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
          <h3 className="text-sm font-semibold text-cream">{c.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-cream/60">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

// Page shell for case studies
export function CasePage({ kicker, title, summary, tags, links, children, next }) {
  return (
    <div className="relative min-h-screen bg-noir text-cream">
      <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <motion.header initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">{kicker}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-cream sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-cream/70">{summary}</p>
          {tags && (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          )}
          {links?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className={l.primary
                    ? "rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-noir transition-transform hover:scale-[1.02]"
                    : "rounded-full border border-cream/20 px-6 py-2.5 text-sm font-semibold text-cream/85 transition-colors hover:border-gold/60 hover:text-gold"}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </motion.header>

        <div className="mt-16 space-y-16">{children}</div>

        {next && (
          <div className="mt-20 border-t border-cream/10 pt-8">
            <Link to={next.to} className="group inline-flex items-center gap-2 text-sm font-semibold text-gold">
              Next case study: {next.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
