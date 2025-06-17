
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { TalentNetwork } from './TalentNetwork';

interface HeroSectionProps {
  mouse: { x: number; y: number };
  isLoaded: boolean;
}

export function HeroSection({ mouse, isLoaded }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <TalentNetwork mouse={mouse} />
        </Canvas>
      </div>
      
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight">
          The Best Talent<br />
          Isn't on LinkedIn
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
          It's in Amsterdam's coffee shops, co-working spaces, and late-night coding sessions.<br />
          <span className="text-blue-400 font-semibold">We know because we're part of those conversations.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
            Discover Hidden Talent
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="ghost" size="lg" className="text-white hover:text-blue-400 text-lg">
            View Case Studies
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
}
