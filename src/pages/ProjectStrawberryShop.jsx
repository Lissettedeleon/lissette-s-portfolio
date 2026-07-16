import React from "react";
import { CasePage, Section, Flow, Bullets, ChallengeCards, Status } from "@/components/portfolio/case/CaseKit";

export default function ProjectStrawberryShop() {
  return (
    <CasePage
      kicker="Case Study · Commercial Web Application"
      title="The Strawberry Shop"
      summary="Designed and deployed a commercial web application for an Ohio-based dessert business, with customer-facing ordering experiences, account functionality, business content, and future Toast integration."
      tags={["Base44", "Claude Sonnet", "GitHub", "AI-Assisted Development", "Responsive Web", "Web App Testing", "Security Review", "Toast Architecture", "Agentic AI Workflows"]}
      links={[
        { label: "Visit Live Site", href: "https://thestrawberryshop.store", primary: true },
      ]}
      next={{ to: "/projects/tidyme", label: "TidyMe" }}
    >
      <Section title="My Role">
        <p className="max-w-2xl text-sm leading-relaxed text-cream/70">
          Freelance developer — end to end. Requirements meetings with the
          business owner, iterative builds, functional and responsive testing,
          security review, and production updates.
        </p>
      </Section>

      <Section title="Customer Experience" status="Live">
        <Bullets items={[
          "Menu discovery and product information",
          "Store information and business content",
          "Catering and gift cards",
          "Account access",
          "Ordering-related workflows",
          "Responsive mobile experience",
        ]} />
      </Section>

      <Section title="Development Process">
        <Flow steps={["Owner Feedback", "Build", "Claude-Assisted Debugging", "Functional Testing", "Responsive Testing", "GitHub Commit", "Production"]} />
        <div className="mt-5">
          <Bullets items={[
            "Base44 application development",
            "Claude-assisted coding and debugging",
            "GitHub version control on every revision",
            "Iterative feature development with business-owner feedback",
          ]} />
        </div>
      </Section>

      <Section title="Security Considerations">
        <Bullets items={[
          "Authentication and protected-route review",
          "Administrative access review",
          "Input validation on customer-facing forms",
          "Password-reset workflow testing",
          "API-key exposure checks and secrets management",
          "Security-sensitive route testing",
          "Human review before every production change",
        ]} />
      </Section>

      <Section title="Toast Integration" status="In Development">
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-cream/70">
          Toast will serve as the POS and commerce backend. The integration
          layer is designed; connection work is in progress.
        </p>
        <Flow steps={["Customer", "Website", "Integration Layer", "Toast APIs", "Menu · Orders · Payments · Fulfillment"]} accent="#aaa2c4" />
        <div className="mt-5 flex flex-wrap gap-2">
          {["Menu synchronization", "Pricing synchronization", "Order submission", "Payment workflows", "Fulfillment data", "API error handling", "Order-status monitoring"].map((t) => (
            <span key={t} className="rounded-full border border-cream/10 px-3 py-1 text-xs text-cream/60">{t}</span>
          ))}
        </div>
      </Section>

      <Section title="Agentic AI Quality Workflow" status="In Development">
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-cream/70">
          An agentic AI-assisted workflow designed to identify website defects,
          recommend fixes, support regression testing, and preserve human
          approval before production changes.
        </p>
        <Flow steps={["Monitor", "Detect", "Classify", "Recommend", "Test", "Human Review", "GitHub Update", "Deploy", "Monitor"]} accent="#8fc296" />
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-cream/60">
          <Status kind="Live" /> Site, GitHub revisions, human review
          <Status kind="In Development" /> Defect detection and classification
          <Status kind="Planned" /> Automated regression suggestions
        </div>
      </Section>

      <Section title="Challenges">
        <ChallengeCards items={[
          { title: "Requirements → features", body: "Translating business-owner requirements into working, testable features." },
          { title: "Responsive behavior", body: "Keeping every workflow usable across phone, tablet, and desktop." },
          { title: "Protecting auth flows", body: "Reviewing authentication and administrative workflows before each release." },
          { title: "Toast readiness", body: "Structuring the application so the POS backend can connect cleanly." },
          { title: "AI-generated code safety", body: "Reviewing and testing AI-assisted changes before they ship." },
          { title: "Preventing regressions", body: "Re-testing critical paths on every production update." },
        ]} />
      </Section>

      <Section title="Outcomes">
        <Bullets items={[
          "Live production website for a real client",
          "Responsive customer experience",
          "GitHub-managed revisions",
          "Security-focused testing before releases",
          "Ongoing feature development",
          "Planned backend integration with Toast",
        ]} />
      </Section>
    </CasePage>
  );
}
