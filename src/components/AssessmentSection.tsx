
import React from 'react';

export function AssessmentSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Beyond the Resume
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Traditional metrics tell you what someone has done. We reveal what they're capable of becoming.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cultural Intelligence</h3>
                  <p className="text-gray-400">How they navigate Amsterdam's unique blend of directness and collaboration</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Growth Trajectory</h3>
                  <p className="text-gray-400">Their learning velocity and adaptation to scale-up environments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Innovation Mindset</h3>
                  <p className="text-gray-400">How they approach problems that don't have Stack Overflow answers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Traditional vs. Projekt4 Assessment</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Years of Experience</span>
                  <span className="text-blue-400">→ Learning Velocity</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Technical Skills</span>
                  <span className="text-purple-400">→ Problem-Solving Approach</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400">Previous Companies</span>
                  <span className="text-green-400">→ Cultural Adaptability</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400">Education</span>
                  <span className="text-yellow-400">→ Curiosity & Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
