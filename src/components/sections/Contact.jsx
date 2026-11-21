import { useState } from 'react';
import emailjs from 'emailjs-com';
import { RevealOnScroll } from '../Reveal';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const email = 'gokulmr65@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill out all fields.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending message...' });

    emailjs
      .send(
        'service_3539t3u',
        'template_6p3v0d8',
        {
          from_name: formData.name,
          to_name: 'Gokul Babu',
          from_email: formData.email,
          message: formData.message,
        },
        'VfL933Fw60XlXwRvd'
      )
      .then(() => {
        setStatus({ state: 'success', message: 'Message sent successfully! I will reply shortly.' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({
          state: 'error',
          message: `Unable to send via form right now. Please email directly to ${email}.`,
        });
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="site-container">
        <RevealOnScroll>
          <div className="contact-split-grid">
            {/* Left Column: Heading, Subtext, Social Links */}
            <div>
              <span className="section-tag">06 / Contact</span>
              <h2 className="contact-headline-big">
                Let's Work<br />
                <span className="contact-headline-dimmed">Together</span>
              </h2>

              <p className="contact-subtext">
                Have a project in mind? Looking for a Software Engineer to help build high-performance backend systems, distributed architectures, or reliable full-stack applications? I am always open to discussing new engineering opportunities.
              </p>

              <div className="contact-social-pills">
                <a
                  href="https://github.com/Gokul-66"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-pill"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/gokul-babu-870b11226/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-pill"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="contact-social-pill"
                  aria-label="Email Gokul"
                  title="Send Email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>

                <a
                  href="/resume.pdf"
                  download="Gokul_Babu_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-pill"
                  aria-label="Download Resume (PDF)"
                  title="Download Resume (PDF)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Signature Email Card + Direct Form */}
            <div>
              {/* Roman Caseres Signature Email Card */}
              <div className="email-showcase-card">
                <div className="email-card-top-icons">
                  <div className="email-icon-mail">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="email-icon-arrow">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                <div>
                  <span className="email-drop-label">Drop me a line</span>
                  <h3 className="email-display-text">
                    {email}
                  </h3>

                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="email-copy-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copied ? '✓ Copied to clipboard!' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>

              {/* Direct Form */}
              <div className="contact-form-box">
                <div className="contact-form-title">Or send a direct message</div>

                {status.state !== 'idle' && (
                  <div
                    style={{
                      padding: '10px 14px',
                      borderRadius: '4px',
                      marginBottom: '14px',
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--font-mono)',
                      background: status.state === 'success' ? 'var(--emerald-bg)' : 'rgba(239, 68, 68, 0.1)',
                      color: status.state === 'success' ? 'var(--emerald)' : '#ef4444',
                      border: `1px solid ${status.state === 'success' ? 'var(--emerald)' : 'rgba(239, 68, 68, 0.3)'}`,
                    }}
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form-grid">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="contact-input"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="contact-input"
                    required
                  />
                  <textarea
                    placeholder="Your Message / Engineering Proposal"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="contact-textarea"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status.state === 'loading'}
                    className="contact-submit-btn"
                  >
                    {status.state === 'loading' ? 'Sending...' : 'Send Message ↗'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
