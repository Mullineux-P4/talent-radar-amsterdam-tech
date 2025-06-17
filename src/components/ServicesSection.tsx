
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, Briefcase } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Users,
      title: "Expert Contractors & SMEs",
      subtitle: "Elite talent on-demand when you need it most",
      features: [
        "Laser-focused specialists who hit the ground running",
        "Zero commitment drama, maximum flexibility",
        "Deploy in 48 hours—because waiting is losing"
      ]
    },
    {
      icon: Target,
      title: "Strategic Hiring Solutions",
      subtitle: "End-to-end hiring that actually works",
      features: [
        "Bulletproof strategies that eliminate hiring failures",
        "Data-driven insights that justify every decision",
        "Full-time rockstars in <4 weeks, guaranteed"
      ]
    },
    {
      icon: Briefcase,
      title: "Project Delivery Powerhouse",
      subtitle: "Teams that deliver, not excuses",
      features: [
        "Purpose-built dream teams matched to your vision",
        "Relentlessly managed to crush objectives",
        "End-to-end delivery with zero surprises"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Three Ways We Accelerate Victory</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            Flexible engagement models designed to <strong className="text-blue-400">crush your competition</strong> and unlock exponential growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-300">
              <service.icon className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-200 mb-4 text-sm font-medium">{service.subtitle}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Choose Your Weapon
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
