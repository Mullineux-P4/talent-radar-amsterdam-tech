
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, Zap, Shield, Code, Database } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function AssessmentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const focusAreas = [
    { icon: Shield, title: "AI & Machine Learning", description: "Deploy AI wizards who make machines think and profits soar" },
    { icon: Database, title: "Cloud & Data", description: "Scale infinitely with cloud architects who turn data into gold" },
    { icon: Code, title: "Software Development", description: "Ship faster with developers who code like their reputation depends on it" },
    { icon: Target, title: "Cyber Security", description: "Sleep soundly with security experts who make hackers cry" },
    { icon: Users, title: "Legacy Transformation", description: "Modernize ruthlessly with specialists who bury technical debt" },
    { icon: Zap, title: "FinOps & Optimization", description: "Cut costs dramatically with certified experts who optimize everything" }
  ];

  const challenges = [
    "Eliminate soul-crushing lead-times that kill momentum and opportunities",
    "Access world-class talent anywhere, anytime—scale like a tech giant", 
    "Ditch overpriced consultants who talk more than they deliver",
    "Rescue your burned-out teams from impossible project loads"
  ];

  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Approach: Deploy. Deliver. Dominate.
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12 font-medium">
            We don't just fill seats—we deploy <strong className="text-blue-400">game-changing professionals</strong> who transform your business from day one.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Expertise That Moves Mountains</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-300">
                <area.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold mb-3 text-white">{area.title}</h4>
                <p className="text-gray-200 font-medium">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Problems We Obliterate</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-xl p-6 border border-white/20 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 font-medium">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Let's Crush Your Challenge
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
