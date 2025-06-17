
import React from 'react';
import { Users, Target, Zap } from 'lucide-react';

interface HeroSectionProps {
  mouse: { x: number; y: number };
  isLoaded: boolean;
}

export function HeroSection({ mouse, isLoaded }: HeroSectionProps) {
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
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Amsterdam's New Powerhouse
            <br />
            <span className="text-white">for Scale-Up Talent</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Elite Teams Fast
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            We don't fill roles — we <strong className="text-white">deliver impact</strong>. 
            Plug into a handpicked network of high-performers. Your next game-changer, deployed in under 48 hours.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Zap className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Speed That Kills Competition</h3>
              <p className="text-gray-200 font-medium">Deploy experts in 48 hours or hire full-time talent in &lt;4 weeks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Target className="h-10 w-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Results That Matter</h3>
              <p className="text-gray-200 font-medium">Impact-focused delivery that drives measurable ROI from day one</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Elite Talent Only</h3>
              <p className="text-gray-200 font-medium">Battle-tested professionals with proven track records</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
