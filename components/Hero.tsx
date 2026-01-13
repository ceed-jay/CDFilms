
import React from 'react';

const Hero: React.FC = () => {
  const triggerNav = (section: string) => {
    window.dispatchEvent(new CustomEvent('app-navigate', { detail: { section } }));
  };

  return (
    <section className="h-full w-full flex items-center justify-center relative overflow-hidden wedding-bg pt-24 md:pt-32">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <p className="text-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Turning Your Love Story Into Timeless Films
        </p>
        <h1 className="text-black text-5xl md:text-8xl font-serif mb-8 leading-tight animate-fade-in-up [animation-delay:200ms]">
          Capturing the Soul of <br />
          <span className="italic text-gold font-serif">Every Moment</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg md:text-xl animate-fade-in-up [animation-delay:300ms]">
          Bespoke cinematic storytelling for luxury weddings and modern couples who value emotion and artistry.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
          <button
            onClick={() => triggerNav('portfolio')}
            className="w-full md:w-auto px-10 py-4 border border-black text-black font-bold tracking-widest uppercase transition-all hover:bg-black hover:text-white outline-none"
          >
            View Portfolio
          </button>
          <button
            onClick={() => triggerNav('contact')}
            className="w-full md:w-auto px-10 py-4 bg-gold text-white font-bold tracking-widest uppercase transition-all hover:bg-gold/80 hover:scale-105 outline-none shadow-lg shadow-gold/20"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;