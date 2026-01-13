
import React from 'react';
import { Check } from 'lucide-react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  const triggerNav = (section: string) => {
    window.dispatchEvent(new CustomEvent('app-navigate', { detail: { section } }));
  };

  return (
    <section id="pricing" className="pt-32 pb-16 wedding-bg-alt min-h-full md:pt-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-gold font-bold tracking-widest uppercase text-[10px]">Investment</span>
          <h2 className="text-3xl md:text-4xl font-serif text-black mt-2 mb-4 uppercase tracking-widest">Packages</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Your wedding day is more than an event - it's a story worth telling. Our Wedding Video Packages are created to capture the emotions, movement, and moments that make your day unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`group relative bg-white overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1 border border-neutral-100 flex flex-col h-full ${
                pkg.isPopular ? 'ring-1 ring-gold shadow-gold/10' : ''
              }`}
            >
              {/* Image Header - Reduced Height */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {pkg.isPopular && (
                  <div className="absolute top-3 right-3 bg-gold text-white text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full shadow-md">
                    Popular
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-serif mb-0.5">{pkg.name}</h3>
                  <p className="text-gold font-bold tracking-widest text-sm">{pkg.price}</p>
                </div>
              </div>

              {/* Content Body - Compact Padding */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-500 text-xs leading-relaxed mb-6 italic">
                  "{pkg.description}"
                </p>
                
                <div className="space-y-2.5 mb-8 flex-grow">
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-neutral-400 mb-1">Inclusions</p>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-black/80 text-[13px]">
                      <Check size={14} className="text-gold mt-0.5 mr-2.5 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => triggerNav('contact')}
                  className={`w-full py-3.5 text-center text-[10px] font-bold tracking-[0.15em] uppercase transition-all outline-none border ${
                    pkg.isPopular 
                      ? 'bg-gold border-gold text-white hover:bg-transparent hover:text-gold' 
                      : 'bg-black border-black text-white hover:bg-transparent hover:text-black'
                  }`}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-[10px] uppercase tracking-widest">
            Let us tell your Story. Book your Date Today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
