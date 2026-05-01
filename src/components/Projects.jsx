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

        gsap.to(card.querySelector("img"), {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          y: -30,
          ease: "none",
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-[120px] px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-6">
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
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
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/projects"
            className="btn btn-ghost text-primary font-bold gap-3 btn-lg group"
          >
            View All Projects
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card group bg-base-100 rounded-[40px] overflow-hidden border border-base-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700"
          >
            {/* Image */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px]">
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
              </div>
            </div>

            {/* Content */}
            <div className="p-10">
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-sm badge-secondary badge-outline px-3 py-3 text-[10px] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-base-content">
                {project.title}
              </h3>
              <p className="text-base-content/60 leading-relaxed line-clamp-3 mb-8">
                {project.description}
              </p>
              <div className="flex gap-4">
                {/* View Details — goes to dedicated page */}
                <Link
                  href={`/projects/${project.id}`}
                  className="btn btn-primary flex-1 h-12 rounded-xl text-sm"
                >
                  View Details
                </Link>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline flex-1 h-12 rounded-xl text-sm"
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
