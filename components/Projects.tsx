"use client";

import React from "react";
import { FolderGit2, Play, GitBranch, Lock, BarChart3, Binary, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectGridItem {
  title: string;
  description: string;
  status: string;
  tags: string[];
  statusColor: string;
  icon: React.ReactNode;
  isLocked?: boolean;
  github: string;
  demo?: string;
}

const otherProjects: ProjectGridItem[] = [
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
          // PROJECTS
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
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden shadow-premium hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
          >
            {/* Header banner area */}
            <div className="h-[240px] bg-gradient-to-br from-bg-secondary to-bg-card flex items-center justify-center relative border-b border-white/5 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient(circle, rgba(247,201,72,0.04)_0%, transparent_70%) pointer-events-none" />
              <span className="absolute top-5 left-5 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-[0.75rem] font-bold px-3 py-1 rounded uppercase tracking-wider z-10">
                Featured Mission
              </span>

              {/* Graphic database icon representation */}
              <div className="relative text-accent-gold/80 drop-shadow-[0_0_20px_rgba(247,201,72,0.25)] group-hover:scale-110 transition-transform duration-300">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="9" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                  <path d="M12 9v8m-4-4h8" strokeWidth="2" />
                </svg>
              </div>

              {/* Hover Overlay Action Area - Desktop only */}
              <div className="absolute inset-0 bg-[#081224]/90 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center items-center gap-4 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex">
                <div className="flex flex-col gap-3 transform translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-[250ms] ease-out">
                  <div className="flex gap-3">
                    <a
                      href="[OMNI_FOODS_GITHUB]"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View OMNI FOODS GitHub repository in a new tab"
                      className="px-5 py-2.5 bg-bg-secondary text-white border border-white/10 hover:border-accent-gold hover:text-accent-gold text-xs font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold"
                    >
                      GitHub Repository
                    </a>
                    <a
                      href="[OMNI_FOODS_DEMO]"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View OMNI FOODS live demo in a new tab"
                      className="px-5 py-2.5 bg-accent-gold text-bg-primary hover:bg-[#ffe066] text-xs font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold"
                    >
                      Live Demo
                    </a>
                  </div>
                  <a
                    href="[OMNI_FOODS_GITHUB]/archive/refs/heads/main.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download OMNI FOODS source code zip file"
                    className="px-5 py-2.5 bg-transparent border border-white/20 hover:border-accent-gold hover:text-accent-gold text-center text-xs font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold"
                  >
                    Download Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Body of project */}
            <div className="p-8">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-5">
                <div className="flex gap-2">
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-gold/20 rounded-full text-accent-gold bg-accent-gold/5 font-medium">
                    HTML
                  </span>
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-gold/20 rounded-full text-accent-gold bg-accent-gold/5 font-medium">
                    CSS
                  </span>
                  <span className="text-[0.72rem] px-2.5 py-1 border border-accent-gold/20 rounded-full text-accent-gold bg-accent-gold/5 font-medium">
                    JavaScript
                  </span>
                </div>
                <span className="text-[0.75rem] px-2.5 py-0.5 rounded font-black tracking-wide bg-accent-gold/10 border border-accent-gold/20 text-accent-gold uppercase">
                  COMPLETED
                </span>
              </div>

              <a
                href="[OMNI_FOODS_DEMO]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open OMNI FOODS live demo in a new tab"
                className="hover:text-accent-gold transition-colors duration-300 block w-fit"
              >
                <h3 className="font-headings text-2xl font-black text-white mb-4 uppercase tracking-wide">
                  OMNI FOODS
                </h3>
              </a>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                A responsive frontend web application designed for an online food service platform. Focused on clean UI, smooth navigation, and an improved user experience for browsing and ordering food online.
              </p>

              {/* Problem/Solution Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-bg-primary/40 border border-white/5 rounded-lg p-5">
                  <div className="font-headings text-[0.8rem] font-bold text-accent-gold mb-2.5 tracking-wider uppercase">
                    The Problem
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Online food services often lack simple, intuitive user interfaces, leading to poor customer engagement and difficulty in ordering.
                  </p>
                </div>
                <div className="bg-bg-primary/40 border border-white/5 rounded-lg p-5">
                  <div className="font-headings text-[0.8rem] font-bold text-accent-gold mb-2.5 tracking-wider uppercase">
                    The Solution
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Designed a lightweight, responsive interface with intuitive navigation and modern visual hierarchy using vanilla frontend technologies.
                  </p>
                </div>
              </div>

              <h4 className="font-headings text-[0.85rem] font-bold text-accent-gold mb-4 tracking-widest uppercase">
                KEY UTILITIES UNLOCKED
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {[
                  "Responsive design for mobile, tablet, and desktop viewports",
                  "Interactive food catalog with clean presentation grids",
                  "Smooth scroll navigation and optimized user flows",
                  "User experience-focused design for food browsing and selection",
                ].map((feat, idx) => (
                  <li key={idx} className="text-text-secondary text-xs leading-normal flex items-start gap-2.5">
                    <span className="text-accent-gold select-none mt-0.5 font-bold">✦</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action buttons (mobile fallback) */}
              <div className="flex md:hidden flex-col gap-3 mt-6 pt-4 border-t border-white/5 w-full">
                <div className="flex gap-3">
                  <a
                    href="[OMNI_FOODS_GITHUB]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View OMNI FOODS GitHub repository in a new tab"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-bg-secondary border border-white/10 text-white font-semibold text-xs rounded-md hover:border-accent-gold hover:text-accent-gold transition-all h-10"
                  >
                    GitHub
                    <GitBranch size={12} />
                  </a>
                  <a
                    href="[OMNI_FOODS_DEMO]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View OMNI FOODS live demo in a new tab"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent-gold text-bg-primary font-semibold text-xs rounded-md shadow-md hover:scale-[1.01] transition-all h-10"
                  >
                    Live Demo
                    <Play size={10} fill="currentColor" />
                  </a>
                </div>
                <a
                  href="[OMNI_FOODS_GITHUB]/archive/refs/heads/main.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download OMNI FOODS source code zip file"
                  className="w-full py-2 bg-transparent border border-white/20 hover:border-accent-gold hover:text-accent-gold text-center text-xs font-semibold rounded-md transition-all h-9 flex items-center justify-center text-text-secondary"
                >
                  Download Source Code
                </a>
              </div>
            </div>
          </motion.div>

          {/* Other Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((proj, idx) => {
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

                    {/* Hover Overlay Action Area - Desktop only */}
                    <div className="absolute inset-0 bg-[#081224]/90 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center items-center gap-3 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex">
                      <div className="flex flex-col gap-2 w-4/5 transform translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-[250ms] ease-out">
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${proj.title} GitHub repository in a new tab`}
                          className="w-full py-2 bg-bg-secondary text-white border border-white/10 hover:border-accent-gold hover:text-accent-gold text-center text-xs font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold"
                        >
                          GitHub Repository
                        </a>
                        {proj.demo && (
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${proj.title} live demo in a new tab`}
                            className="w-full py-2 bg-accent-gold text-bg-primary hover:bg-[#ffe066] text-center text-xs font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold"
                          >
                            Live Demo
                          </a>
                        )}
                        <a
                          href={`${proj.github}/archive/refs/heads/main.zip`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Download ${proj.title} source code zip file`}
                          className="w-full py-2 bg-transparent border border-white/20 hover:border-accent-gold hover:text-accent-gold text-center text-xs font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold text-text-secondary"
                        >
                          Download Source Code
                        </a>
                      </div>
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
                        <h3 className="text-md font-bold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
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

                      {/* Action buttons (mobile fallback) */}
                      <div className="flex md:hidden flex-col gap-2 mt-4 pt-4 border-t border-white/5 w-full">
                        <div className="flex gap-2">
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${proj.title} GitHub repository in a new tab`}
                            className="flex-1 py-2 bg-bg-secondary border border-white/10 text-white font-semibold text-[0.7rem] rounded text-center h-8 flex items-center justify-center"
                          >
                            GitHub
                          </a>
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${proj.title} live demo in a new tab`}
                              className="flex-1 py-2 bg-accent-gold text-bg-primary font-semibold text-[0.7rem] rounded text-center h-8 flex items-center justify-center"
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
                          className="w-full py-1.5 bg-transparent border border-white/20 hover:border-accent-gold hover:text-accent-gold text-center text-[0.7rem] font-semibold rounded transition-all h-8 flex items-center justify-center text-text-secondary"
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
