"use client";

import Link from "next/link";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/60 backdrop-blur-xl transition-all">
      <div className="absolute inset-0 -z-10 animate-gradient-xy bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-50" />
      <nav className="section-wrapper flex items-center justify-center py-3 sm:py-4">

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-sm text-sivin-muted">
            {sections.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="transition-colors hover:text-slate-100"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <MagneticButton>
            <Link
              href="#contact"
              className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-md shadow-slate-900/40 transition-all hover:bg-white active:bg-blue-600 active:text-white"
            >
              Open to work
            </Link>
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 p-2 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 rounded-full bg-slate-200" />
            <span className="block h-0.5 w-3.5 rounded-full bg-slate-400" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 md:hidden">
          <div className="section-wrapper flex flex-col gap-3 py-3 text-sm text-sivin-muted">
            {sections.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="w-full rounded-lg px-2 py-2 text-left transition hover:bg-slate-900/70 hover:text-slate-100"
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 w-full rounded-full bg-slate-100 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-md shadow-slate-900/40 transition-all hover:bg-white active:bg-blue-600 active:text-white"
            >
              Open to work
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


