import { RevealOnScroll } from "../Reveal";

export const Projects = () => {
  const projects = [
    {
      title: "Real-Time Ride Dispatch & Driver Allocation System",
      description:
        "An event-driven backend system built using Node.js, Redis (BullMQ), and MongoDB. Ride creation events are pushed into a queue and processed asynchronously by distributed workers that assign drivers in real time.",
      architectureHighlights: [
        "API service publishes ride events to Redis queue",
        "Worker service consumes queue and assigns drivers",
        "Exponential retry with backoff strategy",
        "Idempotent state validation to prevent duplicate assignment",
        "Active ride capacity protection to prevent system overload",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "BullMQ",
        "Redis (Upstash)",
        "MongoDB",
        "Render",
        "Vercel",
      ],
      image: "/rideapi.png",
      buttons: [
        { label: "Live Demo", href: "https://ride-hailing-project.vercel.app/" },
        { label: "GitHub", href: "https://github.com/Gokul-66/ride-hailing-project" },
      ],
    },
    {
      title: "AI Resume Analyzer",
      description:
        "A full-stack AI-powered resume analysis platform that extracts resume text, evaluates ATS compatibility, analyzes job description match, and provides structured feedback using LLaMA 3 via Groq API.",
      architectureHighlights: [
        "PDF text extraction pipeline",
        "AI inference through secured backend API",
        "Firebase authentication and Firestore history storage",
        "Role-based access control with approval workflow",
        "Structured JSON normalization of AI responses",
      ],
      tech: [
        "React",
        "Vite",
        "Firebase Auth",
        "Firestore",
        "Groq LLaMA3",
        "Node.js",
        "Express",
        "Render",
        "Vercel",
      ],
      image: "/resume.png",
      buttons: [
        { label: "Live Demo", href: "https://resume-analyzer-two-xi.vercel.app" },
        { label: "GitHub", href: "https://github.com/Gokul-66/resume-analyzer" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="section-title mb-10">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="w-full p-6 md:p-8 glass-card glass-card-hover flex flex-col"
              >
                <div className="w-full h-64 md:h-72 mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/15">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-cyan-100">{project.title}</h3>

                <p className="text-slate-200/90 mb-5 leading-relaxed">{project.description}</p>

                <div className="mb-5">
                  <h4 className="text-sm font-semibold tracking-wide uppercase text-cyan-200/85 mb-2">
                    Architecture Highlights
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-slate-300/95 leading-relaxed">
                    {project.architectureHighlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="glass-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.buttons.map((button) => (
                    <a
                      key={button.label}
                      href={button.href}
                      target={button.href.startsWith("http") ? "_blank" : undefined}
                      rel={button.href.startsWith("http") ? "noreferrer" : undefined}
                      className="glow-button inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm"
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
