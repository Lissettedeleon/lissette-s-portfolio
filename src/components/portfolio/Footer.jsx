import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cream/8 pb-10 pt-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-5">
          <a href="mailto:Lissette.deleon@my.utsa.edu" aria-label="Email"
            className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold">
            <Mail className="h-4 w-4" /> Lissette.deleon@my.utsa.edu
          </a>
          <a href="https://github.com/lissettedeleon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-cream/50 transition-colors hover:text-gold">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-cream/50 transition-colors hover:text-gold">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-cream/40">
          Lissette De Leon · San Antonio, TX · 2025
        </p>
      </div>
    </footer>
  );
}
