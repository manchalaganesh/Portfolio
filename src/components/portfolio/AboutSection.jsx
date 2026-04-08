import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
  { icon: GraduationCap, label: "Focus", value: "Computer Science" },
  { icon: Heart, label: "Passion", value: "Web Development" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 text-zinc-300 leading-relaxed max-w-prose">
              <p>
                I am a results-driven Software Engineer with a strong focus on frontend development and modern web architecture. I engineer scalable, high-performance web applications that drive business value and deliver seamless, engaging user experiences.
              </p>
              <p>
                Leveraging a solid foundation in computer science and modern design patterns, I excel at translating complex business requirements into robust technical solutions. I am deeply committed to engineering excellence, prioritizing clean code architecture, system performance, and maintainability across the entire development lifecycle.
              </p>
              <div className="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/50 mt-6">
                <h3 className="text-emerald-400 font-medium mb-4 text-sm tracking-widest uppercase">
                  Engineering Philosophy
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">▹</span>
                    <span>
                      <strong className="text-zinc-100 font-semibold">Architectural Focus:</strong>{" "}
                      Scalable component design, efficient state management, and responsive, mobile-first infrastructure.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">▹</span>
                    <span>
                      <strong className="text-zinc-100 font-semibold">Best Practices:</strong>{" "}
                      Rigorous code reviews, modern Git workflows, web security protocols, and WCAG accessibility standards.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">▹</span>
                    <span>
                      <strong className="text-zinc-100 font-semibold">Core Stack:</strong>{" "}
                      Advanced React ecosystem, Next.js, Tailwind CSS, TypeScript, and modern backend integrations.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 space-y-3 text-sm">
                <p>
                  <strong className="text-zinc-100 font-semibold">Current Focus:</strong>{" "}
                  Developing expertise in enterprise-scale system design and server-side rendering strategies.
                </p>
                <p>
                  <strong className="text-zinc-100 font-semibold">Professional Development:</strong>{" "}
                  Continuously evaluating emerging web technologies to optimize deployment pipelines and application performance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-white font-medium text-sm mt-0.5">
                      {value}
                    </p>
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
