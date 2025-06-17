
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, Zap, Shield, Code, Database } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function AssessmentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const focusAreas = [
    { icon: Shield, title: "AI & Machine Learning", description: "Deploy AI experts for transformative projects and predictive analytics" },
    { icon: Database, title: "Cloud & Data", description: "Scale cloud infrastructure and unlock data insights with certified professionals" },
    { icon: Code, title: "Software Development", description: "Accelerate development with expert contractors and full-stack engineers" },
    { icon: Target, title: "Cyber Security", description: "Secure your systems with battle-tested security professionals" },
    { icon: Users, title: "Legacy Transformation", description: "Modernize systems with specialists in enterprise transformation" },
    { icon: Zap, title: "FinOps & Optimization", description: "Reduce costs and optimize performance with certified FinOps experts" }
  ];

  const challenges = [
    "Eliminate long lead-times for contractor deployment or direct hires",
    "Access any resource, anywhere, and scale-up or down when needed", 
    "Reduce reliance on classic management consulting partners",
    "Relieve pressure on overloaded internal project teams"
  ];

  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We deploy experienced, high-impact and customer centric professionals with exactly the right expertise.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <area.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h4 className="text-lg font-bold mb-3">{area.title}</h4>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Challenges We Solve</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
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
