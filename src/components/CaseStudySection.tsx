import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingDown, Zap, Target } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="results" className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Victory Stories That Inspire</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium">
            Real results that <strong className="text-green-400">shocked executives</strong> and transformed industries
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto mb-16"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {successStories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-green-500/50 hover:bg-white/15 transition-all duration-300 h-full">
                    <story.icon className="h-12 w-12 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">{story.title}</h3>
                    <p className="text-sm text-gray-400 mb-3 font-medium">{story.company}</p>
                    <p className="text-gray-200 mb-4 font-medium text-sm">{story.description}</p>
                    <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-3 mb-3 border border-green-500/30">
                      <p className="text-green-400 font-bold text-lg">{story.result}</p>
                    </div>
                    <p className="text-xs text-blue-400 font-semibold">{story.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-3 text-white">The Chemical Giant Transformation</h3>
          <p className="text-gray-200 leading-relaxed font-medium">
            A major European chemicals company needed a Data Strategy revolution. Projekt4 didn't just build a skilled team—we 
            <strong className="text-blue-400"> identified game-changing use cases</strong> and delivered a data science pilot in just 3 weeks. 
            The result? Predictive models using existing data that <strong className="text-green-400">avoided massive hardware investments</strong> 
            while accelerating progress beyond all expectations.
          </p>
          <p className="text-blue-400 font-bold mt-3">— Operational Excellence and Digitalisation Lead</p>
        </div>
        
        <div className="flex justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            View All Victory Stories
            <ChevronRight className="ml-2 h-5 w-5" />
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
