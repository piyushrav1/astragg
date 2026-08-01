"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, PenTool, Layers } from "lucide-react";
import React from "react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4 md:px-12 flex justify-center overflow-hidden">
      
      <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 relative">
        
        {/* ================= COLUMN 1: WEB DESIGN ================= */}
        <div className="flex flex-col gap-6 lg:gap-12">
          {/* Top Arch */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[550px] border border-white/10 hover:border-purple-500/30 transition-colors duration-500 rounded-t-[500px] flex flex-col items-center justify-start pt-24 px-8 relative group bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400 text-center leading-tight z-10 uppercase tracking-tight">
              Web <br /> Design
            </h2>
            
            <div className="absolute inset-0 top-32 flex items-center justify-center pointer-events-none p-12">
              <Monitor className="w-48 h-48 text-white opacity-20 group-hover:opacity-60 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-700 stroke-[0.5]" />
            </div>
            
            {/* Corner Arrow Notch (Cutout) */}
            <div className="absolute -bottom-[1px] -right-[1px] w-16 h-16 bg-[#050505] border-t border-l border-white/10 group-hover:border-purple-500/30 transition-colors duration-500 flex items-center justify-center z-20">
               <ArrowRight className="w-6 h-6 text-purple-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>

          {/* Bottom Inverted Arch */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[280px] border border-white/10 rounded-b-[500px] flex items-center justify-center p-12 text-center bg-gradient-to-t from-white/[0.02] to-transparent shadow-[0_0_30px_rgba(168,85,247,0.05)]"
          >
            <p className="text-neutral-400 leading-relaxed text-sm font-light">
              Crafting stunning and functional websites tailored to your brand's needs. Our web design services blend creativity with user experience to deliver captivating online experiences.
            </p>
          </motion.div>
        </div>

        {/* ================= COLUMN 2: LOGO DESIGN ================= */}
        <div className="flex flex-col gap-6 lg:gap-12 lg:pt-20">
          {/* Top Inverted Arch */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-[280px] border border-white/10 rounded-b-[500px] flex items-center justify-center p-12 text-center relative bg-gradient-to-t from-white/[0.02] to-transparent shadow-[0_0_30px_rgba(168,85,247,0.05)]"
          >
            <p className="text-neutral-400 leading-relaxed text-sm font-light">
              Crafting memorable brand identities through timeless logo design. I specialize in creating logos that resonate with your audience and represent your brand.
            </p>
          </motion.div>

          {/* Bottom Custom Shape */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-[550px] border border-white/10 hover:border-purple-500/30 transition-colors duration-500 rounded-b-[500px] flex flex-col items-center justify-end pb-24 px-8 relative group bg-gradient-to-t from-white/[0.02] to-transparent overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            {/* Corner Arrow Notch (Top Right) */}
            <div className="absolute -top-[1px] -right-[1px] w-16 h-16 bg-[#050505] border-b border-l border-white/10 group-hover:border-purple-500/30 transition-colors duration-500 flex items-center justify-center z-20">
               <ArrowRight className="w-6 h-6 text-purple-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>

            <div className="absolute inset-0 bottom-40 flex items-center justify-center pointer-events-none p-12">
              <PenTool className="w-48 h-48 text-white opacity-20 group-hover:opacity-60 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-700 stroke-[0.5] group-hover:rotate-[15deg]" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400 text-center leading-tight z-10 uppercase tracking-tight">
              Logo <br /> Design
            </h2>
          </motion.div>
        </div>

        {/* ================= COLUMN 3: PRODUCT DESIGN ================= */}
        <div className="flex flex-col gap-6 lg:gap-12">
          {/* Top Arch */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full h-[550px] border border-white/10 hover:border-purple-500/30 transition-colors duration-500 rounded-t-[500px] flex flex-col items-center justify-start pt-24 px-8 relative group bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400 text-center leading-tight z-10 uppercase tracking-tight">
              Product <br /> Design
            </h2>
            
            <div className="absolute inset-0 top-32 flex items-center justify-center pointer-events-none p-12">
              <Layers className="w-48 h-48 text-white opacity-20 group-hover:opacity-60 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-700 stroke-[0.5] group-hover:-rotate-[15deg]" />
            </div>
            
            {/* Corner Arrow Notch (Bottom Left) */}
            <div className="absolute -bottom-[1px] -left-[1px] w-16 h-16 bg-[#050505] border-t border-r border-white/10 group-hover:border-purple-500/30 transition-colors duration-500 flex items-center justify-center z-20">
               <ArrowRight className="w-6 h-6 text-purple-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>

          {/* Bottom Inverted Arch */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full h-[280px] border border-white/10 rounded-b-[500px] flex items-center justify-center p-12 text-center bg-gradient-to-t from-white/[0.02] to-transparent shadow-[0_0_30px_rgba(168,85,247,0.05)]"
          >
            <p className="text-neutral-400 leading-relaxed text-sm font-light">
              Innovative product design solutions that marry form with function. From concept to prototype, we bring your ideas to life with precision and creativity.
            </p>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
