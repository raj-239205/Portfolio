import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-accent-gold/8 py-16 text-text-secondary relative">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-headings text-sm font-black text-accent-gold flex items-center justify-center w-[36px] h-[36px] border-2 border-accent-gold rounded bg-accent-gold/4">
                RC
              </span>
              <span className="text-white font-bold text-md tracking-wide">Rajveer Choudhary</span>
            </div>
            <span className="text-xs text-text-secondary opacity-80 block pl-[48px]">
              AI/ML Enthusiast & Python Developer
            </span>
          </div>

          <ul className="flex gap-8 list-none text-xs font-semibold uppercase tracking-wider flex-wrap">
            <li>
              <a href="#about" className="hover:text-accent-gold transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-accent-gold transition-colors duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent-gold transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-accent-gold transition-colors duration-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-accent-gold transition-colors duration-300">
                Certificates
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:text-accent-gold transition-colors duration-300">
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent-gold transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons row */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/raj-239205"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[42px] h-[42px] rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:border-accent-gold hover:text-accent-gold hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(247,201,72,0.15)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajveer-choudhary-314a0b231/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[42px] h-[42px] rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:border-accent-gold hover:text-accent-gold hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(247,201,72,0.15)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:rajveerc944@gmail.com"
            className="w-[42px] h-[42px] rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:border-accent-gold hover:text-accent-gold hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(247,201,72,0.15)] transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="h-[1px] w-full bg-accent-gold/8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-75">
          <span>© 2026 Rajveer Choudhary. All rights reserved.</span>
          <span>Built with passion for AI & Engineering</span>
          <span className="font-headings opacity-50 tracking-wider">
            // Designed & built with the intent to level up.
          </span>
        </div>
      </div>
    </footer>
  );
}
