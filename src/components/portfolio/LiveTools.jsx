import React from "react";
import SectionTitle from "./SectionTitle";
import SortingVisualizer from "./demos/SortingVisualizer";

export default function LiveTools() {
  return (
    <section id="tools" className="scroll-mt-24">
      <SectionTitle kicker="Code in Action">Algorithm Visualizer</SectionTitle>
      <p className="mb-8 max-w-xl leading-relaxed text-cream/70">
        From my time TA'ing Data Structures & Algorithms for 140+ students —
        pick an algorithm and watch it sort, right here.
      </p>
      <div className="rounded-xl border border-cream/15 bg-white/55 p-6 sm:p-8">
        <SortingVisualizer />
      </div>
    </section>
  );
}
