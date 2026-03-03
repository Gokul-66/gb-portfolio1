import { RevealOnScroll } from "../Reveal";
import React from "react";

export const About = () => {
  const techStackGroups = [
    {
      title: "Core Languages",
      items: ["JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Backend Engineering",
      items: ["Node.js", "Express.js", "REST APIs", "Redis / BullMQ", "Event-Driven Systems"],
    },
    {
      title: "Frontend Development",
      items: ["Angular", "React (Basics)", "TailwindCSS"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "Cassandra (Exposure)"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (S3, SQS, CloudWatch)", "Docker", "CI/CD"],
    },
  ];

  const skillLevels = [
    { label: "JavaScript", level: 95 },
    { label: "Angular", level: 95 },
    { label: "Node.js / Express.js", level: 86 },
    { label: "AWS Services", level: 74 },
    { label: "MongoDB / MySQL", level: 78 },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="section-title mb-10">
            About Me
          </h2>

          <div className="glass-card glass-card-hover p-8 md:p-10">
            <div className="text-slate-200/90 mb-8 leading-relaxed text-[1.02rem] space-y-4">
              <p>
                I'm a Full-Stack Developer with professional experience building backend services, asynchronous processing systems, and cloud-integrated applications. I work primarily with Node.js, distributed workers, and database-driven systems, with a strong focus on reliability, scalability, and maintainable architecture.
              </p>
              <p>
                I enjoy solving system-level problems, designing efficient APIs, and building software that performs well under real-world constraints.
              </p>
            </div>

            <div className="glass-card p-6 md:p-7 mb-6">
              <h3 className="text-xl font-bold mb-5 text-cyan-100">Skill Level</h3>
              <div className="space-y-4">
                {skillLevels.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between mb-1.5 text-sm">
                      <span className="text-slate-200">{skill.label}</span>
                      <span className="text-cyan-200">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill transition-all duration-700" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {techStackGroups.map((group) => (
                <div key={group.title} className="glass-card p-5">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-100">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span key={tech} className="glass-pill px-3 py-1 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="glass-card glass-card-hover p-6 md:p-7">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2 text-cyan-100">
                <span className="w-2 h-6 bg-cyan-300 rounded"></span>
                🏫 Education
              </h3>

              <div className="space-y-4 text-slate-200/90">

                <div className="glass-card p-4">
                  <p className="leading-relaxed">
                    <strong>B.Tech in Computer Science & Engineering</strong>
                    <br />
                    College of Engineering, Kallooppara (2019–2023)
                    <br />
                    CGPA: <span className="text-cyan-200 font-semibold">8.44</span>
                  </p>
                </div>

                <div className="glass-card p-4">
                  <p className="leading-relaxed">
                    <strong>Higher Secondary (+2)</strong>
                    <br />
                    St Peter's HSS Kurumpanadom (2017–2019)
                    <br />
                    Score: <span className="text-cyan-200 font-semibold">95%</span>
                  </p>
                </div>


                <div className="glass-card p-4">
                  <p className="leading-relaxed mb-2">
                    <strong>Major Project:</strong> Smart Verification System for Media Files
                  </p>

                  <ul className="list-disc list-inside ml-1 text-slate-300/90 space-y-2">
                    <li>Developed Python + MySQL system for validating media authenticity.</li>
                    <li>Implemented metadata analysis and verification logic.</li>
                    <li>Focused on integrity validation and anomaly detection.</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 md:p-7">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2 text-cyan-100">
                <span className="w-2 h-6 bg-blue-300 rounded"></span>
                💼 Work Experience
              </h3>

              <div className="space-y-5 text-slate-200/90 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300/60 to-transparent" />

                <div className="relative pl-8">
                  <span className="absolute left-0 top-2.5 h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                  <div className="glass-card p-4 border-blue-300/35">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg text-cyan-100">
                        Software Engineer L1 — ZeroNorth
                      </h4>
                      <span className="glass-pill text-xs">Nov 2023 – Present</span>
                    </div>
                    <ul className="mt-2 space-y-2 list-disc list-inside leading-relaxed text-slate-200/90">
                      <li>Designed and maintained backend modules for maritime intelligence platforms.</li>
                      <li>Worked with AWS SQS-driven workflows and async processing pipelines.</li>
                      <li>Improved logging, observability, and API efficiency.</li>
                      <li>Delivered complex modules end-to-end (Star Performer recognition).</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-8">
                  <span className="absolute left-0 top-2.5 h-3.5 w-3.5 rounded-full bg-blue-200/85" />
                  <div className="glass-card p-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-lg text-cyan-100">
                        Software Engineer Trainee Intern — ZeroNorth
                      </h4>
                      <span className="glass-pill text-xs">Apr 2023 – Nov 2023</span>
                    </div>
                    <ul className="mt-2 space-y-2 list-disc list-inside leading-relaxed text-slate-200/90">
                      <li>Developed full-stack features using Angular, Node.js, Express.js, MongoDB.</li>
                      <li>Built REST APIs and optimized UI interactions.</li>
                      <li>Gained hands-on experience in production workflows and debugging.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
