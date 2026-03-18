import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function ProjectLightbox({ images, initialIndex = 0, onClose, projectLink, projectTitle }) {
  const [index, setIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  const prev = useCallback(() => {
    setScale(1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setScale(1);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/60 to-transparent z-10">
        <div className="flex items-center gap-3">
          <h3 className="text-white font-semibold">{projectTitle}</h3>
          {images.length > 1 && (
            <span className="text-zinc-500 text-sm">{index + 1} / {images.length}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {/* Zoom out */}
          <button
            onClick={() => setScale((s) => Math.max(1, s - 0.5))}
            disabled={scale <= 1}
            className="w-9 h-9 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 disabled:opacity-30 text-white flex items-center justify-center transition-all"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-zinc-400 text-sm w-10 text-center">{Math.round(scale * 100)}%</span>
          {/* Zoom in */}
          <button
            onClick={() => setScale((s) => Math.min(4, s + 0.5))}
            disabled={scale >= 4}
            className="w-9 h-9 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 disabled:opacity-30 text-white flex items-center justify-center transition-all"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 flex items-center justify-center transition-all ml-1"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-zinc-800/80 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 flex items-center justify-center transition-all ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="overflow-auto max-w-full max-h-full flex items-center justify-center px-16 py-20">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${projectTitle} screenshot ${index + 1}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: scale }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl shadow-2xl max-w-full max-h-[75vh] object-contain cursor-zoom-in select-none"
            style={{ transformOrigin: 'center center' }}
            onClick={() => setScale((s) => s < 2 ? 2 : 1)}
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 text-white flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 text-white flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Thumbnail dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => { setIndex(i); setScale(1); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-emerald-400' : 'w-2 bg-zinc-600 hover:bg-zinc-500'}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
