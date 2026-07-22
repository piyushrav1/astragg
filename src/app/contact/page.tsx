"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import SpecularButton from '@/components/SpecularButton';
import TypingKeyboard from '@/components/ui/typing-keyboard';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col lg:flex-row">
      
      {/* LEFT PANEL: The Visual Hook (Sticky on Desktop) */}
      <section className="relative w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
        
        {/* Deep ambient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-purple-950/20 to-blue-950/20 z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent z-0 pointer-events-none blur-3xl" />
        
        <div className="relative z-10 px-8 pt-32 pb-16 lg:px-16 lg:py-24 h-full flex flex-col justify-between">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-none"
            >
              Let's create <br/>
              <span className="italic font-light text-neutral-400">something</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">extraordinary.</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-500 max-w-md"
            >
              Whether it's a new brand identity, a complex web application, or a complete digital overhaul—we're ready.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center items-center mt-12 mb-8 lg:mb-0 min-h-[300px]"
          >
            <TypingKeyboard 
              scale={0.5} 
              autoTypeText="INITIATING SECURE CONNECTION... READY TO RECEIVE PROJECT PARAMETERS. AWAITING INPUT...     "
              accentColor="#8b5cf6" 
              secondaryAccent="#3b82f6" 
            />
          </motion.div>

        </div>
      </section>

      {/* RIGHT PANEL: The Action Area (Scrollable) */}
      <section className="w-full lg:w-1/2 min-h-screen bg-background relative z-10">
        <div className="px-8 py-16 lg:px-24 lg:py-32 max-w-2xl mx-auto">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl font-heading font-semibold text-white mb-2">Project Inquiry</h2>
              <p className="text-neutral-500">Fill out the form below and we'll get back to you within 24 hours.</p>
            </motion.div>

            <motion.form variants={itemVariants} className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors peer"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-neutral-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-purple-400">
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors peer"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-neutral-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-purple-400">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  id="subject"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors peer"
                  placeholder="Subject"
                />
                <label htmlFor="subject" className="absolute left-0 top-3 text-neutral-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-purple-400">
                  Subject
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-colors peer resize-none"
                  placeholder="Message"
                />
                <label htmlFor="message" className="absolute left-0 top-3 text-neutral-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-purple-400">
                  Project Details
                </label>
              </div>

              <div className="pt-4">
                <SpecularButton
                  size="lg"
                  radius={8}
                  tint="#8b5cf6"
                  tintOpacity={0.1}
                  blur={8}
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
                  onClick={() => console.log('Form submitted')}
                >
                  Send Message
                </SpecularButton>
              </div>
            </motion.form>

            {/* Direct Contact Links */}
            <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2 font-semibold">Direct Email</p>
                <a href="mailto:hello@astragg.com" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 transition-colors" />
                  hello@astragg.com
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2 font-semibold">HQ Location</p>
                <div className="flex items-start gap-2 text-neutral-300">
                  <MapPin className="w-4 h-4 text-neutral-500 mt-1" />
                  <span>123 Innovation Drive<br/>Tech City, 10101</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}
