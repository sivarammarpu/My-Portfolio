const qualities = [
  "Curious Learner",
  "Consistent",
  "Ships Real Projects",
  "Clean Code First",
  "Beginner, But Serious",
  "Team-Friendly"
];

export default function QualitiesStrip() {
  return (
    <section className="section-wrapper pb-10 pt-2">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 to-transparent" />

        <div className="flex">
          <div className="flex animate-marquee items-center gap-4 whitespace-nowrap pr-4">
            {qualities.map((q) => (
              <span
                key={q}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1 text-xs font-medium text-slate-100 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sivin-accent-soft" />
                {q}
              </span>
            ))}
            {qualities.map((q, i) => (
              <span
                key={q + "-dup-" + i}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1 text-xs font-medium text-slate-100 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sivin-accent-soft" />
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


