
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ChevronRight } from 'lucide-react';
import * as THREE from 'three';

// Hero 3D Animation Component
function TalentNetwork({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = Math.random() * 4 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = mouse.y * 0.1;
      ref.current.rotation.y = mouse.x * 0.1;
      ref.current.rotation.z += 0.001;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}</span>;
}

// Main Component
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projekt4
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors duration-300">Intelligence</a>
              <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Approach</a>
              <a href="#case-studies" className="hover:text-blue-400 transition-colors duration-300">Results</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Connect</a>
            </div>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Amsterdam Advantage Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* Beyond the Resume Section */}
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

      {/* Vynova Case Study Teaser */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The 3-Week Transformation</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            How we helped Vynova Group build their dream data science team in record time
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-gray-300">Weeks to Full Team</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Than Expected</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Read Full Case Study
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss how we can help you build an exceptional team in Amsterdam's competitive market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3">
              Download Market Report
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Projekt4
            </div>
            <div className="text-gray-400">
              © 2024 Projekt4. Transforming Amsterdam's tech talent landscape.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
