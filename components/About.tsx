"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 1.5, ease: "easeOut" });
      return () => animation.stop();
    }
  }, [count, value, isInView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // ABOUT ME
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-12 font-bold leading-tight"
        >
          Engineering the Future with AI
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <p className="text-text-secondary leading-relaxed text-[0.95rem]">
              I am <strong className="text-text-primary">Rajveer Choudhary</strong>, a Computer Science Engineering student with a strong interest in Artificial Intelligence and Machine Learning.
            </p>
            <p className="text-text-secondary leading-relaxed text-[0.95rem]">
              I am passionate about solving real-world problems through technology and continuously improving my programming, software development, and analytical skills.
            </p>
            <p className="text-text-secondary leading-relaxed text-[0.95rem]">
              My goal is to gain practical industry experience, contribute to impactful projects, and grow into a skilled AI Engineer or Software Developer. I enjoy learning new technologies, building projects, and exploring innovative applications of AI and machine learning.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-bg-secondary border border-white/5 rounded-lg py-4 px-2 text-center hover:border-accent-gold/20 hover:bg-bg-card hover:-translate-y-1 transition-all duration-300">
                <div className="font-headings text-2xl font-black text-accent-gold mb-1">
                  <Counter value={3} />
                </div>
                <div className="text-[0.7rem] text-text-secondary font-medium uppercase tracking-wider">
                  B.Tech Year
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/5 rounded-lg py-4 px-2 text-center hover:border-accent-gold/20 hover:bg-bg-card hover:-translate-y-1 transition-all duration-300">
                <div className="font-headings text-2xl font-black text-accent-gold mb-1">
                  <Counter value={3} />
                </div>
                <div className="text-[0.7rem] text-text-secondary font-medium uppercase tracking-wider">
                  Projects
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/5 rounded-lg py-4 px-2 text-center hover:border-accent-gold/20 hover:bg-bg-card hover:-translate-y-1 transition-all duration-300">
                <div className="font-headings text-2xl font-black text-accent-gold mb-1">
                  <Counter value={15} />
                </div>
                <div className="text-[0.7rem] text-text-secondary font-medium uppercase tracking-wider">
                  Skills
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/5 rounded-lg py-4 px-2 text-center hover:border-accent-gold/20 hover:bg-bg-card hover:-translate-y-1 transition-all duration-300">
                <div className="font-headings text-2xl font-black text-accent-blue mb-1">
                  AI/ML
                </div>
                <div className="text-[0.7rem] text-text-secondary font-medium uppercase tracking-wider">
                  Core Focus
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[380px] bg-bg-card border border-border-blue rounded-xl p-8 shadow-premium hover:shadow-[0_12_40_rgba(59,130,246,0.08)] hover:border-accent-blue/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent to-accent-blue/5 pointer-events-none group-hover:to-accent-blue/10 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="relative w-[130px] h-[130px] rounded-full bg-gradient-to-tr from-accent-gold to-accent-blue p-[3px] mb-6 shadow-[0_0_30px_rgba(247,201,72,0.15)]">
                  <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center font-headings text-5xl font-extrabold text-accent-gold text-shadow-glow">
                    RC
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">Rajveer Choudhary</h3>
                <div className="text-accent-gold text-sm font-semibold mb-6">AI/ML Enthusiast</div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-gold/20 rounded-full text-accent-gold bg-accent-gold/5 font-medium">
                    Python
                  </span>
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-blue/20 rounded-full text-accent-blue bg-accent-blue/5 font-medium">
                    Machine Learning
                  </span>
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-gold/20 rounded-full text-accent-gold bg-accent-gold/5 font-medium">
                    SQL
                  </span>
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-blue/20 rounded-full text-accent-blue bg-accent-blue/5 font-medium">
                    HTML & CSS
                  </span>
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-gold/20 rounded-full text-accent-gold bg-accent-gold/5 font-medium">
                    OOPs
                  </span>
                </div>

                <div className="w-full border-t border-white/5 pt-4 flex items-center justify-center gap-2.5 text-xs text-text-secondary">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse-glow" />
                  <span>ACTIVE/LEVELING STATUS: ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
