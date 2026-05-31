"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // EDUCATION
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-12 font-bold leading-tight"
        >
          Academic Foundation
        </motion.h2>

        <div className="flex flex-col gap-6">
          {/* Main B.Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-bg-card border border-border-subtle rounded-xl p-8 shadow-premium transition-all duration-300 flex flex-col md:flex-row gap-6 items-start relative group hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25"
          >
            <div className="bg-accent-gold/5 border border-accent-gold/10 p-3 rounded-lg text-accent-gold flex items-center justify-center shrink-0">
              <GraduationCap size={28} />
            </div>

            <div className="flex-grow w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h3 className="font-headings text-lg font-bold text-white mb-1.5 uppercase tracking-wide">
                    B.Tech – Computer Science Engineering
                  </h3>
                  <span className="text-text-secondary text-sm font-medium">
                    Poornima Institute of Engineering & Technology
                  </span>
                </div>
                <div className="flex flex-col md:items-end gap-1.5 shrink-0">
                  <span className="text-[0.8rem] px-3 py-1 bg-accent-gold/10 border border-accent-gold/20 rounded text-accent-gold font-semibold tracking-wider">
                    CGPA: 7.37 / 10
                  </span>
                  <div className="text-[0.75rem] text-text-secondary font-mono tracking-wider">
                    2024 – 2028
                  </div>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Focusing on fundamental computing principles, object-oriented design, databases, algorithms, and artificial intelligence tracks. Gaining hands-on development experience via engineering laboratories and academic projects.
              </p>

              {/* Mobile Expanded layout below */}
              <div className="block md:hidden mt-6 pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4 text-xs text-text-secondary">
                  <div>
                    <span className="font-semibold text-white">Status:</span> Pursuing (3rd Year)
                  </div>
                  <div>
                    <span className="font-semibold text-white">Duration:</span> 2024 – 2028
                  </div>
                </div>
                <div>
                  <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1.5">Relevant Focus Areas</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Software Engineering", "Artificial Intelligence", "Database Systems", "Data Structures"].map((f) => (
                      <span key={f} className="text-[0.65rem] px-2 py-0.5 border border-white/10 rounded bg-white/5 text-text-secondary">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop hover overlay action area */}
            <div className="absolute inset-0 bg-[#081224]/98 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center p-8 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex border border-accent-gold/20 rounded-xl">
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out flex flex-col gap-4">
                <div className="flex justify-between items-start border-b border-white/5 pb-2">
                  <div>
                    <h3 className="font-headings text-md font-bold text-white">B.Tech – Computer Science</h3>
                    <p className="text-text-secondary text-xs">Poornima Institute of Engineering & Technology</p>
                  </div>
                  <span className="text-[0.75rem] px-2.5 py-0.5 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold font-bold rounded">
                    CGPA: 7.37 / 10
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-text-secondary">
                  <div>
                    <span className="font-semibold text-white">Current Status:</span> Pursuing (3rd Year)
                  </div>
                  <div>
                    <span className="font-semibold text-white">Duration:</span> Sept 2024 – Sept 2028
                  </div>
                </div>
                <div>
                  <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1.5">Relevant Focus Areas</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Software Engineering", "Artificial Intelligence", "Database Systems", "Data Structures"].map((f) => (
                      <span key={f} className="text-[0.65rem] px-2.5 py-1 border border-white/10 rounded bg-white/5 text-text-secondary font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sub boards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {/* 12th Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-bg-card border border-border-subtle rounded-xl p-8 shadow-premium transition-all duration-300 relative group hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25"
            >
              <h4 className="font-headings text-md font-bold text-white mb-2 tracking-wide">
                Class 12
              </h4>
              <div className="text-accent-gold text-xs font-semibold mb-4 tracking-wider uppercase">
                Kendriya Vidyalaya No. 1 Kota (CBSE)
              </div>
              <div className="flex justify-between items-center text-xs text-text-secondary border-t border-white/5 pt-4">
                <span className="font-mono">Year: 2023</span>
                <span className="px-2.5 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-md text-accent-blue font-bold">
                  Percentage: 78%
                </span>
              </div>

              {/* Desktop hover overlay action area */}
              <div className="absolute inset-0 bg-[#081224]/98 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center p-6 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex border border-accent-gold/20 rounded-xl">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <h3 className="font-headings text-sm font-bold text-white">Class 12 (PCM)</h3>
                    <span className="text-[0.7rem] px-2 py-0.5 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-bold rounded">
                      Percentage: 78%
                    </span>
                  </div>
                  <div className="text-[0.75rem] text-text-secondary">
                    <div><span className="font-semibold text-white">Duration:</span> 2022 – 2023</div>
                    <div><span className="font-semibold text-white">Status:</span> Completed (CBSE)</div>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Focus Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {["Physics", "Chemistry", "Mathematics", "English"].map((f) => (
                        <span key={f} className="text-[0.6rem] px-1.5 py-0.5 border border-white/10 rounded bg-white/5 text-text-secondary">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Expanded layout below */}
              <div className="block md:hidden mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
                <div className="text-[0.75rem] text-text-secondary flex justify-between">
                  <span>Status: <strong className="text-white">Completed</strong></span>
                  <span>Duration: <strong className="text-white">2022 – 2023</strong></span>
                </div>
                <div>
                  <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Focus Areas</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Physics", "Chemistry", "Mathematics", "English"].map((f) => (
                      <span key={f} className="text-[0.6rem] px-1.5 py-0.5 border border-white/10 rounded bg-white/5 text-text-secondary">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 10th Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-bg-card border border-border-subtle rounded-xl p-8 shadow-premium transition-all duration-300 relative group hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25"
            >
              <h4 className="font-headings text-md font-bold text-white mb-2 tracking-wide">
                Class 10
              </h4>
              <div className="text-accent-gold text-xs font-semibold mb-4 tracking-wider uppercase">
                Kendriya Vidyalaya No. 1 Kota (CBSE)
              </div>
              <div className="flex justify-between items-center text-xs text-text-secondary border-t border-white/5 pt-4">
                <span className="font-mono">Year: 2021</span>
                <span className="px-2.5 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-md text-accent-blue font-bold">
                  Percentage: 88%
                </span>
              </div>

              {/* Desktop hover overlay action area */}
              <div className="absolute inset-0 bg-[#081224]/98 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center p-6 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex border border-accent-gold/20 rounded-xl">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <h3 className="font-headings text-sm font-bold text-white">Class 10</h3>
                    <span className="text-[0.7rem] px-2 py-0.5 bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-bold rounded">
                      Percentage: 88%
                    </span>
                  </div>
                  <div className="text-[0.75rem] text-text-secondary">
                    <div><span className="font-semibold text-white">Duration:</span> 2020 – 2021</div>
                    <div><span className="font-semibold text-white">Status:</span> Completed (CBSE)</div>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Focus Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {["Mathematics", "Science", "Social Science", "English"].map((f) => (
                        <span key={f} className="text-[0.6rem] px-1.5 py-0.5 border border-white/10 rounded bg-white/5 text-text-secondary">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Expanded layout below */}
              <div className="block md:hidden mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
                <div className="text-[0.75rem] text-text-secondary flex justify-between">
                  <span>Status: <strong className="text-white">Completed</strong></span>
                  <span>Duration: <strong className="text-white">2020 – 2021</strong></span>
                </div>
                <div>
                  <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Focus Areas</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Mathematics", "Science", "Social Science", "English"].map((f) => (
                      <span key={f} className="text-[0.6rem] px-1.5 py-0.5 border border-white/10 rounded bg-white/5 text-text-secondary">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
