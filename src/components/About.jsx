"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from(".about-header", {
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Count up animation
      const stats = gsap.utils.toArray(".stat-number");
      stats.forEach((stat) => {
        const val = parseInt(stat.innerText);
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: val,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
            },
            snap: { innerText: 1 },
            onUpdate: function () {
              stat.innerText = Math.ceil(this.targets()[0].innerText) + "+";
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-[120px] overflow-hidden bg-base-100/50"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="about-header text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Detailed Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              I&apos;m Md. Shahadat Hossain, a Frontend Developer based in
              Bangladesh.
            </h3>

            <p className="text-lg text-base-content/80 leading-relaxed">
              My programming journey officially took flight in late 2025. As a
              student at
              <span className="text-primary font-medium">
                {" "}
                National University
              </span>
              , I’ve balanced academic rigor with a deep dive into the{" "}
              <span className="text-primary font-medium">MERN Stack</span>. What
              started as curiosity about the web has transformed into a mission
              to build clean, high-performance digital experiences.
            </p>

            <p className="text-lg text-base-content/80 leading-relaxed">
              I enjoy the intersection of logic and design. Specifically, I love
              working with
              <span className="font-medium"> React and GSAP </span> to create
              fluid animations that feel natural. I believe a website isn&apos;t
              just a tool; it&apos;s a digital space that should be as
              delightful to interact with as it is functional.
            </p>

            <div className="bg-base-200/50 p-6 rounded-2xl border-l-4 border-primary italic text-base-content/70">
              &quot;Outside of the terminal, you&apos;ll likely find me
              exploring my passion for
              <span className="text-primary">
                {" "}
                cinematic studio photography
              </span>{" "}
              or capturing moments with a keen eye for detail—much like I do
              with my code.&quot;
            </div>

            <motion.div className="pt-6" whileHover={{ scale: 1.02 }}>
              <a
                href="#contact"
                className="btn btn-primary px-10 h-14 rounded-2xl shadow-lg shadow-primary/20 group"
              >
                Let&apos;s Build Something
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <div
            className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 "
            ref={statsRef}
          >
            {[
              { label: "Hours of Coding", value: 500 },
              { label: "Projects Completed", value: 10 },
              { label: "Tech Stack Tools", value: 12 },
              { label: "University Year", value: 2 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-base-100 p-8 rounded-[32px] border border-base-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <span className="stat-number text-primary font-bold text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}+
                </span>
                <span className="font-medium text-base-content/50 tracking-wide uppercase text-[10px] md:text-xs">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
