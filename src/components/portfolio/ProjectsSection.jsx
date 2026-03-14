import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Utensils, Leaf } from 'lucide-react';

const projects = [
  {
    title: 'Food Munch',
    description: 'A responsive and user-friendly food enthusiast platform featuring curated recipes, restaurant reviews, and culinary blogs with intuitive navigation and interactive browsing.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    icon: Utensils,
    accent: 'emerald',
    link: 'https://foodonfoodmunch.niat.tech/',
  },
  {
    title: 'DigiPanchayath',
    description: 'A digital platform for rural governance built during a 48-hour hackathon. Features issue reporting, real-time tracking, and auto-routing system serving all 33 districts of Telangana.',
    tech: ['HTML', 'CSS', 'Supabase', 'Supabase Auth'],
    icon: Leaf,
    accent: 'teal',
    link: 'https://telangana.lovable.app/',
  },
];

const accentMap = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    icon: 'text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  teal: {
    bg: 'bg-teal-500/10',
    border: 'hover:border-teal-500/30',
    icon: 'text-teal-400',
    tag: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => {
            const colors = accentMap[project.accent];
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 ${colors.border} transition-all duration-500 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer`}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${colors.icon} group-hover:rotate-6 transition-transform duration-300`} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  {project.link && (
                    <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                  )}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.15 + idx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1 text-xs rounded-lg border ${colors.tag} transition-all duration-200`}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}