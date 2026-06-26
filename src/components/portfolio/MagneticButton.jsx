import React, { useRef } from "react";

function burst(x, y) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#d4a853", "#d4847a", "#faf5ee"];
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 14;
    const dist = 40 + Math.random() * 40;
    p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:7px;height:7px;border-radius:9999px;pointer-events:none;z-index:10050;background:${colors[i % 3]};box-shadow:0 0 8px ${colors[i % 3]};`;
    document.body.appendChild(p);
    const anim = p.animate(
      [
        { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(0)`, opacity: 0 },
      ],
      { duration: 650, easing: "cubic-bezier(.2,.7,.3,1)" }
    );
    anim.onfinish = () => p.remove();
  }
}

export default function MagneticButton({ children, className = "", onClick, as = "button", href, ...rest }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  const handleClick = (e) => {
    burst(e.clientX, e.clientY);
    onClick?.(e);
  };

  const Comp = as;
  return (
    <Comp
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={handleClick}
      className={`inline-flex items-center justify-center transition-transform duration-200 will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}