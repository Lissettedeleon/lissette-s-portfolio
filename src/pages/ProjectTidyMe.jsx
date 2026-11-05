import React from "react";
import Seo from "@/components/portfolio/Seo";
import { CasePage, Section, Flow, Bullets, ChallengeCards } from "@/components/portfolio/case/CaseKit";

export default function ProjectTidyMe() {
  return (
    <>
      <Seo
        title="TidyMe Cloud Storage Application | Lissette De Leon"
        description="TidyMe, a cloud storage application built with a four person team using FlutterFlow, Firebase Authentication, and Google Cloud, managing 3.15 TB across 86,000+ objects."
      />
      <CasePage
        kicker="Case Study | Cloud Storage Application"
        title="TidyMe Cloud Storage Application"
        summary="Built with a four person team using FlutterFlow, Firebase Authentication, and Google Cloud, managing 3.15 TB across 86,000+ objects. Signup and file classification run through Google Cloud APIs."
        tags={["Secondary Project Lead", "UTSA", "FlutterFlow", "Firebase Authentication", "Google Cloud"]}
        links={[
          { label: "Live App", href: "https://app.flutterflow.io/run/enQjGoUsrBVoUBRkVWPH", primary: true },
          { label: "GitHub", href: "https://github.com/joyee-c/LSDM" },
          { label: "Full Report (PDF)", href: "/projects/tidyme-report.pdf" },
        ]}
        next={{ to: "/projects/cybersecurity-audit", label: "Cybersecurity Audit" }}
      >
        <Section title="Demo">
          <a href="https://www.youtube.com/watch?v=6j9aHk2kmaw" target="_blank" rel="noopener noreferrer" aria-label="Watch the TidyMe demo on YouTube"
            className="group relative block overflow-hidden rounded-lg border border-cream/15 shadow-[0_18px_44px_rgba(24,36,32,0.14)]">
            <img src="https://img.youtube.com/vi/6j9aHk2kmaw/hqdefault.jpg" alt="TidyMe demo video thumbnail" loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
            <span className="absolute inset-0 flex items-center justify-center bg-cream/10">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-cream shadow-lg transition-transform group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 4l10 6-10 6V4z" /></svg>
              </span>
            </span>
          </a>
          <p className="mt-3 font-mono text-xs text-rose-dusty">Opens on YouTube | the video owner has embedding disabled.</p>
        </Section>

        <Section title="My Role">
          <p className="max-w-2xl text-sm leading-relaxed text-cream/70">
            Secondary project lead on a four person team at UTSA. Built the
            application with FlutterFlow, Firebase Authentication, and Google
            Cloud, and implemented signup and file classification through Google
            Cloud APIs.
          </p>
        </Section>

        <Section title="Architecture">
          <Flow steps={["User", "Firebase Authentication", "Application", "Google Cloud", "File classification"]} />
          <p className="mt-4 text-xs text-cream/50">
            3.15 TB managed across 86,000+ objects using Google Cloud APIs.
          </p>
        </Section>

        <Section title="Key Features">
          <Bullets items={[
            "Signup through Firebase Authentication",
            "File storage on Google Cloud",
            "File classification through Google Cloud APIs",
            "3.15 TB managed across 86,000+ objects",
          ]} />
        </Section>

        <Section title="Challenges and Lessons">
          <ChallengeCards items={[
            { title: "Scale", body: "Managing 3.15 TB of files across 86,000+ objects on Google Cloud." },
            { title: "File classification", body: "Implementing classification through Google Cloud APIs." },
            { title: "Team coordination", body: "Building one working application with a four person team." },
          ]} />
        </Section>
      </CasePage>
    </>
  );
}