import SectionHeader from "./SectionHeader";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="section-wrapper section-spacing border-t border-slate-800/70 scroll-mt-24"
    >
      <SectionHeader
        eyebrow="About"
        title="Know about me."
        subtitle="Beginner in computer science, serious about improving every day."
      />

      <div className="grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-sivin-muted">
          <p>
            I&apos;m <span className="font-semibold text-slate-100">
              Sivaram Marpu
            </span>
            , an engineering student who decided not to wait until graduation to
            start building. I&apos;m still a beginner in computer science, but
            I&apos;m serious about improving daily.
          </p>
          <p>
            Most of my time goes into learning core concepts, practicing DSA at
            a basic level, and building Android and web projects with Java,
            Kotlin, and Python. I also experiment with simple frontend projects
            to get comfortable with HTML, CSS, and JavaScript.
          </p>
          <p>
            I prefer learning by doing — shipping small, imperfect projects,
            then iterating. I value clean code, readable structure, and actually
            finishing what I start.
          </p>
          <p>
            I&apos;m actively looking for internship opportunities, mentorship,
            and real projects where I can contribute while learning from more
            experienced developers.
          </p>
        </div>

        <aside className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">
            Connect with me
          </h3>
          <div className="space-y-3 text-sm">
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

            <div>
              <p className="text-xs text-sivin-muted">Email</p>
              <p className="mt-0.5 text-sm text-slate-200">
                sivarammarpu@gmail.com
              </p>
            </div>

            <div>
              <p className="text-xs text-sivin-muted">Other platforms</p>
              <div className="mt-1 flex flex-wrap gap-2 text-xs text-sivin-muted">
                <Link
                  href="https://www.linkedin.com/in/sivaram-marpu-b49a54349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 hover:border-sivin-accent-soft hover:text-sivin-accent-soft transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/Sivaram_Marpu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 hover:border-sivin-accent-soft hover:text-sivin-accent-soft transition-colors"
                >
                  X / Twitter
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}


