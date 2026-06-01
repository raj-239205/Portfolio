"use client";

import React, { useState } from "react";
import { Lock, Award, Flame, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function GitHubStats() {
  const [statsError, setStatsError] = useState(false);
  const [streakError, setStreakError] = useState(false);
  const [langsError, setLangsError] = useState(false);

  return (
    <section id="github" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          // GITHUB
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-3 font-bold leading-tight"
        >
          Codebase Intelligence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm mb-12 max-w-lg"
        >
          Open source activity and contribution patterns.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left Columns (Stats & Streak) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card flex items-center justify-center min-h-[190px] p-6 relative overflow-hidden"
            >
              {!statsError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="max-w-full h-auto object-contain transition-all duration-300"
                  src="https://github-readme-stats.vercel.app/api?username=raj-239205&show_icons=true&theme=transparent&title_color=f7c948&text_color=b8c1d1&icon_color=3b82f6&bg_color=081224&border_color=f7c94820&hide_border=false"
                  alt="Rajveer's GitHub Stats"
                  onError={() => setStatsError(true)}
                />
              ) : (
                <div className="text-center p-6 flex flex-col items-center">
                  <Lock className="text-accent-gold/40 mb-3" size={40} />
                  <h4 className="font-headings text-accent-gold text-md font-bold mb-1 uppercase tracking-wide">
                    GitHub Stats Unavailable
                  </h4>
                  <p className="text-text-secondary text-[0.8rem] max-w-sm">
                    Verify connection parameters or ensure that profile stats are accessible on GitHub.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Streak Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card flex items-center justify-center min-h-[190px] p-6 relative overflow-hidden"
            >
              {!streakError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="max-w-full h-auto object-contain transition-all duration-300"
                  src="https://github-readme-streak-stats.herokuapp.com?user=raj-239205&theme=transparent&ring=f7c948&fire=3b82f6&currStreakLabel=f7c948&sideLabels=b8c1d1&dates=b8c1d1&stroke=f7c94820"
                  alt="Rajveer's GitHub Streak"
                  onError={() => setStreakError(true)}
                />
              ) : (
                <div className="text-center p-6 flex flex-col items-center">
                  <Flame className="text-accent-gold/40 mb-3" size={40} />
                  <h4 className="font-headings text-accent-gold text-md font-bold mb-1 uppercase tracking-wide">
                    Streak Statistics Offline
                  </h4>
                  <p className="text-text-secondary text-[0.8rem] max-w-sm">
                    Telemetry offline. Verify GitHub credentials or check API availability status.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column (Top Languages) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card flex items-center justify-center p-6 relative overflow-hidden h-full min-h-[300px]"
            >
              {!langsError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="max-w-full h-auto object-contain transition-all duration-300 max-h-[380px]"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=raj-239205&layout=compact&theme=transparent&title_color=f7c948&text_color=b8c1d1&bg_color=081224&border_color=f7c94820"
                  alt="Rajveer's Top Languages"
                  onError={() => setLangsError(true)}
                />
              ) : (
                <div className="text-center p-6 flex flex-col items-center">
                  <Globe className="text-accent-gold/40 mb-3" size={40} />
                  <h4 className="font-headings text-accent-gold text-md font-bold mb-1 uppercase tracking-wide">
                    Language Analytics Offline
                  </h4>
                  <p className="text-text-secondary text-[0.8rem] max-w-xs">
                    Could not load language metrics. Verify repository visibility on your GitHub profile.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Note at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <a
            href="https://github.com/raj-239205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-accent-blue text-accent-blue font-bold text-xs rounded-md hover:bg-accent-blue/10 hover:shadow-[0_4px_14px_rgba(59,130,246,0.15)] transition-all duration-300"
          >
            View Full GitHub Profile
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
          <span className="text-[0.75rem] text-text-secondary opacity-60">
            ⚙️ Real-time contribution telemetry sourced dynamically from your GitHub profile API.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
