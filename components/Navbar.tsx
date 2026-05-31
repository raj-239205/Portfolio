"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section, header");
      
      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (!id) return;
        
        const top = (section as HTMLElement).offsetTop - 100;
        const height = (section as HTMLElement).offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[68px] bg-bg-primary/92 backdrop-blur-md border-b border-accent-gold/8 z-50 transition-all duration-300">
        <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto px-6">
          <a
            href="#"
            className="font-headings text-lg font-black text-accent-gold flex items-center justify-center w-[42px] h-[42px] border-2 border-accent-gold rounded bg-accent-gold/4 hover:shadow-[0_0_25px_rgba(247,201,72,0.3)] transition-all duration-300 transform hover:scale-105"
          >
            RC
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative py-2 font-headings text-sm font-semibold transition-all duration-300 hover:text-accent-gold ${
                      isActive ? "text-accent-gold" : "text-text-secondary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 cursor-pointer border-none bg-transparent p-1 z-50 text-text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-bg-primary/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-10 list-none"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className={`font-headings text-2xl font-bold transition-all duration-300 hover:text-accent-gold ${
                      isActive ? "text-accent-gold" : "text-text-secondary"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
