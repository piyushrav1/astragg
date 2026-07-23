"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, PenTool, Layers } from 'lucide-react';
import SpecularButton from '@/components/SpecularButton';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { MaskedAvatars } from '@/components/ui/masked-avatars';


const WebgpuHero = dynamic(() => import("@/components/WebgpuHero"), { 
  ssr: false,
  loading: () => <div className="h-[90vh] w-full bg-black" />
});

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
      
      {/* 1. HERO SECTION (WebGPU) */}
      <section className="relative w-full overflow-hidden border-b border-white/10">
        <WebgpuHero />
      </section>

      {/* 2. THE CORE TEAM (Masked Avatars) */}
      <section className="py-24 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">The Core DNA</motion.h2>
            <motion.p variants={fadeUpVariants} className="text-neutral-400 max-w-2xl mx-auto">
              Meet the masterminds orchestrating your digital success. Hover to interact.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex justify-center py-12"
          >
            <MaskedAvatars 
              size={120} 
              movement={0.5}
              transition={0.3}
              avatars={[
                { avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=faces", name: "ALEX" },
                { avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces", name: "SARAH" },
                { avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces", name: "JAMES" },
                { avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces", name: "CHLOE" },
              ]}
            />
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
