import React from "react";
import Seo from "@/components/portfolio/Seo";
import AuditScan from "@/components/portfolio/audit/AuditScan";
import { CasePage, Section, Flow, Bullets } from "@/components/portfolio/case/CaseKit";

export default function ProjectCyberAudit() {
  return (
    <>
      <Seo
        title="Cybersecurity Audit | Lissette De Leon"
        description="A security assessment aligned with the NIST Cybersecurity Framework, led by Lissette De Leon for a confidential nonprofit under NDA."
      />
      <CasePage
        kicker="Case Study | Security Assessment"
        title="Cybersecurity Audit"
        summary="Team lead for a security assessment aligned with the NIST Cybersecurity Framework at a confidential nonprofit, covering access controls, security policies, and data protection practices."
        tags={["Team Lead", "NIST Cybersecurity Framework", "Access Controls", "Data Protection", "Confidential under NDA"]}
        next={{ to: "/projects/the-strawberry-shop", label: "The Strawberry Shop" }}
      >
        <AuditScan />

        <Section title="Process">
          <Flow steps={["Scope", "NIST Cybersecurity Framework", "Access controls", "Security policies", "Data protection", "Findings report"]} />
        </Section>

        <Section title="What I Did">
          <Bullets items={[
            "Led a team of five through the assessment",
            "Reviewed access controls",
            "Reviewed security policies and data protection practices",
            "Identified gaps and documented remediation guidance",
            "Kept the client anonymous under NDA",
          ]} cols={1} />
        </Section>

        <Section title="Why It Matters">
          <p className="max-w-2xl text-sm leading-relaxed text-cream/70">
            This work carries into my own projects. Before each release I check
            authentication flows, protected routes, access controls, and input
            validation.
          </p>
        </Section>
      </CasePage>
    </>
  );
}