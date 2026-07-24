import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === String(id));
  if (!project) return {};

  return {
    title: `${project.title} | Shahadat Hossain`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) notFound();

  // Fallback if technologies array is separate, otherwise use tags
  const techStack = project.technologies || project.tags || [];

  return (
    <main className="min-h-screen py-24 md:py-32 px-4 md:px-8 bg-base-100">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:-translate-x-1.5 transition-transform duration-300 group"
        >
          <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          Back to Projects
        </Link>

        {/* Hero Image Container - Fixed Clipping & Smooth Frame */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-4xl overflow-hidden mb-12 border border-base-content/10 shadow-2xl bg-base-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Header Title & Tags */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-base-200">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-base-content mb-4 tracking-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="badge border border-secondary/30 bg-secondary/10 text-secondary px-3 py-2.5 text-xs font-semibold rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick External Links */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary h-12 px-6 rounded-xl font-medium gap-2 shadow-md hover:scale-[1.02] transition-transform"
              >
                <span className="material-symbols-outlined text-lg">
                  open_in_new
                </span>
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-base-300 h-12 px-6 rounded-xl font-medium gap-2 hover:bg-base-200 hover:text-base-content hover:scale-[1.02] transition-transform"
              >
                <span className="material-symbols-outlined text-lg">code</span>
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Details Grid Container */}
        <div className="space-y-10">
          {/* About Section */}
          <section className="bg-base-200/40 border border-base-200 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold text-base-content mb-4 flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">info</span>
              </span>
              About the Project
            </h2>
            <p className="text-base-content/80 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </section>

          {/* Tech Stack List */}
          {techStack.length > 0 && (
            <section className="bg-base-200/40 border border-base-200 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold text-base-content mb-6 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    build
                  </span>
                </span>
                Technologies & Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <div
                    key={`${tech}-${idx}`}
                    className="px-4 py-2.5 bg-base-100 border border-base-200 rounded-xl font-semibold text-base-content text-sm shadow-xs"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges Section */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="bg-base-200/40 border border-base-200 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold text-base-content mb-6 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    warning
                  </span>
                </span>
                Challenges Faced & Key Learnings
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="mt-1 w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-base-content/80 leading-relaxed text-sm md:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Improvements Section */}
          {project.improvements && project.improvements.length > 0 && (
            <section className="bg-base-200/40 border border-base-200 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold text-base-content mb-6 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    rocket_launch
                  </span>
                </span>
                Planned Future Enhancements
              </h2>
              <ul className="space-y-4">
                {project.improvements.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="mt-0.5 text-primary material-symbols-outlined text-xl shrink-0">
                      check_circle
                    </span>
                    <p className="text-base-content/80 leading-relaxed text-sm md:text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Bottom Page Navigation */}
        <div className="border-t border-base-200 mt-16 pt-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="btn btn-ghost text-primary font-semibold gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            All Projects
          </Link>
          <Link
            href="/#contact"
            className="btn btn-primary h-12 px-8 rounded-xl font-medium shadow-md"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </main>
  );
}
