import React from "react";

const STREAM = "01001100 · 3F7A#9@! · ΔΨΩ · {decrypt} · 10110101 · </>  · 7F3A::09 · #!/usr · ΣΦΛ · [0xDEAD] · 11001010 · @root~ · #!SEC · 0x4C44 · ΔΨΩ · ping -t · 10101010 · {0x00FF} · </hack> · ΣΦΛ · 11110000 · @shell · #0xCAFE · 01010101 ·";

export default function SkillTicker() {
  return (
    <section className="group relative overflow-hidden border-y border-gold/10 bg-noir py-4">
      <div className="flex w-max animate-ticker gap-0 group-hover:[animation-play-state:paused]">
        {[STREAM, STREAM].map((s, i) => (
          <span key={i} className="font-mono text-sm tracking-widest whitespace-nowrap px-8">
            {s.split("").map((ch, j) => {
              const isDigit = /[01]/.test(ch);
              const isSymbol = /[#@!<>{}\[\]\/~·Δ-Ω]/.test(ch);
              return (
                <span
                  key={j}
                  className={
                    isDigit
                      ? "text-gold/50"
                      : isSymbol
                      ? "text-rose-dusty/60"
                      : "text-cream/25"
                  }
                >
                  {ch}
                </span>
              );
            })}
          </span>
        ))}
      </div>
    </section>
  );
}