import React, { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

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
        scrolled ? "border-b border-gold/10 bg-noir/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" className="font-mono text-lg font-bold tracking-tight text-cream">
          L<span className="text-gold">D</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-cream/60 transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-xs text-gold sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            open to work
          </span>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" className="text-cream md:hidden">
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-cream" />
              <span className="block h-0.5 w-6 bg-cream" />
              <span className="block h-0.5 w-4 bg-gold" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gold/10 bg-noir/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="text-sm text-cream/80 hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
