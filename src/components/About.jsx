"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header reveal animation
      gsap.from(".about-header", {
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Stats count-up animation
      const stats = gsap.utils.toArray(".stat-number");

      stats.forEach((stat) => {
        const targetValue = Number(stat.dataset.value);

        if (!targetValue) return;

        gsap.fromTo(
          stat,
          {
            innerText: 0,
          },
          {
            innerText: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: {
              innerText: 1,
            },
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              once: true,
            },
            onUpdate: function () {
              stat.innerText = `${Math.ceil(
                Number(this.targets()[0].innerText),
              )}+`;
            },
          },
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="overflow-hidden bg-base-100/50 py-20 sm:py-24 md:py-28 lg:py-30"
    >
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="about-header mb-12 text-center sm:mb-14 md:mb-16 lg:mb-20">
          {/* Badge Style Tag */}
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              About Me
            </span>
          </div>

          <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl xl:text-5xl">
            About Myself
          </h2>

          <div className="mx-auto h-1.5 w-20 rounded-full bg-primary sm:w-24" />
        </div>

        {/* 
          IMPORTANT:
          Keep one column until lg (1024px).
          This prevents the 768px tablet layout from becoming too cramped.
        */}
        <div className="grid grid-cols-1 items-start gap-12 sm:gap-14 md:gap-16 lg:grid-cols-12 lg:gap-16">
          {/* Detailed Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-left lg:col-span-7"
          >
            <h3 className="mb-4 text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl lg:text-3xl">
              I&apos;m Md. Shahadat Hossain, a MERN Stack Developer from
              Bangladesh.
            </h3>

            <p className="text-base leading-relaxed text-base-content/80 sm:text-lg">
              My journey into web development began in late 2025 with a
              curiosity about how modern websites are built. I&apos;ve been
              building my skills through hands-on projects and continuous
              learning. I specialize in modern web technologies and enjoy
              turning ideas into responsive, accessible, and user-focused
              digital experiences.
            </p>

            <p className="text-base leading-relaxed text-base-content/80 sm:text-lg">
              I work primarily with the{" "}
              <span className="font-medium text-primary">
                React and Next.js ecosystem
              </span>
              , while also exploring full-stack development with Node.js,
              Express, and MongoDB. I enjoy solving real-world problems,
              building reusable components, and creating intuitive user
              interfaces with clean code.
            </p>

            {/* Hobbies & Personal Interests */}
            <p className="text-base leading-relaxed text-base-content/80 sm:text-lg">
              When I&apos;m not coding, you&apos;ll often find me exploring the
              latest PC hardware configurations, optimizing computer
              performance, or learning about emerging web technologies. I enjoy
              tinkering with setups and staying up-to-date with tech trends.
            </p>

            {/* Developer Philosophy */}
            <div className="rounded-2xl border-l-4 border-primary bg-base-200/50 p-5 text-base italic leading-relaxed text-base-content/70 sm:p-6  shadow-lg shadow-primary">
              &quot;I believe great web experiences come from the balance of
              thoughtful design, clean code, and attention to detail. I&apos;m
              always curious, always learning, and always looking for new
              challenges that help me grow as a developer.&quot;
            </div>

            {/* CTA */}
            <motion.div
              className="pt-4 sm:pt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="#contact"
                className="btn btn-primary h-12 rounded-2xl px-7 shadow-lg shadow-primary/20 transition-all duration-300 sm:h-14 sm:px-10"
              >
                Let&apos;s Build Something
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2">
                  arrow_forward
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:col-span-5">
            {[
              { label: "Projects Built", value: 13 },
              { label: "Live Deployments", value: 7 },
              { label: "Full-Stack Apps", value: 3 },
              { label: "Years Learning", value: 1 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="group flex min-h-37.5 flex-col items-center justify-center rounded-2xl border border-base-200 bg-base-100 p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 sm:min-h-42.5 sm:rounded-3xl sm:p-6 md:min-h-45 md:p-7 lg:rounded-4xl lg:p-8"
              >
                <span
                  data-value={stat.value}
                  className="stat-number mb-2 text-3xl font-bold text-primary transition-transform duration-500 group-hover:scale-110 sm:text-4xl md:text-5xl"
                >
                  {stat.value}+
                </span>

                <span className="max-w-30 text-[9px] font-medium uppercase tracking-[0.08em] text-base-content/50 sm:text-[10px] md:text-xs">
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
