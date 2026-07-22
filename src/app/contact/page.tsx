"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, ArrowRight, User, MessageSquare, Type } from 'lucide-react';
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

            <motion.form 
              variants={itemVariants} 
              className="space-y-6" 
              action="https://formsubmit.co/hi@piyushravi.in" 
              method="POST"
            >
              {/* Optional: Disable Captcha for a smoother experience */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Astragg Project Inquiry!" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <User className="h-5 w-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md transition-all"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Mail className="h-5 w-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md transition-all"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Type className="h-5 w-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input 
                  type="text" 
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md transition-all"
                  placeholder="Subject"
                />
              </div>

              <div className="relative group">
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none z-10">
                  <MessageSquare className="h-5 w-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md transition-all resize-none"
                  placeholder="Tell us about your project, timeline, and budget..."
                />
              </div>

              <div className="pt-2">
                <div className="w-auto block text-left">
                  <SpecularButton
                    type="submit"
                    size="lg"
                    radius={12}
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
                    onClick={() => {}}
                  >
                    Send Message
                  </SpecularButton>
                </div>
              </div>
            </motion.form>

            {/* Direct Contact Links */}
            <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2 font-semibold">Direct Email</p>
                <a href="mailto:hi@piyushravi.in" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 transition-colors" />
                  hi@piyushravi.in
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2 font-semibold">Support</p>
                <a href="https://discord.gg/shopbyAstra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group">
                  <svg className="w-4 h-4 text-neutral-500 group-hover:text-[#5865F2] transition-colors" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
                  Open Ticket
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2 font-semibold">Location</p>
                <div className="flex items-start gap-2 text-neutral-300">
                  <MapPin className="w-4 h-4 text-neutral-500 mt-1" />
                  <span className="text-sm">Innovation Drive<br/>Tech City, 10101</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}
