import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const triggerNav = (section: string) => {
    window.dispatchEvent(new CustomEvent('app-navigate', { detail: { section } }));
  };

  return (
    <footer className="bg-black text-white py-4 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
          <div className="text-center md:text-left">
            <span className="text-lg font-serif font-bold tracking-tighter">
              CD<span className="text-gold">FILMS</span>
            </span>
            <p className="text-neutral-500 text-[7px] tracking-[0.3em] uppercase mt-0.5">LET US TELL YOUR STORY. BOOK YOUR DATE TODAY</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-wrap justify-center gap-5">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button 
                  key={link.id}
                  onClick={() => triggerNav(link.id)}
                  className="text-[8px] font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-gold transition-colors outline-none"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center text-neutral-500 text-[7px] uppercase tracking-[0.2em] font-medium opacity-80 text-center">
          <p>© PIXODE Philippines — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;