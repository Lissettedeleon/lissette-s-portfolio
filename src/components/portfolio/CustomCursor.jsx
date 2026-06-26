import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEnabled(true);
      document.documentElement.classList.add("has-custom-cursor");
    }
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf;

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }
      const t = e.target;
      const interactive = t.closest("a, button, input, textarea, select, [data-cursor='pointer']");
      if (ringRef.current) {
        ringRef.current.style.opacity = interactive ? "0.9" : "0.5";
        ringRef.current.style.width = interactive ? "52px" : "34px";
        ringRef.current.style.height = interactive ? "52px" : "34px";
      }
    };

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.16;
      ring.y += (mouse.y - ring.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full"
        style={{ background: "#d4a853", boxShadow: "0 0 12px 3px rgba(212,168,83,0.8)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border transition-[width,height,opacity] duration-200"
        style={{ marginLeft: -17, marginTop: -17, width: 34, height: 34, borderColor: "rgba(212,168,83,0.6)" }}
      />
    </>
  );
}