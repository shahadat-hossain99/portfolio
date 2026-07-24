"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import HeroImg from "@/assets/me.png";

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // gsap.context isolates references and ensures 100% clean teardown on unmount / HMR
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Badge Fade In
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.2 },
      );

      // 2. Staggered Text Reveal
      tl.fromTo(
        ".hero-word",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.8 },
        "-=0.2",
      );

      // 3. Subtitle & Buttons
      tl.fromTo(
        [".hero-sub", ".hero-btn"],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
        "-=0.4",
      );

      // 4. Floating Photo Frame Reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 0.85, opacity: 0, filter: "blur(10px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.8",
        );

        // Continuous Organic Float Loop
        gsap.to(imageRef.current, {
          y: 18,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert(); // Essential cleanup to prevent 'removeChild' error in Next.js Turbopack
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen pt-28 pb-16 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Left Content Side */}
      <div className="md:w-1/2 space-y-8">
        {/* Availability Badge with Pulse Animation */}
        <div className="hero-badge opacity-0 inline-block">
          <span className="badge badge-secondary badge-outline px-6 py-4 rounded-full font-semibold uppercase tracking-widest text-[10px] bg-secondary/5 border-secondary/30 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            AVAILABLE FOR HIRE
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-base-content leading-tight">
          <span className="inline-block hero-word opacity-0">Hi,&nbsp;</span>
          <span className="inline-block hero-word opacity-0">
            I&apos;m&nbsp;
          </span>
          <span className="inline-block hero-word opacity-0 text-primary">
            Shahadat&nbsp;
          </span>
          <span className="inline-block hero-word opacity-0 text-primary">
            Hossain
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub opacity-0 font-body text-base md:text-xl text-base-content/70 max-w-lg leading-relaxed">
          I build high-performance, responsive web applications using the MERN
          stack. Focused on clean architecture, seamless design, and intuitive
          user experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-2">
          <a
            href="/resume.pdf"
            download="Shahadat_Hossain_Resume.pdf"
            className="hero-btn opacity-0 btn btn-primary px-10 h-14 md:h-16 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-lg font-semibold"
          >
            Download Resume
            <span className="material-symbols-outlined text-xl">download</span>
          </a>

          <a
            href="#contact"
            className="hero-btn opacity-0 btn border-primary border-2 bg-transparent text-primary px-10 h-14 md:h-16 rounded-2xl hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-lg font-semibold flex items-center justify-center"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Photo Frame Side */}
      <div className="md:w-1/2 flex justify-center relative">
        <div ref={imageRef} className="relative opacity-0">
          {/* Ambient Radial Glow */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full opacity-30 blur-[100px] animate-pulse pointer-events-none" />

          {/* Organic Morphing Blob Frame */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-[40%_60%_70%_30%/40%_50%_60%_40%] overflow-hidden bg-base-100 border-[8px] border-base-200/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative z-10 backdrop-blur-sm">
            <Image
              src={HeroImg}
              alt="Shahadat Hossain"
              priority
              quality={95}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
