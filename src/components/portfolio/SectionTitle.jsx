import React from "react";

export default function SectionTitle({ children }) {
  return (
    <h2 className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.3em] text-gold">
      {children}
    </h2>
  );
}
