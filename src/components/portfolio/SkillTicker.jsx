import React from "react";

const NODES = [
  { type: "node", label: "◉" },
  { type: "line", label: " ─────── " },
  { type: "node", label: "◉" },
  { type: "line", label: " ═══ " },
  { type: "node", label: "◎" },
  { type: "line", label: " · · · " },
  { type: "node", label: "◉" },
  { type: "line", label: " ─── " },
  { type: "node", label: "●" },
  { type: "line", label: " ══════ " },
  { type: "node", label: "◉" },
  { type: "line", label: " · · " },
  { type: "node", label: "◎" },
  { type: "line", label: " ─────── " },
  { type: "node", label: "◉" },
  { type: "line", label: " ═══ " },
  { type: "node", label: "●" },
  { type: "line", label: " · · · · " },
  { type: "node", label: "◉" },
  { type: "line", label: " ─── " },
  { type: "node", label: "◎" },
  { type: "line", label: " ══════ " },
  { type: "node", label: "◉" },
  { type: "line", label: "     " },
];

export default function SkillTicker() {
  return (
    <section className="group relative overflow-hidden border-y border-gold/10 bg-noir py-4">
      <div className="flex w-max animate-ticker gap-0 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <span key={copy} className="font-mono text-base tracking-widest whitespace-nowrap">
            {NODES.map((n, i) => (
              <span
                key={i}
                className={
                  n.type === "node"
                    ? i % 6 === 0
                      ? "text-gold"
                      : i % 6 === 2
                      ? "text-rose-dusty"
                      : "text-gold/70"
                    : "text-cream/25"
                }
              >
                {n.label}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}