import React from 'react';
import { motion } from 'framer-motion';

interface BasketballProps {
  className?: string;
  rotate?: boolean;
}

export const Basketball: React.FC<BasketballProps> = ({ className = "", rotate = true }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative w-full h-full rounded-full shadow-2xl overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ff8c42 0%, #d35400 40%, #a04000 80%, #5e2600 100%)',
          boxShadow: 'inset -10px -10px 40px rgba(0,0,0,0.6), 0 20px 40px rgba(0,0,0,0.5)'
        }}
        animate={rotate ? { rotate: 360 } : {}}
        transition={rotate ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
      >
        {/* Texture/Pebbles - Noise overlay */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
               mixBlendMode: 'multiply'
             }} 
        />

        {/* Lines */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
          <defs>
            <filter id="line-shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="rgba(255,255,255,0.2)"/>
              <feDropShadow dx="0" dy="-1" stdDeviation="0.5" floodColor="rgba(0,0,0,0.5)"/>
            </filter>
          </defs>
          <g stroke="#1a1a1a" strokeWidth="2.5" fill="none" filter="url(#line-shadow)">
             {/* Horizontal Center Line */}
            <path d="M -10,50 L 110,50" transform="rotate(-15, 50, 50)" />
            {/* Vertical Center Line */}
            <path d="M 50,-10 L 50,110" transform="rotate(-15, 50, 50)" />
            {/* Curves */}
            <path d="M 5,25 Q 50,50 95,25" transform="rotate(-15, 50, 50)" />
            <path d="M 5,75 Q 50,50 95,75" transform="rotate(-15, 50, 50)" />
          </g>
        </svg>

        {/* Specular Highlight */}
        <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] rounded-full bg-white opacity-10 blur-xl pointer-events-none"></div>
      </motion.div>
    </div>
  );
};
