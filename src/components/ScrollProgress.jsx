import { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
      // Hidden for the Hero / name section; reveals on scrolling down past hero to projects & next sections
      setShowSocial(window.scrollY > 380);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top 2px Rainbow Scroll Progress Bar */}
      <div
        className="scroll-progress-line"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Floating Right Social Bar — Hidden on Hero/Name, reveals on scroll down */}
      <nav
        className={`floating-social-sidebar ${showSocial ? 'visible' : ''}`}
        aria-label="Social profiles"
      >
        <a
          href="https://github.com/Gokul-66"
          target="_blank"
          rel="noreferrer"
          className="social-sidebar-btn"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/gokul-babu-870b11226/"
          target="_blank"
          rel="noreferrer"
          className="social-sidebar-btn"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <a
          href="mailto:gokulmr65@gmail.com"
          className="social-sidebar-btn"
          aria-label="Send Email"
          title="Email Gokul"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>

        <a
          href="/resume.pdf"
          download="Gokul_Babu_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="social-sidebar-btn"
          aria-label="Download Resume (PDF)"
          title="Download Resume (PDF)"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>

        <span className="social-sidebar-line" aria-hidden="true" />
      </nav>
    </>
  );
};
