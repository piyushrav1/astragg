"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, PenTool, Rocket, Layers, Zap, Heart } from 'lucide-react';
import SpecularButton from '@/components/SpecularButton';
import Link from 'next/link';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-purple-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <motion.p variants={fadeUpVariants} className="text-purple-400 font-medium tracking-widest uppercase mb-6 text-sm">
              The AstraGG Ethos
            </motion.p>
            <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-[7rem] font-heading font-bold leading-[0.95] tracking-tighter text-white mb-8">
              We don't just build. <br className="hidden md:block" />
              <span className="italic font-light text-neutral-400 font-sans tracking-normal">We engineer</span> <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
                digital experiences.
              </span>
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="text-lg md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
              AstraGG is an elite collective of digital architects. We blend striking cinematic aesthetics with ruthless engineering to create products that dominate the modern web.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. BENTO GRID PHILOSOPHY */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 min-h-[600px] auto-rows-[300px] md:auto-rows-auto"
          >
            {/* Bento Box 1 - Hero Size */}
            <motion.div variants={fadeUpVariants} className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
              {/* Animated Background Blob */}
              <div className="absolute -inset-x-20 -top-20 h-[300px] bg-purple-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Large Background Typography */}
              <span className="absolute -bottom-10 -right-10 text-[15rem] font-bold text-white/[0.02] leading-none select-none group-hover:text-purple-500/[0.05] transition-colors duration-700">01</span>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="mt-auto pt-12">
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Relentless Innovation</h3>
                  <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                    We refuse to be stagnant. We utilize bleeding-edge technologies like Next.js, Framer Motion, and Turbopack to keep you ahead of the curve. Innovation isn't a buzzword; it's our baseline.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 2 - Small */}
            <motion.div variants={fadeUpVariants} className="md:col-span-1 md:row-span-1 bg-black border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]">
              <span className="absolute -top-4 -right-4 text-[8rem] font-bold text-white/[0.02] leading-none select-none">02</span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Zap className="w-8 h-8 text-blue-400 mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Performance First</h3>
                  <p className="text-neutral-500 text-sm">Every millisecond counts. We optimize fiercely for speed.</p>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 3 - Small */}
            <motion.div variants={fadeUpVariants} className="md:col-span-1 md:row-span-1 bg-black border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]">
              <span className="absolute -top-4 -right-4 text-[8rem] font-bold text-white/[0.02] leading-none select-none">03</span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Layers className="w-8 h-8 text-pink-400 mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Cinematic UI</h3>
                  <p className="text-neutral-500 text-sm">Design that evokes emotion and captures attention.</p>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 4 - Wide */}
            <motion.div variants={fadeUpVariants} className="md:col-span-2 md:row-span-1 bg-gradient-to-tr from-neutral-900 to-black border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="absolute bottom-0 right-4 text-[12rem] font-bold text-white/[0.02] leading-none select-none translate-y-1/4">04</span>
              <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Heart className="w-8 h-8 text-red-400" />
                    <h3 className="text-3xl font-heading font-bold text-white">Client Obsession</h3>
                  </div>
                  <p className="text-neutral-400 max-w-md">Your success is our success. We partner with you at every step, offering radical transparency and unwavering dedication to your vision.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE APPROACH (Timeline) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Approach</motion.h2>
            <motion.p variants={fadeUpVariants} className="text-neutral-400 max-w-2xl mx-auto">How we turn abstract ideas into digital reality.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

            {[
              { icon: PenTool, title: "1. Strategy & UX", desc: "We map out the user journey, wireframing the architecture to ensure absolute clarity before writing a single line of code." },
              { icon: Layers, title: "2. Visual Design", desc: "We craft the aesthetic identity. Cinematic typography, glassmorphism, and micro-animations that scream premium." },
              { icon: Code2, title: "3. Engineering", desc: "We build it. Using robust, scalable frameworks to ensure your application performs beautifully under pressure." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariants}
                className="relative z-10 bg-background/50 backdrop-blur-lg border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-neutral-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background z-0" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight">
            Ready to <span className="italic font-light text-neutral-400">disrupt?</span>
          </h2>
          
          <Link href="/contact" className="inline-block">
            <SpecularButton
              size="lg"
              radius={16}
              tint="#8b5cf6"
              tintOpacity={0.1}
              blur={12}
              textColor="#ffffff"
              lineColor="#8b5cf6"
              baseColor="#111111"
              intensity={1}
              shineSize={12}
              shineFade={30}
              thickness={1.5}
              speed={0.4}
              followMouse
              proximity={250}
              onClick={() => {}}
            >
              Start a Project
            </SpecularButton>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
