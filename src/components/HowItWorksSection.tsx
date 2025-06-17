
import React from 'react';
import { Search, Users, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HowItWorksSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: Search,
      title: "Define Your Needs",
      description: "Tell us about your challenge, timeline, and ideal candidate profile. We listen first, then strategize.",
      time: "Day 1"
    },
    {
      icon: Users,
      title: "Curated Matching",
      description: "Our team taps into our vetted network to identify the perfect talent match for your specific requirements.",
      time: "24-48 Hours"
    },
    {
      icon: CheckCircle,
      title: "Quality Validation",
      description: "Every candidate undergoes our rigorous screening process including technical assessments and cultural fit evaluation.",
      time: "Within 48 Hours"
    },
    {
      icon: Rocket,
      title: "Seamless Integration",
      description: "Your chosen talent hits the ground running with full support from our team throughout the engagement.",
      time: "Day 1 & Beyond"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            How We Transform Your Hiring
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            From initial consultation to successful placement, our streamlined process 
            ensures you get the right talent, fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <step.icon className="h-8 w-8 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg"
            onClick={() => scrollToSection('connect')}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
