import { PROJECTS } from '../../data/content';

const Flow = ({ steps }) => (
  <ol className="flow" aria-label="Request flow">
    {steps.map(step => <li key={step}>{step}</li>)}
  </ol>
);

const CaseStudy = ({ project }) => (
  <article className="case-study" aria-labelledby={`${project.id}-title`}>
    <header className="case-header">
      <h3 id={`${project.id}-title`}>{project.title}</h3>
      <p className="case-pitch">{project.pitch}</p>
      <ul className="case-links">
        {project.links.map(link => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          </li>
        ))}
      </ul>
    </header>

    <div className="case-body">
      <div>
        <h4>The problem</h4>
        <p>{project.problem}</p>
        <h4>How it works</h4>
        <Flow steps={project.flow} />
        <h4>Key decisions</h4>
        <ul className="plain-list">
          {project.decisions.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h4>Evidence</h4>
        <table className="evidence-table">
          <caption className="visually-hidden">Measured results for {project.title}</caption>
          <tbody>
            {project.evidence.map(row => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="evidence-note">{project.evidenceNote}</p>
        <h4>Known limits</h4>
        <ul className="plain-list">
          {project.limits.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className="case-stack">{project.stack.join(' · ')}</p>
      </div>
    </div>
  </article>
);

export const Projects = () => {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <h2 id="work-title" className="section-title">Selected work</h2>
        <p className="section-lead">
          Public projects, including what I measured and what they don't do yet.
        </p>
        {PROJECTS.map(project => <CaseStudy key={project.id} project={project} />)}
      </div>
    </section>
  );
};
