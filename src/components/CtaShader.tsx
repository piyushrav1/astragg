"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaShader() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);
  
  // Transform mouse position for a floating glow effect
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["-40%", "40%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["-40%", "40%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight, left, top } = containerRef.current.getBoundingClientRect();
    
    // Normalize between -0.5 and 0.5
    const x = ((e.clientX - left) / clientWidth) - 0.5;
    const y = ((e.clientY - top) / clientHeight) - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-40 px-6 bg-transparent overflow-hidden group"
    >
      
      {/* Top Fade Blend */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#02040A] to-transparent z-10 pointer-events-none" />

      {/* Interactive Glowing Orb (Tracks Mouse) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
        <motion.div 
          style={{ x: glowX, y: glowY }}
          className="w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-purple-600/15 rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      {/* Bottom Fade Blend */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#02040A] to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        
        <div className="inline-block px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-sm tracking-widest uppercase mb-10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          Ready to innovate?
        </div>
        
        <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-[1.1] tracking-tight">
          Let's Build <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-indigo-400 font-serif italic">The Future</span>
        </h2>
        
        <p className="text-[#8c94a5] max-w-2xl mx-auto mb-14 text-lg md:text-xl font-light leading-relaxed">
          Partner with AstraGG to architect digital experiences that defy the ordinary and captivate your audience.
        </p>
        
        <button className="flex items-center gap-3 px-10 py-5 bg-white text-black font-medium rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:-translate-y-1 transform">
          <span className="text-lg">Start a Project</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
}
