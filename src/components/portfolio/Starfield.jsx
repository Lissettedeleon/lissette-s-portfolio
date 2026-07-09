import React, { useMemo } from "react";

// Fixed twinkling starfield + mint nebula glows behind all content.
export default function Starfield({ count = 90 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // deterministic pseudo-random from index so SSR/renders stay stable
        const r = (n) => {
          const x = Math.sin(i * 127.1 + n * 311.7) * 43758.5453;
          return x - Math.floor(x);
        };
        return {
          left: `${r(1) * 100}%`,
          top: `${r(2) * 100}%`,
          size: r(3) * 2.2 + 0.8,
          delay: `${r(4) * 4}s`,
          duration: `${3 + r(5) * 4}s`,
          bright: r(6) > 0.8,
        };
      }),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* nebula glows */}
      <div className="absolute -left-40 top-[-10%] h-[34rem] w-[34rem] rounded-full opacity-[0.13] blur-[130px]" style={{ background: "#7fe8c3" }} />
      <div className="absolute right-[-15%] top-[35%] h-[30rem] w-[30rem] rounded-full opacity-[0.08] blur-[130px]" style={{ background: "#4bc2ad" }} />
      <div className="absolute bottom-[-15%] left-[25%] h-[28rem] w-[28rem] rounded-full opacity-[0.07] blur-[130px]" style={{ background: "#7fe8c3" }} />
      {/* stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            boxShadow: s.bright ? "0 0 6px rgba(127,232,195,0.8)" : "none",
            background: s.bright ? "#7fe8c3" : "#e6f4ec",
          }}
        />
      ))}
    </div>
  );
}
