"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-30 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-base-100 rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-base-200 flex flex-col md:flex-row"
      >
        {/* Info Side — unchanged */}
        <div className="md:w-2/5 bg-primary p-12 md:p-16 text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10 font-display text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-lg md:text-xl mb-16 opacity-90 relative z-10 leading-relaxed text-white">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these channels.
          </p>
          <div className="space-y-10 relative z-10">
            {[
              {
                icon: "mail",
                label: "Email",
                value: "shahadatfolio@gmail.com",
              },
              { icon: "call", label: "Phone", value: "+880 1533764047" },
              {
                icon: "location_on",
                label: "Location",
                value: "Bogura, Bangladesh",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer flex-wrap"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-85 mb-1 font-extrabold">
                    {item.label}
                  </p>
                  <p className="text-lg font-medium text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-3/5 p-12 md:p-16 bg-base-100">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text font-bold text-base-content/70 text-sm uppercase tracking-wider">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="input input-bordered w-full h-14 rounded-2xl border-base-300 bg-base-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text font-bold text-base-content/70 text-sm uppercase tracking-wider">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                  className="input input-bordered w-full h-14 rounded-2xl border-base-300 bg-base-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text font-bold text-base-content/70 text-sm uppercase tracking-wider">
                  Subject
                </span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="How can I help?"
                required
                className="input input-bordered w-full h-14 rounded-2xl border-base-300 bg-base-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 outline-none"
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label mb-2">
                <span className="label-text font-bold text-base-content/70 text-sm uppercase tracking-wider">
                  Message
                </span>
              </label>
              <textarea
                name="message"
                required
                className="textarea textarea-bordered h-40 rounded-2xl border-base-300 bg-base-200 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 outline-none p-4"
                placeholder="Tell me about your project..."
              />
            </div>

            <div ref={buttonRef} className="inline-block w-full sm:w-auto">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full sm:px-12 h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <span className="material-symbols-outlined">
                  {loading ? "hourglass_empty" : "send"}
                </span>
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
