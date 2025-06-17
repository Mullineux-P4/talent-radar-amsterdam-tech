
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConsultationModal } from '@/components/ConsultationModal';

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="connect" className="py-20 bg-gradient-to-r from-black via-slate-900 to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Leave Your Competition in the Dust?
        </h2>
        <p className="text-xl text-gray-200 mb-12 font-medium">
          Join the ranks of <strong className="text-blue-400">European market leaders</strong> who've already weaponized Projekt4's talent network. 
          Deploy game-changers in 48 hours or build your dream team in under 4 weeks.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Deploy Experts Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3 font-semibold backdrop-blur-sm"
            onClick={() => setIsModalOpen(true)}
          >
            Discuss Your Challenge
          </Button>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
