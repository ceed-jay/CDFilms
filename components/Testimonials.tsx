
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 wedding-bg border-y border-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Voices of Love</span>
          <h2 className="text-4xl md:text-5xl font-serif text-black mt-4">Kind Words</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative bg-white/60 backdrop-blur-sm p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-all group">
              <Quote className="text-gold/20 absolute top-6 right-6 group-hover:text-gold/40 transition-colors" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-serif text-black text-lg">{t.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{t.date}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;