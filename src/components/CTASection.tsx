
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ConsultationModal } from '@/components/ConsultationModal';
import { ArrowRight, Calendar } from 'lucide-react';

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="connect" className="py-16 sm:py-20 bg-gradient-to-r from-black via-slate-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Scale Your Team?
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 font-medium max-w-3xl mx-auto">
          Join innovative scale-ups across Amsterdam who've accelerated their growth with Projekt4's talent network. 
          Let's discuss how we can help you build your dream team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 font-semibold w-full sm:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Consultation
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-400 bg-transparent text-blue-400 hover:bg-blue-400 hover:text-black text-lg px-8 py-3 font-semibold backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Discuss Your Challenge
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-sm text-gray-400">
          Free consultation • No obligation • Confidential discussion
        </p>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
