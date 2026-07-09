import React, { useMemo } from "react";

export default function Particles({ count = 26 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        dur: Math.random() * 14 + 10,
        delay: Math.random() * 8,
        gold: Math.random() > 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes floatY { 0%{transform:translateY(0) translateX(0);opacity:0} 10%{opacity:.7} 90%{opacity:.7} 100%{transform:translateY(-120px) translateX(20px);opacity:0} }
      `}</style>
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-none"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: d.gold ? "#b9a382" : "#9c9ca6",
            boxShadow: `0 0 8px ${d.gold ? "rgba(185,163,130,0.7)" : "rgba(156,156,166,0.7)"}`,
            animation: `floatY ${d.dur}s ${d.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}