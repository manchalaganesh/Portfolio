import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import ResumePreview from './ResumePreview';

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'manchalaganesh12@gmail.com',
    href: 'mailto:manchalaganesh12@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/manchalaganesh',
    href: 'https://github.com/manchalaganesh',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ganesh-manchala',
    href: 'https://www.linkedin.com/in/ganesh-manchala/',
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // ✅ Formspree submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mnjgoaow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-zinc-950">

      {/* Background fix */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm uppercase mb-2">
            Let's connect
          </p>
          <h2 className="text-4xl font-bold text-white">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-zinc-400">
              I'm always open to discussing new projects or opportunities.
            </p>

            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 transition cursor-pointer"
                >
                  <Icon className="text-emerald-400" size={18} />
                  <div>
                    <p className="text-xs text-zinc-500">{label}</p>
                    <p className="text-sm text-white">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <ResumePreview />
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
              />

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
              />

              <textarea
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Your Message"
                required
                className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
              />

              <button
                type="submit"
                className="w-full py-3 bg-emerald-500 text-black rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
