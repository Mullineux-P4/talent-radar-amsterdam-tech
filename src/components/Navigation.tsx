
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConsultationModal } from '@/components/ConsultationModal';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/lovable-uploads/82d770a0-4c87-41cb-9c0e-634b4b98f8f1.png" 
              alt="Projekt4" 
              className="h-5 w-auto rounded-lg"
            />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">How It Works</button>
            <button onClick={() => scrollToSection('approach')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Approach</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Services</button>
            <button onClick={() => scrollToSection('results')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Results</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('connect')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">Connect</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-blue-300 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <div className="hidden md:block">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-left">How It Works</button>
              <button onClick={() => scrollToSection('approach')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-left">Approach</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-left">Services</button>
              <button onClick={() => scrollToSection('results')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-left">Results</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-left">Testimonials</button>
              <button onClick={() => scrollToSection('connect')} className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-left">Connect</button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-4 w-full rounded-lg"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
}
