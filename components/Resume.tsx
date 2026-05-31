"use client";

import React from "react";
import { FileText, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1p9SJSP6mgFfTrDq9YzG1C1i8lEuyeBls/view?usp=sharing";

  const triggerResumeAction = (action: "download" | "preview") => {
    if (action === "download") {
      window.open(resumeUrl, "_blank");
    } else if (action === "preview") {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <section id="resume" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // RESUME
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-12 font-bold leading-tight"
        >
          Full Dossier
        </motion.h2>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[600px] bg-bg-card border border-border-subtle rounded-xl p-8 md:p-10 shadow-premium hover:shadow-[0_12px_40px_rgba(247,201,72,0.08)] hover:border-accent-gold/25 transition-all duration-300 flex flex-col items-center gap-6"
          >
            <div className="w-[80px] h-[80px] rounded-full bg-accent-gold/5 border border-accent-gold/15 flex items-center justify-center text-accent-gold">
              <FileText size={40} />
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Rajveer Choudhary — Resume</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto">
                Available for internships, research roles, and junior developer positions.
              </p>
            </div>
            
            <div className="text-xs text-text-secondary font-mono bg-bg-secondary/40 border border-white/5 rounded px-3 py-1">
              Last updated: May 2026
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <button
                onClick={() => triggerResumeAction("download")}
                className="flex items-center gap-2 px-6 py-3 bg-accent-gold text-bg-primary font-semibold text-sm rounded-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-md"
              >
                Download PDF
                <Download size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => triggerResumeAction("preview")}
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-text-secondary font-semibold text-sm rounded-lg hover:border-accent-gold hover:text-accent-gold hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
              >
                Preview Resume
                <Eye size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full border-t border-white/5 pt-8 mt-4 text-center text-xs text-text-secondary font-semibold uppercase tracking-wider">
              <div className="px-2 py-1.5 bg-bg-secondary/20 border border-white/5 rounded">Open to Internships</div>
              <div className="px-2 py-1.5 bg-bg-secondary/20 border border-white/5 rounded">Available for Full-time</div>
              <div className="px-2 py-1.5 bg-bg-secondary/20 border border-white/5 rounded">Remote Friendly</div>
              <div className="px-2 py-1.5 bg-bg-secondary/20 border border-white/5 rounded">AI/ML Focused</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
