
import React from 'react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
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
  );
}
