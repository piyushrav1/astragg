"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import Galaxy from "@/components/Galaxy";
import WorkGlimpse from "@/components/WorkGlimpse";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <main ref={containerRef} className="relative h-screen flex flex-col w-full overflow-hidden text-foreground">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Galaxy
              starSpeed={0.5}
              density={1}
              hueShift={140}
              speed={1}
              glowIntensity={0.3}
              saturation={0}
              mouseRepulsion={true}
              repulsionStrength={2}
              twinkleIntensity={0.3}
              rotationSpeed={0.1}
              transparent={true}
            />
          </div>
        </div>

        {/* Navbar */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-50"
        >
          <SpotlightNavbar />
        </motion.div>

        {/* Hero Content (Scroll Parallax Container) */}
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto pointer-events-none"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center pointer-events-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
              Transforming Ideas into <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 drop-shadow-lg animate-text-gradient bg-[length:200%_auto]">
                Digital Reality
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="font-sans text-lg md:text-2xl text-neutral-300 max-w-2xl mb-10"
            >
              We are a premium digital service provider specializing in modern web development, UI/UX design, and digital marketing.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 flex-col sm:flex-row"
            >
              <button 
                className="px-8 py-3 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                View Our Services
              </button>
              <button 
                className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-md"
              >
                Get a Quote
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Overlay to blend with upcoming sections if any */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
      </main>
      
      {/* WorkGlimpse is out of the scroll parallax to create the depth effect */}
      <div className="relative z-20 bg-background">
        <WorkGlimpse />
      </div>
      
      {/* Meet Our Team Section */}
      <section className="relative z-20 bg-background py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Meet Our Team</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">The brilliant minds behind AstraGG's innovative digital experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <ProfileCard 
              name="Alex Chen"
              title="Founder & CEO"
              handle="alexc"
              status="Online"
              avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            />
            <ProfileCard 
              name="Sarah Jenkins"
              title="Creative Director"
              handle="sarahj"
              status="In a meeting"
              avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
            />
            <ProfileCard 
              name="Marcus Rivera"
              title="Lead Developer"
              handle="mrivera"
              status="Coding"
              avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Custom Footer */}
      <Footer />
    </>
  );
}
