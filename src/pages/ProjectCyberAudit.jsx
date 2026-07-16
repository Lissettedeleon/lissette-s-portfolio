import React from "react";
import { CasePage, Section, Flow, Bullets } from "@/components/portfolio/case/CaseKit";

export default function ProjectCyberAudit() {
  return (
    <CasePage
      kicker="Case Study · Security Assessment"
      title="Cybersecurity Audit"
      summary="Led a five-member team in reviewing access controls, security policies, and data-protection practices for a nonprofit organization."
      tags={["Team Leadership", "NIST-Aligned Review", "Access Controls", "Policy Evaluation", "Confidential (NDA)"]}
      next={{ to: "/projects/the-strawberry-shop", label: "The Strawberry Shop" }}
    >
      <Section title="Process">
        <Flow steps={["Scope", "NIST-Aligned Review", "Access-Control Analysis", "Policy Evaluation", "Gap Identification", "Findings Report"]} />
      </Section>

      <Section title="What I Did">
        <Bullets items={[
          "Led and coordinated a 5-person audit team",
          "Reviewed access controls and authentication workflows",
          "Evaluated security policies against NIST guidance",
          "Identified gaps and documented findings with remediation guidance",
          "Maintained strict confidentiality under NDA",
        ]} cols={1} />
      </Section>

      <Section title="Why It Matters">
        <p className="max-w-2xl text-sm leading-relaxed text-cream/70">
          This work is the security lens I bring to every development project —
          the authentication reviews, input validation, and protected-route
          testing in my software projects come directly from this experience.
        </p>
      </Section>
    </CasePage>
  );
}
