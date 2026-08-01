"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImpactStats from "@/components/ImpactStats"; // Importing the existing component
import CtaShader from "@/components/CtaShader"; // New WebGPU CTA component

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Parallax Transforms
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);

  // Hero 3D Asset Parallax Transforms
  const heroBlob1Y = useTransform(scrollYProgress, [0, 0.5], ["0px", "-150px"]);
  const heroBlob2Y = useTransform(scrollYProgress, [0, 0.5], ["0px", "100px"]);
  const heroBlob3Y = useTransform(scrollYProgress, [0, 0.5], ["0px", "-80px"]);
  const heroBlob4Y = useTransform(scrollYProgress, [0, 0.5], ["0px", "120px"]);
  const heroGlowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);

  // Text Reveal Animation Variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0.2, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const editorialText = "Engineering the absolute pinnacle of the modern web.";

  const team = [
    { name: "Sarah Jenkins", role: "Visionary CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
    { name: "David Chen", role: "Head of AI", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
    { name: "Elena Rostova", role: "Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
    { name: "Marcus Thorne", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <main ref={containerRef} className="bg-[#02040A] text-white relative overflow-hidden flex flex-col pt-24">
      
      {/* ================= GLOBAL PARALLAX BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: yParallaxFast, rotate: rotateParallax }}
          className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px]"
        />
        <motion.div 
          style={{ y: yParallaxSlow }}
          className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]"
        />
      </div>

      {/* ================= HERO SECTION (Nexa AI Style) ================= */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[85vh] relative z-10 mb-32">
        {/* Left Side: 3D Art (Cosmic Tear) */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center pointer-events-none">
          {/* Central Glow (No line, just pure atmospheric light) */}
          <motion.div style={{ scale: heroGlowScale }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-10 flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              className="absolute w-[80px] h-[400px] bg-blue-400/5 rounded-full blur-[60px] shadow-[0_0_150px_80px_rgba(79,70,229,0.4),0_0_200px_100px_rgba(147,51,234,0.2)] pointer-events-none"
            />
          </motion.div>

          {/* Floating Organic Blobs with Scroll Parallax */}
          {/* Blob 1: Top Left */}
          <motion.div style={{ y: heroBlob1Y }} className="absolute top-[15%] left-[20%] z-20">
            <motion.div 
              animate={{ 
                y: [0, -40, 0], 
                x: [0, -20, 0],
                rotate: [0, 45, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-[#2a1335] to-[#12081a] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.8),inset_10px_10px_20px_rgba(255,255,255,0.1)] blur-[2px] opacity-90"
            />
          </motion.div>
          
          {/* Blob 2: Middle Right */}
          <motion.div style={{ y: heroBlob2Y }} className="absolute top-[40%] right-[15%] z-0">
            <motion.div 
              animate={{ 
                y: [0, 50, 0], 
                x: [0, 30, 0],
                rotate: [0, -30, 0] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-40 h-40 md:w-64 md:h-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-tr from-[#1b0d26] to-[#2c133a] shadow-[inset_-15px_-15px_30px_rgba(0,0,0,0.9),inset_15px_15px_30px_rgba(255,255,255,0.05)] blur-[3px] opacity-80"
            />
          </motion.div>

          {/* Blob 3: Bottom Left */}
          <motion.div style={{ y: heroBlob3Y }} className="absolute bottom-[20%] left-[10%] z-30">
            <motion.div 
              animate={{ 
                y: [0, -30, 0], 
                x: [0, 20, 0],
                rotate: [0, 60, 0],
                scale: [1, 0.9, 1] 
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="w-24 h-24 md:w-36 md:h-36 rounded-[50%_50%_30%_70%/50%_50%_70%_30%] bg-gradient-to-br from-[#2d1238] to-[#0a0512] shadow-[inset_-8px_-8px_15px_rgba(0,0,0,0.9),inset_8px_8px_15px_rgba(255,255,255,0.1)] blur-[1px] opacity-95"
            />
          </motion.div>

          {/* Blob 4: Bottom Right (very dark) */}
          <motion.div style={{ y: heroBlob4Y }} className="absolute bottom-[10%] right-[30%] z-10">
            <motion.div 
              animate={{ 
                y: [0, 40, 0], 
                rotate: [0, -20, 0] 
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="w-32 h-20 md:w-56 md:h-32 rounded-[70%_30%_50%_50%/30%_70%_50%_50%] bg-gradient-to-r from-[#12071a] to-[#08030d] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,1),inset_5px_5px_10px_rgba(255,255,255,0.02)] blur-[4px] opacity-70"
            />
          </motion.div>
        </div>

        {/* Right Side: Typography */}
        <div className="flex flex-col justify-center relative z-20 max-w-2xl mx-auto lg:mx-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8 text-white tracking-tight"
          >
            Our mission is to architect next-generation digital experiences that defy the ordinary
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-[#8c94a5] text-lg md:text-xl font-light leading-relaxed max-w-xl"
          >
            At AstraGG, we fuse cinematic aesthetics with bleeding-edge web engineering. We exist to elevate ambitious brands by building hyper-performant, 3D-integrated web architectures that captivate audiences and drive unparalleled engagement.
          </motion.p>
        </div>
      </section>

      {/* ================= EDITORIAL TYPOGRAPHY REVEAL ================= */}
      <section className="w-full py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-[#02040A]">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div 
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center overflow-hidden"
          >
            {editorialText.split(" ").map((word, index) => (
              <motion.span 
                key={index} 
                variants={letter}
                className="text-5xl md:text-7xl lg:text-8xl font-serif mr-4 lg:mr-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4a5568]"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECONDARY 3D ASSET (Clean Split Layout) ================= */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-white/5">
        
        {/* Typography Left */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-white mb-6">
            Pioneering<br/><span className="text-purple-400">Digital Evolution</span>
          </h2>
          <p className="text-[#8c94a5] text-lg font-light leading-relaxed max-w-md">
            We don't just build websites; we craft intelligent systems. Our 3D architectural integrations paired with high-performance frameworks ensure your brand stands completely apart from the noise.
          </p>
        </div>

        {/* 3D Asset Right */}
        <div className="relative h-[400px] w-full flex items-center justify-center pointer-events-none">
          {/* Massive Floating Torus/Blob */}
          <motion.div 
            style={{ 
              y: useTransform(scrollYProgress, [0.3, 0.8], ["150px", "-150px"]),
              rotate: useTransform(scrollYProgress, [0.3, 0.8], [0, 90])
            }}
            className="absolute z-10"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-tr from-indigo-900/40 via-[#1b0d26] to-[#02040A] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.9),inset_10px_10px_30px_rgba(147,51,234,0.3)] blur-[1px] opacity-100"
            />
          </motion.div>
          
          {/* Ambient Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0">
            <div className="w-[300px] h-[300px] bg-purple-500/10 blur-[80px] rounded-full" />
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES (GLASSMORPHISM GRID) ================= */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:bg-white/[0.04] transition-colors"
          >
            <div className="text-purple-400 font-mono text-sm mb-6">01</div>
            <h3 className="text-2xl font-light text-white mb-4">Unrelenting Innovation</h3>
            <p className="text-[#8c94a5] font-light leading-relaxed text-sm md:text-base">
              We do not settle for the standard. Every project we undertake is an opportunity to push the boundaries of what is technically and visually possible on the web.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:bg-white/[0.04] transition-colors"
          >
            <div className="text-blue-400 font-mono text-sm mb-6">02</div>
            <h3 className="text-2xl font-light text-white mb-4">Absolute Security</h3>
            <p className="text-[#8c94a5] font-light leading-relaxed text-sm md:text-base">
              In an era of deep data, security cannot be an afterthought. We implement military-grade encryption and privacy protocols.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-10 rounded-[32px] border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:bg-white/[0.04] transition-colors"
          >
            <div className="text-indigo-400 font-mono text-sm mb-6">03</div>
            <h3 className="text-2xl font-light text-white mb-4">Fluid Design</h3>
            <p className="text-[#8c94a5] font-light leading-relaxed text-sm md:text-base">
              Technology should feel invisible. We craft hyper-smooth interfaces that prioritize human experience over raw complexity.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= THE TEAM (Architects) ================= */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10 border-t border-white/5">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Meet The Architects</h2>
          <p className="text-[#8c94a5] max-w-2xl mx-auto font-light text-lg">
            The visionary minds behind AstraGG. A collective of elite designers, engineers, and strategists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-default perspective-[1000px]"
            >
              <div className="relative w-full aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 mb-6 group-hover:border-purple-500/50 transition-all duration-500 transform-gpu group-hover:-translate-y-4 shadow-lg group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)]">
                {/* Image */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/40 to-transparent opacity-90" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-bold text-white mb-1 font-serif">{member.name}</h4>
                  <p className="text-purple-400 font-mono text-sm tracking-wide">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INTERACTIVE 3D CTA ================= */}
      <CtaShader />

      {/* ================= IMPACT STATS INTEGRATION ================= */}
      <section className="w-full relative z-10 py-32 bg-[#02040A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <ImpactStats />
        </div>
      </section>

    </main>
  );
}
