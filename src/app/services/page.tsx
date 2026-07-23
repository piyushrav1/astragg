"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
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

const servicesContent = [
  {
    title: "Full-Stack Engineering",
    description: "We don't just write code; we architect systems. From responsive front-ends that feel like native apps to robust, scalable backends powered by modern infrastructure, we ensure your platform can handle anything you throw at it. React, Next.js, Node, and WebGL are our weapons of choice.",
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center text-white">
      </div>
    ),
  },
  {
    title: "Cinematic UI/UX Design",
    description: "First impressions are everything. We design interfaces that are not only highly intuitive but visually striking. By merging glassmorphism, micro-animations, and dynamic lighting effects, we create digital environments that captivate your audience from the first scroll.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80')] bg-cover bg-center text-white">
      </div>
    ),
  },
  {
    title: "Scalable Cloud Architecture",
    description: "Your digital presence needs a foundation of iron. We design and deploy highly available cloud architectures using AWS and Google Cloud. Whether it's containerized microservices or serverless functions, we guarantee zero downtime and infinite scalability.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center text-white">
      </div>
    ),
  },
];

const technologies = [
  "Next.js", "React", "WebGL", "Framer Motion", "Tailwind CSS", "Node.js", "TypeScript", "AWS", "Google Cloud", "PostgreSQL", "Redis", "Docker"
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-purple-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background z-0" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-4xl"
        >
          <motion.div variants={fadeUpVariants} className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide mb-6 backdrop-blur-md">
            WHAT WE DO
          </motion.div>
          
          <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight text-white leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-fuchsia-500 to-pink-600">Capabilities</span>
          </motion.h1>
          
          <motion.p variants={fadeUpVariants} className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We deliver end-to-end digital excellence. From the first line of code to the final deployment, we build to disrupt.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. THE SERVICES (Sticky Scroll) */}
      <section className="relative z-10">
        <StickyScroll content={servicesContent} />
      </section>

      {/* 3. TECHNOLOGY MARQUEE */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h3 className="text-xl font-heading font-bold text-white mb-2">Powered By</h3>
          <p className="text-neutral-500 text-sm">The bleeding-edge stack we use to build the future.</p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-8 py-4 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <div key={i} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-neutral-300 font-medium text-lg shrink-0 hover:bg-white/10 hover:border-purple-500/50 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </motion.div>
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
            Ready to <span className="italic font-light text-neutral-400">build?</span>
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
