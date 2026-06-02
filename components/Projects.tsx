"use client";

import React from "react";
import { BarChart3, Binary } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectGridItem {
  title: string;
  description: string;
  status: string;
  tags: string[];
  statusColor: string;
  icon: React.ReactNode;
  github: string;
  demo?: string;
}

const projectsList: ProjectGridItem[] = [
  {
    title: "OMNI FOODS",
    description:
      "A responsive frontend web application designed for an online food service platform. Focused on clean UI, smooth navigation, and an improved user experience for browsing and ordering food online.",
    status: "COMPLETED",
    tags: ["HTML", "CSS", "JavaScript"],
    statusColor: "gold",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-gold">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
        <path d="M12 9v8m-4-4h8" strokeWidth="2" />
      </svg>
    ),
    github: "[OMNI_FOODS_GITHUB]",
    demo: "[OMNI_FOODS_DEMO]",
  },
  {
    title: "Web-Based Employee Management System",
    description:
      "An employee management system used to manage employee records, salary information, departments, working hours, and leave management.",
    status: "COMPLETED",
    tags: ["HTML", "CSS", "JavaScript"],
    statusColor: "gold",
    icon: <BarChart3 className="text-accent-gold" size={48} />,
    github: "[EMPLOYEE_SYSTEM_GITHUB]",
    demo: "[EMPLOYEE_SYSTEM_DEMO]",
  },
  {
    title: "Hospital Management System",
    description:
      "A hospital management solution featuring patient records, doctor management, appointments, and operational workflows.",
    status: "COMPLETED",
    tags: ["Python", "SQL"],
    statusColor: "blue",
    icon: <Binary className="text-accent-blue" size={48} />,
    github: "[HOSPITAL_SYSTEM_GITHUB]",
    demo: "[HOSPITAL_SYSTEM_DEMO]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          {"// PROJECTS"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-3 font-bold leading-tight"
        >
          Mission Logs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm mb-16 max-w-lg"
        >
          Real problems. Real solutions. Real impact.
        </motion.p>

        <div className="flex flex-col gap-10">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsList.map((proj, idx) => {
              const isGold = proj.statusColor === "gold";
              const isBlue = proj.statusColor === "blue";
              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`bg-bg-card border rounded-xl overflow-hidden shadow-premium transition-all duration-300 flex flex-col h-full group ${
                    isBlue ? "border-border-blue" : "border-border-subtle"
                  } hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25`}
                >
                  <div className="h-[160px] bg-gradient-to-br from-bg-secondary to-bg-card flex items-center justify-center relative border-b border-white/5 overflow-hidden">
                    <span
                      className={`absolute top-4 left-4 text-[0.7rem] font-bold px-2 py-0.5 rounded uppercase tracking-wider border z-10 ${
                        isGold
                          ? "bg-accent-gold/10 border-accent-gold/20 text-accent-gold"
                          : isBlue
                          ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue"
                          : "bg-white/5 border-white/10 text-text-secondary"
                      }`}
                    >
                      {proj.status}
                    </span>

                    {/* Graphic SVGs */}
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {proj.icon}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <a
                        href={proj.demo || proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${proj.title} ${proj.demo ? "live demo" : "GitHub repository"} in a new tab`}
                        className="hover:text-accent-gold transition-colors duration-300 block w-fit"
                      >
                        <h3 className="text-md font-bold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300 font-headings uppercase tracking-wide">
                          {proj.title}
                        </h3>
                      </a>
                      <p className="text-text-secondary text-[0.82rem] leading-relaxed mb-6">
                        {proj.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[0.65rem] px-2 py-0.5 border rounded-full font-medium ${
                              isBlue
                                ? "border-accent-blue/10 text-accent-blue bg-accent-blue/5"
                                : "border-accent-gold/10 text-accent-gold bg-accent-gold/5"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons (always visible on mobile, slide up + fade in on hover on desktop) */}
                      <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5 w-full md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <div className="flex gap-2">
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${proj.title} GitHub repository in a new tab`}
                            className="flex-1 py-2 bg-bg-secondary text-white border border-white/10 hover:border-accent-gold hover:text-accent-gold text-center text-[0.7rem] font-semibold rounded h-8 flex items-center justify-center transition-all"
                          >
                            GitHub
                          </a>
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${proj.title} live demo in a new tab`}
                              className="flex-1 py-2 bg-accent-gold text-bg-primary hover:bg-[#ffe066] text-center text-[0.7rem] font-semibold rounded h-8 flex items-center justify-center transition-all"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                        <a
                          href={`${proj.github}/archive/refs/heads/main.zip`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download ${proj.title} source code zip file`}
                          className="w-full py-1.5 bg-transparent border border-white/20 hover:border-accent-gold hover:text-accent-gold text-center text-[0.7rem] font-semibold rounded h-8 flex items-center justify-center text-text-secondary transition-all"
                        >
                          Download Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
