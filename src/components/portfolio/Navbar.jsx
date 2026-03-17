import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Name */}
        <button onClick={() => handleClick('#hero')} className="flex items-center gap-2 group">
          
          {/* Profile Image (NO IMPORT) */}
          <div className="w-9 h-9 rounded-full overflow-hidden border border-emerald-500/30 shadow-md shadow-emerald-500/20 transform group-hover:scale-110 transition-all duration-300">
            <img
              src="https://res.cloudinary.com/doxeuimhd/image/upload/v1773502332/std5ergpi3jnprky4eku_hvmrdl.jpg"
              alt="Ganesh"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-lg font-semibold text-white tracking-tight">
            Ganesh<span className="text-emerald-400">.</span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
