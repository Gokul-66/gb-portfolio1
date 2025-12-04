import { RevealOnScroll } from "../Reveal";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
        <div className="flex justify-center w-full">
  <div className="
    max-w-3xl w-full 
    p-6 rounded-2xl 
    border border-white/10 
    backdrop-blur-xl bg-white/5
    hover:-translate-y-1 hover:border-blue-500/40
    hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)]
    transition-all
  ">

    {/* Mockup Image */}
    <div className="
      w-full h-107 mb-6 
      overflow-hidden rounded-xl 
      bg-gradient-to-r from-blue-500/20 to-purple-600/20 
      border border-white/10 
      shadow-[0_4px_20px_rgba(0,0,0,0.3)]
    ">
      <img
        src="/resume.png"
        alt="AI Resume Analyzer Preview"
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
      />
    </div>

    {/* Title */}
    <h3 className="text-2xl font-bold mb-3">AI Resume Analyzer</h3>

    {/* Description */}
    <p className="text-gray-300 mb-6 leading-relaxed">
      A full-stack AI-driven resume analysis platform that extracts text from 
      uploaded resumes, evaluates ATS score, identifies skill gaps, compares 
      with job descriptions, and generates actionable recommendations using 
      Groq LLaMA3. Built with secure authentication and cloud-hosted backend APIs.
    </p>

    {/* Technologies */}
    <div className="flex flex-wrap gap-2 mb-6">
      {[
        "React", "Vite", "Firebase", "Firestore", "Groq LLaMA3",
        "Node.js", "Express", "Render", "Vercel"
      ].map((tech) => (
        <span
          key={tech}
          className="bg-blue-500/10 text-blue-400 
          py-1 px-4 rounded-full text-sm 
          border border-blue-500/20
          hover:bg-blue-500/20 transition-all"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Button */}
    <div className="text-center">
      <a
        href="https://resume-analyzer-two-xi.vercel.app"
        target="_blank"
        className="text-blue-400 hover:text-blue-300 font-semibold transition"
      >
        View Project →
      </a>
    </div>

  </div>
</div>



        </div>
      </RevealOnScroll>
    </section>
  );
};