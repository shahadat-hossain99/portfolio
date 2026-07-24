"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

// Every contact channel rendered the same way: icon, title, subtitle, actions.
// copy: shown for anything with a literal value worth copying.
// href: shown as a separate "open" action for anything with somewhere to go.
const ITEMS = [
  {
    icon: "mail",
    title: "Email",
    subtitle: "shahadatfolio@gmail.com",
    copyValue: "shahadatfolio@gmail.com",
    href: "mailto:shahadatfolio@gmail.com",
  },
  {
    icon: "code",
    title: "GitHub",
    subtitle: "Explore my projects",
    copyValue: "https://github.com/shahadat-hossain99",
    href: "https://github.com/shahadat-hossain99",
  },
  {
    icon: "work",
    title: "LinkedIn",
    subtitle: "Connect with me",
    copyValue: "https://www.linkedin.com/in/md-shahadat-hossain-coder",
    href: "https://www.linkedin.com/in/md-shahadat-hossain-coder",
  },
  {
    icon: "call",
    title: "Phone",
    subtitle: "+880 1533764047",
    copyValue: "+880 1533764047",
    href: "tel:+8801533764047",
  },
  // {
  //   icon: "location_on",
  //   title: "Location",
  //   subtitle: "Bangladesh",
  //   copyValue: "Bangladesh",
  //   href: null,
  // },
];

const FIELDS = [
  {
    name: "from_name",
    label: "Name",
    type: "text",
    icon: "person",
    placeholder: "John Doe",
  },
  {
    name: "from_email",
    label: "Email",
    type: "email",
    icon: "alternate_email",
    placeholder: "john@example.com",
  },
];

const fade = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [errors, setErrors] = useState({});

  const handleCopy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      toast.success(`${label} copied to clipboard!`);
      setTimeout(
        () => setCopiedLabel((prev) => (prev === label ? null : prev)),
        1800,
      );
    } catch (err) {
      toast.error("Couldn't copy — please copy it manually.");
    }
  };

  const clearFieldError = (name) => {
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = (formEl) => {
    const data = new FormData(formEl);
    const name = (data.get("from_name") || "").toString().trim();
    const email = (data.get("from_email") || "").toString().trim();
    const subject = (data.get("subject") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nextErrors = {};
    if (name.length < 2) nextErrors.from_name = "Please enter your name.";
    if (!emailPattern.test(email))
      nextErrors.from_email = "Enter a valid email address.";
    if (subject.length < 3) nextErrors.subject = "Give it a short subject.";
    if (message.length < 20)
      nextErrors.message = "A few more details would help — 20+ characters.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };
    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate(formRef.current)) return;
    setLoading(true);

    toast
      .promise(
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        ),
        {
          pending: "Sending your message...",
          success: "Message sent! I'll get back to you soon.",
          error: "Failed to send. Please try again.",
        },
      )
      .then(() => {
        formRef.current.reset();
        setFocusedField(null);
        setErrors({});
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 md:px-0"
    >
      {/* Ambient background glow — subtle, theme-safe */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Info Side — plain, no enclosing card */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Badge Style Tag */}
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-display leading-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 max-w-md leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these channels.
          </p>
          <p className="flex items-center gap-2 text-sm text-base-content/50 mt-3 mb-10">
            <span className="material-symbols-outlined text-base">
              schedule
            </span>
            Usually responds within 24–48 hours
          </p>

          <div className="space-y-3">
            {ITEMS.map((item, i) => {
              const isCopied = copiedLabel === item.title;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  onClick={() => handleCopy(item.copyValue, item.title)}
                  title="Click to copy"
                  className="flex items-center gap-2 p-4 rounded-xl border border-base-200 bg-base-200/40 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="flex-1 min-w-0 flex items-center gap-4 text-left">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium text-base-content leading-tight">
                        {item.title}
                      </p>
                      <p className="text-sm text-base-content/60 leading-snug wrap-break-word">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 shrink-0">
                    <span
                      className={`material-symbols-outlined text-sm w-7 h-7 flex items-center justify-center rounded-md transition-all duration-300 ${
                        isCopied
                          ? "text-primary"
                          : "text-base-content/30 group-hover:text-base-content/60"
                      }`}
                    >
                      {isCopied ? "check" : "content_copy"}
                    </span>

                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Open ${item.title}`}
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-base-content/30 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        <span className="material-symbols-outlined text-sm">
                          open_in_new
                        </span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Form Side — its own self-contained card */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-base-100 border border-base-200 rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] p-6 sm:p-8 md:p-10"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-1">
            Send a Message
          </h3>
          <p className="text-sm text-base-content/60 mb-7">
            Fill out the form below and I&apos;ll get back to you soon.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FIELDS.map((field) => (
                <div className="form-control" key={field.name}>
                  <label className="label mb-2">
                    <span className="label-text font-bold text-base-content/70 text-xs uppercase tracking-wider">
                      {field.label}
                    </span>
                  </label>
                  <div className="relative">
                    <span
                      className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${
                        focusedField === field.name
                          ? "text-primary"
                          : "text-base-content/35"
                      }`}
                    >
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      aria-invalid={Boolean(errors[field.name])}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      onChange={() => clearFieldError(field.name)}
                      className={`input input-bordered w-full h-13 pl-12 rounded-xl bg-base-200 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none ${
                        errors[field.name]
                          ? "border-error focus:border-error"
                          : "border-base-300 focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors[field.name] && (
                    <p className="text-xs text-error mt-1.5 ml-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text font-bold text-base-content/70 text-xs uppercase tracking-wider">
                  Subject
                </span>
              </label>
              <div className="relative">
                <span
                  className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${
                    focusedField === "subject"
                      ? "text-primary"
                      : "text-base-content/35"
                  }`}
                >
                  subject
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can I help?"
                  required
                  aria-invalid={Boolean(errors.subject)}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  onChange={() => clearFieldError("subject")}
                  className={`input input-bordered w-full h-13 pl-12 rounded-xl bg-base-200 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none ${
                    errors.subject
                      ? "border-error focus:border-error"
                      : "border-base-300 focus:border-primary"
                  }`}
                />
              </div>
              {errors.subject && (
                <p className="text-xs text-error mt-1.5 ml-1">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text font-bold text-base-content/70 text-xs uppercase tracking-wider">
                  Message
                </span>
              </label>
              <textarea
                name="message"
                required
                aria-invalid={Boolean(errors.message)}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                onChange={() => clearFieldError("message")}
                className={`textarea textarea-bordered h-36 w-auto rounded-xl bg-base-200 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none p-4 resize-none ${
                  errors.message
                    ? "border-error focus:border-error"
                    : "border-base-300 focus:border-primary"
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-xs text-error mt-1.5 ml-1">
                  {errors.message}
                </p>
              )}
            </div>

            <div ref={buttonRef} className="inline-block w-full">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full h-14 rounded-xl text-base font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 group"
              >
                {loading ? "Sending..." : "Send Message"}
                <span
                  className={`material-symbols-outlined transition-transform duration-300 ${
                    loading ? "animate-spin" : "group-hover:translate-x-1"
                  }`}
                >
                  {loading ? "progress_activity" : "send"}
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
      <ToastContainer theme="colored" position="bottom-right" newestOnTop />
    </section>
  );
};

export default Contact;
