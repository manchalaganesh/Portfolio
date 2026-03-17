import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 bg-zinc-950">
      
      {/* ✅ FIX 1: Prevent background from blocking clicks */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />

      {/* ✅ FIX 2: Ensure content is above background */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
            Let's connect
          </p>
          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition cursor-pointer"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-lg">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">{label}</p>
                    <p className="text-sm text-zinc-300">{value}</p>
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
            <form
  action="https://formspree.io/f/mnjgoaow"
  method="POST"
  className="space-y-5"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    className="w-full p-3 rounded bg-zinc-900 text-white border border-zinc-800"
  />

  <button
    type="submit"
    className="w-full py-3 bg-emerald-500 text-black rounded-xl font-semibold"
  >
    Send Message
  </button>
</form>
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} />
                    Sent
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
