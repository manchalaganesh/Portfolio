import React from "react";
import { motion } from "framer-motion";
import { Shield, Mic, ExternalLink, Code2 } from "lucide-react";

const certifications = [
  {
    title: "Ethical Hacking Workshop",
    location: "NIAT Campus",
    description:
      "Participated in an intensive ethical hacking workshop covering penetration testing methodologies, vulnerability assessment, and cybersecurity best practices.",
    icon: Shield,
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:d90029a1-ca4b-4af1-bf0a-766164c974eb?viewer%21megaVerb=group-discover",
  },
  {
    title: "Build for Telangana Hackathon",
    location: "NIAT Campus",
    description:
      "Participated in the Build for Telangana Hackathon, focusing on solving real-world problems through innovative ideas and collaborative development.",
    icon: Mic,
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:4437ab58-77ca-4883-a6b6-d8222776ba92?viewer%21megaVerb=group-discover",
  },
];

const codingProfiles = [
  {
    title: "LeetCode",
    description: "Improving DSA skills",
    icon: Code2,
    // Add their exact LeetCode username here if it's not 'manchalaganesh'
    link: "https://leetcode.com/u/gani_manchala/",
    image: "https://leetcard.jacoblin.cool/gani_manchala?theme=dark&font=Inter&ext=contest",
  },
  {
    title: "CodeChef",
    description: "Competitive programming",
    icon: Code2,
  },
  {
    title: "HackerRank",
    description: "Strengthening fundamentals",
    icon: Code2,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 bg-zinc-950">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
            My Learning Journey
          </p>
          <h2 className="text-4xl font-bold text-white">
            Certifications & Profiles
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Coding Profiles timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              📊 Coding Profiles
            </h3>
            <p className="text-zinc-400 mb-8 text-sm">
              I actively practice problem-solving on different platforms. I enjoy solving problems and improving my logical thinking daily.
            </p>
            <div className="relative">
              {codingProfiles.map((profile, i) => {
                const Icon = profile.icon;
                return (
                  <motion.div
                    key={profile.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-12 pb-12 last:pb-0"
                  >
                    {i < codingProfiles.length - 1 && (
                      <div className="absolute left-[18px] top-12 bottom-0 w-px bg-zinc-800" />
                    )}
                    <div className="absolute left-0 top-0 w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="group p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-teal-500/20 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                          {profile.title}
                        </h3>
                        {profile.link && (
                          <a href={profile.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 text-zinc-600 hover:text-teal-400 transition-colors" />
                          </a>
                        )}
                      </div>
                      <p className="text-zinc-400 text-sm mt-1">
                        {profile.description}
                      </p>
                      {profile.image && (
                        <div className="mt-4 rounded-xl overflow-hidden border border-zinc-800/50 transition-transform duration-300 group-hover:border-teal-500/30">
                          <img
                            src={profile.image}
                            alt={`${profile.title} stats`}
                            className="w-full h-auto object-contain bg-zinc-950/80"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              🏆 Certifications
            </h3>
            <div className="relative">
              {certifications.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-12 pb-12 last:pb-0"
                  >
                    {i < certifications.length - 1 && (
                      <div className="absolute left-[18px] top-12 bottom-0 w-px bg-zinc-800" />
                    )}
                    <div className="absolute left-0 top-0 w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="group p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-300">
                      <p className="text-xs text-emerald-400/70 uppercase tracking-wider mb-1">
                        {exp.location}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                          {exp.title}
                        </h3>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5 text-zinc-600 hover:text-emerald-400 transition-colors" />
                          </a>
                        )}
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
