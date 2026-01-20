
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { PORTFOLIO, PRICING } from './constants';
import { PortfolioItem, PricingPackage } from './types';

export type SectionType = 'hero' | 'about' | 'services' | 'portfolio' | 'pricing' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [heroVideoId, setHeroVideoId] = useState(() => localStorage.getItem('heroVideoId') || 'FcJC_0dqdds');
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('portfolioItems');
    return saved ? JSON.parse(saved) : PORTFOLIO;
  });
  const [pricingPackages, setPricingPackages] = useState<PricingPackage[]>(() => {
    const saved = localStorage.getItem('pricingPackages');
    return saved ? JSON.parse(saved) : PRICING;
  });
  const [adminPassword, setAdminPassword] = useState(() => localStorage.getItem('adminPassword') || 'admin');

  useEffect(() => {
    localStorage.setItem('heroVideoId', heroVideoId);
  }, [heroVideoId]);

  useEffect(() => {
    localStorage.setItem('portfolioItems', JSON.stringify(portfolioItems));
  }, [portfolioItems]);

  useEffect(() => {
    localStorage.setItem('pricingPackages', JSON.stringify(pricingPackages));
  }, [pricingPackages]);

  useEffect(() => {
    localStorage.setItem('adminPassword', adminPassword);
  }, [adminPassword]);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12') e.preventDefault();
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      if (isCtrlOrMeta && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) e.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigateTo = (section: SectionType) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    const handleNav = (e: any) => {
      const target = e.detail?.section as SectionType;
      if (target) navigateTo(target);
    };
    const handleAdmin = () => setIsAdmin(true);

    window.addEventListener('app-navigate', handleNav);
    window.addEventListener('open-admin', handleAdmin);
    return () => {
      window.removeEventListener('app-navigate', handleNav);
      window.removeEventListener('open-admin', handleAdmin);
    };
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero': return <Hero videoId={heroVideoId} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'portfolio': return <Portfolio items={portfolioItems} />;
      case 'pricing': return <Pricing packages={pricingPackages} />;
      case 'contact': return <Contact />;
      default: return <Hero videoId={heroVideoId} />;
    }
  };

  if (isAdmin) {
    return (
      <Dashboard 
        onClose={() => setIsAdmin(false)}
        heroVideoId={heroVideoId}
        setHeroVideoId={setHeroVideoId}
        portfolioItems={portfolioItems}
        setPortfolioItems={setPortfolioItems}
        pricingPackages={pricingPackages}
        setPricingPackages={setPricingPackages}
        adminPassword={adminPassword}
        setAdminPassword={setAdminPassword}
      />
    );
  }

  return (
    <div className="h-screen w-full relative bg-white overflow-hidden select-none" onCopy={(e) => e.preventDefault()}>
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />
      
      <main className="h-full w-full relative">
        <div 
          className={`h-full w-full transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
          }`}
        >
          <div className="h-full w-full overflow-y-auto no-scrollbar">
            {renderSection()}
            <Footer />
          </div>
        </div>
      </main>
      
      <style>{`
        * { -webkit-tap-highlight-color: transparent; outline: none !important; }
        body, html, #root { user-select: none !important; -webkit-user-select: none !important; }
        img { -webkit-user-drag: none !important; pointer-events: none !important; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export default App;