import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Play, X } from "lucide-react";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "tools", label: "Live Tools" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          OPEN TO WORK
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-cream sm:text-5xl">
          Lissette De Leon
        </h1>
        <h2 className="mt-3 text-lg font-medium text-cream/80">
          Cybersecurity · QA · AI
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-cream/60">
          I find how software breaks — then I make sure it can't.
          San Antonio, TX.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-cream"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-noir transition-transform group-hover:scale-110">
            <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
          </span>
          Watch my 30-second intro
        </button>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul>
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="group flex items-center gap-4 py-2.5">
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === id ? "w-16 bg-gold" : "w-8 bg-cream/30 group-hover:w-16 group-hover:bg-cream/70"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.25em] transition-colors ${
                      active === id ? "text-cream" : "text-cream/45 group-hover:text-cream"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-12 flex items-center gap-5 lg:mt-0">
        <a href="https://github.com/lissettedeleon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="text-cream/50 transition-colors hover:text-gold">
          <Github className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="text-cream/50 transition-colors hover:text-gold">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="mailto:Lissette.deleon@my.utsa.edu" aria-label="Email"
          className="text-cream/50 transition-colors hover:text-gold">
          <Mail className="h-6 w-6" />
        </a>
      </div>

      {open && (
        <div className="fixed inset-0 z-[9500] flex items-center justify-center bg-cream/75 p-5" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-noir text-cream shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>
            <video src="/intro.mp4" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl" autoPlay controls playsInline />
          </div>
        </div>
      )}
    </header>
  );
}
