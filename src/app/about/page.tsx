"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, PenTool, Rocket, Layers, Zap, Heart } from 'lucide-react';
import SpecularButton from '@/components/SpecularButton';
import Link from 'next/link';
import { StaggeredGrid } from '@/components/ui/staggered-grid';

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
  const [activeIdx, setActiveIdx] = React.useState<number | null>(0);

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

      {/* 2. THE DNA (Staggered Grid) */}
      <section className="relative border-y border-white/5 bg-black overflow-hidden">
        <StaggeredGrid 
          images={Array(21).fill('')}
          centerText="DNA"
          showFooter={false}
          bentoItems={[
            { id: '01', title: 'Innovation', subtitle: 'Bleeding edge', description: 'Next.js, Framer Motion, and Turbopack to keep you ahead of the curve.', icon: <Rocket className="w-5 h-5 text-white" /> },
            { id: '02', title: 'Performance', subtitle: 'Speed', description: 'Every millisecond counts. We optimize fiercely for speed.', icon: <Zap className="w-5 h-5 text-white" /> },
            { id: '03', title: 'Aesthetics', subtitle: 'Cinematic UI', description: 'Design that evokes emotion and captures attention.', icon: <Layers className="w-5 h-5 text-white" /> },
            { id: '04', title: 'Partnership', subtitle: 'Client Obsession', description: 'Your success is our success. Radical transparency.', icon: <Heart className="w-5 h-5 text-white" /> },
          ]}
        />
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
