import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import { Download } from "lucide-react";

const PROFILE_IMG =
  "https://https://res.cloudinary.com/doxeuimhd/image/upload/v1775880807/WhatsApp_Image_2026-04-11_at_9.33.43_AM_1_p6lqsy.jpg";
const RESUME_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b56a37418a4de906846443/2b325b82e_Ganesh_Manchala_Resume.pdf";

export default function HeroSection() {
  const handleDownloadResume = () => window.open(RESUME_URL, "_blank");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-zinc-950" />
      <FloatingShapes />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-4">
              Hi, I'm Ganesh 👋
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              A passionate Frontend Developer and Problem Solver.
            </h1>
            <div className="mt-4 text-xl sm:text-2xl font-semibold text-emerald-50 text-balance">
              🚀 Turning ideas into real-world web applications
            </div>
            <p className="mt-6 text-zinc-400 max-w-lg text-base leading-relaxed mx-auto lg:mx-0">
              I build modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, and Python. I enjoy solving real-world problems through code and continuously improving my skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 text-sm"
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                View Projects
              </span>
            </a>
            <button
              onClick={handleDownloadResume}
              className="group flex items-center gap-2 px-7 py-3.5 border border-zinc-700 hover:border-emerald-500/50 text-zinc-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-emerald-500/5 hover:scale-105 text-sm"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                Download Resume
              </span>
            </button>
            <a
              href="#contact"
              className="group px-7 py-3.5 border border-zinc-700 hover:border-emerald-500/50 text-zinc-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-emerald-500/5 text-sm"
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                Contact Me
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex items-center gap-3 justify-center lg:justify-start"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/manchalaganesh",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ganesh-manchala/",
                label: "LinkedIn",
              },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group w-10 h-10 rounded-lg border border-zinc-800 hover:border-emerald-500/30 flex items-center justify-center text-zinc-500 hover:text-emerald-400 transition-all duration-300 hover:bg-emerald-500/5 hover:scale-110"
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-80" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-zinc-800/50 group-hover:border-emerald-500/20 transition-all duration-500">
              <img
                src={PROFILE_IMG}
                alt="Ganesh"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-emerald-400 transition-colors"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button> */}
    </section>
  );
}
