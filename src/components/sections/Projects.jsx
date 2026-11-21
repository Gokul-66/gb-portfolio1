import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DESKTOP_MQ = '(min-width: 1024px)';

const PROJECTS = [
  {
    num: '01',
    category: 'Backend Engineering',
    title: 'Booking & Reservation Engine',
    description:
      'End-to-end reservation platform handling temporary asset hold, availability conflict validation, coupon-based pricing, payment confirmations, and event-driven notifications—built for correctness under concurrent booking pressure.',
    outcome: 'Zero double-booking incidents in production; async processing absorbed 3× traffic spikes without degradation.',
    tech: ['Node.js', 'Express.js', 'Redis', 'BullMQ', 'MySQL', 'Razorpay', 'AWS SQS', 'GCP', 'Docker'],
    image: '/booking-arch.jpg',
    imageAlt: 'Booking Engine Architecture Diagram',
    isConfidential: true,
    darkBg: false,
    links: [],
  },
  {
    num: '02',
    category: 'Performance Engineering',
    title: 'API Response Optimization',
    description:
      'Identified hot database queries causing 1,800–2,200ms latency on frequently accessed endpoints. Designed and implemented a Redis caching layer with TTL-based invalidation strategy, bringing response times to 150–300ms without data staleness.',
    outcome: 'API response time reduced from ~2s to 150–300ms — an 85–93% improvement on cached routes.',
    tech: ['Node.js', 'Redis', 'AWS CloudWatch', 'REST APIs', 'MySQL'],
    image: '/api-cache.jpg',
    imageAlt: 'Redis Caching Before/After Diagram',
    isConfidential: true,
    darkBg: false,
    links: [],
  },
  {
    num: '03',
    category: 'Distributed Systems',
    title: 'Asynchronous Processing Pipeline',
    description:
      'Replaced synchronous XML processing and blocking I/O operations with an event-driven queue architecture using AWS SQS and BullMQ. Background workers now handle heavy transformations, retries, and failure isolation—reducing critical path latency significantly.',
    outcome: '40% reduction in critical workflow processing time after migrating synchronous operations to queue-based architecture.',
    tech: ['Node.js', 'AWS SQS', 'BullMQ', 'Kafka', 'Redis', 'XML Processing'],
    image: '/async-pipeline.jpg',
    imageAlt: 'Asynchronous Processing Pipeline Architecture Diagram with AWS SQS, BullMQ, and Kafka',
    isConfidential: true,
    darkBg: false,
    links: [],
  },
  {
    num: '04',
    category: 'Full-Stack Application',
    title: 'AI Resume Analyzer',
    description:
      'Full-stack platform that extracts resume text from PDFs, evaluates ATS compatibility, matches job descriptions, and returns structured feedback using LLaMA 3 via Groq API. Role-based access with approval workflow and persistent analysis history.',
    outcome: 'Live production deployment on Vercel (frontend) + Render (backend). Public demo available.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Firebase Auth', 'Firestore', 'Groq LLaMA3', 'Render', 'Vercel'],
    image: '/resume.png',
    imageAlt: 'AI Resume Analyzer Interface',
    isConfidential: false,
    darkBg: true,
    links: [
      { label: 'Live Demo', href: 'https://resume-analyzer-two-xi.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Gokul-66/resume-analyzer' },
    ],
  },
  {
    num: '05',
    category: 'Backend Engineering',
    title: 'Real-Time Ride Dispatch System',
    description:
      'Event-driven backend using Node.js, Redis (BullMQ), and MongoDB. Ride creation events are published to a queue and consumed by distributed workers that assign drivers in real time—with idempotency guards and exponential retry logic.',
    outcome: 'Live demo on Vercel. Open source on GitHub.',
    tech: ['Node.js', 'Express.js', 'BullMQ', 'Redis (Upstash)', 'MongoDB', 'Render', 'Vercel'],
    image: '/rideapi.png',
    imageAlt: 'Ride Dispatch System Interface',
    isConfidential: false,
    darkBg: true,
    links: [
      { label: 'Live Demo', href: 'https://ride-hailing-project.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Gokul-66/ride-hailing-project' },
    ],
  },
];

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const pinnedScrollTriggerRef = useRef(null);
  const lastScrubIndexRef = useRef(0);
  const scrubRafRef = useRef(0);
  const scrubQueuedIdxRef = useRef(0);

  const activeProj = PROJECTS[activeIndex] || PROJECTS[0];

  // Typewriter animation for the active project title
  const sourceTitle = activeProj.title;
  const [typedTitle, setTypedTitle] = useState(sourceTitle);

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setTypedTitle(sourceTitle);
      return;
    }

    setTypedTitle('');
    let i = 0;
    const intervalId = window.setInterval(() => {
      i += 1;
      setTypedTitle(sourceTitle.slice(0, i));
      if (i >= sourceTitle.length) {
        window.clearInterval(intervalId);
      }
    }, 22);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [sourceTitle]);

  // Animate the image gallery track to match the active project
  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const h = viewport.clientHeight;
    const gap = 20;
    gsap.to(track, {
      y: -(activeIndex * (h + gap)),
      duration: 0.45,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, [activeIndex]);

  // GSAP ScrollTrigger Scrub Gallery Pinning
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MQ, () => {
        const pinScrollPx = () =>
          Math.round(window.innerHeight * 2.4);

        const st = ScrollTrigger.create({
          trigger: section,
          start: 'top 76px',
          end: () => `+=${pinScrollPx()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.3,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const idx =
              PROJECTS.length <= 1
                ? 0
                : Math.min(
                    Math.round(p * (PROJECTS.length - 1)),
                    PROJECTS.length - 1
                  );

            scrubQueuedIdxRef.current = idx;
            if (scrubRafRef.current !== 0) return;
            scrubRafRef.current = window.requestAnimationFrame(() => {
              scrubRafRef.current = 0;
              const i = scrubQueuedIdxRef.current;
              if (i !== lastScrubIndexRef.current) {
                lastScrubIndexRef.current = i;
                setActiveIndex(i);
              }
            });
          },
        });

        pinnedScrollTriggerRef.current = st;

        return () => {
          pinnedScrollTriggerRef.current = null;
          st.kill();
        };
      });
    }, sectionRef);

    return () => {
      if (scrubRafRef.current !== 0) {
        window.cancelAnimationFrame(scrubRafRef.current);
        scrubRafRef.current = 0;
      }
      pinnedScrollTriggerRef.current = null;
      ctx.revert();
    };
  }, []);

  // Smooth scroll jump to project within the pinned scroll range
  const scrollToProject = useCallback((index) => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia(DESKTOP_MQ).matches) return;

    const st = pinnedScrollTriggerRef.current;
    if (st) {
      const denom = Math.max(PROJECTS.length - 1, 1);
      const progress = index / denom;
      const targetScroll = st.start + (st.end - st.start) * progress;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
    lastScrubIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const prevProject = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : PROJECTS.length - 1;
    scrollToProject(nextIdx);
  };

  const nextProject = () => {
    const nextIdx = activeIndex < PROJECTS.length - 1 ? activeIndex + 1 : 0;
    scrollToProject(nextIdx);
  };

  // Keyboard navigation when project section is in view
  useEffect(() => {
    const handleKeyDown = (e) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextProject();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, scrollToProject]);

  return (
    <section ref={sectionRef} id="projects" className="featured-work-section">
      <div className="site-container">
        {/* TOP SECTION HEADER: Spans full container width */}
        <div className="projects-header-block">
          <div className="projects-header-top">
            <div className="projects-header-title-group">
              <span className="section-tag">02 / Selected Projects</span>
              <h2 className="section-headline">Featured Work</h2>
            </div>
            <p className="section-description">
              Systems where performance, concurrency, and architecture feel intentional. The reliability details most teams skip are the details I care about most.
            </p>
          </div>
        </div>

        {/* UNIFIED TWO-COLUMN ROW: Both columns start on the EXACT SAME ROW */}
        <div className="projects-unified-row">
          {/* LEFT COLUMN: Project Selector List & All Repos Button */}
          <div className="project-thumb-list-wrapper hidden lg:flex">
            <div className="project-thumb-list" role="tablist" aria-label="Project selector">
              <div className="project-thumb-list-header">
                <span>PROJECT INDEX</span>
                <span className="project-thumb-counter">{activeProj.num} OF 05 ACTIVE</span>
              </div>

              {PROJECTS.map((proj, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={proj.num}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => scrollToProject(idx)}
                    className={`project-thumb-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="project-thumb-img-wrap">
                      <img
                        src={proj.image}
                        alt=""
                        className="project-thumb-img"
                        loading="lazy"
                      />
                      {isActive && (
                        <span className="project-thumb-active-indicator" aria-hidden="true" />
                      )}
                    </div>

                    <div className="project-thumb-info">
                      <div className="project-thumb-top-line">
                        <span className="project-thumb-num">PROJECT {proj.num}</span>
                        {isActive && (
                          <span className="project-thumb-live-badge">
                            <span className="status-pulsing-dot" aria-hidden="true" />
                            VIEWING
                          </span>
                        )}
                      </div>
                      <span className="project-thumb-title">{proj.title}</span>
                      <span className="project-thumb-category">{proj.category}</span>
                    </div>

                    <div className={`project-thumb-pip-wrap ${isActive ? 'active' : ''}`}>
                      <span className="project-thumb-pip" aria-hidden="true" />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto">
              <a
                href="https://github.com/Gokul-66"
                target="_blank"
                rel="noreferrer"
                className="hero-cta-btn"
              >
                <span>All Repositories</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="7" x2="17" y2="17" />
                  <polyline points="17 7 17 17 7 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Pinned Scrub Vertical Gallery (Aligned with Left Column on Same Row) */}
          <div className="desktop-projects-showcase hidden lg:block">
            <div className="gallery-viewport-shell corner-frame group">
              {/* 4 Viewfinder Corner Brackets */}
              <span className="corner-reticle corner-tl" aria-hidden="true" />
              <span className="corner-reticle corner-tr" aria-hidden="true" />
              <span className="corner-reticle corner-bl" aria-hidden="true" />
              <span className="corner-reticle corner-br" aria-hidden="true" />

              {/* 1. TOP HEADER PANEL: Project Title, Description, Links, Tags (NEVER overlays diagram) */}
              <div className="gallery-header-panel">
                <div className="gallery-header-top-row">
                  <div className="gallery-header-counter">
                    <span className="gallery-counter-num">{activeProj.num} / 05</span>
                    <span className="gallery-counter-category-pill">{activeProj.category}</span>
                  </div>

                  <div className="gallery-header-actions">
                    <div className="gallery-header-nav-btns">
                      <button
                        type="button"
                        onClick={prevProject}
                        className="gallery-nav-btn"
                        title="Previous project"
                        aria-label="Previous project"
                      >
                        ← Prev
                      </button>
                      <button
                        type="button"
                        onClick={nextProject}
                        className="gallery-nav-btn"
                        title="Next project"
                        aria-label="Next project"
                      >
                        Next →
                      </button>
                    </div>

                    {activeProj.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="gallery-action-link"
                      >
                        {link.label} ↗
                      </a>
                    ))}

                    <a
                      href={activeProj.image}
                      target="_blank"
                      rel="noreferrer"
                      className="gallery-action-link inspect-link"
                      title="Inspect full resolution diagram / interface in new tab"
                    >
                      Inspect ↗
                    </a>
                  </div>
                </div>

                <h3 className="gallery-project-title" aria-live="polite">
                  {typedTitle}
                </h3>

                <p className="gallery-project-desc">
                  {activeProj.description}
                </p>

                <div className="gallery-project-tags">
                  {activeProj.tech.slice(0, 8).map((tech) => (
                    <span key={tech} className="gallery-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. MIDDLE DIAGRAM VIEWPORT: 100% Unobscured Architecture Diagram / Preview */}
              <div ref={viewportRef} className="gallery-viewport">
                <div ref={trackRef} className="gallery-track">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.num}
                      className={`gallery-card ${proj.darkBg ? 'dark-bg' : ''}`}
                    >
                      <a
                        href={proj.image}
                        target="_blank"
                        rel="noreferrer"
                        className="gallery-card-img-wrap"
                        title={`Click to inspect full architecture diagram for ${proj.title}`}
                      >
                        <img
                          src={proj.image}
                          alt={proj.imageAlt || proj.title}
                          className="gallery-card-img"
                          loading="eager"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. BOTTOM FOOTER PANEL: Interactive Scrub Bar & Key Outcome */}
              <div className="gallery-footer-panel">
                <div className="gallery-scrub-bar">
                  {PROJECTS.map((p, i) => (
                    <button
                      key={p.num}
                      type="button"
                      onClick={() => scrollToProject(i)}
                      className="gallery-scrub-segment"
                      title={`Jump to ${p.title}`}
                      aria-label={`Jump to project ${p.num}`}
                    >
                      <div
                        className="gallery-scrub-fill"
                        style={{
                          transform: `scaleX(${i === activeIndex ? 1 : i < activeIndex ? 1 : 0.2})`,
                          opacity: i === activeIndex ? 1 : i < activeIndex ? 0.6 : 0.25,
                        }}
                      />
                    </button>
                  ))}
                </div>

                <div className="gallery-footer-row">
                  <span className="gallery-footer-hint">
                    Scroll page to scrub · Click thumbnail to jump
                  </span>
                  <span className="gallery-footer-outcome">
                    ★ {activeProj.outcome}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET VIEW: Responsive Stacked Cards */}
          <div className="mobile-projects-list lg:hidden">
            {PROJECTS.map((proj) => (
              <article
                key={proj.num}
                className="project-showcase-shell corner-frame group"
                style={{ marginBottom: '24px' }}
              >
                <span className="corner-reticle corner-tl" aria-hidden="true" />
                <span className="corner-reticle corner-tr" aria-hidden="true" />
                <span className="corner-reticle corner-bl" aria-hidden="true" />
                <span className="corner-reticle corner-br" aria-hidden="true" />

                <div className="showcase-header-bar">
                  <div className="showcase-counter">{proj.num} / 05</div>
                  <div className="showcase-header-links">
                    {proj.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="showcase-header-link"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                    <a
                      href={proj.image}
                      target="_blank"
                      rel="noreferrer"
                      className="showcase-header-link"
                    >
                      Inspect ↗
                    </a>
                  </div>
                </div>

                <div className="showcase-body" style={{ padding: '24px' }}>
                  <div className="showcase-category-tag">{proj.category}</div>
                  <h3 className="showcase-title" style={{ fontSize: '1.5rem' }}>
                    {proj.title}
                  </h3>
                  <p className="showcase-desc">{proj.description}</p>

                  <div
                    className={`showcase-image-frame ${proj.darkBg ? 'dark-frame' : ''}`}
                    style={{ marginTop: '16px' }}
                  >
                    <img src={proj.image} alt={proj.imageAlt} loading="lazy" />
                  </div>

                  <div className="showcase-tags-row" style={{ marginTop: '16px' }}>
                    {proj.tech.map((t) => (
                      <span key={t} className="showcase-tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: '14px', fontSize: '0.75rem', color: 'var(--emerald)', fontFamily: 'var(--font-mono)' }}>
                    ★ {proj.outcome}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
