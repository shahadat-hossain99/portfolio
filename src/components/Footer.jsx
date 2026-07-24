"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/shahadat-hossain99",
    logo: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/md-shahadat-hossain-coder/",
    logo: <FaLinkedin />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+8801709318940",
    logo: <FaWhatsapp />,
  },
];

// Component to generate floating galaxy/firefly particles
// Component to generate floating galaxy/firefly particles safely
const FireflyBackground = () => {
  const [fireflies, setFireflies] = React.useState([]);

  // Generate random particles safely on client mount
  React.useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      x: Math.random() * 100, // horizontal percentage position
      y: Math.random() * 100, // vertical percentage position
      duration: Math.random() * 6 + 6, // 6s to 12s float speed
      delay: Math.random() * 4, // initial animation delay
      yOffset: Math.random() * -40 - 20, // drift upward distance
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFireflies(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Galaxy Ambient Nebula Glows */}
      <div className="absolute -top-10 left-1/4 w-[350px] h-[250px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -bottom-10 right-1/4 w-[300px] h-[200px] rounded-full bg-accent/10 blur-[90px]" />

      {/* Floating Fireflies / Galaxy Stars */}
      {fireflies.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] opacity-0"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 0.7, 0.2, 0.9, 0],
            y: [0, particle.yOffset],
            x: [0, Math.sin(particle.id) * 15], // slight horizontal sway
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="relative w-full py-12 md:py-16 bg-base-100 border-t border-base-content/5 px-4 mt-20 overflow-hidden">
      {/* --- Firefly & Galaxy Effect Background --- */}
      <FireflyBackground />

      {/* --- Main Content Container --- */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-bold text-primary text-2xl md:text-3xl font-display tracking-tight"
            >
              Shahadat Hossain
            </motion.span>
            <p className="text-[10px] md:text-xs text-base-content/40 font-medium tracking-widest uppercase">
              © {currentYear} Md. Shahadat Hossain.
              <span className="block mt-0.5">Crafting with precision.</span>
            </p>
          </div>

          {/* Social Links Section */}
          <nav
            aria-label="Social Links"
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {socialLinks.map((platform, i) => (
              <motion.a
                key={platform.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer me"
                className="text-base-content/60 hover:text-primary transition-colors duration-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]"
              >
                <div className="flex items-center gap-2.5">
                  {platform.logo}
                  <span>{platform.name}</span>
                </div>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Minimal Bottom Divider */}
        <div className="mt-12 pt-8 border-t border-base-content/5 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
          {/* Professional Tagline */}
          <div className="flex flex-wrap justify-center gap-4 text-[10px] text-base-content/40 font-semibold uppercase tracking-[0.2em]">
            <span>Clean Code</span>
            <span className="text-primary/30">•</span>
            <span>Minimal Design</span>
            <span className="text-primary/30">•</span>
            <span>Smooth Animation</span>
          </div>

          {/* Availability & Location */}
          <div className="flex items-center gap-6 text-[10px] text-base-content/40 uppercase tracking-[0.15em] font-medium">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span>Available for Freelance</span>
            </div>
            <span>Based in Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
