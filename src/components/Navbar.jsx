"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

const Navbar = () => {
  const headerRef = useRef(null);
  const [theme, setTheme] = useState("shahadat");
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "shahadat";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (savedTheme === "shahadat-dark") {
      document.documentElement.classList.add("dark");
    }

    gsap.registerPlugin(ScrollTrigger);

    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 },
      );

      ScrollTrigger.create({
        start: "top top",
        end: "+=100",
        onUpdate: (self) => {
          setIsScrolled(self.progress > 0.1);
        },
      });
    }, headerRef);

    // Observer for active nav sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => {
      ctx.revert(); // Automatically cleans up GSAP animations & ScrollTriggers
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "shahadat" ? "shahadat-dark" : "shahadat";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "shahadat-dark",
    );

    localStorage.setItem("theme", newTheme);
  };
  const closeDropdown = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  if (!mounted) return null;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-base-content/5 transition-all duration-300 flex items-center bg-base-100/80 ${
        isScrolled ? "h-18 shadow-md" : "h-20 lg:h-24 shadow-none"
      }`}
    >
      <nav className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono tracking-tight"
        >
          <span className="text-primary">&lt;</span>
          <span className="text-primary">Shahadat</span>
          <span className="text-primary">/&gt;</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 lg:gap-8 font-display text-sm tracking-wide">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
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
              />
            </motion.a>
          ))}
        </div>

        {/* Actions & Mobile Trigger */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-ghost btn-circle text-primary"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-2xl">
              {theme === "shahadat" ? "dark_mode" : "light_mode"}
            </span>
          </motion.button>

          {/* Mobile Dropdown Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-primary"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-2xl bg-base-100/95 backdrop-blur-xl rounded-2xl w-64 border border-base-200 font-display space-y-2"
            >
              {navItems.map((item) => (
                <li key={item} onClick={closeDropdown}>
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
              <li className="pt-2 mt-2 border-t border-base-200 sm:hidden">
                <motion.button
                  onClick={() => {
                    closeDropdown();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary btn-sm w-full rounded-xl"
                >
                  Hire Me
                </motion.button>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex btn btn-primary btn-sm md:btn-md px-5 md:px-6 rounded-xl font-medium shadow-lg shadow-primary/20"
          >
            Hire Me
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
