
import React from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Projekt4's deep understanding and unique approach allowed us to rapidly implement valuable predictive analytics, significantly improving our efficiency without additional hardware investments.",
      author: "Sachin Sankpal",
      role: "Vynova Group",
      rating: 5
    },
    {
      quote: "I look forward to collaborating with Andrew's team again, whether as a candidate or hiring manager, and I highly recommend Projekt4 for their integrity and professionalism toward clients and candidates.",
      author: "Cedric Jacquinot",
      role: "Senior IT Lead",
      rating: 5
    },
    {
      quote: "Andrew stayed involved, mediating when needed and helping minimise any risks he could identify throughout the hiring process. I was extremely happy with his work, it was all I could ask for and I would highly recommend Projekt4 for Data Science and Analytics people.",
      author: "Daniel Prentice",
      role: "Director",
      rating: 5
    },
    {
      quote: "As I was a first-time Contractor, Andrew in particular has been instrumental in guiding me through the onboarding process. His efficiency, helpfulness, and friendly demeanour have made the transition into this new role much smoother than I anticipated.",
      author: "Emma Roberts",
      role: "Data Scientist",
      rating: 5
    },
    {
      quote: "There was good communication throughout and he kept all sides informed at each stage. Highly recommended for anyone needing to hire in the payments / payments technology domains.",
      author: "John Snoek",
      role: "CPO/COO",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders across Europe for our expertise and results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-400 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-blue-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
