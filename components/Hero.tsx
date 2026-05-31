"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "./Particles";

const roles = [
  "AI/ML Enthusiast",
  "Python Developer",
  "Software Developer",
  "Computer Science Student",
];

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Typewriter effect loop
  useEffect(() => {
    let isMounted = true;
    let timer: NodeJS.Timeout;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      if (!isMounted) return;

      const currentRoleText = roles[currentRoleIndex];

      if (deleting) {
        setRoleText(currentRoleText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setRoleText(currentRoleText.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = deleting ? 40 : 80;

      if (!deleting && charIndex === currentRoleText.length) {
        speed = 2000; // Pause at end of text
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        speed = 400; // Pause before next word
        return; // Exit and let the next effect trigger
      }

      timer = setTimeout(tick, speed);
    }

    timer = setTimeout(tick, 200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [currentRoleIndex]);

  return (
    <header
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-28 pb-16 bg-gradient-to-b from-[#081224] via-[#050d1a] to-[#081224]"
    >
      {/* Layer 2: Large Soft Radial Blue Glow */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-accent-blue/4 blur-[130px] pointer-events-none z-0 select-none" />

      {/* Layer 3: Large Soft Gold Glow */}
      <div className="absolute bottom-[5%] right-[-15%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-accent-gold/3 blur-[140px] pointer-events-none z-0 select-none" />

      {/* Layer 4: Subtle Particle Network */}
      <div className="absolute inset-0 z-10 opacity-70 pointer-events-none">
        <Particles />
      </div>

      {/* Layer 5: Content */}
      <div className="container relative z-20 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-accent-gold/50 text-accent-gold bg-accent-gold/3 px-3.5 py-1.5 rounded-full text-[0.7rem] sm:text-xs font-semibold tracking-widest uppercase mb-6 z-10 select-none"
        >
          3rd Year Engineering Student
        </motion.div>

        {/* Depth effects behind the name section */}
        <div className="absolute top-[10%] sm:top-[8%] md:top-[6%] w-[260px] sm:w-[460px] h-[100px] sm:h-[150px] bg-gradient-to-r from-accent-blue/12 to-accent-gold/6 rounded-full blur-[65px] pointer-events-none z-0 opacity-80" />

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headings text-4xl sm:text-6xl md:text-7xl font-black text-text-primary leading-none tracking-wider mb-4 relative z-10 uppercase text-shadow-glow"
          style={{ textShadow: "0 0 45px rgba(247, 201, 72, 0.12)" }}
        >
          RAJVEER CHOUDHARY
        </motion.h1>

        {/* Typewriter role wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-body text-lg sm:text-xl md:text-2xl font-semibold text-accent-gold min-h-[3rem] flex items-center justify-center mb-6 relative z-10"
        >
          <span>{roleText}</span>
          <span className="inline-block w-[3px] h-[1.4em] bg-accent-gold ml-1.5 animate-blink" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg max-w-[680px] text-text-secondary mb-10 leading-relaxed relative z-10"
        >
          Building intelligent systems that solve real-world problems. Specialized in Python development, machine learning, and software development.
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl px-4 mb-10 relative z-10"
        >
          <a
            href="https://drive.google.com/file/d/1p9SJSP6mgFfTrDq9YzG1C1i8lEuyeBls/view?usp=sharing"
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent-gold text-bg-primary font-semibold text-sm rounded-lg hover:scale-[1.04] hover:bg-[#ffe066] hover:shadow-[0_6px_20px_rgba(247,201,72,0.4)] transition-all duration-300 w-full sm:w-auto h-12"
          >
            Download Resume
            <Download size={16} strokeWidth={2.5} />
          </a>
          <a
            href="https://github.com/raj-239205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent border border-accent-blue text-accent-blue font-semibold text-sm rounded-lg hover:bg-accent-blue/10 hover:shadow-[0_4px_14px_rgba(59,130,246,0.2)] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto h-12"
          >
            View GitHub
            <Github size={16} strokeWidth={2.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajveer-choudhary-314a0b231/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent border border-white/20 text-text-secondary font-semibold text-sm rounded-lg hover:border-accent-gold hover:text-accent-gold hover:translate-y-[-2px] transition-all duration-300 w-full sm:w-auto h-12"
          >
            LinkedIn
            <Linkedin size={16} />
          </a>
        </motion.div>

        {/* Scroll Indicator - Relative position with responsive margins to avoid any overlaps */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-text-secondary hover:opacity-100 hover:text-accent-gold transition-all duration-300 decoration-none select-none mt-10 sm:mt-16 md:mt-20 lg:mt-28 relative z-10"
        >
          <span className="font-headings text-[0.75rem] tracking-[0.15em] uppercase">
            Scroll to explore
          </span>
          <ArrowDown className="text-accent-gold animate-bounce mt-1" size={18} strokeWidth={2.5} />
        </motion.a>
      </div>
    </header>
  );
}
