import React, { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Cybersecurity", href: "#projects", tab: "cybersecurity" },
  { label: "Software Development", href: "#projects", tab: "software" },
  { label: "Tools", href: "#tools" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function selectProjectsTab(tab) {
  window.dispatchEvent(new CustomEvent("selectProjectsTab", { detail: tab }));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9000] transition-all duration-500 ${
        scrolled ? "border-b border-gold/15 bg-noir/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" className="font-serif-display text-2xl italic tracking-tight text-cream">
          L<span className="text-gold">D</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => l.tab && selectProjectsTab(l.tab)}
              className="text-sm text-cream/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            Open to Work
          </span>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="text-cream md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-cream" />
              <span className="block h-0.5 w-6 bg-cream" />
              <span className="block h-0.5 w-4 bg-gold" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gold/15 bg-noir/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => {
                  if (l.tab) selectProjectsTab(l.tab);
                  setOpen(false);
                }}
                className="text-sm text-cream/80 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}