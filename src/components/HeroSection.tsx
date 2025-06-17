
import React from 'react';
import { Users, Target, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  mouse: { x: number; y: number };
  isLoaded: boolean;
}

export function HeroSection({ mouse, isLoaded }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Amsterdam canal houses background with reduced blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-[2px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      
      {/* Enhanced background with better contrast */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${50 + mouse.x * 10}% ${50 + mouse.y * 10}%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)`,
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Amsterdam's Premier
            <br />
            <span className="text-white">Scale-Up Talent Partner</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            We connect ambitious scale-ups with exceptional talent. 
            Deploy proven experts in <strong className="text-blue-300">48 hours</strong> or build your dream team in under 4 weeks.
          </p>

          {/* Primary and Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg w-full sm:w-auto"
              onClick={() => scrollToSection('connect')}
            >
              Start Your Search
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-3 text-lg backdrop-blur-sm w-full sm:w-auto"
              onClick={() => scrollToSection('how-it-works')}
            >
              See How It Works
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Rapid Deployment</h3>
              <p className="text-sm sm:text-base text-gray-200 font-medium">Expert talent deployed in 48 hours or permanent hires in &lt;4 weeks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Target className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Impact-Focused</h3>
              <p className="text-sm sm:text-base text-gray-200 font-medium">Results-driven professionals who deliver measurable ROI from day one</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 text-green-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Proven Excellence</h3>
              <p className="text-sm sm:text-base text-gray-200 font-medium">Handpicked professionals with verified track records of success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
