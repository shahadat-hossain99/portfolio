"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-base-200 border-t border-primary/20 px-4 md:px-0 mt-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-bold text-primary text-3xl font-display tracking-tight">Shahadat Hossain</span>
          <p className="text-sm text-base-content/50 font-medium tracking-wide">© 2024 Shahadat Hossain. All rights reserved.</p>
        </div>
        
        <div className="flex gap-10">
          {['GitHub', 'LinkedIn', 'Twitter', 'WhatsApp'].map((platform) => (
            <motion.a 
              key={platform}
              whileHover={{ y: -5, color: "var(--color-primary)" }}
              href="#" 
              className="text-base-content/70 hover:text-primary transition-all duration-300 font-bold text-sm uppercase tracking-widest"
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
