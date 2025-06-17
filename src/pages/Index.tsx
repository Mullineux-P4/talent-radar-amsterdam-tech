
import React, { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { StatsSection } from '@/components/StatsSection';
import { AssessmentSection } from '@/components/AssessmentSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CaseStudySection } from '@/components/CaseStudySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      <Navigation />
      <HeroSection mouse={mouse} isLoaded={isLoaded} />
      <HowItWorksSection />
      <StatsSection />
      <AssessmentSection />
      <ServicesSection />
      <CaseStudySection />
      <TestimonialsSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
