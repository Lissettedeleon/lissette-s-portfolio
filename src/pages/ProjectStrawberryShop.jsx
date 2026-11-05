import React from "react";
import Seo from "@/components/portfolio/Seo";
import ShopPhotos from "@/components/portfolio/strawberry/ShopPhotos";
import { CasePage, Section, Flow, Bullets } from "@/components/portfolio/case/CaseKit";

export default function ProjectStrawberryShop() {
  return (
    <>
      <Seo
        title="The Strawberry Shop | Lissette De Leon"
        description="The Strawberry Shop, a live commercial website for a dessert kiosk in Ohio, built and tested by Lissette De Leon from client requirements through deployment."
      />
      <CasePage
        kicker="Case Study | Commercial Web Application"
        title="The Strawberry Shop"
        titleLink={{ label: "thestrawberryshop.store", href: "https://thestrawberryshop.store" }}
        summary="A live production website for a dessert kiosk at Liberty Township Mall in Ohio, designed to match the business brand and support online ordering, with development managed from client requirements through production releases via GitHub."
        tags={["Live production", "Freelance Developer | August 2026 to Present", "GitHub workflow", "Toast POS integration in progress"]}
        next={{ to: "/projects/tidyme", label: "TidyMe Cloud Storage Application" }}
      >
        <Section title="My Role">
          <p className="max-w-2xl text-sm leading-relaxed text-cream/70">
            Freelance developer, August 2026 to present. I design, build, and
            deploy the website, and I manage development from client
            requirements through production releases via GitHub.
          </p>
        </Section>

        <Section title="Photos" status="Live">
          <ShopPhotos />
        </Section>

        <Section title="What I Built" status="Live">
          <Bullets items={[
            "Website for a dessert kiosk at Liberty Township Mall in Ohio",
            "Customer experience aligned with the business brand",
            "Online ordering support",
            "Production releases managed via GitHub",
          ]} />
        </Section>

        <Section title="Security and Functional Testing">
          <Bullets items={[
            "Authentication flows",
            "Protected routes",
            "Access controls",
            "Input validation",
            "API key exposure checks",
          ]} />
        </Section>

        <Section title="Toast POS Integration" status="In Progress">
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-cream/70">
            Currently designing and building the Toast POS integration in
            collaboration with the client. This work is in progress, not live.
          </p>
          <Flow steps={["Customer", "Website", "Integration", "Toast POS", "Menu and pricing", "Order submission", "Payments"]} />
        </Section>

        <Section title="AI Tooling and Review">
          <Bullets items={[
            "AI tooling and agentic workflows with Claude for code review and debugging",
            "GitHub based security and release checklists",
            "A custom agent that monitors and reports production errors",
            "Review of generated changes before release",
          ]} />
        </Section>

        <Section title="Outcomes">
          <Bullets items={[
            "Live production website for a real client",
            "Testing before each deployment",
            "Releases managed through GitHub",
            "Toast POS integration in progress",
          ]} />
        </Section>
      </CasePage>
    </>
  );
}