import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Image, Github, Folder } from "lucide-react";
import ProjectLightbox from "./ProjectLightbox";
import { iconMap } from "../../data/projects";

const accentMap = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
    icon: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    thumb: "hover:border-emerald-500/50",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "hover:border-teal-500/30",
    icon: "text-teal-400",
    tag: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    thumb: "hover:border-teal-500/50",
  },
};

export default function ProjectsSection({
  projectsProp = [],
  showFilter = false,
  maxItems = undefined,
}) {
  const [lightbox, setLightbox] = useState(null); // { project, imageIndex }
  const [filter, setFilter] = useState("All");

  // Parse new-line delimited descriptionRaw into structured HTML formatting
  const renderDescription = (text) => {
    if (!text) return null;
    const lines = text.split("\n");
    return (
      <div className="space-y-2 text-sm leading-relaxed">
        {lines.map((line, i) => {
          const splitPoint = line.indexOf(":");
          if (splitPoint !== -1 && splitPoint < 20) {
            const bold = line.slice(0, splitPoint + 1);
            const rest = line.slice(splitPoint + 1);
            return (
              <p key={i}>
                <strong className="text-zinc-200 dark:text-zinc-200">
                  {bold}
                </strong>
                {rest}
              </p>
            );
          }
          return <p key={i}>{line}</p>;
        })}
      </div>
    );
  };

  const allTechs = ["All", ...new Set(projectsProp.flatMap((p) => p.tech))]
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 5);

  const filteredProjects = projectsProp
    .filter((p) => filter === "All" || p.tech.includes(filter))
    .slice(0, maxItems || projectsProp.length);

  return (
    <section id="projects" className="relative py-28 bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/3 via-transparent to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        {showFilter && allTechs.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === tech
                    ? "bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-900/60 border border-zinc-800/50 text-zinc-400 hover:text-white hover:border-emerald-500/30"
                  }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, i) => {
            const colors = accentMap[project.accent] || accentMap.emerald;
            const Icon = iconMap[project.iconName] || Folder;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/50 ${colors.border} transition-all duration-500 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden`}
              >
                {/* Screenshot preview strip */}
                {project.screenshots?.length > 0 && (
                  <div
                    className="relative w-full h-44 overflow-hidden cursor-pointer"
                    onClick={() => setLightbox({ project, imageIndex: 0 })}
                  >
                    <img
                      src={project.screenshots[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-sm font-medium">
                        <Image className="w-4 h-4" />
                        View Screenshots
                        {project.screenshots.length > 1 && (
                          <span className="text-zinc-400">
                            ({project.screenshots.length})
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Thumbnail strip for multiple images */}
                    {project.screenshots.length > 1 && (
                      <div className="absolute bottom-2 left-2 flex gap-1.5">
                        {project.screenshots.map((src, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightbox({ project, imageIndex: idx });
                            }}
                            className={`w-10 h-7 rounded overflow-hidden border-2 transition-all ${idx === 0 ? "border-emerald-400" : "border-zinc-600 " + colors.thumb}`}
                          >
                            <img
                              src={src}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Card body */}
                <div className="p-7">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-6 h-6 ${colors.icon} group-hover:rotate-6 transition-transform duration-300`}
                    />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-zinc-600 hover:text-emerald-400 transition-colors flex-shrink-0 ml-3"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-zinc-600 hover:text-emerald-400 transition-colors flex-shrink-0 ml-3"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {renderDescription(project.descriptionRaw)}
                  </div>
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <ProjectLightbox
            images={lightbox.project.screenshots}
            initialIndex={lightbox.imageIndex}
            projectTitle={lightbox.project.title}
            projectLink={lightbox.project.link}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}