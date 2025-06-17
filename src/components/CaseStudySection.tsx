
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function CaseStudySection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">The 3-Week Transformation</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          How we helped Vynova Group build their dream data science team in record time
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-300">Weeks to Full Team</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-gray-300">Retention Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-gray-300">Faster Than Expected</div>
          </div>
        </div>
        
        <Button size="lg" className="bg-white text-black hover:bg-gray-200">
          Read Full Case Study
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
