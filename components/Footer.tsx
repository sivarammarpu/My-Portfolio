import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80">
      <div className="section-wrapper flex flex-col gap-3 py-5 text-xs text-sivin-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-100">Sivaram Marpu</span>{" "}
          (SIVIN). All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <span>Built with Next.js &amp; Tailwind CSS.</span>
          <Link
            href="#hero"
            className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-200 hover:border-sivin-accent-soft hover:text-sivin-accent-soft"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}


