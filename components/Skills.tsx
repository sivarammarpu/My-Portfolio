import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

const skills = [
  {
    category: "Languages",
    items: ["C", "Java", "Python", "Kotlin", "JavaScript", "TypeScript"],
    color: "bg-blue-500",
  },
  {
    category: "Mobile Development",
    items: ["Android SDK", "Jetpack Compose", "React Native", "Flutter", "Kotlin Multiplatform"],
    color: "bg-emerald-500",
  },
  {
    category: "Web & Backend",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Firebase", "Supabase"],
    color: "bg-purple-500",
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "Android Studio", "VS Code", "Figma", "UI/UX Design", "Video Editing", "Thumbnail Design", "Social Media Handling"],
    color: "bg-orange-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper section-spacing scroll-mt-24">
      <SectionHeader
        eyebrow="My Arsenal"
        title="Skills & Technologies"
        subtitle="A curated list of the tools and technologies I use to build digital experiences."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <SpotlightCard key={index} className="h-full">
            <div className="group relative h-full overflow-hidden rounded-xl border-none bg-transparent p-6 transition-all hover:shadow-glow">
              <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${skill.color} opacity-10 blur-2xl transition-all group-hover:opacity-20`} />

              <h3 className="relative z-10 mb-4 text-lg font-semibold text-slate-100">
                {skill.category}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-800 bg-slate-900/50 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
