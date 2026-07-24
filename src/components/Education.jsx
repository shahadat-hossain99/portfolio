"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Education = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate timeline line
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

  const educationData = [
    {
      year: "2024 - Present",
      degree: "B.Sc in Geography & Environment Science",
      institution: "National University",
      desc: "Analyzing spatial patterns, environmental systems, and geographic data to cultivate strong analytical reasoning and data-driven problem-solving skills.",
      color: "bg-primary",
    },
    {
      year: "2025",
      degree: "MERN Stack Web Development",
      institution: "Programming Hero",
      desc: "Intensive certification program covering modern web development, frontend frameworks, backend development, and REST APIs.",
      color: "bg-secondary",
    },
    {
      year: "2022",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Science Group",
      desc: "Successfully completed higher secondary education with a focus on science, mathematics, and analytical reasoning.",
      color: "bg-primary",
    },
  ];

  return (
    <section
      id="education"
      ref={containerRef}
      className="relative py-20 sm:py-24 md:py-28 lg:py-30 px-4 md:px-0 overflow-hidden"
    >
      {/* Aesthetic Ambient Background Glows & Accent Line */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-4xl h-72 bg-linear-to-r from-primary/10 via-secondary/10 to-transparent blur-3xl opacity-60 rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-200 mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-14 md:mb-16">
          {/* Badge Style Tag */}
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md shadow-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              Academic Journey
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-primary"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shadow-lg shadow-secondary/5">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">
                school
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content tracking-tight">
              Education
            </h2>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12 relative max-w-2xl mx-auto">
          {/* Static Background Track for Aesthetic Line */}
          <div className="absolute left-3.75 top-4 bottom-4 w-0.5 bg-base-content/10"></div>

          {/* Animated Glowing Timeline Line */}
          <div className="timeline-line absolute left-3.75 top-4 w-0.5 bg-linear-to-b from-primary via-secondary to-transparent origin-top shadow-[0_0_12px_rgba(var(--p),0.8)]"></div>

          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-12 group"
            >
              <div
                className={`absolute left-0 top-1 w-8 h-8 rounded-full ${edu.color} border-4 border-base-100 shadow-xl shadow-primary/20 z-10 group-hover:scale-125 transition-transform duration-300 ease-out`}
              ></div>
              <span className="text-primary font-bold mb-2 block text-sm tracking-widest uppercase">
                {edu.year}
              </span>
              <h3 className="text-2xl font-bold text-base-content mb-1 group-hover:text-primary transition-colors duration-200">
                {edu.degree}
              </h3>
              <p className="text-base-content/80 font-semibold mb-3 text-lg">
                {edu.institution}
              </p>
              <p className="text-base-content/60 leading-relaxed text-sm sm:text-base">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
