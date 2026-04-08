import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
  Monitor,
  Server,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Core",
    icon: <Monitor className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    barGradient: "from-blue-500 to-cyan-400",
    borderActive: "border-cyan-500/50",
    border: "border-cyan-500/10",
    shadow: "shadow-cyan-500/20",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-emerald-500/20 to-teal-500/20",
    barGradient: "from-emerald-500 to-teal-400",
    borderActive: "border-emerald-500/50",
    border: "border-emerald-500/10",
    shadow: "shadow-emerald-500/20",
    skills: [
      { name: "Python", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Practices",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    barGradient: "from-purple-500 to-pink-400",
    borderActive: "border-purple-500/50",
    border: "border-purple-500/10",
    shadow: "shadow-purple-500/20",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vite", level: 85 },
      { name: "Responsive Design", level: 95 },
    ],
  },
];

export default function CodeSkills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="relative py-28 bg-zinc-950 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-emerald-500/20 mb-6">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Expertise</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and the technologies I use to build modern applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {/* Left column: Categories Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {skillCategories.map((cat, index) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                    isActive
                      ? `bg-zinc-900 border-zinc-700 shadow-lg ${cat.shadow}`
                      : "bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-800/80 hover:border-zinc-700"
                  }`}
                >
                  {/* Hover/Active Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-0 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "group-hover:opacity-50"
                    }`}
                  />
                  
                  <div
                    className={`relative z-10 p-3 rounded-xl bg-zinc-950 border transition-colors duration-300 ${
                      isActive ? cat.borderActive : "border-zinc-800"
                    }`}
                  >
                    <div className={isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}>
                      {cat.icon}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3
                      className={`font-semibold text-lg transition-colors duration-300 ${
                        isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                      }`}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                      {cat.skills.length} Skills
                    </p>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-white rounded-l-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right column: Skills Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {skillCategories.map(
                (cat) =>
                  activeCategory === cat.id && (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className={`p-6 sm:p-8 rounded-3xl border bg-zinc-900/60 backdrop-blur-xl ${cat.borderActive} relative overflow-hidden h-full shadow-2xl`}
                    >
                      <div
                        className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${cat.gradient} blur-[80px] -z-10`}
                      />

                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold text-white mb-2 flex items-center gap-3"
                      >
                        {cat.title}
                      </motion.h3>
                      <motion.p
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.3 }}
                         className="text-zinc-400 mb-8"
                      >
                        Proficiency levels in {cat.title.toLowerCase()} technologies.
                      </motion.p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cat.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            className="bg-zinc-950/50 border border-zinc-800/80 p-5 rounded-2xl flex flex-col gap-4 group hover:border-zinc-600 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-zinc-100 group-hover:text-white transition-colors text-base">
                                {skill.name}
                              </span>
                              <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                                {skill.level}%
                              </span>
                            </div>

                            <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden inset-shadow-sm border border-zinc-800/50">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  delay: 0.5 + index * 0.1,
                                  duration: 1.2,
                                  ease: [0.17, 0.67, 0.83, 0.67],
                                }}
                                className={`h-full rounded-full bg-gradient-to-r ${cat.barGradient} relative`}
                              >
                                <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse" />
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Global floating shapes for section ambiance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20">
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-10 text-zinc-800/40"
          >
            <Code2 size={120} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 text-zinc-800/40"
          >
            <Database size={150} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
