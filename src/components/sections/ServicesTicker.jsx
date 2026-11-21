export const ServicesTicker = () => {
  const row1Items = [
    { highlight: 'Web Dev & Backend Systems', tags: ['Architecture', 'Queues', 'APIs'] },
    { highlight: 'Full-Stack Engineering', tags: ['React', 'Next.js', 'Node.js'] },
    { highlight: 'Distributed Services', tags: ['BullMQ', 'AWS SQS', 'Microservices'] },
    { highlight: 'Performance Optimization', tags: ['Redis', 'Cache-Aside', 'Sub-300ms'] },
  ];

  const row2Items = [
    { highlight: 'Cloud & Infrastructure', tags: ['Docker', 'GCP', 'AWS'] },
    { highlight: 'High Concurrency', tags: ['Redis Holds', 'Zero Double-Booking'] },
    { highlight: 'Data Correctness', tags: ['MySQL', 'MongoDB', 'ACID'] },
    { highlight: 'Event Streaming', tags: ['Kafka', 'Decoupled Topology'] },
  ];

  const fullRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const fullRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="services-banner-section" aria-label="Services and focus areas">
      {/* Auto-scrolling Track 1 (Left) */}
      <div className="services-marquee-wrapper" style={{ marginBottom: '20px' }}>
        <div className="services-marquee-track track-left">
          {fullRow1.map((item, idx) => (
            <div key={`r1-${idx}`} className="services-marquee-group">
              <span className="services-marquee-heading">{item.highlight}</span>
              <span className="services-marquee-dot">•</span>
              <div className="services-tags-inline">
                {item.tags.map(t => (
                  <span key={t} className="services-tag-mini">{t}</span>
                ))}
              </div>
              <span className="services-marquee-separator">//</span>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scrolling Track 2 (Right) */}
      <div className="services-marquee-wrapper">
        <div className="services-marquee-track track-right">
          {fullRow2.map((item, idx) => (
            <div key={`r2-${idx}`} className="services-marquee-group">
              <span className="services-marquee-heading">{item.highlight}</span>
              <span className="services-marquee-dot">•</span>
              <div className="services-tags-inline">
                {item.tags.map(t => (
                  <span key={t} className="services-tag-mini">{t}</span>
                ))}
              </div>
              <span className="services-marquee-separator">//</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
