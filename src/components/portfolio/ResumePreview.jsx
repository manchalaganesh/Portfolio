import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const RESUME_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b56a37418a4de906846443/2b325b82e_Ganesh_Manchala_Resume.pdf';

export default function ResumePreview() {
  const handleDownload = () => {
    window.open(RESUME_URL, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-sm mx-auto"
    >
      <div className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500 hover:bg-zinc-900/70">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-7 h-7 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">
              Resume
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Download my latest resume
            </p>
            <button
              onClick={handleDownload}
              className="group/btn flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 text-sm"
            >
              <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              <span className="group-hover/btn:translate-x-1 transition-transform inline-block">
                Download PDF
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}