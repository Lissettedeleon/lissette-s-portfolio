import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Status label: plain small caps, no colored chip
export function Status({ kind }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-rose-dusty">
      {kind}
    </span>
  );
}

// Tag: quiet mono text, separated by layout gaps — no pill background
export function Tag({ children }) {
  return (
    <span className="font-mono text-xs text-rose-dusty">{children}</span>
  );
}

// Flow diagram: black-outline boxes on white, animated dashed connectors
export function Flow({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-y-3 border-y border-cream/15 py-5">
      {steps.map((s, i) => (
        <React.Fragment key={`${s}-${i}`}>
          <span className="whitespace-nowrap rounded-md border border-cream/25 bg-white px-3.5 py-2 font-mono text-xs text-cream">
            {s}
          </span>
          {i < steps.length - 1 && (
            <svg width="34" height="10" className="mx-1 shrink-0" aria-hidden="true">
              <line x1="0" y1="5" x2="26" y2="5" stroke="#17181a" strokeWidth="1.2" className="flow-line" />
              <path d="M26 1 L33 5 L26 9 Z" fill="#17181a" />
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
      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3 border-t border-cream/20 pt-5">
        <h2 className="text-xl font-bold text-cream sm:text-2xl">{title}</h2>
        {status && <Status kind={status} />}
      </div>
      {children}
    </motion.section>
  );
}

export function Bullets({ items, cols = 2 }) {
  return (
    <ul className={`grid grid-cols-1 gap-x-10 gap-y-2.5 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-cream/75">
          <span className="mt-[11px] h-px w-4 shrink-0 bg-cream/40" />
          {it}
        </li>
      ))}
    </ul>
  );
}

export function ChallengeCards({ items }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div key={c.title} className="bg-white p-5">
          <h3 className="text-sm font-semibold text-cream">{c.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-cream/60">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

// Page shell for case studies
export function CasePage({ kicker, title, summary, tags, links, children, next }) {
  return (
    <div className="relative min-h-screen bg-noir text-cream">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-cream/60 underline-offset-4 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose-dusty">{kicker}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-cream sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/70">{summary}</p>
          {tags && (
            <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
              {tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </p>
          )}
          {links?.length > 0 && (
            <div className="mt-7 flex flex-wrap items-center gap-5">
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className={l.primary
                    ? "rounded-md bg-cream px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                    : "text-sm font-semibold text-cream underline decoration-cream/30 decoration-2 underline-offset-[6px] hover:decoration-cream"}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </motion.header>

        <div className="mt-16 space-y-14">{children}</div>

        {next && (
          <div className="mt-20 border-t border-cream/20 pt-8">
            <Link to={next.to} className="group inline-flex items-center gap-2 text-sm font-semibold text-cream underline decoration-cream/30 decoration-2 underline-offset-[6px] hover:decoration-cream">
              Next case study: {next.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
