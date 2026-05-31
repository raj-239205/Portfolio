"use client";

import React from "react";
import { Code, Cpu, Database } from "lucide-react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  tooltip: string;
}

interface SkillCategory {
  title: string;
  isBlueTheme?: boolean;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code size={22} />,
    skills: [
      { name: "Python", tooltip: "Used in Hospital Management System & AI research" },
      { name: "SQL", tooltip: "Database query optimization & management" },
      { name: "C/C++", tooltip: "Competitive programming & core logic execution" },
      { name: "Java", tooltip: "Object-oriented software development design" },
    ],
  },
  {
    title: "AI & ML",
    isBlueTheme: true,
    icon: <Cpu size={22} />,
    skills: [
      { name: "Machine Learning", tooltip: "Currently learning & exploring models" },
      { name: "Artificial Intelligence", tooltip: "Foundational search & planning concepts" },
    ],
  },
  {
    title: "Web Development",
    icon: <Database size={22} />,
    skills: [
      { name: "HTML", tooltip: "Frontend document structure & accessibility" },
      { name: "CSS", tooltip: "Responsive layout design & styling elements" },
      { name: "JavaScript", tooltip: "Client-side interactive frontend logic" },
    ],
  },
  {
    title: "Concepts",
    isBlueTheme: true,
    icon: <Cpu size={22} />,
    skills: [
      { name: "OOPs", tooltip: "Encapsulation, inheritance, polymorphism, abstraction" },
      { name: "Problem Solving", tooltip: "Data structures, algorithms & logical debugging" },
    ],
  },
  {
    title: "Tools",
    icon: <Database size={22} />,
    skills: [
      { name: "Git", tooltip: "Distributed version control system workflow" },
      { name: "GitHub", tooltip: "Version control hosting & team collaboration" },
      { name: "VS Code", tooltip: "Primary code editing & debugging environment" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // SKILL SYSTEM
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-3 font-bold leading-tight"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm mb-12 max-w-lg"
        >
          Technologies, tools, and concepts that I actively use while building software projects and exploring AI/ML solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const isBlue = category.isBlueTheme;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`card flex flex-col h-full relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25 ${
                  isBlue ? "card-blue border-border-blue" : ""
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className={`font-headings text-md font-bold flex items-center gap-3 ${
                      isBlue ? "text-accent-blue" : "text-accent-gold"
                    }`}
                  >
                    {category.icon}
                    <span className="text-white">{category.title}</span>
                  </h3>
                </div>

                <div
                  className="h-[1px] w-full mb-6"
                  style={{
                    backgroundColor: isBlue
                      ? "rgba(59, 130, 246, 0.1)"
                      : "rgba(247, 201, 72, 0.1)",
                  }}
                />

                {/* Skill Badges Container */}
                <div className="flex flex-wrap gap-3 flex-grow content-start pb-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="relative group/badge">
                      <span className="cursor-default px-3.5 py-2 bg-bg-secondary/40 border border-white/5 rounded-lg text-sm text-text-secondary hover:text-accent-gold hover:border-accent-gold/30 hover:shadow-[0_0_15px_rgba(247,201,72,0.12)] hover:-translate-y-0.5 transition-all duration-200 block text-center font-medium">
                        {skill.name}
                      </span>
                      {/* Premium Tooltip */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#0b1b36] text-[0.7rem] text-text-primary rounded shadow-lg pointer-events-none opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 border ${
                        isBlue ? "border-accent-blue/20" : "border-accent-gold/20"
                      }`}>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#0b1b36] z-10" />
                        {skill.tooltip}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
