import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const PROJECTS = [
  {
    to: "/projects/the-strawberry-shop",
    type: "Commercial Web Application · Live",
    title: "The Strawberry Shop",
    summary:
      "Commercial ordering site for an Ohio dessert business — customer experience, accounts, security review, and a Toast POS integration in development.",
    role: "Freelance Developer, end to end",
    tags: "Base44 · Claude Sonnet · GitHub · Toast architecture · Agentic AI",
    img: "/projects/strawberryshop.png",
    external: { label: "Visit live site ↗", href: "https://thestrawberryshop.store" },
  },
  {
    to: "/projects/tidyme",
    type: "Cloud Storage Application",
    title: "TidyMe",
    summary:
      "Cloud-connected storage app with authentication, uploads, and AI file classification — 3.15 TB managed across 86,000+ objects.",
    role: "Secondary Project Lead, UTSA",
    tags: "FlutterFlow · Firebase Authentication · Google Cloud",
    img: "/projects/tidyme.png",
    external: { label: "GitHub ↗", href: "https://github.com/joyee-c/LSDM" },
  },
  {
    to: "/projects/cybersecurity-audit",
    type: "Security Assessment · NDA",
    title: "Cybersecurity Audit",
    summary:
      "Led a five-member team reviewing access controls, security policies, and data protection for a nonprofit — NIST-aligned, findings documented.",
    role: "Team Lead",
    tags: "NIST · Access controls · Policy evaluation",
    img: "/projects/audit.png",
    external: null,
  },
];

function Shot({ src, title }) {
  const [ok, setOk] = useState(true);
  if (!ok) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-lg border border-cream/15 bg-[#f6f6f4]">
        <span className="font-mono text-sm text-cream/35">{title}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`Screenshot of ${title}`}
      loading="lazy"
      onError={() => setOk(false)}
      className="aspect-[16/10] w-full rounded-lg border border-cream/15 object-cover object-top shadow-[0_18px_44px_rgba(23,24,26,0.12)] transition-transform duration-300 hover:scale-[1.01]"
    />
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionTitle kicker="Featured Work">Projects</SectionTitle>
      <div className="space-y-20">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Link to={p.to} aria-label={`${p.title} case study`}>
              <Shot src={p.img} title={p.title} />
            </Link>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-rose-dusty">{p.type}</p>
              <h3 className="mt-3 text-3xl font-bold text-cream">{p.title}</h3>
              <p className="mt-1 text-sm text-cream/55">{p.role}</p>
              <p className="mt-4 max-w-md leading-relaxed text-cream/75">{p.summary}</p>
              <p className="mt-4 font-mono text-xs text-rose-dusty">{p.tags}</p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Link
                  to={p.to}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-cream underline decoration-cream/30 decoration-2 underline-offset-[6px] hover:decoration-cream"
                >
                  Read the case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {p.external && (
                  <a href={p.external.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-cream/60 underline decoration-cream/20 underline-offset-[6px] hover:text-cream">
                    {p.external.label}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
