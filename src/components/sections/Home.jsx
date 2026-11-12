import { HERO_PROOF, PROFILE } from '../../data/content';

export const Home = () => {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow">{PROFILE.role} · {PROFILE.location}</p>
        <h1>{PROFILE.headline}</h1>
        <p className="hero-summary">{PROFILE.summary}</p>
        <div className="hero-actions">
          <a href="#work" className="button button-primary">See the work</a>
          <a href="/resume.pdf" download="Gokul_Babu_Resume.pdf" className="button">Download resume</a>
        </div>

        <dl className="proof-grid">
          {HERO_PROOF.map(item => (
            <div key={item.label} className="proof-item">
              <dt>{item.label}</dt>
              <dd>
                <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
