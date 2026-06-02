"use client";

import React from "react";
import { Trophy, Zap, FileText, GitPullRequest } from "lucide-react";
import { motion } from "framer-motion";

interface AchievementItem {
  title: string;
  badge: string;
  badgeType: "gold" | "blue";
  platform: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  proofUrl: string;
}

const achievements: AchievementItem[] = [
  {
    title: "National Level Project Exhibition",
    badge: "Exhibitor",
    badgeType: "gold",
    platform: "UDHBHAV 2025 — PIET",
    description:
      "Presented engineering project layouts and technical setups at the national level exhibition at Poornima Institute of Engineering & Technology.",
    icon: <Trophy className="text-accent-gold" size={24} />,
    details: "Exhibited next-generation project engineering layout model at the national UDHBHAV 2025 event, receiving top validation ratings.",
    proofUrl: "#",
  },
  {
    title: "Software Engineer Certification",
    badge: "Certified",
    badgeType: "blue",
    platform: "HackerRank — 2026",
    description:
      "Successfully certified on HackerRank, validating core algorithmic and software engineering principles.",
    icon: <Zap className="text-accent-blue" size={24} />,
    details: "Completed HackerRank assessments in Python, SQL, and general software engineering protocols to receive professional certification status.",
    proofUrl: "#",
  },
  {
    title: "Salesforce Masterclass Certification",
    badge: "Masterclass",
    badgeType: "gold",
    platform: "PIET Jaipur — 2026",
    description:
      "Completed comprehensive training on cloud services, CRM integrations, and Salesforce deployment models.",
    icon: <FileText className="text-accent-gold" size={24} />,
    details: "Acquired comprehensive masterclass credentials in cloud deployment, Salesforce CRM platforms, and administration integrations.",
    proofUrl: "#",
  },
  {
    title: "Frontend Development Internship",
    badge: "Internship",
    badgeType: "blue",
    platform: "Bussibees EdTech — 2025",
    description:
      "Completed 15 days of intensive frontend development training, building responsive layouts and modern UI elements.",
    icon: <GitPullRequest className="text-accent-blue" size={24} />,
    details: "Successfully finished frontend internship at Bussibees EdTech, designing layouts, responsive grids, and clean visual structures.",
    proofUrl: "#",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          {"// ACHIEVEMENTS"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-3 font-bold leading-tight"
        >
          Milestones Unlocked
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm mb-16 max-w-lg"
        >
          A collection of events, competitive results, and recognitions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => {
            const isGold = ach.badgeType === "gold";
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-bg-card border border-border-subtle rounded-xl p-6 md:p-8 shadow-premium transition-all duration-300 flex gap-6 items-start relative group hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25"
              >
                <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-tr from-accent-gold/10 to-accent-blue/5 border border-accent-gold/15 flex items-center justify-center shrink-0">
                  {ach.icon}
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-md font-bold text-white leading-snug">{ach.title}</h3>
                    <span
                      className={`text-[0.7rem] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 border ${
                        isGold
                          ? "bg-accent-gold/10 border-accent-gold/20 text-accent-gold"
                          : "bg-accent-blue/10 border-accent-blue/20 text-accent-blue"
                      }`}
                    >
                      {ach.badge}
                    </span>
                  </div>
                  <div className="text-accent-gold text-xs font-semibold mb-3">
                    {ach.platform}
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {ach.description}
                  </p>

                  {/* Mobile Expanded layout below */}
                  <div className="block md:hidden mt-4 pt-4 border-t border-white/5 flex flex-col gap-3 w-full">
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Details</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{ach.details}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-text-secondary">Platform: <strong className="text-white">{ach.platform}</strong></span>
                      <a
                        href={ach.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View validation proof for ${ach.title}`}
                        className="text-accent-blue hover:text-white font-bold inline-flex items-center gap-1"
                      >
                        View Proof →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Desktop hover overlay action area */}
                <div className="absolute inset-0 bg-[#081224]/98 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center p-6 md:p-8 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex border border-accent-gold/20 rounded-xl">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out flex flex-col gap-3">
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Event / Platform</h4>
                      <p className="text-white text-xs font-semibold">{ach.platform}</p>
                    </div>
                    <div>
                      <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Details</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{ach.details}</p>
                    </div>
                    <a
                      href={ach.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View validation proof for ${ach.title}`}
                      className="mt-2 text-accent-blue hover:text-white font-bold text-xs hover:translate-x-0.5 transition-all inline-flex items-center gap-1"
                    >
                      View Proof / Link →
                    </a>
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
