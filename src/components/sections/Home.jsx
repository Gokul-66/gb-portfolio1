import { RevealOnScroll } from "../Reveal";
import React from "react";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-5xl mx-auto glass-card glass-card-hover py-12 md:py-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-7 bg-gradient-to-r from-slate-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight tracking-tight">
            Hi, I'm Gokul Babu
          </h1>

          <p className="text-cyan-100/90 text-lg md:text-xl font-medium mb-4 max-w-4xl mx-auto px-2 md:px-4 leading-relaxed">
            Software Engineer | Even Driven Systems & AI-Integrated Applications
          </p>

          <p className="text-slate-300/90 text-lg mb-10 max-w-4xl mx-auto px-2 md:px-4 leading-relaxed">
            "I design and build scalable backend systems, event-driven architectures, and AI-powered applications. Focused on performance, reliability, and clean system design."
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="glow-button rounded-full min-w-[170px] text-center"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="glow-button rounded-full min-w-[170px] text-center" download
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="glow-button rounded-full min-w-[170px] text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
