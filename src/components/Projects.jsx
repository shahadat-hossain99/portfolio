"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioImg from "../../screenshots/882shots_so (2).png";
import Image from "next/image";

const projects = [
  {
    title: "BookVibe",
    description:
      "BookVibe is a modern, responsive web application that helps readers discover books, explore detailed information, and maintain a personal wishlist or reading list — built with a focus on clean UI and smooth user experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-50JjytXNJFKykWCqCgNbqLjGSFiVlIWVR7RNPqCwdQ7zI64V8cPoLG8xfcCEXai5oYyavyb5Ld3gbxYQ7GXfdk5cJfiT64qtk4cnm-nnF6ASWCxWlCoiqFAvb8p6SzVyRKeVmAqw4A_WzKDFAOtuJAzbj52E3vLsU55mOHdIFcvVjVfuY3CY_s8Ye7x9y7rK3revBQEhIn2ee9lB49boAIZcqRXRp60-JKjbH051MvNylWMGRv_vVZwbeTt1gpbIU3ovhA6qCH4",
    tags: ["React", "Firebase"],
    github: "https://github.com/shahadat-hossain99/book-vibe",
    demo: "https://book-vibe-platform.netlify.app/",
  },
  {
    title: "KeenKeeper ",
    description:
      "KeenKeeper is a personal relationship management dashboard built with Next.js. It helps you keep track of the people in your life — friends, family, and colleagues — by giving you a clean, organized view of your connections, interaction history, and relationship health at a glance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKYUIUiiG4fudYy1kDgMmtDPg6PIP720DnVVcCP6UIY5mAxppz3zMrmBunZrDNse0ijUkGh_sGZci8ngsOTJrdIHeETdr-4E2-930s5RMjWS8zwjrfso-Yt3eYg0ptut_2FKJygsyi5YTPT70m6NiKz8lnnDIpLVW_9-pkv3GB4czsK1gC0cZ7qVbXNge-4uSh9wHuSUFVYcmpxfBAvx7xQ9N2pe_RZSn9IxgCFQ65vDRkiVSLlCJ0sBBxIRMtVNev4g_jL29uUS0",
    tags: ["Next.js", "Recharts"],
    github: "https://github.com/shahadat-hossain99/a07-keen-keeper",
    demo: "https://a07-keen-keeper-nine.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A high-performance personal portfolio built with modern web standards and fluid animations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdBqpN39ScEbrhhmv5DCqEwqY3S4_t3DdX5pOVqtUdPMsB3Is-z0RcZC26a0FUxmTzeAM3SCrYX94nHAR29KE4v7vFjzJCfFtDY_8va-RBnXG324JSHAO9cFTKX1OEoWSAaw2MhnnKH2OVS3a_blVPqUgm8J7VsuFs0iIEL3CjvxxRhVSneZp5xkgfWe606vdxeeihaHLMGu1KOQJAZO6B_SSQ5mpK_XodwKYlEd0cLqkUyOiWddMYU3McU6LtfZe_17bJMLXLMwI",
    tags: ["Tailwind", "Next"],
    github: "https://github.com/shahadat-hossain99/portfolio",
    demo: "https://shahadat-portfolio-999.vercel.app/",
  },
];

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

        // Parallax effect
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
          ></motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-ghost text-primary font-bold gap-3 btn-lg group"
        >
          View All Projects
          <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
            arrow_forward
          </span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card group bg-base-100 rounded-[40px] overflow-hidden border border-base-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700"
          >
            <div className="relative h-75 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-[120%] object-cover  group-hover:scale-110 transition-transform duration-1000 ease-out absolute top-0"
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
            <div className="p-10">
              <div className="flex gap-3 mb-6">
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
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary flex-1 h-12 rounded-xl text-sm"
                >
                  Live Demo
                </motion.a>
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
