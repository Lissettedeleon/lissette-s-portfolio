import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Status, Tag } from "./case/CaseKit";

const PROJECTS = [
  {
    to: "/projects/the-strawberry-shop",
    type: "Commercial Web Application",
    title: "The Strawberry Shop",
    status: "Live",
    summary: "Commercial ordering site for an Ohio dessert business — customer experience, accounts, security review, and a Toast POS integration in development.",
    role: "Freelance Developer · end to end",
    tags: ["Base44", "Claude Sonnet", "GitHub", "Toast Architecture", "Agentic AI"],
    external: [{ label: "Live Site", icon: ExternalLink, href: "https://thestrawberryshop.store" }],
    featured: true,
  },
  {
    to: "/projects/tidyme",
    type: "Cloud Storage Application",
    title: "TidyMe",
    status: "Live",
    summary: "Cloud-connected storage app with authentication, uploads, and AI file classification — 3.15 TB across 86K+ objects.",
    role: "Secondary Project Lead · UTSA",
    tags: ["FlutterFlow", "Firebase Auth", "Google Cloud"],
    external: [
      { label: "GitHub", icon: Github, href: "https://github.com/joyee-c/LSDM" },
      { label: "Live App", icon: ExternalLink, href: "https://app.flutterflow.io/run/enQjGoUsrBVoUBRkVWPH" },
    ],
  },
  {
    to: "/projects/cybersecurity-audit",
    type: "Security Assessment",
    title: "Cybersecurity Audit",
    status: "NDA",
    summary: "Led a five-member team reviewing access controls, policies, and data protection for a nonprofit — NIST-aligned, findings documented.",
    role: "Team Lead",
    tags: ["NIST", "Access Controls", "Policy Review"],
    external: [],
  },
];

function ProjectCard({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: i * 0.08, duration: 0.55 }}
      className={`group relative flex flex-col rounded-2xl border border-cream/10 bg-cream/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${p.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-rose-dusty">{p.type}</p>
        <Status kind={p.status} />
      </div>

      <h3 className="mt-4 text-2xl font-bold text-cream">
        <Link to={p.to} className="after:absolute after:inset-0">{p.title}</Link>
      </h3>
      <p className="mt-1 text-xs font-medium text-gold">{p.role}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/65">{p.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-5 border-t border-cream/8 pt-5">
        <Link to={p.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
          Case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        {p.external.map((l) => {
          const Icon = l.icon;
          return (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-cream/55 transition-colors hover:text-gold">
              <Icon className="h-4 w-4" /> {l.label}
            </a>
          );
        })}
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionTitle kicker="Featured Work">Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
