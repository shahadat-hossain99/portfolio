"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skillData = [
  // ==========================================
  // FRONTEND
  // ==========================================
  {
    name: "Next.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "daisyUI",
    category: "Frontend",
    icon: "https://img.daisyui.com/images/daisyui/mark-static.svg",
  },
  {
    name: "HeroUI",
    category: "Frontend",
    icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  },
  {
    name: "GSAP",
    category: "Frontend",
    icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },

  // ==========================================
  // BACKEND
  // ==========================================
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "REST API",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },

  // ==========================================
  // AUTHENTICATION & PAYMENTS
  // ==========================================
  {
    name: "Better Auth",
    category: "Authentication & Payments",
    icon: "/icons/auth.png",
  },
  {
    name: "JWT",
    category: "Authentication & Payments",
    icon: "/icons/jwt.png",
  },
  {
    name: "Stripe",
    category: "Authentication & Payments",
    icon: "/icons/stripe.png",
  },

  // ==========================================
  // TOOLS
  // ==========================================
  {
    name: "GitHub",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Cursor AI",
    category: "Tools",
    icon: "https://www.cursor.com/favicon.ico",
  },
  {
    name: "Figma",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Vite",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "NPM",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Obsidian",
    category: "Tools",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },
  {
    name: "Netlify",
    category: "Tools",
    icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Authentication & Payments",
  "Tools",
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const filteredSkills = skillData.filter(
    (skill) => skill.category === activeTab,
  );

  return (
    <section
      id="skills"
      className="w-full overflow-hidden bg-base-100 px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-30"
    >
      <div className="mx-auto w-full max-w-300">
        {/* ================================
            SECTION HEADER
        ================================= */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          {/* Badge Style Tag */}
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              My Expertise
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:mb-9 sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          {/* ================================
              RESPONSIVE TAB CONTROLS
          ================================= */}
          <div className="mx-auto grid w-full max-w-155 grid-cols-2 gap-2 rounded-2xl border border-base-200 bg-base-200/50 p-2 backdrop-blur-sm sm:inline-flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:rounded-full">
            {categories.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`min-h-11 rounded-xl px-3 py-2.5 text-xs font-medium leading-tight transition-all duration-300 sm:min-h-0 sm:rounded-full sm:px-5 sm:py-2.5 sm:text-sm md:px-6 ${
                  activeTab === tab
                    ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                    : "text-base-content/60 hover:bg-base-100/70 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ================================
            SKILLS GRID
        ================================= */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid w-full grid-cols-2 gap-3 min-[400px]:gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-5"
            >
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group flex min-h-35 w-full min-w-0 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-base-200 bg-base-100 p-4 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 min-[400px]:min-h-37.5 sm:min-h-41.25 sm:gap-4 sm:rounded-[1.75rem] sm:p-5 md:min-h-43.75 md:p-6 lg:min-h-46.25 lg:rounded-4xl lg:p-7"
                >
                  {/* Skill Icon */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12 md:h-14 md:w-14">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      width={56}
                      height={56}
                      unoptimized={skill.icon.endsWith(".svg")}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="max-w-full wrap-break-word px-1 text-[11px] font-semibold leading-tight text-base-content/70 min-[400px]:text-xs sm:text-sm">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
