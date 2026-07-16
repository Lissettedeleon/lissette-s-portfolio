import React from "react";
import SectionTitle from "./SectionTitle";
import TestRunner from "./demos/TestRunner";

export default function LiveTools() {
  return (
    <section id="tools" className="scroll-mt-24">
      <SectionTitle kicker="Code in Action">Live Demos</SectionTitle>
      <p className="mb-8 max-w-xl leading-relaxed text-cream/70">
        A working demo, running right here in your browser.
      </p>
      <div className="space-y-8">
        <div className="rounded-xl border border-cream/15 bg-white/55 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-cream">Automated Test Runner</h3>
          <p className="mb-6 mt-1 font-mono text-xs uppercase tracking-[0.15em] text-rose-dusty">
            QA automation · catch the bug, apply the fix, re-run
          </p>
          <TestRunner />
        </div>
      </div>
    </section>
  );
}
