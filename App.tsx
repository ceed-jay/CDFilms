
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type SectionType = 'hero' | 'about' | 'services' | 'portfolio' | 'pricing' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Advanced Security & Deterrent Logic
  useEffect(() => {
    // 1. Disable Right Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable Key Shortcuts for DevTools, Saving, Printing, and Selecting
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 key
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;

      // Disable Ctrl+Shift+I, J, C (Inspect/Console/Elements)
      if (isCtrlOrMeta && isShift && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (isCtrlOrMeta && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+S (Save Page)
      if (isCtrlOrMeta && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+P (Print Page)
      if (isCtrlOrMeta && (e.key === 'P' || e.key === 'p')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+A (Select All)
      if (isCtrlOrMeta && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Persistent Debugger Deterrent
    // This loop forces the browser to pause execution whenever developer tools are opened.
    const startDeterrent = () => {
      const deterrent = function() {
        (function() {
          (function a() {
            try {
              (function b(i) {
                if (("" + i / i).length !== 1 || i % 20 === 0) {
                  (function() {}).constructor("debugger")();
                } else {
                  debugger;
                }
                b(++i);
              })(0);
            } catch (e) {
              setTimeout(a, 50);
            }
          })();
        })();
      };

      try {
        deterrent();
      } catch (e) {}
    };

    // 4. Console Clear Deterrent
    const consoleSpam = setInterval(() => {
      console.clear();
      console.log("%cSecurity: Inspection is disabled on this site.", "color: red; font-size: 20px; font-weight: bold;");
    }, 1000);

    const debuggerInterval = setInterval(startDeterrent, 500);

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    // Prevent drag and drop of images
    window.addEventListener('dragstart', (e) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(debuggerInterval);
      clearInterval(consoleSpam);
    };
  }, []);

  // Function to navigate between windows
  const navigateTo = (section: SectionType) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 400); // Wait for fade out
  };

  // Sync with custom events from Navbar
  useEffect(() => {
    const handleNav = (e: any) => {
      const target = e.detail?.section as SectionType;
      if (target) navigateTo(target);
    };
    window.addEventListener('app-navigate', handleNav);
    return () => window.removeEventListener('app-navigate', handleNav);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero': return <Hero />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'portfolio': return <Portfolio />;
      case 'pricing': return <Pricing />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="h-screen w-full relative bg-white overflow-hidden select-none" onCopy={(e) => e.preventDefault()}>
      {/* Dynamic Island Header floats over everything */}
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />
      
      <main className="h-full w-full relative">
        <div 
          className={`h-full w-full transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
          }`}
        >
          {/* Main scrollable container */}
          <div className="h-full w-full overflow-y-auto no-scrollbar">
            {renderSection()}
            
            {/* Unified cinematic footer at the end of each section's scroll */}
            <Footer />
          </div>
        </div>
      </main>
      
      <style>{`
        /* Global CSS protections */
        * {
          -webkit-tap-highlight-color: transparent;
          outline: none !important;
        }

        /* Disable text selection and copying */
        body, html, #root {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
        }

        /* Prevent image dragging and saving */
        img {
          -webkit-user-drag: none !important;
          user-drag: none !important;
          pointer-events: none !important;
        }

        .select-none {
          user-select: none !important;
          -webkit-user-select: none !important;
        }

        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default App;
