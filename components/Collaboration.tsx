import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

const items = [
  {
    title: "Android app prototypes",
    description:
      "Simple Android apps to quickly test ideas, flows, and features using Java & Kotlin."
  },
  {
    title: "Student-friendly tools",
    description:
      "Small apps for notes, tasks, and study helpers that solve everyday problems for students."
  },
  {
    title: "Practice projects for learning",
    description:
      "I build, break, and fix projects to understand how real apps are structured under the hood."
  },
  {
    title: "Frontend experiments",
    description:
      "Basic responsive web pages and UI layouts using HTML, CSS, and JavaScript."
  },
  {
    title: "Debugging & refactoring",
    description:
      "I enjoy cleaning up code, removing confusion, and making small improvements in existing projects."
  }
];

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="section-wrapper section-spacing border-y border-slate-800/70 bg-slate-950/60"
    >
      <div className="animate-fade-up">
        <SectionHeader
          eyebrow="Collaboration"
          title="What I’m good at (right now)."
          subtitle="I’m still early in my journey, but these are the areas where I can already add value while learning from you."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <SpotlightCard key={item.title} className="h-full">
            <article
              className="animate-fade-up card-hover group h-full rounded-xl border-none bg-transparent p-5 transition-all hover:scale-[1.02]"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <h3 className="text-sm font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-sivin-muted">{item.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[11px] font-medium text-sivin-accent-soft opacity-0 transition group-hover:opacity-100">
                <span>Let&apos;s explore this together</span>
                <span>↗</span>
              </div>
            </article>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}


