import { RevealOnScroll } from '../Reveal';

const TOOLKIT = [
  {
    label: 'Frontend Engineering',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'RxJS', 'HTML / CSS'],
  },
  {
    label: 'Backend Engineering',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Async Programming'],
  },
  {
    label: 'Distributed Systems',
    items: ['Redis / BullMQ', 'AWS SQS', 'Kafka', 'Event-Driven Architecture', 'Job Queues'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB', 'Cassandra', 'Data Modelling', 'Query Optimisation'],
  },
  {
    label: 'Cloud & Infrastructure',
    items: ['AWS S3 / SQS / CloudWatch', 'GCP App Engine', 'GCP Cloud Scheduler', 'Docker'],
  },
  {
    label: 'Integrations & Tools',
    items: ['Firebase Auth', 'Razorpay', 'Zoho CRM / Invoice', 'Git', 'CI/CD'],
  },
];

export const Toolkit = () => {
  return (
    <section id="toolkit" className="section" aria-label="Technical toolkit">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">Toolkit</h2>
            <div className="section-rule" aria-hidden="true" />
          </div>
        </RevealOnScroll>
      </div>

      <div className="container">
        <RevealOnScroll>
          <div className="toolkit-grid">
            {TOOLKIT.map((group, i) => (
              <div key={group.label} className="toolkit-group">
                <div className="toolkit-group-label">{group.label}</div>
                <ul className="toolkit-items" aria-label={group.label}>
                  {group.items.map(item => (
                    <li key={item} className="toolkit-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
