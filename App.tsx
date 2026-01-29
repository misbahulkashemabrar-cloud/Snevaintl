import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar, CarouselControls, SlideIndicator } from './components/Navigation';
import { SlideHero, SlideMetrics, SlideChampion } from './components/Slides';
import { CarouselState } from './types';

const SLIDES = [SlideHero, SlideMetrics, SlideChampion];

const App: React.FC = () => {
  const [state, setState] = useState<CarouselState>({
    currentIndex: 0,
    direction: 0
  });

  const nextSlide = () => {
    setState((prev) => ({
      currentIndex: (prev.currentIndex + 1) % SLIDES.length,
      direction: 1
    }));
  };

  const prevSlide = () => {
    setState((prev) => ({
      currentIndex: (prev.currentIndex - 1 + SLIDES.length) % SLIDES.length,
      direction: -1
    }));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Preload logic could go here, but simple setup doesn't strictly need it for these components

  return (
    <div className="w-screen h-screen bg-[#ff5a00] flex items-center justify-center overflow-hidden">
      {/* Main Container Panel */}
      <div className="relative w-full h-full md:w-[92vw] md:h-[86vh] bg-[#121212] md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
        
        {/* Subtle Inner Glow/Vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-10 rounded-[40px]"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-0" 
             style={{ 
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                backgroundSize: '100px 100px'
             }}>
        </div>

        {/* Top Navbar */}
        <Navbar />

        {/* Carousel Area */}
        <div className="relative flex-1 w-full h-full overflow-hidden">
          <AnimatePresence initial={false} custom={state.direction} mode="popLayout">
            <motion.div
              key={state.currentIndex}
              custom={state.direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              {React.createElement(SLIDES[state.currentIndex], { isActive: true })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Controls & Indicators */}
        <CarouselControls onPrev={prevSlide} onNext={nextSlide} />
        <SlideIndicator current={state.currentIndex} total={SLIDES.length} />

      </div>
    </div>
  );
};

export default App;
