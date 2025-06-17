
import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 bg-black/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
            Projekt4
          </div>
          <div className="text-gray-400">
            © 2025 Projekt4. Transforming Amsterdam's tech talent landscape.
          </div>
        </div>
      </div>
    </footer>
  );
}
