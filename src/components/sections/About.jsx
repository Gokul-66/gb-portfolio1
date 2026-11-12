import { SKILLS } from '../../data/content';

export const About = () => {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Skills</h2>
        <dl className="skills-grid">
          {SKILLS.map(group => (
            <div key={group.name}>
              <dt>{group.name}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
