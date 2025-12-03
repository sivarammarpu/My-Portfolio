"use client";

import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDrawer({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex justify-end bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <aside
        className="h-full w-full max-w-md border-l border-slate-800 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sivin-muted">
              Open to work
            </p>
            <h2 className="text-lg font-semibold text-slate-100">
              Let&apos;s talk opportunities.
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-sivin-muted hover:text-slate-100"
          >
            Close
          </button>
        </div>

        <p className="mt-4 text-xs text-sivin-muted">
          I&apos;m looking for internships, beginner roles, and real-world
          projects where I can learn, contribute, and grow. If you&apos;re okay
          mentoring a motivated beginner, I&apos;d love to hear from you.
        </p>

        <div className="mt-5 space-y-3 text-sm">
          <div>
            <p className="text-xs text-sivin-muted">Email</p>
            <a
              href="mailto:sivarammarpu@gmail.com"
              className="mt-0.5 inline-flex items-center gap-1 font-medium text-slate-100 underline decoration-sivin-accent-soft/70 decoration-2 underline-offset-4 hover:text-sivin-accent-soft"
            >
              sivarammarpu@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs text-sivin-muted">GitHub</p>
            <Link
              href="https://github.com/sivarammarpu"
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-sivin-accent-soft hover:underline"
            >
              @sivarammarpu
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-xs text-sivin-muted">
          <p>Based in India · Open to remote work.</p>
          <p>
            Comfortable with Android, Java, Kotlin, and basic web technologies.
          </p>
        </div>
      </aside>
    </div>
  );
}


