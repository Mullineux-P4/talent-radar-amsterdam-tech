
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, Briefcase } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Users,
      title: "Independent Contractors & Subject Matter Experts",
      subtitle: "Expert-level Contractors / Interim on-demand",
      features: [
        "Perfect fit, use-case specific for maximum impact",
        "Low commitment, flexible engagements",
        "Deploy in 48 hours"
      ]
    },
    {
      icon: Target,
      title: "Targeted Key & Multi-Hiring Solutions",
      subtitle: "Comprehensive end-2-end hiring process management",
      features: [
        "Robust strategies to eliminate the no-hire risk",
        "Comprehensive reporting, data and value added",
        "Full-time talent in <4 weeks"
      ]
    },
    {
      icon: Briefcase,
      title: "Outsourced Project & Program Delivery",
      subtitle: "Structured, milestones-based and outcome-focused",
      features: [
        "Purpose built teams matched to your requirements",
        "Service managed to ensure alignment with objectives",
        "End-to-end project delivery"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three flexible engagement models designed to accelerate your projects and unlock growth
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
              <service.icon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6 font-medium">{service.subtitle}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            onClick={() => setIsModalOpen(true)}
          >
            Explore Service Options
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
