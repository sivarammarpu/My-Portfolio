import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    role: "Senior Developer",
    name: "Alex Johnson",
    text: "Sivaram is a quick learner and writes very clean code. His understanding of Android development is impressive for a student.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    role: "Project Partner",
    name: "Sarah Miller",
    text: "Worked with him on a hackathon project. He's super reliable and great at solving complex backend issues.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    role: "Tech Lead",
    name: "Michael Chen",
    text: "One of the most dedicated interns I've seen. He picks up new technologies incredibly fast.",
    image: "https://randomuser.me/api/portraits/men/81.jpg"
  },
  {
    role: "Classmate",
    name: "Emily Davis",
    text: "Sivaram always helps others debug their code. He has a deep understanding of Java and Kotlin concepts.",
    image: "https://randomuser.me/api/portraits/women/72.jpg"
  },
  {
    role: "Freelance Client",
    name: "David Wilson",
    text: "Delivered the project on time and exceeded expectations. The UI was exactly what I wanted.",
    image: "https://randomuser.me/api/portraits/men/94.jpg"
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-wrapper section-spacing overflow-hidden border-b border-slate-800/70"
    >
      <SectionHeader
        eyebrow="Testimonials"
        title="What people say."
        subtitle="Feedback from mentors, teammates, and collaborators I've worked with."
      />

      <div className="relative mt-10 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex w-max animate-marquee gap-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <article
              key={i}
              className="group relative w-[350px] flex-shrink-0 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50 p-6 transition-all hover:border-sivin-accent/50"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-800"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-100">{t.name}</p>
                  <p className="text-xs text-sivin-muted">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-sivin-muted">
                {t.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


