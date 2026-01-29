import React from 'react';
import { User, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 h-24 flex items-center justify-between px-8 md:px-12 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center bg-orange-500 text-black font-bold text-xs group-hover:scale-110 transition-transform">
          SN
        </div>
        <div className="flex flex-col leading-none font-display uppercase tracking-wider text-white">
          <span className="text-xl tracking-widest">SNEVAINTL</span>
          <span className="text-[0.65rem] tracking-[0.2em] text-gray-300">Store by Abrar</span>
        </div>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase">
        <button className="text-orange-500 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full">
          Products
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">Customize</button>
        <button className="text-gray-400 hover:text-white transition-colors">Contacts</button>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-6 text-white">
        <button className="hover:text-orange-500 transition-colors">
          <User size={20} strokeWidth={1.5} />
        </button>
        <button className="relative hover:text-orange-500 transition-colors">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>
      </div>
    </nav>
  );
};

interface ControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const CarouselControls: React.FC<ControlsProps> = ({ onPrev, onNext }) => {
  return (
    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-4 z-50">
      <button 
        onClick={onPrev}
        className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-orange-500 hover:text-orange-500 hover:bg-white/5 transition-all active:scale-95"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={onNext}
        className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-orange-500 hover:text-orange-500 hover:bg-white/5 transition-all active:scale-95"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

interface IndicatorProps {
  current: number;
  total: number;
}

export const SlideIndicator: React.FC<IndicatorProps> = ({ current, total }) => {
  const formattedCurrent = String(current + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-64 hidden md:flex flex-col items-center justify-center z-40 pointer-events-none">
      <div className="rotate-90 origin-center whitespace-nowrap text-orange-500 font-condensed font-bold tracking-widest text-lg">
        <span className="text-2xl">{formattedCurrent}</span>
        <span className="mx-2 text-gray-600">/</span>
        <span className="text-gray-600">{formattedTotal}</span>
      </div>
    </div>
  );
};