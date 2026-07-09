import React from "react";

// Plain button/link wrapper — magnetic hover and confetti effects removed
// in favor of simple transitions.
export default function MagneticButton({ children, className = "", onClick, as = "button", href, ...rest }) {
  const Comp = as;
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all duration-200 ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
