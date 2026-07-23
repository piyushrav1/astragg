"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("@/components/Galaxy"), { 
  ssr: false, 
  loading: () => <div className="absolute inset-0 bg-black" /> 
});
import WorkGlimpse from "@/components/WorkGlimpse";
import ImpactStats from "@/components/ImpactStats";
import FAQ from "@/components/FAQ";
import { TestimonialsCard } from "@/components/ui/testimonials-card";
import { MaskedAvatars } from "@/components/ui/masked-avatars";
import { MorphText } from "@/components/ui/morph-text";

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
            <motion.div variants={itemVariants} className="mb-6 w-full flex justify-center">
              <MorphText 
                words={["INNOVATE", "BUILD", "SHIP"]} 
                interval={2500}
                subtext="Move fast. Break things."
                fontSize="clamp(2rem, 10vw, 8rem)"
                textClassName="text-white drop-shadow-2xl font-heading"
              />
            </motion.div>
            
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

            {/* Social Proof with Masked Avatars */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-4">
                <MaskedAvatars 
                  size={50} 
                  avatars={[
                    { avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces", name: "Sarah" },
                    { avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces", name: "David" },
                    { avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces", name: "Elena" },
                    { avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces", name: "James" },
                    { avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces", name: "Chloe" },
                  ]}
                />
                <div className="flex flex-col text-left">
                  <div className="flex gap-1 text-yellow-500 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-400 font-medium mt-1">Trusted by 100+ clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Overlay to blend with upcoming sections if any */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
      </main>
      
      {/* Main content wrapper to create depth effect over the hero section */}
      <div className="relative z-20 bg-background w-full">
        {/* Work Glimpse Section */}
        <section className="w-full">
          <WorkGlimpse />
        </section>

        {/* Impact Stats Section */}
        <section className="w-full">
          <ImpactStats />
        </section>

        {/* FAQ Section */}
        <section className="w-full">
          <FAQ />
        </section>

        {/* Testimonials */}
        <section className="w-full py-24 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">What Our Clients Say</h2>
              <p className="text-neutral-400 max-w-xl mx-auto">Hear from the innovative brands that trust us to bring their digital visions to life.</p>
            </div>
            
            <div className="flex justify-center">
              <TestimonialsCard 
                width={800}
                autoPlay={true}
                items={[
                  {
                    id: 1,
                    title: "Incredible Design",
                    description: "AstraGG completely transformed our brand. The attention to detail is unmatched, and the final product exceeded all of our expectations.",
                    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80"
                  },
                  {
                    id: 2,
                    title: "Lightning Fast Performance",
                    description: "Our new web application is not only beautiful but incredibly performant. Our user retention has skyrocketed since the launch.",
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  },
                  {
                    id: 3,
                    title: "Highly Professional Team",
                    description: "The team at AstraGG delivered exactly what we needed, ahead of schedule. Their communication and workflow are flawless.",
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  }
                ]} 
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
