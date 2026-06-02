"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setEmailError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setEmailError(null);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_a417gp7",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_wil2wkv",
        {
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
          reply_to: trimmedEmail,
          to_email: "rajveerc944@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "FyOm1V-T6X9-rIj4k"
      )
      .then(() => {
        setSubmitting(false);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS sending error:", error);
        setSubmitting(false);
        setEmailError("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-24 border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headings text-accent-gold text-xs tracking-[0.2em] mb-3 inline-block font-semibold uppercase"
        >
          {"// CONTACT"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headings text-3xl sm:text-4xl md:text-5xl text-text-primary mb-12 font-bold leading-tight"
        >
          Initialize Connection
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Let&apos;s Build Something Together</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I am actively looking for internship setups, open-source projects, and research opportunities in AI/ML, data processing, and Python engineering.
              </p>
            </div>

            {/* Methods Cards */}
            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:rajveerc944@gmail.com"
                className="flex items-center justify-between p-5 bg-bg-card border border-border-subtle rounded-lg hover:border-accent-gold/30 hover:translate-x-1.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] bg-accent-gold/5 border border-accent-gold/10 text-accent-gold flex items-center justify-center rounded-lg">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-text-secondary font-medium tracking-wide uppercase">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-white">rajveerc944@gmail.com</div>
                  </div>
                </div>
                <span className="text-text-secondary group-hover:text-accent-gold transition-colors duration-300">
                  →
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918209769286"
                className="flex items-center justify-between p-5 bg-bg-card border border-border-subtle rounded-lg hover:border-accent-gold/30 hover:translate-x-1.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] bg-accent-gold/5 border border-accent-gold/10 text-accent-gold flex items-center justify-center rounded-lg">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-text-secondary font-medium tracking-wide uppercase">
                      Phone Number
                    </div>
                    <div className="text-sm font-semibold text-white">+91-8209769286</div>
                  </div>
                </div>
                <span className="text-text-secondary group-hover:text-accent-gold transition-colors duration-300">
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rajveer-choudhary-314a0b231/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-bg-card border border-border-subtle rounded-lg hover:border-accent-gold/30 hover:translate-x-1.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] bg-accent-gold/5 border border-accent-gold/10 text-accent-gold flex items-center justify-center rounded-lg">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-text-secondary font-medium tracking-wide uppercase">
                      LinkedIn profile
                    </div>
                    <div className="text-sm font-semibold text-white">linkedin.com/in/rajveer-choudhary-314a0b231</div>
                  </div>
                </div>
                <span className="text-text-secondary group-hover:text-accent-gold transition-colors duration-300">
                  →
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/raj-239205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-bg-card border border-border-subtle rounded-lg hover:border-accent-gold/30 hover:translate-x-1.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] bg-accent-gold/5 border border-accent-gold/10 text-accent-gold flex items-center justify-center rounded-lg">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-text-secondary font-medium tracking-wide uppercase">
                      GitHub URL
                    </div>
                    <div className="text-sm font-semibold text-white">github.com/raj-239205</div>
                  </div>
                </div>
                <span className="text-text-secondary group-hover:text-accent-gold transition-colors duration-300">
                  →
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center p-5 bg-bg-card border border-border-subtle rounded-lg">
                <div className="w-[40px] h-[40px] bg-accent-gold/5 border border-accent-gold/10 text-accent-gold flex items-center justify-center rounded-lg mr-4">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[0.7rem] text-text-secondary font-medium tracking-wide uppercase">
                    Current Location
                  </div>
                  <div className="text-sm font-semibold text-white">Jaipur, Rajasthan, India</div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="inline-flex items-center gap-3 py-3 px-5 border border-border-subtle rounded-lg bg-bg-card text-accent-gold text-xs font-semibold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="card p-8 shadow-premium">
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-headings text-[0.75rem] text-accent-gold uppercase tracking-wider font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-bg-secondary border border-accent-gold/15 rounded-lg p-3.5 text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:shadow-[0_0_0_3px_rgba(247,201,72,0.1)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-headings text-[0.75rem] text-accent-gold uppercase tracking-wider font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-bg-secondary border border-accent-gold/15 rounded-lg p-3.5 text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:shadow-[0_0_0_3px_rgba(247,201,72,0.1)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-headings text-[0.75rem] text-accent-gold uppercase tracking-wider font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Collaboration / Inquiry"
                      className="bg-bg-secondary border border-accent-gold/15 rounded-lg p-3.5 text-white font-body text-sm outline-none transition-all duration-300 focus:border-accent-gold focus:shadow-[0_0_0_3px_rgba(247,201,72,0.1)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-headings text-[0.75rem] text-accent-gold uppercase tracking-wider font-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Rajveer, I would love to connect..."
                      className="bg-bg-secondary border border-accent-gold/15 rounded-lg p-3.5 text-white font-body text-sm outline-none resize-y transition-all duration-300 focus:border-accent-gold focus:shadow-[0_0_0_3px_rgba(247,201,72,0.1)]"
                    />
                  </div>

                  {emailError && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center text-red-400 text-xs font-semibold">
                      {emailError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 bg-accent-gold text-bg-primary font-semibold text-sm rounded-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending Message..." : "Send Message"}
                    <Send size={16} strokeWidth={2.5} />
                  </button>
                </form>
              ) : (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center text-green-400 flex flex-col items-center gap-3">
                  <CheckCircle size={44} />
                  <div>
                    <strong className="text-white text-md block mb-1">Message Sent Successfully</strong>
                    Your message was received successfully. I&apos;ll get back to you shortly.
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
