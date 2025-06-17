
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function CaseStudySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">From 6 Months to 3 Weeks</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          How we helped a Series B fintech scale-up hire their entire data science team 
          in record time, saving €180K in opportunity costs and accelerating their product roadmap by 4 months.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-300">Weeks vs 6 Months Industry Average</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300">Offer Acceptance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">€180K</div>
            <div className="text-gray-300">Saved in Opportunity Costs</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Read Full Case Study
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black"
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
