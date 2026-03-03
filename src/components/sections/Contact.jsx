
import { useState } from "react";
import { RevealOnScroll } from "../Reveal";
import emailjs from "emailjs-com";
import React from "react";


export const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gokul-babu-870b11226/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M6.94 8.5H3.56v11h3.38v-11ZM5.25 3a1.95 1.95 0 1 0 0 3.9A1.95 1.95 0 0 0 5.25 3Zm4.04 5.5v11h3.37v-5.45c0-1.44.27-2.84 2.05-2.84 1.76 0 1.78 1.64 1.78 2.94v5.35h3.38v-6.03c0-2.96-.64-5.23-4.1-5.23-1.67 0-2.78.91-3.24 1.78h-.05V8.5H9.29Z" />
        </svg>
      ),
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full min-w-[300px] md:w-[560px] p-6 md:p-8 glass-card glass-card-hover">
          <h2 className="section-title mb-8">
            {" "}
            Get In Touch
          </h2>
          {/* Contact Meta Row */}
          <div className="flex items-center justify-center gap-5 mb-8">

            {/* LinkedIn */}
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="
        h-11 w-11 rounded-full
        border border-white/20
        bg-white/[0.06]
        text-slate-200/90
        flex items-center justify-center
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-cyan-200/50
        hover:text-cyan-100
        hover:bg-cyan-500/10
        hover:shadow-[0_0_18px_rgba(103,232,249,0.24)]
      "
              >
                {link.icon}
              </a>
            ))}

            {/* Phone Badge */}
            <div
              className="
      h-11 px-4 rounded-full
      border border-white/20
      bg-white/[0.06]
      text-slate-300/90 text-sm
      flex items-center
    "
            >
              📞 +91 9747461315
            </div>

          </div>
          <h6 className="flex items-center justify-center mb-8">
            {" "}
            OR
          </h6>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white transition duration-300 focus:outline-none focus:border-cyan-200/55 focus:bg-cyan-500/10 focus:shadow-[0_0_20px_rgba(103,232,249,0.2)]"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white transition duration-300 focus:outline-none focus:border-cyan-200/55 focus:bg-cyan-500/10 focus:shadow-[0_0_20px_rgba(103,232,249,0.2)]"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white transition duration-300 focus:outline-none focus:border-cyan-200/55 focus:bg-cyan-500/10 focus:shadow-[0_0_20px_rgba(103,232,249,0.2)]"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full glow-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
