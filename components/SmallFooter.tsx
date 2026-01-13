
import React from 'react';

const SmallFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] bg-white/80 backdrop-blur-md border-t border-neutral-100 py-1.5 md:hidden">
      <div className="container mx-auto px-4 overflow-hidden">
        <p className="text-[7px] text-center uppercase tracking-[0.2em] text-neutral-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          © PIXODE Philippines — All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SmallFooter;
