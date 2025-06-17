
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function AssessmentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const approaches = [
    {
      icon: Target,
      title: "Beyond the Resume",
      description: "We assess cultural fit, growth potential, and passion projects that traditional hiring misses. 78% of our placements come from candidates who weren't actively looking."
    },
    {
      icon: Users,
      title: "Amsterdam Network Intelligence",
      description: "Deep connections in Amsterdam's tech ecosystem. We know who's building what, who's ready to move, and what motivates top talent in our city."
    },
    {
      icon: Zap,
      title: "Speed with Precision",
      description: "Our 3-week average time-to-hire doesn't compromise on quality. We pre-qualify candidates through technical and cultural assessments before any introduction."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Projekt4 Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional recruitment focuses on matching keywords. We focus on matching futures. 
            Here's how we find the 5% of candidates others never see.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <approach.icon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">{approach.title}</h3>
              <p className="text-gray-300 leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            onClick={() => setIsModalOpen(true)}
          >
            See Our Approach in Action
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
