"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const headerRef = useRef(null);
  const [theme, setTheme] = useState("shahadat");
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "shahadat";
    console.log("[Navbar] Initializing theme:", savedTheme);
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (savedTheme === "shahadat-dark") {
      document.documentElement.classList.add("dark");
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 },
    );

    ScrollTrigger.create({
      start: "top top",
      end: "+=100",
      onUpdate: (self) => {
        if (self.progress > 0.1) {
          gsap.to(headerRef.current, {
            height: "64px",
            backgroundColor: "var(--nav-bg-sticky)",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            duration: 0.3,
          });
        } else {
          gsap.to(headerRef.current, {
            height: "80px",
            backgroundColor: "var(--nav-bg)",
            boxShadow: "none",
            duration: 0.3,
          });
        }
      },
    });

    // Intersection Observer for Active Links
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "shahadat" ? "shahadat-dark" : "shahadat";
    console.log("[Navbar] Toggling theme to:", newTheme);
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    if (newTheme === "shahadat-dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return null;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-base-content/10 transition-all duration-300 h-20 flex items-center bg-base-100/80"
    >
      <nav className="max-w-300 mx-auto w-full flex justify-between items-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl font-bold text-primary font-display"
        >
          Shahadat.
        </motion.div>

        <div className="hidden md:flex gap-8 font-display text-sm tracking-wide">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className={`relative group font-medium transition-colors ${
                  activeSection === item
                    ? "text-primary"
                    : "text-base-content/80 hover:text-primary"
                }`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.a>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-ghost btn-circle text-primary"
          >
            <span className="material-symbols-outlined text-2xl">
              {theme === "shahadat" ? "dark_mode" : "light_mode"}
            </span>
          </motion.button>

          <div className="dropdown dropdown-end md:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-primary"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-64 border border-base-200 font-display space-y-2"
            >
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium block px-4 py-2 rounded-lg transition-colors ${
                      activeSection === item
                        ? "text-primary bg-primary/10"
                        : "text-base-content/80 hover:text-primary hover:bg-base-200"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2 mt-2 border-t border-base-200">
                <button
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary btn-sm w-full rounded-xl"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex btn btn-primary btn-sm md:btn-md px-6 rounded-xl font-medium shadow-lg shadow-primary/20"
          >
            Hire Me
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
