import React from "react";

// Plain wrapper — 3D tilt effect removed in favor of simple hover transitions.
export default function TiltCard({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
