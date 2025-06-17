
import React from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projekt4
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">Intelligence</a>
            <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Approach</a>
            <a href="#case-studies" className="hover:text-blue-400 transition-colors duration-300">Results</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Connect</a>
          </div>
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
}
