import React, { useEffect, useState } from "react";
import { Github } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
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
        scrolled ? "border-b border-cream/8 bg-noir/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a href="/#hero" className="font-mono text-lg font-bold tracking-tight text-cream">
          L<span className="text-gold">D</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-cream/60 transition-colors hover:text-cream">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/lissettedeleon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="hidden text-cream/50 transition-colors hover:text-gold sm:block">
            <Github className="h-4.5 w-4.5 h-[18px] w-[18px]" />
          </a>
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
        <div className="border-t border-cream/8 bg-noir/95 px-5 py-4 backdrop-blur-xl md:hidden">
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
