import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

const highlights = [
  { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India' },
  { icon: GraduationCap, label: 'Focus', value: 'Computer Science' },
  { icon: Heart, label: 'Passion', value: 'Web Dev & Cybersecurity' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                I am a passionate computer science student with a deep interest in web development, cybersecurity, and problem solving. I love turning ideas into reality through clean, well-structured code.
              </p>
              <p>
                My journey in tech started with curiosity about how websites work, which quickly grew into a full-blown passion for building modern, responsive web applications. I'm constantly learning new technologies and frameworks to stay ahead in this ever-evolving field.
              </p>
              <p>
                When I'm not coding, you'll find me exploring cybersecurity concepts, participating in hackathons, or diving deep into problem-solving challenges. I believe in continuous growth and am always looking for opportunities to push my boundaries.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/15 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}