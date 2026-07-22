"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import SpecularButton from '@/components/SpecularButton';
import TypingKeyboard from '@/components/ui/typing-keyboard';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">
            Let's start a project.
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Have an idea? We'd love to hear about it. Drop us a line and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8">
          {/* Contact Info (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Keyboard Animation */}
            <div className="w-full flex justify-center items-center h-[300px] bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none" />
              <TypingKeyboard 
                scale={0.55} 
                autoTypeText="HELLO... ARE YOU READY TO BUILD SOMETHING EXTRAORDINARY? LET'S GET IN TOUCH.     "
                accentColor="#8b5cf6" 
                secondaryAccent="#3b82f6" 
              />
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
              <h3 className="text-2xl font-heading font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Email Us</p>
                    <a href="mailto:hello@astragg.com" className="text-lg text-white hover:text-neutral-300 transition-colors">
                      hello@astragg.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Visit Us</p>
                    <p className="text-lg text-white">
                      123 Innovation Drive<br />
                      Tech City, TC 10101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Socials</p>
                    <div className="flex gap-4 mt-1">
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter</a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
                      <a href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-neutral-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-neutral-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm text-neutral-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="How can we help you?"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="message" className="text-sm text-neutral-400 ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project, timeline, and budget..."
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                />
              </div>

              <div className="self-end">
                <SpecularButton
                  size="lg"
                  radius={16}
                  tint="#ffffff"
                  tintOpacity={0.05}
                  blur={4}
                  textColor="#ffffff"
                  lineColor="#ffffff"
                  baseColor="#333333"
                  intensity={1}
                  shineSize={8}
                  shineFade={30}
                  thickness={1}
                  speed={0.3}
                  followMouse
                  proximity={200}
                  onClick={() => console.log('Form submitted')}
                >
                  Send Message
                </SpecularButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
