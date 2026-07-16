import React from "react";
import SectionTitle from "./SectionTitle";
import SecretScanner from "./tools/SecretScanner";
import PromptInjectionSandbox from "./tools/PromptInjectionSandbox";
import CyberQuiz from "./tools/CyberQuiz";
import DevQuiz from "./tools/DevQuiz";

function ToolShell({ id, title, subtitle, children }) {
  return (
    <div id={id} className="scroll-mt-28 rounded-xl border border-cream/15 bg-[#fafaf8] p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-cream">{title}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-rose-dusty">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

export default function LiveTools() {
  return (
    <section id="tools" className="scroll-mt-24">
      <SectionTitle kicker="Feature Demonstrations">Live Demos</SectionTitle>
      <p className="mb-8 leading-relaxed text-cream/70">
        Working security and engineering demos — they run right here in your browser.
      </p>
      <div className="space-y-6">
        <ToolShell id="demo-cyber-quiz" title="Security+ & AI Security Quiz" subtitle="Quick knowledge check">
          <CyberQuiz />
        </ToolShell>
        <ToolShell id="demo-dev-quiz" title="Coding & AI Dev Tools Quiz" subtitle="Quick knowledge check">
          <DevQuiz />
        </ToolShell>
        <ToolShell id="demo-secrets" title="API Key / Secret Leak Scanner" subtitle="Client-side detection engine">
          <SecretScanner />
        </ToolShell>
        <ToolShell id="demo-injection" title="Prompt Injection Sandbox" subtitle="Simulated AI security">
          <PromptInjectionSandbox />
        </ToolShell>
      </div>
    </section>
  );
}
