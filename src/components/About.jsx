"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
      className="py-[120px] overflow-hidden"
    >
      <div className="about-header text-center mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-7 space-y-8 text-center md:text-left"
        >
          <p className="text-xl md:text-2xl text-base-content/80 font-light leading-relaxed">
            With a passion for digital craftsmanship, I specialize in the{" "}
            <span className="text-primary font-medium">React ecosystem</span>.
            My journey began with a curiosity for how things work on the web,
            which evolved into a professional career focused on building robust,
            scalable solutions.
          </p>
          <p className="text-base md:text-lg text-base-content/60 leading-relaxed">
            I believe that every line of code should serve a purpose and every
            interface should feel effortless. My approach combines technical
            rigor with a keen eye for design, ensuring that products aren&apos;t
            just functional, but delightful to use.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-outline px-10 h-14 md:h-16 rounded-2xl hover:opacity-90 transition-all w-full md:w-auto text-lg group"
          >
            Know More About Me
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </motion.button>
        </motion.div>

        <div
          className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          ref={statsRef}
        >
          {[
            { label: "Years Learning", value: 2 },
            { label: "Projects Completed", value: 10 },
            { label: "Happy Clients", value: 1, full: true },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`bg-base-100 p-10 rounded-[32px] border border-base-200 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group ${stat.full ? "sm:col-span-2" : ""}`}
            >
              <span className="stat-number text-primary font-bold text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.value}+
              </span>
              <span className="font-medium text-base-content/50 tracking-wide uppercase text-xs md:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
