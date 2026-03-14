import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 90, color: 'from-orange-500 to-orange-400' },
  { name: 'CSS', level: 85, color: 'from-blue-500 to-blue-400' },
  { name: 'Bootstrap', level: 80, color: 'from-purple-500 to-purple-400' },
  { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-yellow-400' },
  { name: 'Python', level: 70, color: 'from-emerald-500 to-emerald-400' },
  { name: 'Responsive Design', level: 85, color: 'from-pink-500 to-pink-400' },
  { name: 'Database Management', level: 60, color: 'from-teal-500 to-teal-400' },
];

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-zinc-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-zinc-800/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 bg-zinc-950">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">What I know</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}