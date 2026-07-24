"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: " GitHub",
      url: "https://github.com/shahadat-hossain99",
      logo: <FaGithub />,
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-shahadat-hossain-coder/",
      logo: <FaLinkedin />,
    },
    // { name: "Facebook", url: "#", logo: <FaFacebook /> }, // Or Twitter if preferred
    {
      name: "WhatsApp",
      url: "https://wa.me/+8801709318940",
      logo: <FaWhatsapp />,
    },
  ];

  return (
    <footer className="w-full py-12 md:py-16 bg-base-100 border-t border-base-content/5 px-4 mt-20">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-bold text-primary text-2xl md:text-3xl font-display tracking-tight"
            >
              Shahadat Hossain
            </motion.span>
            <p className="text-[10px] md:text-xs text-base-content/40 font-medium tracking-widest uppercase">
              © {currentYear} Md. Shahadat Hossain. Crafting with precision.
            </p>
          </div>

          {/* Social Links Section */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {socialLinks.map((platform, i) => (
              <motion.a
                key={platform.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/60 hover:text-primary transition-colors duration-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]"
              >
                <div className="flex items-center gap-2.5">
                  {" "}
                  {platform.logo}
                  {platform.name}
                </div>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Updated Minimal Bottom Divider */}
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
          <div className="flex items-center gap-6 text-[10px] text-base-content/30 uppercase tracking-[0.15em] font-medium">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
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
