import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const codeLines = [
  { indent: 0, text: 'const skills = {', color: 'text-purple-400' },
  { indent: 1, text: 'frontend: [', color: 'text-blue-400' },
  { indent: 2, text: '"HTML", "CSS", "Bootstrap",', color: 'text-emerald-400' },
  { indent: 2, text: '"JavaScript", "Responsive Design"', color: 'text-emerald-400' },
  { indent: 1, text: '],', color: 'text-blue-400' },
  { indent: 1, text: 'backend: [', color: 'text-blue-400' },
  { indent: 2, text: '"Python", "Database Management"', color: 'text-emerald-400' },
  { indent: 1, text: '],', color: 'text-blue-400' },
  { indent: 1, text: 'interests: [', color: 'text-blue-400' },
  { indent: 2, text: '"Web Development"', color: 'text-emerald-400' },
  { indent: 1, text: ']', color: 'text-blue-400' },
  { indent: 0, text: '};', color: 'text-purple-400' },
];

export default function CodeSkills() {
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
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm shadow-2xl"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3 bg-zinc-800/50 border-b border-zinc-700/50">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-zinc-400 font-mono">skills.js</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
            </div>

            {/* Code content */}
            <div className="p-6 sm:p-8 font-mono text-sm overflow-x-auto">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative"
                  style={{ paddingLeft: `${line.indent * 24}px` }}
                >
                  <span className="absolute -left-8 text-zinc-700 select-none hidden sm:inline">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`${line.color} group-hover:text-emerald-300 transition-colors duration-200`}>
                    {line.text}
                  </span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="inline-block w-2 h-4 ml-0.5 bg-emerald-400"
                  />
                </motion.div>
              ))}
            </div>

            {/* Animated cursor effect */}
            <motion.div
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent origin-left"
              style={{ width: '100%' }}
            />
          </motion.div>

          {/* Skill tags below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              'HTML',
              'CSS',
              'Bootstrap',
              'JavaScript',
              'Python',
              'Responsive Design',
              'Database',
            ].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800/50 text-zinc-300 text-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}