import React from "react";
import useCountUp from "./useCountUp";

function Stat({ target, decimals, suffix, prefix = "", label }) {
  const { ref, display } = useCountUp(target, { decimals });
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-serif-display text-3xl italic text-gold sm:text-4xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.15em] text-cream/55">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      <Stat target={3.55} decimals={2} label="GPA" />
      <Stat target={140} decimals={0} suffix="+" label="Students TA'd" />
      <Stat target={99.5} decimals={1} suffix="%" label="Amazon Accuracy" />
      <Stat target={3.15} decimals={2} suffix="TB" label="Data Managed" />
    </div>
  );
}