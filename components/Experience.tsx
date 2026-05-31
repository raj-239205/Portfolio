"use client";

import React from "react";
import { Briefcase, Code, Award, Pin } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  duration: string;
  description: string;
  tags: string[];
  isGold?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Development Intern",
    company: "Bussibees EdTech Pvt. Ltd",
    type: "Internship",
    duration: "June 2025 (15 Days)",
    description:
      "Designed responsive web pages using HTML, CSS, and JavaScript. Worked on UI design, responsive layouts, and improved understanding of frontend development concepts.",
    tags: ["HTML", "CSS", "JavaScript", "UI Design", "Responsive Layouts"],
    isGold: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // EXPERIENCE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-3 font-bold leading-tight"
        >
          Field Operations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm mb-16 max-w-lg"
        >
          Real-world deployments, industry contributions, and collaborative projects.
        </motion.p>

        <div className="relative pl-8 md:pl-12 flex flex-col gap-12">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-0 w-[2px] h-full bg-gradient-to-b from-accent-gold via-bg-secondary to-bg-primary" />

          {experiences.map((exp, idx) => {
            const isGold = exp.isGold;
            return (
              <div key={idx} className="relative timeline-node">
                {/* Timeline Dots */}
                <div
                  className={`absolute left-[-32px] md:left-[-41px] top-1.5 w-4 h-4 rounded-full border-3 border-bg-primary z-20 ${
                    isGold ? "bg-accent-gold" : "bg-accent-blue"
                  }`}
                />
                {isGold && (
                  <div className="absolute left-[-37px] md:left-[-46px] top-[1px] w-[26px] h-[26px] rounded-full border border-accent-gold/50 animate-pulse-glow z-10" />
                )}

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-bg-card border border-border-subtle rounded-xl p-6 md:p-8 shadow-premium transition-all duration-300 ml-2 md:ml-4 relative group hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1.5">{exp.role}</h3>
                      <span
                        className={`text-sm font-semibold ${
                          isGold ? "text-accent-gold" : "text-accent-blue"
                        }`}
                      >
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                      <span
                        className={`text-[0.75rem] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                          exp.type === "Internship"
                            ? "bg-accent-gold/10 border border-accent-gold/20 text-accent-gold"
                            : exp.type === "Research"
                            ? "bg-accent-blue/10 border border-accent-blue/20 text-accent-blue"
                            : "bg-white/5 border border-white/10 text-text-secondary"
                        }`}
                      >
                        {exp.type}
                      </span>
                      <div className="text-[0.75rem] text-text-secondary font-mono tracking-wider">
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[0.72rem] px-2.5 py-1 border rounded-full font-medium ${
                          isGold
                            ? "border-accent-gold/10 text-accent-gold bg-accent-gold/5"
                            : "border-accent-blue/10 text-accent-blue bg-accent-blue/5"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Desktop hover overlay action area */}
                  <div className="absolute inset-0 bg-[#081224]/98 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center p-6 md:p-8 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex border border-accent-gold/20 rounded-xl">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out flex flex-col gap-4">
                      <div>
                        <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-2">Responsibilities</h4>
                        <ul className="list-disc list-inside text-xs text-text-secondary flex flex-col gap-1.5">
                          <li>Designed responsive web pages using HTML, CSS, and JavaScript.</li>
                          <li>Improved understanding of frontend development concepts.</li>
                          <li>Worked on UI design and responsive layouts.</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5 text-xs text-text-secondary">
                        <div>
                          <span className="font-semibold text-white">Duration:</span> {exp.duration}
                        </div>
                        <a
                          href="#"
                          aria-label="View Bussibees internship certificate"
                          className="text-accent-blue hover:text-white font-bold hover:translate-x-0.5 transition-all"
                        >
                          View Certificate →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Expanded layout below */}
                  <div className="block md:hidden mt-6 pt-4 border-t border-white/5 flex flex-col gap-4">
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside text-xs text-text-secondary flex flex-col gap-1.5">
                        <li>Designed responsive web pages using HTML, CSS, and JavaScript.</li>
                        <li>Improved understanding of frontend development concepts.</li>
                        <li>Worked on UI design and responsive layouts.</li>
                      </ul>
                    </div>
                    <div className="flex justify-between items-center text-xs text-text-secondary">
                      <div>
                        <span className="font-semibold text-white">Duration:</span> {exp.duration}
                      </div>
                      <a
                        href="#"
                        aria-label="View Bussibees internship certificate"
                        className="text-accent-blue hover:text-white font-bold"
                      >
                        View Certificate →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
