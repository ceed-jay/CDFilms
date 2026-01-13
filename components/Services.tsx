
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-32 pb-24 wedding-bg-alt md:pt-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Coverage</span>
          <h2 className="text-4xl md:text-5xl font-serif text-black mt-4 mb-6 uppercase tracking-widest">What We Capture</h2>
          <p className="text-gray-600 text-lg italic hidden md:block">
            "Every wedding is a masterpiece of unscripted moments. We are there to preserve them all."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
              <div 
                key={service.id} 
                className="bg-white p-10 group hover:bg-black transition-all duration-500 shadow-sm hover:shadow-2xl border-t-4 border-transparent hover:border-gold"
              >
                <div className="mb-6 text-gold transition-colors duration-500 group-hover:text-white">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-4 group-hover:text-white transition-colors duration-500 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-neutral-400 text-xs uppercase tracking-[0.3em]">
            & our signature cinematic storytelling in every frame.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
