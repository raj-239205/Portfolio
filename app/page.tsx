import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import GitHubStats from "@/components/GitHubStats";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating responsive header */}
      <Navbar />

      <main className="min-h-screen">
        {/* Animated hero header with particles */}
        <Hero />

        {/* Story details */}
        <About />

        {/* Grades and certifications */}
        <Education />

        {/* Attribute System */}
        <Skills />

        {/* Projects (Mission Logs) */}
        <Projects />

        {/* Timeline deployments */}
        <Experience />

        {/* Course accomplishments */}
        <Certifications />

        {/* Recognitions and hacker ranks */}
        <Achievements />


        {/* GitHub active trackers */}
        <GitHubStats />

        {/* Resume actions center */}
        <Resume />

        {/* Dynamic connection interface */}
        <Contact />
      </main>

      {/* Brand footer and details */}
      <Footer />
    </>
  );
}
