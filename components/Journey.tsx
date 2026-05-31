"use client";

import React from "react";
import { motion } from "framer-motion";

interface JourneyStage {
  step: string;
  title: string;
  year: string;
  description: string;
  isGold: boolean;
  isActive?: boolean;
}

const stages: JourneyStage[] = [
  {
    step: "01",
    title: "Discovered Python",
    year: "2022",
    description:
      "Started programming journey with Python fundamentals, learning base variables, nested loops, functional logic, and standard library tools.",
    isGold: true,
  },
  {
    step: "02",
    title: "Mastered DS & Algorithms",
    year: "2023",
    description:
      "Deep-dived into algorithms, complexity analysis, memory indexing, binary trees, dynamic queries, and competitive programming basics.",
    isGold: false,
  },
  {
    step: "03",
    title: "Entered Machine Learning",
    year: "2023",
    description:
      "Studied ML fundamentals — supervised learning models, linear regression, clustering, NumPy vectorization, Pandas operations, and Scikit-learn pipelines.",
    isGold: true,
  },
  {
    step: "04",
    title: "Built Real-World Projects",
    year: "2024",
    description:
      "Applied theoretical knowledge to practical operations — creating SQL-integrated Python systems (Hospital Management System), cleaning raw datasets, and scripting workflows.",
    isGold: false,
  },
  {
    step: "05",
    title: "Industry Preparation",
    year: "2025–Present",
    description:
      "Pursuing certifications, internship searches, open-source work, and advanced specializations in Neural Networks and Deep Learning models.",
    isGold: false,
    isActive: true,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // ORIGIN STORY
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-3 font-bold leading-tight"
        >
          The Leveling Path
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm mb-20 max-w-lg"
        >
          Every expert was once a beginner. This is the progression.
        </motion.p>

        {/* Alternating Journey Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Center Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 -translate-x-[1px] w-[2px] h-full bg-gradient-to-b from-accent-gold via-accent-blue to-bg-primary" />

          <div className="w-full flex flex-col gap-16 md:gap-8">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={stage.step}
                  className="flex flex-col md:flex-row relative items-start md:items-center w-full"
                >
                  {/* Step Circle Marker */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-[12px] md:-translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`w-[48px] h-[48px] rounded-full border-2 bg-bg-primary flex items-center justify-center font-headings text-sm font-bold shadow-md relative ${
                        stage.isActive
                          ? "border-accent-blue text-accent-blue"
                          : stage.isGold
                          ? "border-accent-gold text-accent-gold"
                          : "border-accent-blue/60 text-accent-blue/80"
                      }`}
                    >
                      {stage.step}
                      {stage.isActive && (
                        <div className="absolute inset-0 rounded-full border border-accent-blue/50 animate-pulse-glow pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Left Column Card (Even stages on desktop) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-12 md:text-right flex ${isEven ? "md:justify-end" : "md:opacity-0 md:pointer-events-none md:order-last"}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-[440px] text-left"
                      >
                        <div
                          className={`card border-l-3 ${
                            stage.isActive
                              ? "border-accent-blue shadow-[0_4px_20px_rgba(59,130,246,0.1)] border-accent-blue/25"
                              : "border-accent-blue/60"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-headings text-[1.1rem] font-bold text-white uppercase tracking-wide">
                              {stage.title}
                            </h3>
                            <span className="font-headings text-[0.8rem] px-2 py-0.5 rounded font-bold bg-accent-blue/10 text-accent-blue">
                              {stage.year}
                            </span>
                          </div>
                          <p className="text-text-secondary text-xs leading-relaxed mb-3">
                            {stage.description}
                          </p>
                          {stage.isActive && (
                            <span className="text-[0.65rem] px-2 py-0.5 rounded bg-accent-blue/15 border border-accent-blue/30 text-accent-blue font-black tracking-wider uppercase inline-block">
                              ACTIVE / CURRENT STAGE
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-0 h-4" />

                  {/* Right Column Card (Odd stages on desktop) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-12 flex ${!isEven ? "md:justify-start" : "md:opacity-0 md:pointer-events-none"}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-[440px] text-left"
                      >
                        <div
                          className={`card border-l-3 ${
                            stage.isActive
                              ? "border-accent-blue shadow-[0_4px_20px_rgba(59,130,246,0.1)] border-accent-blue/25"
                              : "border-accent-gold/60"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-headings text-[1.1rem] font-bold text-white uppercase tracking-wide">
                              {stage.title}
                            </h3>
                            <span
                              className={`font-headings text-[0.8rem] px-2 py-0.5 rounded font-bold ${
                                stage.isActive
                                  ? "bg-accent-blue/10 text-accent-blue"
                                  : "bg-accent-gold/10 text-accent-gold"
                              }`}
                            >
                              {stage.year}
                            </span>
                          </div>
                          <p className="text-text-secondary text-xs leading-relaxed mb-3">
                            {stage.description}
                          </p>
                          {stage.isActive && (
                            <span className="text-[0.65rem] px-2 py-0.5 rounded bg-accent-blue/15 border border-accent-blue/30 text-accent-blue font-black tracking-wider uppercase inline-block">
                              ACTIVE / CURRENT STAGE
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
