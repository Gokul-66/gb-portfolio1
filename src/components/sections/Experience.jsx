import { RevealOnScroll } from '../Reveal';

export const Experience = () => {
  const milestones = [
    {
      year: '2026 — Present',
      tag: 'Professional',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: 'Software Engineer at InnerSpace',
      description: 'Building backend reservation engines with Redis TTL holds, conflict validation, Razorpay processing, and BullMQ async notification dispatch.',
    },
    {
      year: '2025',
      tag: 'Performance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: '85–93% Latency Optimization',
      description: 'Profiled slow database queries and designed a Redis cache-aside layer that lowered critical API response times from ~2s to 150–300ms.',
    },
    {
      year: '2025',
      tag: 'Architecture',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Asynchronous Event Pipeline',
      description: 'Replaced synchronous XML parsing and blocking I/O with event-driven AWS SQS + BullMQ queues, cutting workflow execution time by 40%.',
    },
    {
      year: '2024',
      tag: 'Full-Stack',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
          <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      ),
      title: 'Distributed System Deliveries',
      description: 'Engineered open-source real-time systems including a BullMQ ride dispatcher and an AI-powered resume parsing engine with Groq LLM inference.',
    },
  ];

  return (
    <section id="experience" className="milestones-section">
      <div className="site-container">
        <RevealOnScroll>
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag">04 / Experience & Milestones</span>
            <h2 className="section-headline">
              Recognition &<br />Milestones
            </h2>
            <p className="section-description" style={{ maxWidth: '600px' }}>
              A focused set of engineering milestones that demonstrate real impact, architectural correctness, and delivery under production pressure.
            </p>
          </div>

          <div className="milestones-grid">
            {milestones.map((m, idx) => (
              <article key={idx} className="milestone-card">
                <div className="milestone-top-row">
                  <span>{m.year}</span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)', margin: '0 10px' }} />
                  <span style={{ color: 'var(--emerald)' }}>{m.tag}</span>
                </div>

                <div className="milestone-icon-box">
                  {m.icon}
                </div>

                <div>
                  <h3 className="milestone-title">{m.title}</h3>
                  <p className="milestone-desc" style={{ marginTop: '8px' }}>{m.description}</p>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
