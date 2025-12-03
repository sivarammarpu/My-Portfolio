import SectionHeader from "./SectionHeader";

const languages = ["C", "Java", "Python", "Kotlin"];

const mobile = [
  "Android (Java & Kotlin)",
  "Basic UI design for Android",
  "Firebase integration (auth / database / storage basics)"
];

const webBackend = [
  "Basic HTML, CSS, JavaScript",
  "Basic REST API concepts",
  "Basic understanding of client–server model"
];

const tools = ["Git & GitHub", "Android Studio", "VS Code", "Google Firebase"];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="section-wrapper section-spacing scroll-mt-24"
    >
      <SectionHeader
        eyebrow="Tech Stack"
        title="Skills & tools I’m actively learning with."
        subtitle="I focus on writing clean, understandable code and building small, practical apps that teach me real-world concepts."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="card-hover rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">Languages</h3>
          <p className="mt-2 text-xs text-sivin-muted">
            Solid basics in programming, still improving every week.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
            {languages.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sivin-accent-soft" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">
            Mobile / App Development
          </h3>
          <p className="mt-2 text-xs text-sivin-muted">
            Learning by building Android apps from scratch.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
            {mobile.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">
            Web / Backend Basics
          </h3>
          <p className="mt-2 text-xs text-sivin-muted">
            Using the web stack to understand how real systems talk to each
            other.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
            {webBackend.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-hover rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">
            Tools & Workflow
          </h3>
          <p className="mt-2 text-xs text-sivin-muted">
            Using the same tools real teams use, even as a beginner.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
            {tools.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


