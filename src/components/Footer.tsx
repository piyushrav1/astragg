"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, MessageCircle, Globe } from "lucide-react";
import Link from "next/link";
import FloatingLines from "./FloatingLines";
import SpecularButton from "./SpecularButton";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#02040A] overflow-hidden">
      
      {/* Top Fade Blend to seamlessly merge with the section above */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#02040A] to-transparent z-10 pointer-events-none" />

      {/* Vibrant radial gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-purple-500/20 rounded-[100%] blur-[120px] pointer-events-none z-0 opacity-90" />

      {/* Floating Lines Background */}
      <div className="absolute inset-0 z-0 opacity-50 flex items-center justify-center overflow-hidden mask-image-b w-full h-full">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <FloatingLines
            linesGradient={["#7e22ce","#a855f7","#d8b4fe"]}
            animationSpeed={0.8}
            interactive
            bendRadius={8}
            bendStrength={-2}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-12 relative z-10">
        {/* Main Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-900 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-wide text-white">
                AstraGG
              </span>
            </div>
            <p className="text-[#8c94a5] text-sm max-w-xs mb-8 leading-relaxed font-light">
              Transforming ideas into digital reality. Architecting the absolute pinnacle of modern web applications.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:-translate-y-1">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://discord.gg/shopbyAstra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] hover:text-white hover:bg-[#5865F2] transition-all duration-300 shadow-[0_0_15px_rgba(88,101,242,0.1)] hover:shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:-translate-y-1">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
              </a>
              <a href="mailto:hi@piyushravi.in" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:-translate-y-1">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Work', 'About'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-white transition-colors text-sm relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white font-semibold mb-6">Say Hello</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hi@piyushravi.in" className="text-neutral-400 hover:text-white transition-colors text-sm relative group">
                  hi@piyushravi.in
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/shopbyAstra" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:text-white transition-colors text-sm relative group flex items-center gap-1.5 w-max">
                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
                  Open Discord Ticket
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5865F2] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Connect Col */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-[#8c94a5] text-sm mb-4 font-light leading-relaxed">Subscribe to our newsletter for the latest in digital architecture and tech insights.</p>
            <form className="flex flex-col sm:flex-row gap-2 mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/[0.02] border border-white/10 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 w-full transition-colors font-light placeholder:text-neutral-600"
              />
              <button 
                type="button" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] whitespace-nowrap"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Massive Megatype */}
        <div className="w-full mt-24 mb-12 flex justify-center overflow-hidden pointer-events-none opacity-20 select-none">
          <h1 className="text-[12vw] leading-none font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#02040A]">
            ASTRAGG
          </h1>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} AstraGG. Made with <span className="text-red-500">♥</span> by 
            <a href="https://github.com/piyushrav1" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              piyushrav1
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-neutral-600 hover:text-neutral-300 transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-neutral-600 hover:text-neutral-300 transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
