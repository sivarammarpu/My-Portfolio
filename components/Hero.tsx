"use client";

import Image from "next/image";

import Typewriter from "./Typewriter";
import { useState, useEffect } from "react";

type Props = {
  onViewProjects: () => void;
  onContact: () => void;
};

export default function Hero({ onViewProjects, onContact }: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateParallax = (factor: number) => {
    if (typeof window === "undefined") return "translate(0px, 0px)";
    const x = (mousePosition.x - window.innerWidth / 2) * factor;
    const y = (mousePosition.y - window.innerHeight / 2) * factor;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <section
      id="hero"
      className="section-wrapper section-spacing relative flex flex-col items-center gap-12 lg:flex-row lg:items-stretch scroll-mt-24"
    >
      {/* Background Blobs */}
      <div
        className="absolute -left-20 -top-20 h-72 w-72 animate-blob rounded-full bg-purple-500/20 blur-3xl filter transition-transform duration-500 ease-out"
        style={{ transform: calculateParallax(0.02) }}
      />
      <div
        className="animation-delay-2000 absolute -right-20 top-20 h-72 w-72 animate-blob rounded-full bg-blue-500/20 blur-3xl filter transition-transform duration-500 ease-out"
        style={{ transform: calculateParallax(-0.02) }}
      />
      <div
        className="animation-delay-4000 absolute -bottom-20 left-20 h-72 w-72 animate-blob rounded-full bg-pink-500/20 blur-3xl filter transition-transform duration-500 ease-out"
        style={{ transform: calculateParallax(0.01) }}
      />

      <div className="flex-1 space-y-8">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/70 px-3 py-1 text-xs text-sivin-muted shadow-md shadow-slate-950/60" style={{ animationDelay: "0.1s" }}>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.3)]" />
          <span>Open for internships, beginner roles & real projects</span>
        </div>

        <div className="space-y-4">
          <h1 className="animate-fade-up text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl" style={{ animationDelay: "0.2s" }}>
            <Typewriter text="I build simple, real apps while learning computer science." speed={40} />
          </h1>
          <p className="animate-fade-up max-w-xl text-sm leading-relaxed text-sivin-muted sm:text-base" style={{ animationDelay: "0.3s" }}>
            Hello, I&apos;m{" "}
            <span className="font-semibold text-slate-100">
              Sivaram Marpu
            </span>{" "}
            — an engineering student at Aditya Institute Of Technology And Management (Tekkali) & aspiring full-stack / Android developer
            based in India. I focus on turning ideas into practical Android and
            web apps while still in college.
          </p>
        </div>

        <div className="space-y-4">
          <p className="animate-fade-up max-w-xl text-sm text-slate-300" style={{ animationDelay: "0.4s" }}>
            “I build simple, practical apps while still in college — learning
            fast, shipping faster.”
          </p>

          <div className="animate-fade-up flex flex-wrap items-center gap-3" style={{ animationDelay: "0.5s" }}>
            <a
              href="#projects"
              onClick={onViewProjects}
              className="rounded-full bg-sivin-accent px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-sivin-accent-soft"
            >
              View my projects
            </a>
            <a
              href="#contact"
              onClick={onContact}
              className="rounded-full border border-slate-700 bg-slate-950/70 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm transition hover:border-sivin-accent-soft hover:text-sivin-accent-soft"
            >
              Contact me
            </a>

          </div>
        </div>
      </div>

      <div className="animate-fade-up flex-1 lg:flex lg:justify-end" style={{ animationDelay: "0.6s" }}>
        <div className="border-gradient relative max-w-md rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950/90 p-6 shadow-2xl shadow-slate-950/80">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sivin-muted">
                SIVARAM MARPU
              </p>
              <p className="text-sm font-medium text-slate-100">
                Engineering Student & Aspiring Full-Stack / Android Developer
              </p>
            </div>
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/80">
              <Image
                src="/sivaram.jpg"
                alt="Portrait of Sivaram Marpu"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-3 text-xs text-sivin-muted">
            <p>
              I’m an engineering student and self-taught developer who loves
              building real apps, not just solving textbook problems. I focus on
              Android and web development using Java, Kotlin, and modern tools.
            </p>
            <p>
              I’m still early in my journey, but I learn fast, write clean code,
              and enjoy turning ideas into working products.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-2xl bg-slate-900/80 p-3">
              <p className="text-sivin-muted">Focus</p>
              <p className="mt-1 font-medium text-slate-100">
                Android & Web apps
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 p-3">
              <p className="text-sivin-muted">Status</p>
              <p className="mt-1 font-medium text-emerald-400">
                Open for internships
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 p-3">
              <p className="text-sivin-muted">Location</p>
              <p className="mt-1 font-medium text-slate-100">
                India · Remote
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 p-3">
              <p className="text-sivin-muted">GitHub</p>
              <a
                href="https://github.com/sivarammarpu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 font-medium text-sivin-accent-soft hover:underline"
              >
                @sivarammarpu
              </a>
            </div>
            <div className="rounded-2xl bg-slate-900/80 p-3">
              <p className="text-sivin-muted">Twitter / X</p>
              <a
                href="https://x.com/Sivaram_Marpu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 font-medium text-sivin-accent-soft hover:underline"
              >
                @Sivaram_Marpu
              </a>
            </div>
            <div className="rounded-2xl bg-slate-900/80 p-3">
              <p className="text-sivin-muted">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sivaram-marpu-b49a54349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 font-medium text-sivin-accent-soft hover:underline"
              >
                Siva Ram Marpu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


