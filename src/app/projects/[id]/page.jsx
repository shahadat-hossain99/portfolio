import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} | Shahadat Hossain`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary font-medium mb-12 hover:gap-4 transition-all duration-300"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Projects
        </Link>

        {/* Hero image */}
        <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden mb-12 border border-base-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Title & tags */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-secondary badge-outline px-4 py-3 text-xs font-bold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-8 rounded-xl gap-2"
          >
            <span className="material-symbols-outlined text-lg">
              open_in_new
            </span>
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-8 rounded-xl gap-2"
          >
            <span className="material-symbols-outlined text-lg">code</span>
            GitHub Repo
          </a>
        </div>

        {/* Description */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">info</span>
            </span>
            About the Project
          </h2>
          <p className="text-base-content/70 leading-relaxed text-lg">
            {project.description}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-base-content mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">build</span>
            </span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="px-6 py-3 bg-base-200 rounded-xl font-semibold text-base-content text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-base-content mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-error/10 text-error flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">warning</span>
            </span>
            Challenges Faced
          </h2>
          <ul className="space-y-4">
            {project.challenges.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="mt-1 w-6 h-6 rounded-full bg-error/10 text-error flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-base-content/70 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Future Improvements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-base-content mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">
                rocket_launch
              </span>
            </span>
            Future Improvements
          </h2>
          <ul className="space-y-4">
            {project.improvements.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="mt-1 text-success material-symbols-outlined text-lg flex-shrink-0">
                  check_circle
                </span>
                <p className="text-base-content/70 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom nav */}
        <div className="border-t border-base-200 pt-12 flex justify-between">
          <Link href="/#projects" className="btn btn-ghost text-primary gap-2">
            <span className="material-symbols-outlined">arrow_back</span>
            All Projects
          </Link>
          <Link href="/#contact" className="btn btn-primary px-8 rounded-xl">
            Hire Me
          </Link>
        </div>
      </div>
    </main>
  );
}
