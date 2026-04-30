"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillData = [
  // Frontend
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
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "daisyUI",
    category: "Frontend",
    icon: "https://img.daisyui.com/images/daisyui/mark-static.svg",
  },
  {
    name: "HeroUI",
    category: "Frontend",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAALVBMVEVHcEwAAAAAAAAAAAAAAABISEjg4OD///+zs7OAgIAmJibIyMhmZmZvb2/z8/O5H8rKAAAABHRSTlMAj93017y3cAAAAHhJREFUeAFjYBAycYECZ0UGBmYXJGDAIILMdWRQQeY6MZggc50ZXFAAjBuCwg0rQeZ6lCNzPcvLS7y2wrnHgdz2WmTuvnJkbo07CvcJMvc6KtcDlesSV4LCdQlB5bpgcLNQuJUoHvSEeQEFoAUOWtChBSxasKNFCgCBjHJ7JPkpYAAAAABJRU5ErkJggg==",
  }, // Note: You may want to use a local SVG for this
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  },
  {
    name: "GSAP",
    category: "Frontend",
    icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3NTc3Nzc3OC83Nzc3NzA1Kzc3Kzc3NTc3NzcyMjI3NzU1NTI4Nzc2Nzc1Nf/AABEIABwAHAMBEQACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAFBgcIAv/EADEQAAECBAQEBAQHAAAAAAAAAAECAwQFERIABhMhFDFBUQcVYaEWInGBMjM0QnKisf/EABoBAAMAAwEAAAAAAAAAAAAAAAMEBQECBgD/xAAnEQABAwMDAwQDAAAAAAAAAAABAAIDBBESBRMhMUFRFCKh0XHB8P/aAAwDAQACEQMRAD8AQsk5Rh5rCGYTIrLJUUtNINLqcyT9f8wjU1JYcWrn9W1Z9O/Zh69yi858Nm3lwy5KtTQW6lDyHDcEJP7x127YHFWnnNaUOryOBE/Pj6TXD+E+XHYHQIig9b+p1fmr3p+H2wD10t7pqKtmc656KM5ilD0hncXK4lQW5DOW3gUChSoP3BBxWjeJGBw7quxwc0OCdvDGbrcaVKVw7q0tqK0OoTVKQeiu29aYQrYuc7rmtbohuCcOHPb6R/OOcHstvQbMPBOqKnErcccSUoWgHdCT1Pr09a4FT0wlBJK9ptC2Vpc4qgszdLch818vmFNO/heHOvyrS3v98K7fvxuP0nY4sTjdZrzLOHZ/PYyavIDaoly4IBrakABIr1oAN8XYoxGwNHZV2NwaGqn+FCIdWXQWaausrWpzu6e1MTK2+7yuX1ZrzV+7pYW/vynePblaUQHm+lTjGuG1KfnV+WnrzwszPnHx8ItIx/OPj4TONsBTizH4j8J8cTjgLNHX3s5X0F/9rsX6a+y3JVYb7YuhMonExkz5flkW5DrUKKt3CvqDscEfGyQWcLr0sMcos8XXc5ns0njqHJrGuRBbFEBVAlPeiRsMYjiZGLNFlmOJkQswWRP49zVwHBedROjbbXa+n86Xe+NPTQ3yxWNmO97JbwdFX//Z",
  },

  // Tools & Others
  {
    name: "Git",
    category: "Tools & Others",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Tools & Others",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    category: "Tools & Others",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Figma",
    category: "Tools & Others",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Vite",
    category: "Tools & Others",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Postman",
    category: "Tools & Others",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "NPM",
    category: "Tools & Others",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Obsidian",
    category: "Tools & Others",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg",
  },
  {
    name: "Vercel",
    category: "Tools & Others",
    icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },
  {
    name: "Netlify",
    category: "Tools & Others",
    icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const categories = ["Frontend", "Backend", "Tools & Others"];

  const filteredSkills = skillData.filter(
    (skill) => skill.category === activeTab,
  );

  return (
    <section id="skills" className="py-[120px] px-4 bg-base-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-base-content/60 uppercase">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-display">
            Skills & Technologies
          </h2>

          {/* Tab Controls */}
          <div className="inline-flex p-1.5 bg-base-200/50 rounded-full border border-base-200 backdrop-blur-sm">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                    : "text-base-content/60 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === "Backend" ? (
              // Under Construction State
              <motion.div
                key="under-construction"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-20 h-20 mb-6 bg-base-200 rounded-full flex items-center justify-center border border-dashed border-primary/40">
                  <span className="material-symbols-outlined text-4xl text-primary animate-spin-slow">
                    settings
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Backend Journey Starting Soon
                </h3>
                <p className="text-base-content/60 max-w-md mx-auto">
                  I am currently mastering the Frontend world before diving into
                  Node.js, Express, and MongoDB. Building a strong foundation
                  first!
                </p>
                <div className="mt-8 flex gap-3">
                  <div className="badge badge-outline p-4 opacity-50">
                    Node.js
                  </div>
                  <div className="badge badge-outline p-4 opacity-50">
                    Express
                  </div>
                  <div className="badge badge-outline p-4 opacity-50">
                    MongoDB
                  </div>
                </div>
              </motion.div>
            ) : (
              // Standard Skills Grid
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -8 }}
                    className="bg-base-100 p-8 rounded-[2rem] border border-base-200 flex flex-col items-center gap-5 hover:border-primary/30 transition-all group"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="font-semibold text-sm text-base-content/70">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
