
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Zap } from 'lucide-react';
import { ConsultationModal } from '@/components/ConsultationModal';

interface HeroSectionProps {
  mouse: { x: number; y: number };
  isLoaded: boolean;
}

export function HeroSection({ mouse, isLoaded }: HeroSectionProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mouse.x * 10}% ${50 + mouse.y * 10}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Build and Maintain
            <br />
            High Performance Teams
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Projekt4 provides on-demand access to the talent market to accelerate projects and unlock growth. 
            Deploy experienced, high-impact professionals with exactly the right expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              onClick={() => setIsModalOpen(true)}
            >
              Deploy Experts in 48 Hours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4"
            >
              View Success Stories
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Zap className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Speed</h3>
              <p className="text-gray-300">Deploy experts in 48 hours or hire full-time talent in &lt;4 weeks</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Target className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-300">Impact focused to drive demonstrable customer ROI</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-gray-300">Pre-vetted, experienced professionals with proven expertise</p>
            </div>
          </div>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
