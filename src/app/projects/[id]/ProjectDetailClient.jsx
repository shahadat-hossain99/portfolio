"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}) {
  return (
    <main className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors mb-8 font-medium group text-sm sm:text-base"
        >
          <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          Back to Projects
        </Link>
      </motion.div>

      {/* Header & Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4 mb-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content tracking-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Hero Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full h-[280px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-base-200/80 mb-12 shadow-2xl group bg-base-200"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          quality={95}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Main Content & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Details (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* About */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-base-content flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-2xl">
                info
              </span>
              About
            </h2>
            <p className="text-base-content/80 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-base-content flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-2xl">
                  verified
                </span>
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-base-200/40 border border-base-200 hover:border-primary/30 transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span className="text-base-content/80 font-medium text-sm sm:text-base leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-base-content flex items-center gap-2.5">
                <span className="material-symbols-outlined text-warning text-2xl">
                  extension
                </span>
                Challenges & Solutions
              </h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-base-200/30 border border-base-200/80"
                  >
                    <span className="material-symbols-outlined text-warning text-xl mt-0.5 shrink-0">
                      warning
                    </span>
                    <span className="text-base-content/80 text-sm sm:text-base leading-relaxed">
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Future Improvements */}
          {project.improvements && project.improvements.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-base-content flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-2xl">
                  rocket_launch
                </span>
                Future Improvements
              </h2>
              <div className="space-y-3">
                {project.improvements.map((improvement, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-base-200/30 border border-base-200/80"
                  >
                    <span className="material-symbols-outlined text-info text-xl mt-0.5 shrink-0">
                      trending_up
                    </span>
                    <span className="text-base-content/80 text-sm sm:text-base leading-relaxed">
                      {improvement}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Sticky Sidebar (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 p-6 rounded-3xl bg-base-200/40 border border-base-200 space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-base-content border-b border-base-200 pb-3">
              Project Overview
            </h3>

            {/* Actions */}
            <div className="space-y-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full rounded-2xl gap-2 font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Live Preview
                  <span className="material-symbols-outlined text-lg">
                    open_in_new
                  </span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-primary w-full rounded-2xl gap-2 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  GitHub Repository
                  <span className="material-symbols-outlined text-lg">
                    code
                  </span>
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-base-content/50 font-bold">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-base-100 text-base-content/80 border border-base-200 rounded-xl text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-20 pt-8 border-t border-base-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href={`/projects/${prevProject.id}`}
          className="group p-5 rounded-2xl bg-base-200/30 border border-base-200 hover:border-primary/40 transition-all flex items-center gap-4"
        >
          <span className="material-symbols-outlined text-2xl text-base-content/40 group-hover:text-primary group-hover:-translate-x-1 transition-all">
            arrow_back
          </span>
          <div>
            <span className="text-xs text-base-content/50 font-medium block uppercase tracking-wider">
              Previous Project
            </span>
            <span className="text-base font-bold text-base-content group-hover:text-primary transition-colors">
              {prevProject.title}
            </span>
          </div>
        </Link>

        <Link
          href={`/projects/${nextProject.id}`}
          className="group p-5 rounded-2xl bg-base-200/30 border border-base-200 hover:border-primary/40 transition-all flex items-center justify-between gap-4 text-right"
        >
          <div>
            <span className="text-xs text-base-content/50 font-medium block uppercase tracking-wider">
              Next Project
            </span>
            <span className="text-base font-bold text-base-content group-hover:text-primary transition-colors">
              {nextProject.title}
            </span>
          </div>
          <span className="material-symbols-outlined text-2xl text-base-content/40 group-hover:text-primary group-hover:translate-x-1 transition-all">
            arrow_forward
          </span>
        </Link>
      </div>
    </main>
  );
}
