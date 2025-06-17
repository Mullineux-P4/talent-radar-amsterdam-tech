
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConsultationModal } from '@/components/ConsultationModal';

export function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
          >
            Projekt4
          </button>
          <div className="hidden md:flex space-x-8">
            <a href="#approach" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Approach</a>
            <a href="#services" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Services</a>
            <a href="#results" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Results</a>
            <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Testimonials</a>
            <a href="#connect" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium">Connect</a>
          </div>
          <div className="relative">
            <Button 
              variant="outline" 
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold backdrop-blur-sm relative overflow-hidden animate-pulse"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 animate-pulse"></div>
            </Button>
          </div>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
}
