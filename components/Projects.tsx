import SectionHeader from "./SectionHeader";
import Link from "next/link";
import TiltCard from "./TiltCard";

type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  details: string[];
};

const projects: Project[] = [
  {
    title: "Yanthraa E-Commerce App",
    link: "https://github.com/sivarammarpu/Yanthraa-ECommerce-App",
    description:
      "An Android e-commerce app where users can browse products, view details, and place basic orders.",
    tags: ["Java", "Android", "Firebase (optional)", "UI Design"],
    details: [
      "Product listing and product detail screens with clean layouts.",
      "Add-to-cart flow (implemented or planned) and simple checkout logic.",
      "Built to understand how real shopping apps work under the hood.",
      "Learning-focused project with a real-world app structure in mind."
    ]
  },
  {
    title: "SimpleOrder – Basic Ordering System",
    link: "https://github.com/sivarammarpu/SimpleOrder",
    description:
      "A lightweight ordering system built to practice Java, app structure, and user interaction.",
    tags: ["Java", "Android / Java App", "Practice Project"],
    details: [
      "Simple order creation and basic flow from input to confirmation.",
      "Helps practice UI input handling and basic state management.",
      "Step towards more complex, production-style ordering apps."
    ]
  },
  {
    title: "More Experiments & Practice Repos",
    link: "https://github.com/sivarammarpu",
    description:
      "A collection of practice projects, experiments, and small apps as I learn Android development and problem-solving.",
    tags: ["Learning in Public", "GitHub", "Experiments"],
    details: [
      "Small Android apps and console programs built while learning.",
      "Space for future web experiments, DSA practice, and utilities.",
      "Shows my progress, consistency, and curiosity over time."
    ]
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-wrapper section-spacing scroll-mt-24"
    >
      <SectionHeader
        eyebrow="Featured Work"
        title="Projects I’ve built to learn real-world development."
        subtitle="These are not just assignments — they’re my way of understanding how real apps are designed, structured, and shipped."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <TiltCard key={project.title} className="h-full">
            <article className="card-hover group flex h-full flex-col rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-950/90 via-slate-950 to-slate-950/95 p-5">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-sivin-muted">
                  {project.description}
                </p>

                <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
                  {project.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sivin-accent-soft" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-[11px] text-sivin-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-white"
                  >
                    <span>View code</span>
                    <span>↗</span>
                  </Link>
                  <span className="text-[11px] text-sivin-muted opacity-0 transition group-hover:opacity-100">
                    GitHub · Open source
                  </span>
                </div>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}


