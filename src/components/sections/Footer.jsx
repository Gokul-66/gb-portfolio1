export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="site-container">
        {/* Top Row: Navigation & Back to Top */}
        <div className="footer-top-row">
          <div>
            <span className="section-tag" style={{ marginBottom: '16px', display: 'block' }}>
              Navigation
            </span>
            <nav className="footer-nav-links">
              <a href="#about" className="footer-nav-link">About</a>
              <a href="#projects" className="footer-nav-link">Work</a>
              <a href="#experience" className="footer-nav-link">Milestones</a>
              <a href="#testimonials" className="footer-nav-link">Testimonials</a>
              <a href="#contact" className="footer-nav-link">Contact</a>
              <a
                href="/resume.pdf"
                download="Gokul_Babu_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="footer-nav-link"
                style={{ color: 'var(--emerald)' }}
              >
                Resume (PDF) ↓
              </a>
            </nav>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <div className="back-to-top-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', letterSpacing: '0.2em' }}>
              BACK TO TOP
            </span>
          </button>
        </div>

        {/* Massive Name Watermark Across Footer */}
        <div className="footer-watermark-row" aria-hidden="true">
          <div className="footer-watermark-text">
            Gokul Babu
          </div>
        </div>

        {/* Bottom Row: Copyright & Social Links */}
        <div className="footer-bottom-row">
          <div>
            © 2026 Gokul Babu · Dev By Gokul
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="/resume.pdf"
              download="Gokul_Babu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--foreground-muted)' }}
              aria-label="Download Resume"
            >
              Resume (PDF) ↗
            </a>
            <a
              href="https://github.com/Gokul-66"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--foreground-muted)' }}
              aria-label="GitHub"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-babu-870b11226/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--foreground-muted)' }}
              aria-label="LinkedIn"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:gokulmr65@gmail.com"
              style={{ color: 'var(--foreground-muted)' }}
              aria-label="Email"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
