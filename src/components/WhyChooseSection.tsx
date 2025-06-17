
import React from 'react';
import { Award, Clock, Target, Settings } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "Battle-tested professionals who've already proven they can deliver miracles"
    },
    {
      icon: Clock,
      title: "Lightning Speed", 
      description: "Deploy experts in 48 hours or hire full-time legends in <4 weeks"
    },
    {
      icon: Target,
      title: "Results That Shock",
      description: "ROI so measurable, your CFO will think you're a magician"
    },
    {
      icon: Settings,
      title: "Infinite Flexibility",
      description: "Engagement models that bend to your will, not the other way around"
    }
  ];

  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Projekt4 Dominates</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            Four pillars that make us the <strong className="text-blue-400">undisputed champion</strong> of workforce capability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <reason.icon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{reason.title}</h3>
              <p className="text-gray-200 leading-relaxed font-medium">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
