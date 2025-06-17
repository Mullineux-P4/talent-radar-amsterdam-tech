
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConsultationModal } from '@/components/ConsultationModal';

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="connect" className="py-20 bg-black/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Accelerate Your Projects?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Join leading European companies who trust Projekt4 as their workforce capability and performance partner. 
          Deploy experts in 48 hours or build your dream team in under 4 weeks.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            onClick={() => setIsModalOpen(true)}
          >
            Deploy Experts Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3"
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
