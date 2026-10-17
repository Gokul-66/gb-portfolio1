import { RevealOnScroll } from '../Reveal';

export const About = () => {
  const categories = [
    {
      name: 'Backend Engineering',
      skills: ['Node.js', 'Express.js', 'BullMQ', 'RESTful APIs', 'Microservices', 'Event-Driven Systems'],
    },
    {
      name: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3'],
    },
    {
      name: 'Databases & In-Memory',
      skills: ['Redis (Upstash / Cluster)', 'MySQL', 'MongoDB', 'Firestore'],
    },
    {
      name: 'Cloud & Infrastructure',
      skills: ['AWS SQS', 'AWS CloudWatch', 'GCP Cloud Scheduler', 'Docker', 'Git / GitHub', 'Render / Vercel'],
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="site-container">
        <RevealOnScroll>
          <div className="about-split-layout">
            {/* Left: Bio & Narrative */}
            <div className="about-col-left">
              <span className="section-tag">03 / About</span>
              <h2 className="section-headline">
                About<br />Me
              </h2>

              <p className="about-bio-p">
                I am a Software Engineer focused on building robust backend systems, distributed queue architectures, and high-performance full-stack web applications.
              </p>

              <p className="about-bio-p">
                At <strong>InnerSpace Co-working</strong>, I engineer backend services powering automated reservation engines, concurrency validation, and payment workflows—achieving zero double-booking incidents under concurrent load.
              </p>

              <p className="about-bio-p">
                I take pride in profiling slow queries, cutting API latency from ~2s to under 300ms using Redis caching, and replacing blocking I/O with asynchronous event pipelines.
              </p>

              <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="/resume.pdf"
                  download="Gokul_Babu_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cta-btn hero-resume-btn"
                  style={{ marginTop: 0 }}
                  aria-label="Download Gokul Babu's Resume (PDF)"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cta-btn"
                  style={{ marginTop: 0 }}
                  aria-label="Preview Gokul Babu's Resume in new tab"
                >
                  <span>Preview in Tab</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="7" x2="17" y2="17" />
                    <polyline points="17 7 17 17 7 17" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Technical Stack Categories */}
            <div className="about-col-right">
              {categories.map(cat => (
                <div key={cat.name} className="tech-category-group">
                  <h3 className="tech-category-heading">
                    <span style={{ color: 'var(--emerald)' }}>//</span> {cat.name}
                  </h3>
                  <div className="tech-chips-grid">
                    {cat.skills.map(skill => (
                      <span key={skill} className="tech-chip">
                        <span className="tech-chip-icon">◈</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
