export const SkillsTicker = () => {
  const track1 = [
    'Node.js',
    'React',
    'Next.js',
    'TypeScript',
    'Express.js',
    'BullMQ',
    'Redis',
    'AWS SQS',
    'Docker',
    'MySQL',
    'MongoDB',
    'GCP',
    'Kafka',
    'Tailwind CSS',
  ];

  const track2 = [
    'System Architecture',
    'Event-Driven Queues',
    'Concurrency Control',
    'Cache-Aside Strategies',
    'REST APIs',
    'GraphQL',
    'CI/CD Pipelines',
    'Microservices',
    'Idempotent Workers',
    'Performance Tuning',
  ];

  const fullTrack1 = [...track1, ...track1, ...track1, ...track1];
  const fullTrack2 = [...track2, ...track2, ...track2, ...track2];

  return (
    <section className="skills-marquee-section" aria-label="Skills & Technologies">
      {/* Track 1: Scrolling Left */}
      <div className="marquee-track track-left" style={{ marginBottom: '16px' }}>
        {fullTrack1.map((item, index) => (
          <span key={`t1-${index}`} className="marquee-item">
            {item}
            <span className="marquee-separator">•</span>
          </span>
        ))}
      </div>

      {/* Track 2: Scrolling Right */}
      <div className="marquee-track track-right">
        {fullTrack2.map((item, index) => (
          <span key={`t2-${index}`} className="marquee-item">
            {item}
            <span className="marquee-separator">•</span>
          </span>
        ))}
      </div>
    </section>
  );
};
