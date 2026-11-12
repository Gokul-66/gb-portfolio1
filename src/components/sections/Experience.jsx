import { EXPERIENCE } from '../../data/content';

export const Experience = () => {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Experience</h2>
        <p className="section-lead">Production code at these companies is confidential, so it isn't linked here.</p>
        <div className="job-list">
          {EXPERIENCE.map(job => (
            <article key={`${job.company}-${job.role}`} className="job">
              <div className="job-meta">
                <h3>{job.company}</h3>
                <p>{job.role}</p>
                <p>{job.period}</p>
              </div>
              <ul className="plain-list">
                {job.highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
