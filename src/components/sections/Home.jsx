import { RevealOnScroll } from '../Reveal';

export const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-backdrop-grid" aria-hidden="true" />

      <div className="site-container relative z-10">
        <RevealOnScroll>
          {/* Top Meta Row */}
          <div className="hero-meta-row">
            <div className="hero-index-tag">
              <div>01/</div>
              <div className="hero-location-text">
                From Kerala, India
              </div>
            </div>

            <div className="status-indicator-pill">
              <span className="status-pulsing-dot" aria-hidden="true" />
              <span>Open for work</span>
            </div>
          </div>

          {/* Giant Headline */}
          <h1 className="hero-headline">
            Software<br />
            Engineer
          </h1>

          {/* Tech Badges Row */}
          <div className="hero-tags-row">
            <a href="#projects" className="hero-tag-pill">Node.js</a>
            <a href="#projects" className="hero-tag-pill">React / Next.js</a>
            <a href="#projects" className="hero-tag-pill">TypeScript</a>
            <a href="#projects" className="hero-tag-pill">System Architecture</a>
            <a href="#projects" className="hero-tag-pill">BullMQ / Queues</a>
            <a href="#projects" className="hero-tag-pill">Redis</a>
          </div>

          {/* Split 7 / 5 Grid: Media Card on Left, Name & Mission on Right */}
          <div className="hero-split-grid">
            {/* Left: Reticle Framed System Architecture Visualization */}
            <div className="hero-media-col">
              <div className="hero-card-container corner-frame group">
                {/* 4 Viewfinder Corner Brackets */}
                <span className="corner-reticle corner-tl" aria-hidden="true" />
                <span className="corner-reticle corner-tr" aria-hidden="true" />
                <span className="corner-reticle corner-bl" aria-hidden="true" />
                <span className="corner-reticle corner-br" aria-hidden="true" />

                <img
                  src="/system-architecture.png"
                  alt="System Architecture Workflow — API Gateway, Message Queue, Workers, Redis & Databases"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="hero-card-caption">
                <span className="hero-caption-arrow" aria-hidden="true">→</span>
                <div className="hero-caption-text">
                  Distributed System Architecture<br />
                  API Gateway → Message Queue → Workers → Redis & Databases
                </div>
              </div>

              <div className="hero-caption-text" style={{ marginTop: '16px', opacity: 0.6 }}>
                Engineering systems by Gokul Babu
              </div>
            </div>

            {/* Right: Mission Statement, Big Name, and CTA */}
            <div className="hero-name-col">
              <p className="hero-mission-p">
                Building fast, clean backend systems & web apps for real users.
              </p>
              <div className="hero-roles-sub">
                Open for full-time / contract roles<br />
                Available worldwide
              </div>

              <div className="hero-name-big">
                Gokul<br />
                Babu
              </div>

              <div className="hero-year-tag">
                2026 Portfolio
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <a href="#projects" className="hero-cta-btn" style={{ marginTop: 0 }}>
                  <span>Selected work</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="7" x2="17" y2="17" />
                    <polyline points="17 7 17 17 7 17" />
                  </svg>
                </a>

                <a
                  href="/resume.pdf"
                  download="Gokul_Babu_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cta-btn hero-resume-btn"
                  style={{ marginTop: 0 }}
                  aria-label="Download Gokul Babu's Resume (PDF)"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
