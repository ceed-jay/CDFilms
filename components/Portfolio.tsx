
import React, { useState } from 'react';
import { Play, Film, X, ExternalLink, Loader2 } from 'lucide-react';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  /**
   * Triggers the custom app-navigate event to change sections
   */
  const triggerNav = (section: string) => {
    window.dispatchEvent(new CustomEvent('app-navigate', { detail: { section } }));
  };

  /**
   * Generates a secure embed URL based on the platform (YouTube or Facebook)
   * Supports: watch?v=, youtu.be, shorts/, m.youtube.com, and Facebook Reels
   */
  const getSecureEmbedUrl = (url: string | undefined) => {
    if (!url) return null;

    const cleanUrl = url.trim();

    // YouTube Detection
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const youtubeMatch = cleanUrl.match(youtubeRegex);
    
    if (youtubeMatch && youtubeMatch[1]) {
      const videoId = youtubeMatch[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&enablejsapi=1`;
    }

    // Facebook Detection (Standard videos and Reels)
    const isFacebook = cleanUrl.includes('facebook.com') || cleanUrl.includes('fb.watch');
    if (isFacebook) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(cleanUrl)}&show_text=0&autoplay=true&container_width=800`;
    }

    return null;
  };

  // Show all video types in this section
  const videoItems = PORTFOLIO.filter(item => item.type === 'video');

  const secureEmbedUrl = activeItem ? getSecureEmbedUrl(activeItem.videoUrl) : null;
  const isFacebookVideo = activeItem?.videoUrl?.includes('facebook.com') || activeItem?.videoUrl?.includes('fb.watch');

  const closeVideo = () => {
    setActiveItem(null);
    setIsVideoLoading(true);
  };

  return (
    <section id="portfolio" className="pt-32 pb-24 wedding-bg md:pt-40">
      {/* Portfolio Main Container - Optimized to max-w-5xl for a Focused "10-Col" Feel */}
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[9px] md:text-xs">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black mt-2 leading-tight">Cinematic Films</h2>
            
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2 pb-1 text-[9px] font-bold tracking-[0.2em] uppercase text-gold border-b border-gold/20">
                <Film size={12} />
                Video Portfolio
              </div>
            </div>
          </div>
        </div>

        {/* Constrained Grid - Reduced gaps for more cohesion in the "10" container */}
        <div className="grid md:grid-cols-2 gap-y-16 gap-x-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {videoItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative p-2.5 bg-white border border-neutral-100 shadow-[0_12px_30px_-15px_rgba(0,0,0,0.06)] transition-all duration-700 group-hover:shadow-[0_20px_40px_-15px_rgba(247,148,29,0.12)] group-hover:border-gold/20">
                
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-neutral-100 group-hover:border-gold/40 transition-colors"></div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-neutral-100 group-hover:border-gold/40 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-neutral-100 group-hover:border-gold/40 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-neutral-100 group-hover:border-gold/40 transition-colors"></div>

                <div className="relative aspect-video overflow-hidden bg-neutral-900 rounded-[1px]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-20 transition-all duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white mb-2.5 shadow-xl ring-2 ring-white/10 group-hover:ring-white/20 transition-all">
                      <Play fill="white" size={18} className="ml-1" />
                    </div>
                    <p className="text-white text-[8px] font-bold tracking-[0.4em] uppercase">
                      Play Film
                    </p>
                  </div>

                  <div className="absolute top-2.5 left-2.5 bg-black/30 backdrop-blur-md px-2 py-0.5 text-[6px] font-bold tracking-[0.2em] text-white uppercase border border-white/5 group-hover:opacity-0 transition-opacity">
                    {item.category}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center px-2">
                <h3 className="text-xl font-serif text-black mb-1 transition-colors group-hover:text-gold tracking-tight">{item.couple}</h3>
                <p className="text-[8px] text-neutral-400 uppercase tracking-[0.4em] font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {videoItems.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-neutral-300 font-serif italic text-xl">The gallery is currently being curated.</p>
          </div>
        )}
      </div>

      {/* Expanded View Modal - Consistent Compact Proportions */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6 md:p-12 backdrop-blur-sm overflow-y-auto"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-xl my-auto bg-white shadow-2xl rounded-lg overflow-hidden animate-in fade-in zoom-in duration-500" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar - Minimal */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-50 bg-white/95 backdrop-blur-md sticky top-0 z-20">
               <div className="flex items-center gap-2">
                  <Film className="text-gold" size={10} />
                  <span className="text-[7px] font-bold tracking-[0.3em] uppercase text-neutral-400">Cinematic Reel</span>
               </div>
               <div className="flex items-center gap-2">
                  <button 
                    className="text-black/30 hover:text-gold transition-all hover:rotate-90 p-1 outline-none"
                    onClick={closeVideo}
                  >
                    <X size={16} />
                  </button>
               </div>
            </div>

            <div className="flex flex-col">
              {/* Video Player Area */}
              <div className="relative aspect-video bg-black">
                {secureEmbedUrl ? (
                  <>
                    {isVideoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-10">
                        <Loader2 className="text-gold animate-spin" size={24} />
                      </div>
                    )}
                    <iframe
                      src={secureEmbedUrl}
                      title={activeItem.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      onLoad={() => setIsVideoLoading(false)}
                    ></iframe>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white p-4 text-center bg-neutral-900">
                    <Film className="text-gold/20 mb-2" size={32} />
                    <h3 className="text-[10px] font-serif mb-0.5 uppercase tracking-[0.2em] text-neutral-300">Preview Restricted</h3>
                    <p className="text-neutral-600 text-[8px] mb-3 italic">View directly on native host</p>
                    <a 
                      href={activeItem.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gold text-white text-[7px] font-bold tracking-widest uppercase hover:bg-gold/80 transition-all"
                    >
                      Open Link
                    </a>
                  </div>
                )}
              </div>

              {/* Title & Description Container */}
              <div className="p-5 md:p-6 bg-white">
                <div className="text-center max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="px-1.5 py-0.5 bg-gold/5 text-gold text-[6px] font-bold tracking-[0.3em] uppercase rounded-full">
                      {activeItem.category}
                    </span>
                    <span className="text-[6px] font-bold tracking-[0.3em] uppercase text-neutral-300">
                      {activeItem.type}
                    </span>
                  </div>
                  
                  <h2 className="text-lg md:text-xl font-serif text-black mb-0.5 leading-tight tracking-tight">
                    {activeItem.couple}
                  </h2>
                  
                  <p className="text-[7px] text-gray-400 uppercase tracking-[0.4em] font-bold mb-4">
                    {activeItem.title}
                  </p>

                  <div className="w-4 h-px bg-gold/20 mx-auto mb-4"></div>
                  
                  <p className="text-neutral-500 text-[11px] leading-relaxed font-light italic mb-6 px-2">
                    "{activeItem.description || 'A timeless cinematic story captured with passion.'}"
                  </p>
                  
                  <div className="flex justify-center gap-2">
                    <button 
                      onClick={() => {
                        closeVideo();
                        triggerNav('contact');
                      }}
                      className="px-5 py-2 bg-black text-white text-[7px] font-bold tracking-widest uppercase hover:bg-gold transition-all"
                    >
                      Book Date
                    </button>
                    <button 
                      onClick={closeVideo}
                      className="px-5 py-2 border border-neutral-100 text-neutral-400 text-[7px] font-bold tracking-widest uppercase hover:text-black hover:border-black transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
