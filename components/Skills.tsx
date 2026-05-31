"use client";

import React from "react";
import { Code, Cpu, Database } from "lucide-react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  isBlueTheme?: boolean;
  icon: React.ReactNode;
  skills: SkillItem[];
  detailedSkills: string[];
  learningFocus: string;
  experienceLevel: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code size={22} />,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "Java", level: 70 },
    ],
    detailedSkills: ["Python scripting", "SQL query optimization", "C/C++ programming", "Java fundamentals"],
    learningFocus: "Advanced algorithms & scripting architectures",
    experienceLevel: "Active since 2024",
  },
  {
    title: "AI & ML",
    isBlueTheme: true,
    icon: <Cpu size={22} />,
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Artificial Intelligence", level: 70 },
    ],
    detailedSkills: ["Supervised/Unsupervised learning", "Data cleaning & analysis", "Model evaluation metrics"],
    learningFocus: "Deep learning models & framework libraries",
    experienceLevel: "Active since 2025",
  },
  {
    title: "Web Development",
    icon: <Database size={22} />,
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 75 },
    ],
    detailedSkills: ["Responsive web design", "CSS flexbox & grid", "DOM manipulation & events"],
    learningFocus: "Next.js & modern framework concepts",
    experienceLevel: "Active since 2024",
  },
  {
    title: "Concepts",
    isBlueTheme: true,
    icon: <Cpu size={22} />,
    skills: [
      { name: "OOPs", level: 80 },
      { name: "Problem Solving", level: 80 },
    ],
    detailedSkills: ["Encapsulation & inheritance", "Polymorphism & abstraction", "Logical debugging"],
    learningFocus: "Data structures & design patterns",
    experienceLevel: "Active since 2024",
  },
  {
    title: "Tools",
    icon: <Database size={22} />,
    skills: [
      { name: "VS Code", level: 85 },
      { name: "Git & GitHub", level: 80 },
    ],
    detailedSkills: ["Version control workflow", "GitHub collaboration", "Integrated debugging tools"],
    learningFocus: "Advanced Git, package management, CI/CD",
    experienceLevel: "Active since 2024",
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

                <div className="flex flex-col gap-6 flex-grow">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col">
                      <div className="flex justify-between text-xs font-semibold mb-2">
                        <span className="text-text-secondary">{skill.name}</span>
                      </div>
                      <div className="w-full h-1 bg-bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: isBlue
                              ? "linear-gradient(90deg, var(--accent-blue), #60a5fa)"
                              : "linear-gradient(90deg, var(--accent-gold), var(--accent-blue))",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop hover overlay action area */}
                <div className="absolute inset-0 bg-[#081224]/98 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center p-6 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex border border-accent-gold/20 rounded-xl">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out flex flex-col gap-4">
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-2">Detailed Skill List</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {category.detailedSkills.map((ds) => (
                          <span key={ds} className="text-[0.65rem] px-2.5 py-1 border border-white/10 rounded-full bg-white/5 text-text-secondary font-medium">
                            {ds}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Learning Focus</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{category.learningFocus}</p>
                    </div>
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Experience Level</h4>
                      <p className="text-text-secondary text-xs leading-relaxed font-semibold">{category.experienceLevel}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Expanded layout below */}
                <div className="block md:hidden mt-6 pt-4 border-t border-white/5 flex flex-col gap-4">
                  <div>
                    <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-2">Detailed Skill List</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.detailedSkills.map((ds) => (
                        <span key={ds} className="text-[0.65rem] px-2.5 py-1 border border-white/10 rounded-full bg-white/5 text-text-secondary font-medium">
                          {ds}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Learning Focus</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{category.learningFocus}</p>
                    </div>
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Experience Level</h4>
                      <p className="text-text-secondary text-xs leading-relaxed font-semibold">{category.experienceLevel}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
