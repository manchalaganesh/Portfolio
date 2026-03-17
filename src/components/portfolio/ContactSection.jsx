import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ResumePreview from './ResumePreview';

const RESUME_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b56a37418a4de906846443/2b325b82e_Ganesh_Manchala_Resume.pdf';

const socials = [
  { icon: Mail, label: 'Email', value: 'manchalaganesh12@gmail.com', href: 'mailto:manchalaganesh12@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/ganesh', href: 'https://github.com/manchalaganesh' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/ganesh', href: 'https://www.linkedin.com/in/ganesh-manchala/' },
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">Let's connect</p>
          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-zinc-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/15 transition-colors">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{label}</p>
                    <p className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <ResumePreview />
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="group w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-600 text-zinc-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform inline-block">Send Message</span>
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
