import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Basketball } from './Basketball';
import { SlideProps } from '../types';

// --- SLIDE 1: HERO ---
export const SlideHero: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 md:p-12 overflow-hidden">
      
      {/* Top Left Promo - Floating */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="absolute top-24 left-8 md:left-12 flex items-center gap-3 z-20 cursor-pointer group"
      >
        <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
          <Play size={14} className="fill-white text-white ml-0.5" />
        </div>
        <div className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
          <p>Promotion</p>
          <p className="font-bold text-white">Video</p>
        </div>
      </motion.div>

      {/* CENTER VISUAL: TEXT + BALL */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* HUGE TEXT BEHIND */}
        <div className="relative flex items-center justify-center w-full z-10 select-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[15vw] md:text-[18vw] leading-none text-[#2a2a2a] tracking-tighter flex gap-[18vw] md:gap-[16vw] items-center"
          >
            <span>SPA</span>
            <span>ING</span>
          </motion.h1>

          {/* BASKETBALL CENTER */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] md:w-[28vw] md:h-[28vw] z-20"
            initial={{ y: 50, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
          >
            <Basketball className="w-full h-full" />
            
            {/* Floating gray dot decoration */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 top-1/4 w-3 h-3 rounded-full bg-gray-700/50 backdrop-blur-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className="mt-auto w-full flex flex-col md:flex-row items-end justify-between relative z-30">
        
        {/* Price Block */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-8 md:mb-0"
        >
          <h2 className="text-4xl md:text-5xl font-condensed font-bold text-orange-500 mb-1">$34.99</h2>
          <p className="text-xs font-bold text-gray-500 tracking-widest">SIZE: 29.5'' • OFFICIAL</p>
        </motion.div>

        {/* CTA Center-ish */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 hidden md:block"
        >
          <button className="bg-orange-600 text-white font-condensed font-bold tracking-wider px-10 py-4 text-lg hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] transition-all hover:-translate-y-1">
            ADD TO CART
          </button>
        </motion.div>

        {/* Spacer for Controls */}
        <div className="w-24 hidden md:block"></div>
      </div>
    </div>
  );
};


// --- SLIDE 2: METRICS ---
export const SlideMetrics: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-full relative flex flex-col md:flex-row items-center p-6 md:p-0 overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:pl-24 z-20">
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           animate={isActive ? { opacity: 1, x: 0 } : {}}
           transition={{ delay: 0.2 }}
           className="flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <span className="text-orange-500 font-bold text-xs tracking-[0.2em]">PERFORMANCE METRICS</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="font-display text-6xl md:text-8xl text-white leading-[0.9] mb-12"
        >
          ELITE <br/> <span className="text-gray-600">CONTROL</span>
        </motion.h2>

        <div className="space-y-10">
          <motion.div 
             initial={{ opacity: 0 }}
             animate={isActive ? { opacity: 1 } : {}}
             transition={{ delay: 0.4 }}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl font-condensed font-bold text-white">100%</span>
              <span className="text-sm text-gray-400 font-bold tracking-widest">MICROFIBER COMPOSITE</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Advanced cover material provides a superior tack and soft feel for ultimate control.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={isActive ? { opacity: 1 } : {}}
             transition={{ delay: 0.5 }}
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-5xl font-condensed font-bold text-white">0.5<span className="text-2xl ml-1">mm</span></span>
              <span className="text-sm text-gray-400 font-bold tracking-widest">PEBBLE DEPTH</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Optimized channel design and pebble depth for consistent grip in all conditions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Visual - Cropped Ball */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] z-10 flex items-center justify-end pointer-events-none"
      >
        <div className="relative w-[120vh] h-[120vh] right-[-30vh] md:right-[-40vh]">
             <Basketball className="w-full h-full" />
        </div>
      </motion.div>
    </div>
  );
};


// --- SLIDE 3: CHAMPION PEDESTAL ---
export const SlideChampion: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center z-10">
      
      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="absolute top-24 left-0 right-0 flex justify-center"
      >
        <span className="text-orange-500 font-bold text-xs tracking-[0.3em] uppercase">Limited Edition</span>
      </motion.div>

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="font-display text-6xl md:text-9xl text-white mb-8 relative z-20"
      >
        THE CHAMPION
      </motion.h1>

      {/* Center Pedestal Visual */}
      <div className="relative w-full max-w-4xl h-[40vh] flex items-end justify-center perspective-1000 mb-12">
        {/* The Ball */}
        <motion.div 
           initial={{ y: -50, opacity: 0 }}
           animate={isActive ? { y: 0, opacity: 1 } : {}}
           transition={{ delay: 0.4, type: 'spring' }}
           className="relative z-30 w-48 h-48 md:w-64 md:h-64 mb-8"
        >
          <Basketball className="w-full h-full" />
          {/* Shadow under ball */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/60 blur-lg rounded-full"></div>
        </motion.div>

        {/* The Podium */}
        <motion.div 
           initial={{ y: 100, opacity: 0 }}
           animate={isActive ? { y: 0, opacity: 1 } : {}}
           transition={{ delay: 0.5 }}
           className="absolute bottom-0 w-64 md:w-96 h-16 bg-gradient-to-b from-gray-800 to-black rounded-t-lg border-t border-white/10 shadow-2xl flex items-center justify-center"
        >
             <div className="absolute top-0 w-full h-[1px] bg-white/30"></div>
             <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </motion.div>
      </div>

      {/* Info Blocks */}
      <div className="absolute bottom-12 w-full max-w-5xl flex justify-between px-8 md:px-0 text-left pointer-events-none">
        
        {/* Left Block */}
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={isActive ? { opacity: 1, x: 0 } : {}}
           transition={{ delay: 0.6 }}
           className="hidden md:block"
        >
          <div className="flex items-center gap-2 mb-2">
             <span className="text-orange-500 font-bold text-[10px] border border-orange-500 px-1 py-0.5 rounded">RANK 01</span>
          </div>
          <h3 className="text-xl font-display text-white mb-1">Elite Tier</h3>
          <p className="text-gray-500 text-xs w-48">Constructed for the highest level of competition.</p>
        </motion.div>

        {/* Right Block */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={isActive ? { opacity: 1, x: 0 } : {}}
           transition={{ delay: 0.6 }}
           className="hidden md:block text-right"
        >
          <div className="flex items-center justify-end gap-2 mb-2">
             <span className="text-orange-500 font-bold text-[10px] border border-orange-500 px-1 py-0.5 rounded">CERTIFIED</span>
          </div>
          <h3 className="text-xl font-display text-white mb-1">Gold Standard</h3>
          <p className="text-gray-500 text-xs w-48 ml-auto">Meets all regulation weight and size requirements.</p>
        </motion.div>
      </div>
    </div>
  );
};
