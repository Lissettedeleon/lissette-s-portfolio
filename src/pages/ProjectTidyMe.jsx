import React from "react";
import { CasePage, Section, Flow, Bullets, ChallengeCards } from "@/components/portfolio/case/CaseKit";

export default function ProjectTidyMe() {
  return (
    <CasePage
      kicker="Case Study · Cloud Storage Application"
      title="TidyMe"
      summary="Built a cloud-connected storage application supporting authentication, file uploads, secure access, and structured file classification."
      tags={["FlutterFlow", "Firebase Authentication", "Firebase", "Google Cloud"]}
      links={[
        { label: "Live App", href: "https://app.flutterflow.io/run/enQjGoUsrBVoUBRkVWPH", primary: true },
        { label: "GitHub", href: "https://github.com/joyee-c/LSDM" },
        { label: "Video Demo", href: "https://www.youtube.com/watch?v=6j9aHk2kmaw" },
      ]}
      next={{ to: "/projects/cybersecurity-audit", label: "Cybersecurity Audit" }}
    >
      <Section title="My Role">
        <p className="max-w-2xl text-sm leading-relaxed text-cream/70">
          Secondary project lead on a university team (CS 4243, UTSA). Owned
          FlutterFlow setup, the sign-up flow, text classification, and the
          Kaggle dataset pipeline.
        </p>
      </Section>

      <Section title="Architecture">
        <Flow steps={["User", "Authentication", "Application", "Cloud Storage", "File Classification", "User Library"]} />
        <p className="mt-4 text-xs text-cream/50">
          3.15 TB managed across 86,000+ objects using Google Cloud APIs.
        </p>
      </Section>

      <Section title="Key Features">
        <Bullets items={[
          "Firebase Authentication sign-up and login flow",
          "File upload with structured storage",
          "Image, text, and video classification via Cloud Vision and NLP APIs",
          "Organized user library after classification",
        ]} />
      </Section>

      <Section title="Security Controls">
        <Bullets items={[
          "Authenticated access to all storage operations",
          "Per-user data separation",
          "Managed credentials through Firebase — no keys in the client",
        ]} cols={1} />
      </Section>

      <Section title="Challenges & Lessons">
        <ChallengeCards items={[
          { title: "Classification accuracy", body: "Tuning Google API classification across mixed file types and a large Kaggle training set." },
          { title: "Scale", body: "Keeping uploads and library views responsive across 86K+ stored objects." },
          { title: "Team coordination", body: "Integrating four contributors' features into one working FlutterFlow app." },
        ]} />
      </Section>
    </CasePage>
  );
}
