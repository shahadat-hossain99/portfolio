"use client";
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: 'html', color: 'text-orange-500' },
  { name: 'CSS3', icon: 'css', color: 'text-blue-500' },
  { name: 'JavaScript', icon: 'javascript', color: 'text-yellow-500' },
  { name: 'React', icon: 'settings_suggest', color: 'text-cyan-400' },
  { name: 'Next.js', icon: 'next_plan', color: 'text-slate-800' },
  { name: 'Tailwind', icon: 'style', color: 'text-teal-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-[120px] px-4 md:px-0 bg-base-200/50 rounded-[64px]">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-primary mx-auto rounded-full"
        ></motion.div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 max-w-[1000px] mx-auto">
        {skills.map((skill, i) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 20px 40px rgba(15, 85, 80, 0.1)"
            }}
            className="bg-base-100 p-10 rounded-3xl border border-base-200 flex flex-col items-center gap-6 transition-all duration-300 group cursor-default"
          >
            <div className={`w-16 h-16 flex items-center justify-center ${skill.color} bg-base-200 rounded-2xl group-hover:bg-base-100 transition-colors duration-300`}>
              <span className="material-symbols-outlined text-5xl group-hover:scale-110 transition-transform duration-500">{skill.icon}</span>
            </div>
            <span className="font-semibold text-base-content/80 tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
