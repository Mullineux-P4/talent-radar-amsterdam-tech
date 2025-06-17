
import React from 'react';
import { Zap, Users, MessageSquareX, Shield } from 'lucide-react';

export function ProblemsSection() {
  const problems = [
    {
      icon: Zap,
      title: "Soul-Crushing Lead Times",
      description: "Eliminate soul-crushing lead-times that kill momentum and opportunities",
      gradient: "from-red-500/20 to-orange-500/20",
      borderGradient: "from-red-500/50 to-orange-500/50",
      iconColor: "text-red-400"
    },
    {
      icon: Users,
      title: "World-Class Talent Access", 
      description: "Access world-class talent anywhere, anytime—scale like a tech giant",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/50 to-cyan-500/50",
      iconColor: "text-blue-400"
    },
    {
      icon: MessageSquareX,
      title: "Overpriced Consultants",
      description: "Ditch overpriced consultants who talk more than they deliver",
      gradient: "from-purple-500/20 to-pink-500/20", 
      borderGradient: "from-purple-500/50 to-pink-500/50",
      iconColor: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Burned-Out Teams",
      description: "Rescue your burned-out teams from impossible project loads",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/50 to-emerald-500/50", 
      iconColor: "text-green-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Problems We <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Obliterate</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            We don't just solve problems—we <strong className="text-red-400">annihilate</strong> the obstacles holding your business back
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`relative group bg-gradient-to-br ${problem.gradient} backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-transparent transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}
            >
              {/* Animated border gradient on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${problem.borderGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${problem.gradient} border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                    <problem.icon className={`h-8 w-8 ${problem.iconColor}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-3 group-hover:animate-pulse"></div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                        {problem.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                      {problem.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${problem.borderGradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-full px-6 py-3 border border-red-500/30">
            <Zap className="h-5 w-5 text-red-400 animate-pulse" />
            <p className="text-red-400 font-bold text-lg">Ready to obliterate these problems?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
