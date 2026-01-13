
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Video, Briefcase, Box, Calendar } from 'lucide-react';
import { SectionType } from '../App';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if the background is dark based on section. 
  // Portfolio is still dark-themed.
  const isDarkSection = ['portfolio'].includes(activeSection);

  const navLinks: { name: string; id: SectionType; icon: React.ReactNode }[] = [
    { name: 'Home', id: 'hero', icon: <Home size={14} /> },
    { name: 'About', id: 'about', icon: <Info size={14} /> },
    { name: 'Services', id: 'services', icon: <Briefcase size={14} /> },
    { name: 'Portfolio', id: 'portfolio', icon: <Video size={14} /> },
    { name: 'Packages', id: 'pricing', icon: <Box size={14} /> },
  ];

  const handleLinkClick = (id: SectionType) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
      {/* Background Blur Overlay - Mobile Only */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md md:hidden pointer-events-auto animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* The Dynamic Island Container */}
      <nav 
        className={`
          pointer-events-auto
          relative flex items-center justify-between
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isMobileMenuOpen 
            ? 'w-full max-w-[350px] rounded-[32px] p-6 flex-col gap-6' 
            : 'max-w-max rounded-full px-2 py-2 gap-4'
          }
          ${isDarkSection && !isMobileMenuOpen
            ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(40,40,40,0.3)]' 
            : 'bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_32px_rgba(40,40,40,0.1)]'
          }
        `}
      >
        {/* Logo Section */}
        <button 
          onClick={() => handleLinkClick('hero')} 
          className={`flex items-center gap-2 outline-none transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 scale-110' : 'pl-3'}`}
        >
          <img 
            src={LOGO_URL} 
            alt="CDFilms Logo" 
            className="w-6 h-6 object-contain"
          />
          <span className={`text-sm font-serif font-bold tracking-tighter transition-colors ${
            isDarkSection && !isMobileMenuOpen ? 'text-white' : 'text-black'
          }`}>
            CD<span className="text-gold">FILMS</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-1 ${isMobileMenuOpen ? 'hidden' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`
                group relative flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all outline-none
                ${activeSection === link.id 
                  ? 'bg-gold text-white shadow-lg' 
                  : (isDarkSection ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-black/60 hover:text-black hover:bg-black/5')
                }
              `}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-[9px] pointer-events-none lowercase">
                {link.name}
              </span>
              {link.icon}
              <span className={activeSection === link.id ? 'block' : 'hidden lg:block'}>{link.name}</span>
            </button>
          ))}
          
          {/* Desktop Book Now Button */}
          <button
            onClick={() => handleLinkClick('contact')}
            className={`
              ml-2 flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all outline-none
              ${activeSection === 'contact' 
                ? 'bg-gold text-white shadow-lg' 
                : 'bg-black text-white hover:bg-gold hover:shadow-lg'
              }
            `}
          >
            <Calendar size={14} />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-black" size={20} />
          ) : (
            <Menu className={isDarkSection ? 'text-white' : 'text-black'} size={20} />
          )}
        </button>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="w-full flex flex-col gap-2 animate-in fade-in zoom-in-95 duration-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`
                  flex items-center justify-between w-full px-6 py-4 rounded-2xl text-lg font-serif transition-all outline-none
                  ${activeSection === link.id ? 'bg-gold text-white' : 'bg-black/5 text-black hover:bg-black/10'}
                `}
              >
                {link.name}
                {link.icon}
              </button>
            ))}
            
            {/* Mobile Book Now Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`
                flex items-center justify-between w-full px-6 py-4 rounded-2xl text-lg font-serif transition-all outline-none
                ${activeSection === 'contact' ? 'bg-gold text-white' : 'bg-black text-white hover:bg-gold/90'}
              `}
            >
              Book Now
              <Calendar size={18} />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
