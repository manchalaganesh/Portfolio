import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mic } from 'lucide-react';

const experiences = [
  {
    title: 'Ethical Hacking Workshop',
    location: 'NIAT Campus',
    description: 'Participated in an intensive ethical hacking workshop covering penetration testing methodologies, vulnerability assessment, and cybersecurity best practices.',
    icon: Shield,
  },
  {
    title: 'Cybersecurity Podcast Discussion',
    location: 'Online Event',
    description: 'Joined a podcast discussion about current cybersecurity trends, emerging threats, and real-world challenges in the digital security landscape.',
    icon: Mic,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 bg-zinc-950">
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">My journey</p>
          <h2 className="text-4xl font-bold text-white">Experience & Achievements</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {i < experiences.length - 1 && (
                  <div className="absolute left-[18px] top-12 bottom-0 w-px bg-zinc-800" />
                )}
                {/* Icon */}
                <div className="absolute left-0 top-0 w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-emerald-400" />
                </div>
                {/* Content */}
                <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-300">
                  <p className="text-xs text-emerald-400/70 uppercase tracking-wider mb-1">{exp.location}</p>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}