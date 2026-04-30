"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate timeline lines
      gsap.utils.toArray(".timeline-line").forEach((line) => {
        gsap.fromTo(
          line,
          { height: 0 },
          {
            height: "100%",
            scrollTrigger: {
              trigger: line,
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-[120px] px-4 md:px-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Experience */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-6 text-primary"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-on-background">
              Professional Experience
            </h2>
          </motion.div>

          <div className="space-y-12 relative">
            <div className="timeline-line absolute left-4 top-4 w-0.5 bg-gradient-to-b from-primary to-transparent origin-top"></div>

            {[
              {
                year: "2025 - Present",
                role: " Aspiring MERN Stack Developer",
                company: "",
                desc: "Developing user-centric web applications and maintaining internal tools using React",
                color: "bg-primary",
              },
              {
                year: "2022 - 2023",
                role: "Freelance Developer",
                company: "Remote",
                desc: "Built responsive landing pages and small business websites focusing on performance and accessibility.",
                color: "bg-secondary",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-12 group"
              >
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full ${exp.color} border-4 border-base-100 shadow-xl z-10 group-hover:scale-125 transition-transform duration-300`}
                ></div>
                <span className="text-primary font-bold mb-2 block text-sm tracking-widest uppercase">
                  {exp.year}
                </span>
                <h4 className="text-2xl font-bold text-base-content mb-1">
                  {exp.role}
                </h4>
                <p className="text-base-content/80 font-semibold mb-4">
                  {exp.company}
                </p>
                <p className="text-base-content/50 leading-relaxed max-w-md">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-6 text-primary"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Education
            </h2>
          </motion.div>

          <div className="space-y-12 relative">
            <div className="timeline-line absolute left-4 top-4 w-0.5 bg-gradient-to-b from-secondary to-transparent origin-top"></div>

            {[
              {
                year: "2024 - Present",
                role: "B.Sc in Geography & Environment Science",
                company: "National University",
                desc: "Focused on software engineering, data structures, and database management systems.",
                color: "bg-primary",
              },
              {
                year: "2025",
                role: "MERN Stack Web Development",
                company: "Programming Hero",
                desc: "Intensive certification program covering the MERN stack and modern web development practices.",
                color: "bg-secondary",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-12 group"
              >
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full ${edu.color} border-4 border-base-100 shadow-xl z-10 group-hover:scale-125 transition-transform duration-300`}
                ></div>
                <span className="text-primary font-bold mb-2 block text-sm tracking-widest uppercase">
                  {edu.year}
                </span>
                <h4 className="text-2xl font-bold text-base-content mb-1">
                  {edu.role}
                </h4>
                <p className="text-base-content/80 font-semibold mb-4">
                  {edu.company}
                </p>
                <p className="text-base-content/50 leading-relaxed max-w-md">
                  {edu.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
