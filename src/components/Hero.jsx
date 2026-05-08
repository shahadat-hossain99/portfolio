"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import HeroImg from "@/assets/kb.png";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text animation
      const words = textRef.current.innerText.split(" ");
      textRef.current.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block opacity-0 translate-y-10">${word}&nbsp;</span>`,
        )
        .join("");

      gsap.to(textRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        delay: 0.8,
      });

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "expo.out",
          delay: 1.2,
        },
      );

      // Floating animation
      gsap.to(imageRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen pt-30 pb-20 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div className="md:w-1/2 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="badge badge-secondary badge-outline px-6 py-4 rounded-full font-semibold uppercase tracking-widest text-[10px] bg-secondary/5">
            Available for hire
          </span>
        </motion.div>

        <h1
          ref={textRef}
          className="font-display text-4xl md:text-7xl font-bold text-on-background leading-tight"
        >
          Hi, I&apos;m <span className="text-primary">Shahadat Hossain</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-body text-base md:text-xl text-base-content/70 max-w-lg leading-relaxed"
        >
          I am a MERN-Stack developer dedicated to building responsive,
          high-performance web applications. My focus is on creating clean code
          and intuitive user experiences.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <motion.button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Shahadat_Hossain_Resume.pdf";
              link.click();
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="btn btn-primary px-10 h-14 md:h-16 rounded-2xl flex items-center gap-3 hover:shadow-2xl hover:shadow-primary/30 transition-all w-full sm:w-auto text-lg"
          >
            Download Resume{" "}
            <span className="material-symbols-outlined text-xl">download</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="btn border-primary border-2 bg-transparent text-primary px-10 h-14 md:h-16 rounded-2xl hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-primary/20 transition-all w-full sm:w-auto text-lg"
          >
            Hire Me
          </motion.button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative">
        <div ref={imageRef} className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full opacity-30 blur-[100px] animate-pulse"></div>
          <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-112.5 md:h-112.5 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] overflow-hidden bg-base-100 border-[8px] border-base-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 backdrop-blur-sm">
            <Image
              className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700"
              alt="Shahadat Hossain"
              src={HeroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
