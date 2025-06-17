
import React from 'react';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-black/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/82d770a0-4c87-41cb-9c0e-634b4b98f8f1.png" 
              alt="Projekt4" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-gray-400">
              © 2025 Projekt4. Transforming Amsterdam's tech talent landscape.
            </div>
            <a
              href="https://www.linkedin.com/company/projekt4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
