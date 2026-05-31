"use client";

import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}

const certificates: CertificateItem[] = [
  {
    name: "Software Engineer Certification",
    issuer: "HackerRank",
    date: "2026",
    link: "#",
    skills: ["Problem Solving", "Algorithms", "Data Structures"],
  },
  {
    name: "Salesforce Masterclass Certification",
    issuer: "Poornima Institute of Engineering & Technology (PIET), Jaipur",
    date: "2026",
    link: "#",
    skills: ["Salesforce CRM", "Cloud Computing", "Database Admin"],
  },
  {
    name: "Frontend Development Internship",
    issuer: "Bussibees EdTech",
    date: "2025",
    link: "#",
    skills: ["HTML", "CSS", "JavaScript", "UI Design", "Responsive Layouts"],
  },
  {
    name: "Face Recognition Using Python Webinar",
    issuer: "SkillEcted",
    date: "2025",
    link: "#",
    skills: ["Python", "OpenCV", "Computer Vision", "Real-Time Detection"],
  },
  {
    name: "UX/UI Design Workshop",
    issuer: "Grras Solutions",
    date: "2025",
    link: "#",
    skills: ["Figma", "Wireframing", "UX Research", "Design Systems"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // CERTIFICATIONS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-3 font-bold leading-tight"
        >
          Skill Unlocks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm mb-16 max-w-lg"
        >
          Verified pathways, specializations, and professional courses completed.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-bg-card border border-border-subtle rounded-xl p-6 shadow-premium transition-all duration-300 flex flex-col gap-4 relative group hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(247,201,72,0.12)] hover:border-accent-gold/25"
            >
              <div className="flex gap-6 items-start w-full">
                {/* Seal decoration background */}
                <div className="absolute top-4 right-4 opacity-[0.03] pointer-events-none text-accent-gold group-hover:scale-110 transition-transform duration-300">
                  <Award size={64} />
                </div>

                <div className="bg-accent-gold/5 border border-accent-gold/10 p-3 rounded-lg text-accent-gold flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>

                <div className="flex-grow">
                  <h3 className="text-md font-bold text-white mb-1">{cert.name}</h3>
                  <div className="text-accent-gold text-xs font-semibold mb-2">{cert.issuer}</div>
                  <div className="text-[0.75rem] text-text-secondary mb-4">Acquired: {cert.date}</div>
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-1.5 text-accent-blue font-bold text-[0.8rem] hover:text-white hover:translate-x-1 transition-all duration-300 hidden md:inline-flex"
                  >
                    View Credential
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Desktop hover overlay action area */}
              <div className="absolute inset-0 bg-[#081224]/98 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex flex-col justify-center p-6 z-30 pointer-events-none group-hover:pointer-events-auto hidden md:flex border border-accent-gold/20 rounded-xl">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[250ms] ease-out flex flex-col gap-3">
                  <div>
                    <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1">Issuer & Date</h4>
                    <p className="text-white text-xs font-semibold">{cert.issuer} ({cert.date})</p>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1.5">Skills Learned</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span key={s} className="text-[0.65rem] px-2 py-0.5 border border-white/10 rounded-full bg-white/5 text-text-secondary font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.name} in a new tab`}
                    className="mt-2 inline-flex items-center gap-1.5 text-accent-blue font-bold text-[0.8rem] hover:text-white hover:translate-x-1 transition-all"
                  >
                    View Credential
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Mobile Expanded layout below */}
              <div className="block md:hidden mt-4 pt-4 border-t border-white/5 flex flex-col gap-3 w-full">
                <div>
                  <h4 className="text-[0.7rem] text-accent-gold uppercase font-semibold tracking-wider mb-1.5">Skills Learned</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-[0.65rem] px-2.5 py-1 border border-white/10 rounded-full bg-white/5 text-text-secondary font-medium font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-secondary">Issuer: <strong className="text-white">{cert.issuer}</strong></span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.name} in a new tab`}
                    className="inline-flex items-center gap-1 text-accent-blue font-bold"
                  >
                    Verify
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
