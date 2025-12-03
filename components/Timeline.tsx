import SectionHeader from "./SectionHeader";

const timeline = [
  {
    title: "Started B.Tech / engineering",
    time: "Year 1",
    description:
      "Got my first structured introduction to computer science and engineering fundamentals."
  },
  {
    title: "Learning core programming",
    time: "After Year 1",
    description:
      "Started learning C, Java, and Python, focusing on syntax, logic, and problem-solving basics."
  },
  {
    title: "First simple apps & projects",
    time: "Next Steps",
    description:
      "Built early practice apps like SimpleOrder and small programs to understand how code becomes something usable."
  },
  {
    title: "Yanthraa E-Commerce & more",
    time: "Recently",
    description:
      "Started working on the Yanthraa E-Commerce App and other Android ideas to get closer to real-world app structure."
  },
  {
    title: "Now: applying & growing",
    time: "Present",
    description:
      "Improving DSA basics, building more Android and web projects, and applying for internships and beginner roles."
  }
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="section-wrapper section-spacing border-y border-slate-800/70 bg-slate-950/50 scroll-mt-24"
    >
      <SectionHeader
        eyebrow="Journey"
        title="Honest, beginner-friendly experience timeline."
        subtitle="I don’t have years of professional experience yet, but I have momentum, curiosity, and a clear direction."
      />

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sivin-accent via-slate-700 to-slate-900 sm:left-4" />

        <ol className="space-y-6">
          {timeline.map((item, idx) => (
            <li key={item.title} className="relative pl-10 sm:pl-12">
              <div className="absolute left-1.5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 sm:left-2.5">
                <div className="h-2 w-2 rounded-full bg-sivin-accent-soft shadow-[0_0_0_4px_rgba(56,189,248,0.25)]" />
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-100">
                    {item.title}
                  </h3>
                  <span className="text-xs text-sivin-muted">{item.time}</span>
                </div>
                <p className="mt-2 text-xs text-sivin-muted">
                  {item.description}
                </p>
                {idx === timeline.length - 1 && (
                  <p className="mt-3 text-xs font-medium text-emerald-400">
                    Beginner, but hungry to learn and contribute.
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


