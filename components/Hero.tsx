
import React from 'react';

const Hero: React.FC = () => {
  const triggerNav = (section: string) => {
    window.dispatchEvent(new CustomEvent('app-navigate', { detail: { section } }));
  };

  // Video ID from the portfolio (Mark Gil Anthony & Maria Nova)
  const videoId = '85w7yUDdDWo';
  const videoUrl = `https://www.youtube.com/embed/FcJC_0dqdds?si=KbqE9aGJCaHadPYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"`;

  return (
    <section className="h-full w-full flex items-center justify-center relative overflow-hidden bg-black pt-24 md:pt-32">
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="Hero Background Video"
          ></iframe>
        </div>
      </div>

      {/* Overlays for Text Legibility & Style */}
      <div className="absolute inset-0 z-[1] bg-black/40 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 z-[2] wedding-bg opacity-30 mix-blend-overlay"></div>
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <p className="text-gold text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 animate-fade-in-up drop-shadow-md">
          Turning Your Love Story Into Timeless Films
        </p>
        <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight animate-fade-in-up [animation-delay:200ms] drop-shadow-xl">
          Capturing the Soul of <br />
          <span className="italic text-gold font-serif">Every Moment</span>
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg md:text-xl animate-fade-in-up [animation-delay:300ms] font-light drop-shadow-md">
          Bespoke cinematic storytelling for luxury weddings and modern couples who value emotion and artistry.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
          <button
            onClick={() => triggerNav('portfolio')}
            className="w-full md:w-auto px-10 py-4 border border-white text-white font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-black outline-none backdrop-blur-sm"
          >
            View Portfolio
          </button>
          <button
            onClick={() => triggerNav('contact')}
            className="w-full md:w-auto px-10 py-4 bg-gold text-white font-bold tracking-widest uppercase transition-all hover:bg-gold/80 hover:scale-105 outline-none shadow-2xl shadow-gold/30"
          >
            BOOK YOUR DATE TODAY
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
