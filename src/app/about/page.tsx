"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, PenTool, Layers, Zap, Heart, MonitorSmartphone, TrendingUp, ShieldCheck } from 'lucide-react';
import SpecularButton from '@/components/SpecularButton';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { GlareCard } from '@/components/ui/glare-card';

const WebgpuHero = dynamic(() => import("@/components/WebgpuHero").then(mod => mod.WebgpuHero), { 
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
  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-purple-500/30">
      
      {/* 1. HERO SECTION (WebGPU) */}
      <section className="relative w-full overflow-hidden border-b border-white/10">
        <WebgpuHero />
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              We don't just build websites. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                We engineer digital dominance.
              </span>
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl">
              AstraGG is an elite collective of digital architects. We merge cinematic design with hardcore engineering to create experiences that refuse to be ignored.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. THE APPROACH (Bento Grid) */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-purple-900/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our DNA</motion.h2>
            <motion.p variants={fadeUpVariants} className="text-neutral-400 max-w-2xl mx-auto">The principles that dictate every pixel and function we write.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: PenTool, title: "Cinematic Aesthetics", desc: "Every interface is treated like a canvas. We prioritize motion, lighting, and layout to evoke emotion." },
              { icon: Zap, title: "Uncompromising Performance", desc: "Heavy design shouldn't mean heavy load times. We optimize at the GPU level to ensure buttery smooth 60fps." },
              { icon: ShieldCheck, title: "Bulletproof Architecture", desc: "Built on modern, scalable stacks. Your application will perform flawlessly under pressure." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariants}
                className="group relative bg-background/50 backdrop-blur-lg border border-white/5 rounded-3xl p-8 flex flex-col items-start hover:border-purple-500/30 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE ARCHITECTS (Glare Cards) */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">The Architects</motion.h2>
            <motion.p variants={fadeUpVariants} className="text-neutral-400 max-w-2xl mx-auto">Meet the minds behind the machine.</motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: "Piyush Ravi", role: "Founder & Lead Engineer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&crop=faces" },
              { name: "Elena K.", role: "Design Director", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&crop=faces" },
              { name: "James L.", role: "Creative Strategist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariants}
              >
                <GlareCard className="flex flex-col items-center justify-end p-0 relative overflow-hidden group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="relative z-10 w-full p-8 text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white font-heading">{member.name}</h3>
                    <p className="text-purple-400 font-bold tracking-wider text-xs uppercase mt-2">{member.role}</p>
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
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
