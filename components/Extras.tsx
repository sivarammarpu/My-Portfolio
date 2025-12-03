"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Extras() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;

    const subject = encodeURIComponent(`Guestbook Entry from ${name || "Visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:sivarammarpu@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="extras"
      className="section-wrapper section-spacing bg-slate-950/50"
    >
      <SectionHeader
        eyebrow="Extras"
        title="Guestbook, tools I use & bucket list."
        subtitle="Inspired by personal sites I admire, this section shows how I think about tools, feedback, and long-term goals."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="card-hover flex flex-col rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">Guestbook</h3>
          <p className="mt-2 text-xs text-sivin-muted">
            A simple space where visitors could leave a short message, feedback,
            or just say hi.
          </p>
          <div className="mt-4 space-y-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-600 focus:border-sivin-accent-soft focus:outline-none"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Your message to SIVIN…"
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-600 focus:border-sivin-accent-soft focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full rounded-full bg-sivin-accent px-4 py-2 text-xs font-semibold text-slate-950 shadow-glow transition hover:bg-sivin-accent-soft"
            >
              Sign Guestbook
            </button>
          </div>
        </article>

        <article className="card-hover rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">Uses</h3>
          <p className="mt-2 text-xs text-sivin-muted">
            Tools and platforms I currently rely on while building and
            learning.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
            <li>Android Studio for Android app development.</li>
            <li>VS Code for web, scripts, and experiments.</li>
            <li>Git &amp; GitHub for version control and collaboration.</li>
            <li>Firebase for auth, database, and storage basics.</li>
            <li>Google &amp; documentation for debugging and research.</li>
            <li>ChatGPT to explore ideas, unblock issues, and learn faster.</li>
          </ul>
        </article>

        <article className="card-hover rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">Bucket list</h3>
          <p className="mt-2 text-xs text-sivin-muted">
            Things I want to build as I grow from beginner to professional.
          </p>
          <ul className="mt-3 space-y-2 text-xs text-slate-200">
            <li>✓ Ship multiple Android apps that real people actually use.</li>
            <li>✓ Maintain a consistent GitHub history of learning in public.</li>
            <li>
              ▢ Build a full production-level app with authentication, data,
              and real users.
            </li>
            <li>▢ Launch a small SaaS-style tool or web product.</li>
            <li>▢ Create a portfolio of polished Android and web apps.</li>
            <li>▢ Work with a mentor or team that pushes my skills forward.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}


