
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingDown, Zap, Target } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function CaseStudySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const successStories = [
    {
      icon: TrendingDown,
      title: "FinOps Mastery",
      company: "Fintech, UK / KSA",
      description: "Six-month deployment that built a FinOps practice from scratch",
      result: "30% Cloud TCO Annihilation",
      role: "Certified Cloud & FinOps Lead Architect"
    },
    {
      icon: Zap,
      title: "ML Energy Revolution",
      company: "Chemicals, Belgium",
      description: "Quick-win ML project that slashed energy costs ruthlessly",
      result: "€120K instant + €500K annual savings",
      role: "Data Science & Process Engineering"
    },
    {
      icon: Target,
      title: "Predictive Perfection",
      company: "Chemicals, Belgium",
      description: "Energy consumption prediction that shocked the industry",
      result: "96% accuracy—basically mind reading",
      role: "Data Science Pilot - Energy Use Case"
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Victory Stories That Inspire</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium">
            Real results that <strong className="text-green-400">shocked executives</strong> and transformed industries
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-green-500/50 hover:bg-white/15 transition-all duration-300">
              <story.icon className="h-14 w-14 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-white">{story.title}</h3>
              <p className="text-sm text-gray-400 mb-4 font-medium">{story.company}</p>
              <p className="text-gray-200 mb-4 font-medium">{story.description}</p>
              <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-4 mb-4 border border-green-500/30">
                <p className="text-green-400 font-bold text-xl">{story.result}</p>
              </div>
              <p className="text-sm text-blue-400 font-semibold">{story.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-12">
          <h3 className="text-3xl font-bold mb-4 text-white">The Chemical Giant Transformation</h3>
          <p className="text-gray-200 leading-relaxed font-medium text-lg">
            A major European chemicals company needed a Data Strategy revolution. Projekt4 didn't just build a skilled team—we 
            <strong className="text-blue-400"> identified game-changing use cases</strong> and delivered a data science pilot in just 3 weeks. 
            The result? Predictive models using existing data that <strong className="text-green-400">avoided massive hardware investments</strong> 
            while accelerating progress beyond all expectations.
          </p>
          <p className="text-blue-400 font-bold mt-4 text-lg">— Operational Excellence and Digitalisation Lead</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            View All Victory Stories
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold backdrop-blur-sm"
            onClick={() => setIsModalOpen(true)}
          >
            Start Your Transformation
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
