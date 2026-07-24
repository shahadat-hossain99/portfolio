"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        // Entrance animation for cards
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          delay: i * 0.1,
        });

        // Parallax effect on inner image
        const img = card.querySelector(".parallax-img");
        if (img) {
          gsap.to(img, {
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            y: -25,
            ease: "none",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 md:px-0"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-primary mx-auto md:mx-0 rounded-full"
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.03, x: 4 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/projects"
            className="btn btn-ghost text-primary font-bold gap-2 btn-lg group"
          >
            View All Projects
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card group h-full flex flex-col bg-base-100 rounded-3xl overflow-hidden border border-base-200/80 shadow-md hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
          >
            {/* Fixed Image Wrapper */}
            <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl bg-base-200">
              <div className="parallax-img absolute -top-4 -bottom-4 left-0 right-0 w-full h-[calc(100%+32px)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ objectPosition: project.imageFocus || "left top" }}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px] z-10 rounded-t-3xl">
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-circle bg-base-100 text-primary border-none shadow-2xl"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      link
                    </span>
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-circle bg-base-100 text-primary border-none shadow-2xl"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      code
                    </span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Content Container (Pushed to stretch full height) */}
            <div className="p-8 flex-1 flex flex-col">
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-sm border border-secondary/30 bg-secondary/10 text-secondary px-2.5 py-2 text-[11px] font-semibold tracking-wide rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-base-content/70 leading-relaxed line-clamp-3 mb-6 text-sm">
                {project.description}
              </p>

              {/* Card Bottom Actions (Pinned to bottom via mt-auto) */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-base-200/60">
                <Link
                  href={`/projects/${project.id}`}
                  className="btn btn-primary flex-1 h-11 min-h-[44px] rounded-xl text-sm font-medium"
                >
                  View Details
                </Link>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline border-base-300 flex-1 h-11 min-h-[44px] rounded-xl text-sm font-medium hover:bg-base-200 hover:text-base-content"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
