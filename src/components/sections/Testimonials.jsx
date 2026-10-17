import { RevealOnScroll } from '../Reveal';

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Gokul demonstrated exceptional backend rigor while designing our reservation workflows. His handling of concurrent asset holds with Redis TTLs eliminated double bookings entirely.',
      name: 'Engineering Lead',
      role: 'InnerSpace Co-working',
      avatar: '👨‍💼',
    },
    {
      quote:
        'His focus on latency profiling and cache-aside implementation brought our critical endpoint response times down by over 85%. He understands how to debug under load.',
      name: 'Senior Full-Stack Architect',
      role: 'Production Collaborator',
      avatar: '👨‍💻',
    },
    {
      quote:
        'Gokul does not just build features; he cares about system correctness, idempotency, and failure isolation. His asynchronous queue architectures are clean, resilient, and easy to maintain.',
      name: 'Technical Peer & Reviewer',
      role: 'Open-Source Collaborator',
      avatar: '👩‍💻',
    },
    {
      quote:
        'Fast turnaround, clean TypeScript and Node.js code, and thorough consideration of edge cases in worker retries and queue concurrency.',
      name: 'Frontend Lead',
      role: 'Project Collaborator',
      avatar: '🧑‍💻',
    },
  ];

  // Repeat for continuous infinite seamless marquee
  const stream = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="site-container" style={{ marginBottom: '36px' }}>
        <RevealOnScroll>
          <span className="section-tag">05 / Testimonials</span>
          <h2 className="section-headline">
            What People<br />Say
          </h2>
        </RevealOnScroll>
      </div>

      {/* Automatic Continuous Scrolling Track */}
      <div className="testimonials-scroller-wrap">
        <div className="testimonials-track track-left">
          {stream.map((t, idx) => (
            <article key={idx} className="testimonial-card-auto">
              <div>
                <div className="testimonial-quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <p className="testimonial-text">"{t.quote}"</p>
              </div>

              <div className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden="true">{t.avatar}</div>
                <div>
                  <h4 className="testimonial-author-name">{t.name}</h4>
                  <p className="testimonial-author-role">{t.role}</p>
                </div>
                <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
