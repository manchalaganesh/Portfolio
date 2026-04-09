import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
  { icon: GraduationCap, label: "Focus", value: "Computer Science" },
  { icon: Heart, label: "Passion", value: "Web Development" },
];

const whatICanDo = [
  "Build responsive and modern websites",
  "Create clean and attractive UI designs",
  "Develop web applications using JavaScript",
  "Solve coding problems using C++ and Python",
  "Work with Git and GitHub for version control",
  "Convert ideas into real-world projects"
];

const currentlyLearning = [
  "Advanced JavaScript",
  "React / Next.js",
  "Data Structures & Algorithms",
  "Backend Development"
];

const futurePlans = [
  "Contribute to open-source projects",
  "Build scalable web applications",
  "Improve problem-solving and system design"
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
            👨‍💻 About Me
          </p>
          <h2 className="text-4xl font-bold text-white">Get to know me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-4 text-zinc-300 leading-relaxed max-w-prose text-base">
              <p>
                I am Ganesh, a dedicated and self-motivated developer from India. I have a strong interest in web development and enjoy creating clean and interactive user interfaces.
              </p>
              <p>
                I started my journey with basic programming and gradually developed skills in frontend development. I love learning new technologies and applying them to real-world projects.
              </p>
              <p>
                I believe in continuous learning and improving my problem-solving abilities every day.
              </p>
            </div>

            <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 💡 Why Hire Me?
               </h3>
               <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
                 <p>
                   I am a quick learner and highly passionate about coding. I focus on writing clean, efficient, and maintainable code.
                 </p>
                 <p>
                   I am dedicated to improving my skills every day and always ready to take on new challenges. I have hands-on experience building real projects and solving problems.
                 </p>
                 <p>
                   I bring a positive attitude, strong work ethic, and a commitment to delivering quality work.
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

        {/* Extended About Section: What I Can Do & Extra/Advanced */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
           {/* What I Can Do */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8"
           >
             <h3 className="text-2xl font-bold text-white mb-6">🚀 What I Can Do</h3>
             <ul className="space-y-4">
               {whatICanDo.map((item, index) => (
                 <li key={index} className="flex gap-3 text-zinc-300">
                   <span className="text-emerald-500 flex-shrink-0">✔</span>
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </motion.div>

           {/* Extra / Advanced */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="space-y-8"
           >
             <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8">
               <h3 className="text-xl font-bold text-white mb-4">🔥 Currently Learning</h3>
               <ul className="space-y-3">
                 {currentlyLearning.map((item, index) => (
                   <li key={index} className="flex gap-3 text-zinc-300">
                     <span className="text-emerald-500 flex-shrink-0">✔</span>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8">
               <h3 className="text-xl font-bold text-white mb-2">📈 My Goal</h3>
               <p className="text-zinc-300 mb-6">
                 To become a skilled full-stack developer and build impactful real-world applications.
               </p>

               <h3 className="text-xl font-bold text-white mb-4">🚀 Future Plans</h3>
               <ul className="space-y-3">
                 {futurePlans.map((item, index) => (
                   <li key={index} className="flex gap-3 text-zinc-300">
                     <span className="text-emerald-500 flex-shrink-0">✔</span>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
