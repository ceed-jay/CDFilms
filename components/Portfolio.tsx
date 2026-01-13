
import React, { useState } from 'react';
import { Play, Plus } from 'lucide-react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'SDE' | 'Prenup' | 'Feature'>('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="pt-32 pb-24 wedding-bg md:pt-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black mt-2">Latest Works</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {['All', 'SDE', 'Prenup', 'Feature'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 text-xs font-bold tracking-widest uppercase border-b-2 transition-all ${
                  filter === cat ? 'border-gold text-gold' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative"
            >
              {/* Cinematic Frame Container */}
              <div className="relative p-4 bg-white border border-neutral-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_20px_40px_-20px_rgba(247,148,29,0.2)] group-hover:border-gold/30">
                
                {/* Decorative Frame Corners (Matting style) */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neutral-200 group-hover:border-gold transition-colors"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neutral-200 group-hover:border-gold transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neutral-200 group-hover:border-gold transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neutral-200 group-hover:border-gold transition-colors"></div>

                {/* Video Inner Container */}
                <div 
                  className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer border border-neutral-50"
                  onClick={() => setActiveVideo(item.videoUrl)}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-16 h-16 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-4 shadow-xl ring-4 ring-white/20">
                      <Play fill="white" size={24} />
                    </div>
                    <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2">View Film</p>
                  </div>

                  {/* Category Tag on Matting (Inner) */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 text-[8px] font-bold tracking-widest text-white uppercase border border-white/20 group-hover:opacity-0 transition-opacity">
                    {item.category}
                  </div>
                </div>
              </div>

              {/* Caption Below Frame */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-serif text-black mb-1 transition-colors group-hover:text-gold">{item.couple}</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Basic Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border-4 border-white/5">
            <button 
              className="absolute -top-14 right-0 text-white hover:text-gold transition-all hover:rotate-90 p-2"
              onClick={(e) => { e.stopPropagation(); setActiveVideo(null); }}
            >
              <Plus className="rotate-45" size={40} />
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;