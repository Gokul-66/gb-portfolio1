import { TESTIMONIALS } from '../../data/content';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section-title">Testimonials</h2>
        <div className="testimonial-grid">
          {TESTIMONIALS.map(item => (
            <figure key={item.name} className="testimonial">
              <blockquote>{item.quote}</blockquote>
              <figcaption>{item.name}, {item.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
