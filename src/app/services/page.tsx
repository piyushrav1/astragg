"use client";

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SpecularButton from '@/components/SpecularButton';
import Link from 'next/link';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const services = [
  {
    number: "01",
    title: "Web Engineering",
    description: "We architect scalable, high-performance web applications using bleeding-edge stacks. From React and Next.js to intricate WebGL integrations, we ensure your platform handles massive traffic with buttery smooth 60fps performance."
  },
  {
    number: "02",
    title: "Cinematic Design",
    description: "Every interface is a canvas. We merge glassmorphism, micro-animations, and dynamic lighting effects to craft immersive digital environments that captivate users from the first pixel."
  },
  {
    number: "03",
    title: "Cloud Infrastructure",
    description: "Your digital presence needs a foundation of iron. We design highly available, containerized microservices and serverless architectures on AWS and Google Cloud to guarantee zero downtime."
  },
];

const technologies = [
  "NEXT.JS", "REACT", "WEBGL", "FRAMER", "TAILWIND", "NODE", "TYPESCRIPT", "AWS", "DOCKER"
];

export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-purple-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background z-0" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-5xl w-full"
        >
          <motion.h1 variants={fadeUpVariants} className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-heading mb-6 tracking-tighter text-neutral-100 uppercase leading-[0.85]">
            Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-700">
              Expertise.
            </span>
          </motion.h1>
          
          <motion.div variants={fadeUpVariants} className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-12" />
          
          <motion.p variants={fadeUpVariants} className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            We deliver end-to-end digital excellence. We don't use templates. We build bespoke systems engineered to dominate your market.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. THE SERVICES (Massive Typographic Blocks) */}
      <section className="relative z-10 w-full pb-32">
        <div className="flex flex-col border-t border-white/5">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative group border-b border-white/5 cursor-pointer overflow-hidden transition-all duration-500"
            >
              {/* Background Glow */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent transition-opacity duration-700 ${hoveredIdx === idx ? 'opacity-100' : 'opacity-0'}`} 
              />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center py-16 px-6 md:px-12 lg:px-24">
                {/* Number */}
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <span className={`text-6xl md:text-8xl font-bold font-heading transition-colors duration-500 ${hoveredIdx === idx ? 'text-purple-500' : 'text-neutral-800'}`}>
                    {service.number}
                  </span>
                </div>
                
                {/* Title */}
                <div className="md:w-1/2">
                  <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight transition-colors duration-500 ${hoveredIdx === idx ? 'text-white' : 'text-neutral-400'}`}>
                    {service.title}
                  </h2>
                </div>

                {/* Description & Icon (Expands on Hover on Desktop) */}
                <div className="md:w-1/4 flex flex-col justify-end items-start md:items-end mt-8 md:mt-0 overflow-hidden">
                  <AnimatePresence>
                    {(hoveredIdx === idx || true) && ( // Always show on mobile, fade slightly on desktop
                      <motion.div 
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: hoveredIdx === idx ? 1 : 0.4 }}
                        className="flex flex-col items-start md:items-end text-left md:text-right"
                      >
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                          {service.description}
                        </p>
                        <div className={`mt-6 p-4 rounded-full border transition-all duration-500 ${hoveredIdx === idx ? 'border-purple-500 bg-purple-500/10 text-purple-400 scale-110' : 'border-white/10 bg-transparent text-neutral-600'}`}>
                          <ArrowUpRight size={24} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TECHNOLOGY MARQUEE (Outline Text) */}
      <section className="py-20 bg-black overflow-hidden relative border-y border-white/5">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-16 py-4 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <div 
                key={i} 
                className="text-6xl md:text-8xl font-bold font-heading uppercase tracking-tighter shrink-0"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
                }}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background z-0" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-12 tracking-tight">
            Ready to <span className="italic font-light text-neutral-500">dominate?</span>
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
