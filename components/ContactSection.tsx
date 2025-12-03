import SectionHeader from "./SectionHeader";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-wrapper section-spacing scroll-mt-24"
    >
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something while I learn."
        subtitle="I’m open to internships, entry-level roles, collaborations, and small real-world projects."
      />

      <div className="grid gap-8 md:grid-cols-[1.4fr_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-sivin-muted">
          <p>
            If you&apos;re okay working with a beginner who learns fast and
            cares about the work, I&apos;d love to hear from you. I&apos;m happy
            to start small, contribute to existing projects, or help with tools
            for students and teams.
          </p>
          <p>
            I&apos;m based in India and open to remote work, async
            collaboration, and flexible schedules that fit around my studies.
          </p>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xs text-sivin-muted">Email</p>
              <p className="mt-0.5 text-sm font-medium text-slate-100">
                sivarammarpu@gmail.com
              </p>
            </div>

            <div>
              <p className="text-xs text-sivin-muted">GitHub</p>
              <Link
                href="https://github.com/sivarammarpu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-sivin-accent-soft hover:underline"
              >
                @sivarammarpu
                <span>↗</span>
              </Link>
            </div>

            <div>
              <p className="text-xs text-sivin-muted">Twitter / X</p>
              <Link
                href="https://x.com/Sivaram_Marpu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-sivin-accent-soft hover:underline"
              >
                @Sivaram_Marpu
                <span>↗</span>
              </Link>
            </div>

            <div>
              <p className="text-xs text-sivin-muted">LinkedIn</p>
              <Link
                href="https://www.linkedin.com/in/sivaram-marpu-b49a54349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-sivin-accent-soft hover:underline"
              >
                Siva Ram Marpu
                <span>↗</span>
              </Link>
            </div>

            <p className="text-xs text-sivin-muted">
              Based in India · Open to remote work · Happy to start with
              beginner-friendly tasks and grow from there.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">
            Quick introduction
          </h3>
          <p className="mt-2 text-xs text-sivin-muted">
            If we work together, expect honest communication, curiosity,
            consistent effort, and lots of questions.
          </p>
          <form className="mt-4 space-y-3">
            <input
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-600 focus:border-sivin-accent-soft focus:outline-none"
            />
            <input
              placeholder="Your email or contact"
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-600 focus:border-sivin-accent-soft focus:outline-none"
            />
            <textarea
              rows={3}
              placeholder="How can I help? What would you like to build together?"
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-600 focus:border-sivin-accent-soft focus:outline-none"
            />
            <a
              href="mailto:sivarammarpu@gmail.com"
              className="flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-900 shadow-md shadow-slate-900/40 transition hover:bg-white"
            >
              Email me
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}


