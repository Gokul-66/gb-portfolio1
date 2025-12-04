import { RevealOnScroll } from "../Reveal";

export const About = () => {
  const frontendSkills = [
    "Angular",
    "React (Basics)",
    "TypeScript",
    "JavaScript",
    "Cross-Browser Debugging",
    "HTML",
    "CSS"
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Microservices",
    "Redis",
    "Python (Basics)",
    "OOP",
    "Design Patterns"
  ];

  const cloudSkills = [
    "AWS (S3, SQS, CloudWatch, DynamoDB)",
    "Docker",
    "CI/CD",
    "Unit Testing"
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a Full-Stack Developer with <strong>2+ years of professional experience</strong>
              in designing and delivering scalable web applications in the maritime and enterprise domain.
              I specialize in backend engineering using <strong>Node.js/Express.js</strong>, building 
              production-grade APIs, and integrating SQL/NoSQL databases such as <strong>MySQL, MongoDB, and Cassandra</strong>. 
              I also build responsive front-end interfaces with <strong>Angular</strong> and have strong exposure to 
              software design principles, clean code, asynchronous programming, and Agile/Scrum workflows.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-xl p-6 mt-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
    <span className="w-2 h-6 bg-cyan-400 rounded"></span>
    🏫 Education
  </h3>

  <ul className="list-disc list-inside text-gray-300 space-y-3">

    <li>
      <strong>B.Tech in Computer Science & Engineering</strong> — 
      College of Engineering, Kallooppara (2019–2023)
      <br />
      Percentage: <strong>84.4%</strong>
    </li>

    <li>
      <strong>Major Project:</strong> Smart Verification System for Media Files  
      <ul className="list-disc list-inside ml-5 text-gray-400">
        <li>Developed a Python + MySQL based system for automatic verification of image/video authenticity.</li>
        <li>Implemented metadata extraction, anomaly detection, and reporting module.</li>
      </ul>
    </li>

    <li>
      <strong>Higher Secondary (12th):</strong> 95%
    </li>

    <li>
      <strong>SSLC (10th):</strong> 100%
    </li>

  </ul>
</div>


            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded"></span> 
                💼 Work Experience
              </h3>

              <div className="space-y-6 text-gray-300">

                {/* Experience 1 */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition">
                  <h4 className="font-semibold text-lg text-blue-400">
                    Software Engineer L1 — ZeroNorth (Nov 2023 – Present)
                  </h4>
                  <p className="mt-2 leading-relaxed">
                    Designed and delivered backend modules for SmartVoyager & SmartShip in the maritime domain.
                    Worked extensively with AWS SQS flows, optimized APIs, enhanced CloudWatch logging, and 
                    maintained clean code standards. Awarded <strong>Star Performer</strong> for leading and 
                    delivering a complex module end-to-end.
                  </p>
                </div>

                {/* Experience 2 */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition">
                  <h4 className="font-semibold text-lg text-blue-400">
                    Software Engineer Trainee Intern — ZeroNorth (Apr 2023 – Nov 2023)
                  </h4>
                  <p className="mt-2 leading-relaxed">
                    Built a full-stack web application using Angular, Node.js, Express.js, and MongoDB.
                    Strengthened skills in REST API design, UI development, debugging, and code optimization.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
