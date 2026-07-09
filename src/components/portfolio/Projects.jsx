import React from "react";
import { Github, ExternalLink, PlayCircle, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const GROUPS = [
  {
    heading: "Cybersecurity",
    projects: [
      {
        title: "Cybersecurity Audit",
        badge: "NDA Signed",
        desc: "Led a 5-person structured security audit for a real client under NDA. Evaluated NIST controls, access policies, and auth workflows. Delivered full findings and remediation report.",
        tags: ["NIST CSF", "Gap Analysis", "Auth Testing", "Risk Reporting"],
      },
      {
        title: "API Key / Secret Leak Scanner",
        desc: "Scans pasted code or config text for exposed secrets — AWS keys, private keys, DB credentials, tokens, JWTs — with masked previews, severity ratings, and a remediation checklist.",
        tags: ["JavaScript", "Regex Detection", "Secrets Management"],
        tryHref: "#demo-secrets",
      },
      {
        title: "Prompt Injection Sandbox",
        desc: "An interactive fake support bot with a visible system prompt. Try to jailbreak it with real injection phrasing and watch detection rules catch (or miss) the attempt.",
        tags: ["AI Security", "Prompt Injection", "Pattern Detection"],
        tryHref: "#demo-injection",
      },
      {
        title: "Security+ & AI Security Quiz",
        desc: "A mixed quiz covering Security+ fundamentals — NIST CSF, least privilege, phishing red flags — plus modern AI security concepts.",
        tags: ["Security+", "AI Security", "Quiz"],
        tryHref: "#demo-cyber-quiz",
      },
    ],
  },
  {
    heading: "Software Development",
    projects: [
      {
        title: "The Strawberry Shop",
        badge: "Live",
        desc: "Built a live, revenue-generating ordering site for a real strawberry dessert business — end-to-end client project from requirements to launch, with Toast POS integration for orders and payments.",
        tags: ["Toast POS", "Payments", "E-Commerce", "Client Project"],
        links: [{ label: "Live Site", icon: ExternalLink, href: "https://thestrawberryshop.store/" }],
      },
      {
        title: "TidyMe Cloud Storage",
        desc: "AI-powered app auto-classifying files using Google APIs. Managed 3.15 TB across 86K+ objects. My work: FlutterFlow setup, sign-up page, text classification, Kaggle dataset pipeline.",
        tags: ["FlutterFlow", "Firebase", "Cloud Vision API", "NLP API"],
        links: [
          { label: "GitHub", icon: Github, href: "https://github.com/joyee-c/LSDM" },
          { label: "Live App", icon: ExternalLink, href: "https://app.flutterflow.io/run/enQjGoUsrBVoUBRkVWPH" },
          { label: "Demo", icon: PlayCircle, href: "https://www.youtube.com/watch?v=6j9aHk2kmaw" },
        ],
      },
      {
        title: "Coding & AI Dev Tools Quiz",
        desc: "A mixed quiz on core software development concepts — idempotency, React re-renders, Git — plus practical questions on using AI coding assistants responsibly.",
        tags: ["JavaScript", "React", "AI Tools", "Quiz"],
        tryHref: "#demo-dev-quiz",
      },
    ],
  },
];

function ProjectRow({ p }) {
  return (
    <li className="group rounded-2xl p-5 transition-colors hover:bg-cream/[0.05]">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-semibold text-cream">{p.title}</h3>
        {p.badge && (
          <span className="rounded-full bg-gold/15 px-3 py-0.5 font-mono text-[11px] font-medium text-gold">
            {p.badge}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-cream/65">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
            {t}
          </span>
        ))}
      </div>
      {(p.links?.length || p.tryHref) && (
        <div className="mt-4 flex flex-wrap items-center gap-5">
          {p.tryHref && (
            <a href={p.tryHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              Try it live <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
          {p.links?.map((l) => {
            const Icon = l.icon;
            return (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-gold">
                <Icon className="h-4 w-4" /> {l.label}
              </a>
            );
          })}
        </div>
      )}
    </li>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-12">
        {GROUPS.map((g) => (
          <div key={g.heading}>
            <h3 className="mb-3 pl-5 text-sm font-semibold text-cream/50">{g.heading}</h3>
            <ul className="space-y-2">
              {g.projects.map((p) => (
                <ProjectRow key={p.title} p={p} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
