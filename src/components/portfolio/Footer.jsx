import React from 'react';
import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-zinc-500">
            © 2026 Ganesh. All rights reserved.
          </span>
        </div>
        <p className="text-sm text-zinc-600 flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-emerald-400 fill-emerald-400" /> and code
        </p>
      </div>
    </footer>
  );
}