
import React from 'react';
import { Award, Clock, Target, Settings } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Quality",
      description: "Pre-vetted, experienced professionals with proven expertise"
    },
    {
      icon: Clock,
      title: "Speed", 
      description: "Deploy experts in 48 hours or hire full-time talent in <4 weeks"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Impact focused to drive demonstrable customer ROI"
    },
    {
      icon: Settings,
      title: "Flexibility",
      description: "Engagement models tailored to your business and budget"
    }
  ];

  return (
    <section className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Projekt4?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four pillars that make us the workforce capability and performance partner of choice
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
