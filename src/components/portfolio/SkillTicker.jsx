import React from "react";

const SEGMENTS = [
  { text: "█████", color: "lavender" },
  { text: " ▓▓▓▓", color: "lavender-mid" },
  { text: " ▒▒▒▒", color: "mint-mid" },
  { text: " ░░░░", color: "faded" },
  { text: "  ·  🔒  ·  ", color: "faded" },
  { text: "░░░░ ", color: "faded" },
  { text: "▒▒▒▒ ", color: "mint-mid" },
  { text: "▓▓▓▓ ", color: "lavender-mid" },
  { text: "█████", color: "lavender" },
  { text: "  ·  [ SECURE ]  ·  ", color: "mint" },
  { text: "█████", color: "mint" },
  { text: " ▓▓▓▓", color: "mint-mid" },
  { text: " ▒▒▒▒", color: "lavender-mid" },
  { text: " ░░░░", color: "faded" },
  { text: "  ·  🛡  ·  ", color: "faded" },
  { text: "░░░░ ", color: "faded" },
  { text: "▒▒▒▒ ", color: "lavender-mid" },
  { text: "▓▓▓▓ ", color: "mint-mid" },
  { text: "█████", color: "mint" },
  { text: "  ·  [ ENCRYPTED ]  ·  ", color: "lavender" },
];

const colorMap = {
  lavender: "text-gold",
  "lavender-mid": "text-gold/60",
  mint: "text-rose-dusty",
  "mint-mid": "text-rose-dusty/60",
  faded: "text-cream/20",
};

export default function SkillTicker() {
  return (
    <section className="group relative overflow-hidden border-y border-gold/10 bg-noir py-4">
      <div className="flex w-max animate-ticker gap-0 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <span key={copy} className="font-mono text-sm tracking-widest whitespace-nowrap">
            {SEGMENTS.map((seg, i) => (
              <span key={i} className={colorMap[seg.color]}>
                {seg.text}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}