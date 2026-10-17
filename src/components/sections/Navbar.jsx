import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACTS', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setTimeout(() => {
        const yOffset = -76;
        const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <>
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <a
          href="#home"
          onClick={e => handleLinkClick(e, '#home')}
          className="nav-brand"
          aria-label="Gokul Babu Home"
        >
          <span>DevByGokul</span>
          <span className="nav-brand-dot">.</span>
        </a>

        <div className="nav-controls">
          {/* Active status indicator pill */}
          {/* <div className="status-indicator-pill" title="Currently open for engineering opportunities">
            <span className="status-pulsing-dot" aria-hidden="true" />
            <span className="hidden sm:inline">Open for work</span>
            <span className="sm:hidden">Active</span>
          </div> */}

          {/* Quick Message CTA */}
          <a
            href="#contact"
            onClick={e => handleLinkClick(e, '#contact')}
            className="nav-pill-btn hidden sm:inline-flex"
            aria-label="Jump to messages"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Messages</span>
          </a>

          {/* Download Resume Pill */}
          <a
            href="/resume.pdf"
            download="Gokul_Babu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-pill-btn nav-resume-btn"
            aria-label="Download Resume (PDF)"
            title="Download Resume (PDF)"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume</span>
            <span className="nav-resume-badge">PDF</span>
          </a>

          {/* GitHub Star Pill */}
          <a
            href="https://github.com/Gokul-66/gb-portfolio1"
            target="_blank"
            rel="noreferrer"
            className="nav-pill-btn hidden sm:inline-flex"
            aria-label="GitHub Repository"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="hidden sm:inline">Portfolio</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </a>

          {/* Dark / Light Mode Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`menu-hamburger-btn ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-hamburger-line" />
            <span className="menu-hamburger-line" />
            <span className="menu-hamburger-line" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile/Desktop Overlay Menu */}
      <div className={`fullscreen-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={e => handleLinkClick(e, link.href)}
            className="fullscreen-nav-link"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Gokul_Babu_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="fullscreen-nav-link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--emerald)' }}
        >
          <span>RESUME (PDF)</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
        <a
          href="#contact"
          onClick={e => handleLinkClick(e, '#contact')}
          className="fullscreen-nav-cta"
        >
          Let's Work Together ↘
        </a>
      </div>
    </>
  );
};
