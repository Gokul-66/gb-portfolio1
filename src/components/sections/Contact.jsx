import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PROFILE } from '../../data/content';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const update = field => e => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending...' });

    emailjs
      .send(
        'service_3539t3u',
        'template_6p3v0d8',
        {
          from_name: formData.name,
          to_name: PROFILE.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey: 'VfL933Fw60XlXwRvd' }
      )
      .then(() => {
        setStatus({ state: 'success', message: 'Message sent. I will reply shortly.' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({
          state: 'error',
          message: `That didn't send. Please email ${PROFILE.email} directly.`,
        });
      });
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <h2 id="contact-title" className="section-title">Contact</h2>
          <p className="contact-lead">
            Hiring for a backend or full-stack role? I'd be glad to walk through any of this work.
          </p>
          <ul className="contact-links">
            <li><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
            <li><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="/resume.pdf" download="Gokul_Babu_Resume.pdf">Resume (PDF)</a></li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input type="text" autoComplete="name" value={formData.name} onChange={update('name')} required />
          </label>
          <label>
            Email
            <input type="email" autoComplete="email" value={formData.email} onChange={update('email')} required />
          </label>
          <label>
            Message
            <textarea rows="5" value={formData.message} onChange={update('message')} required />
          </label>
          <button type="submit" className="button button-primary" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending...' : 'Send message'}
          </button>
          <p className={`form-status form-status-${status.state}`} role="status">
            {status.state !== 'loading' && status.message}
          </p>
        </form>
      </div>
    </section>
  );
};
