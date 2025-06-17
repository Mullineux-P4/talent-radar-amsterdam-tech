
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingDown, Zap, Target } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function CaseStudySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const successStories = [
    {
      icon: TrendingDown,
      title: "FinOps Practice Setup",
      company: "Fintech, UK / KSA",
      description: "A six-month deployment setting up a greenfield FinOps practice",
      result: "30% reduction in Cloud TCO",
      role: "Certified Cloud & FinOps Lead Architect"
    },
    {
      icon: Zap,
      title: "ML Energy Optimization",
      company: "Chemicals, Belgium",
      description: "A quick-win ML project for energy cost reduction",
      result: "€120K spot saving + €500K annual energy costs",
      role: "Data Science & Process Engineering"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      company: "Chemicals, Belgium",
      description: "Energy consumption prediction for cracking furnaces",
      result: "96% confidence prediction accuracy",
      role: "Data Science Pilot - Energy Use Case"
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Real results from our expert deployments across industries
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <story.icon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{story.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{story.company}</p>
              <p className="text-gray-300 mb-4">{story.description}</p>
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-4 mb-4">
                <p className="text-green-400 font-bold text-lg">{story.result}</p>
              </div>
              <p className="text-sm text-blue-400 font-medium">{story.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
          <h3 className="text-2xl font-bold mb-4">Featured Case Study</h3>
          <p className="text-gray-300 leading-relaxed">
            A major European chemicals company initiated a Data Strategy and partnered with Projekt4 to build a skilled team. 
            Projekt4 identified viable use cases at manufacturing sites, leading to a data science pilot completed in 3 weeks. 
            This pilot successfully created predictive models using existing manufacturing data, avoiding extra hardware costs. 
            Projekt4's industry-expert team significantly accelerated the project's progress.
          </p>
          <p className="text-blue-400 font-medium mt-4">— Operational Excellence and Digitalisation Lead</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            View All Case Studies
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black"
            onClick={() => setIsModalOpen(true)}
          >
            Discuss Your Project
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
