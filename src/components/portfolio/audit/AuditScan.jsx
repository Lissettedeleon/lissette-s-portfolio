import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AREAS = [
  "Access controls",
  "Security policies",
  "Data protection",
  "Remediation findings",
];

// Animated audit visual: each review area is scanned and cleared, then the loop restarts
export default function AuditScan() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % (AREAS.length + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scanning = active < AREAS.length;

  return (
    <div className="relative flex aspect-[16/10] w-full flex-col justify-center overflow-hidden rounded-lg border border-cream/15 bg-white p-6 shadow-[0_18px_44px_rgba(24,36,32,0.14)] sm:p-8">
      <motion.span
        aria-hidden="true"
        animate={{ x: ["-15%", "115%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-transparent via-gold/10 to-transparent"
      />

      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-rose-dusty">
        <span>NIST framework review</span>
        <span>{scanning ? "Scanning" : "Complete"}</span>
      </div>

      <div className="mt-4 space-y-2.5">
        {AREAS.map((area, i) => {
          const done = i < active;
          const current = i === active;
          return (
            <div
              key={area}
              className={`relative flex items-center justify-between overflow-hidden rounded-md border px-3 py-2 transition-colors duration-300 ${
                current ? "border-gold/45 bg-gold/5" : "border-cream/15"
              }`}
            >
              <span className={`font-mono text-xs ${done || current ? "text-cream" : "text-cream/35"}`}>
                {area}
              </span>
              {done ? (
                <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25 }}>
                  <Check className="h-3.5 w-3.5 text-gold" />
                </motion.span>
              ) : (
                <span className="h-3.5 w-3.5 rounded-sm border border-cream/25" />
              )}
              {current && (
                <motion.span
                  key={active}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gold"
                />
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-4 font-mono text-[11px] text-rose-dusty">
        Team of five | Confidential under NDA
      </p>
    </div>
  );
}