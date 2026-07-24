"use client";

import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCodeBracket,
  HiOutlineFolder,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { FaPaperPlane } from "react-icons/fa6";

const navItems = [
  { name: "Home", icon: HiOutlineHome },
  { name: "About", icon: HiOutlineUser },
  { name: "Skills", icon: HiOutlineCodeBracket },
  { name: "Projects", icon: HiOutlineFolder },
  { name: "Education", icon: HiOutlineAcademicCap },
  { name: "Contact", icon: HiOutlineEnvelope },
];

const Navbar = () => {
  const [theme, setTheme] = useState("shahadat");
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  // Smooth Framer Motion Scroll Listener
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Initial Theme & Mounting Setup
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "shahadat";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.classList.toggle(
      "dark",
      savedTheme === "shahadat-dark",
    );
  }, []);

  // Active Section IntersectionObserver
  useEffect(() => {
    if (!mounted) return;

    const sections = navItems
      .map((item) => document.getElementById(item.name.toLowerCase()))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;
          setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.2, 0.5, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [mounted]);

  // Mobile/Tablet Body Scroll Lock & Escape Key Handler
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

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

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (!element) return;
    setIsMenuOpen(false);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 flex w-full items-center border-b border-base-content/5 bg-base-100/80 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "h-16 shadow-md shadow-base-content/5 sm:h-17"
            : "h-18 shadow-none sm:h-20 "
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={closeMenu}
            className="shrink-0 font-mono text-xl font-extrabold tracking-tight text-primary md:text-2xl lg:text-3xl"
            aria-label="Shahadat - Home"
          >
            <span>&lt;</span>
            <span>Shahadat</span>
            <span>/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 font-display text-sm tracking-wide lg:flex xl:gap-7">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                aria-current={activeSection === item.name ? "page" : undefined}
                className={`group relative whitespace-nowrap font-medium transition-colors duration-300 ${
                  activeSection === item.name
                    ? "text-primary"
                    : "text-base-content/70 hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    activeSection === item.name
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Theme Toggle */}
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.92 }}
              className="btn btn-ghost btn-circle text-primary"
              aria-label={
                theme === "shahadat"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                {!mounted
                  ? "dark_mode"
                  : theme === "shahadat-dark"
                    ? "light_mode"
                    : "dark_mode"}
              </span>
            </motion.button>

            {/* Desktop Hire Me */}
            <motion.button
              type="button"
              onClick={() => scrollToSection("Contact")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn btn-primary btn-md hidden rounded-lg px-5 font-medium shadow-lg shadow-primary/20 lg:flex xl:px-6"
            >
              Hire Me
            </motion.button>

            {/* Mobile / Tablet Menu Button */}
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className="btn btn-ghost btn-circle text-primary lg:hidden"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile & Tablet Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 cursor-default bg-black/30 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed left-4 right-4 top-19 z-50 overflow-hidden rounded-2xl border border-base-200 bg-base-100/95 p-3 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-6 sm:top-21 sm:w-80 lg:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1"
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={`#${item.name.toLowerCase()}`}
                      onClick={closeMenu}
                      whileTap={{ scale: 0.98 }}
                      aria-current={
                        activeSection === item.name ? "page" : undefined
                      }
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        activeSection === item.name
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-base-content/80 hover:bg-base-200 hover:text-primary"
                      }`}
                    >
                      <Icon className="text-lg shrink-0" />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}

                <div className="mt-2 border-t border-base-200 pt-3">
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection("Contact")}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary h-12 w-full gap-2 rounded-xl text-sm font-medium shadow-md shadow-primary/20"
                  >
                    <FaPaperPlane className="text-sm" />
                    <span>Hire Me</span>
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
