
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from './AnimatedCounter';

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* TNW City background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      
      {/* Tech-inspired overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-black/80" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Amsterdam Advantage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            You're not just building a company in Amsterdam—you're part of a movement that's reshaping European tech.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-4">
                €<AnimatedCounter end={2.4} />B
              </div>
              <h3 className="text-xl font-semibold mb-2">Startup Funding</h3>
              <p className="text-gray-400">Invested in Amsterdam startups this year</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-4">
                <AnimatedCounter end={15000} />+
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Professionals</h3>
              <p className="text-gray-400">Active in Amsterdam's ecosystem</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-green-400 mb-4">
                <AnimatedCounter end={89} />%
              </div>
              <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
              <p className="text-gray-400">Of our placements still thriving after 2 years</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
