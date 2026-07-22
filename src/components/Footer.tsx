"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, MessageCircle, Globe } from "lucide-react";
import Link from "next/link";
import FloatingLines from "./FloatingLines";
import SpecularButton from "./SpecularButton";

export default function Footer() {
  return (
    <footer className="relative w-full bg-background border-t border-white/5 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Lines Background */}
      <div className="absolute inset-0 z-0 opacity-50 flex items-center justify-center overflow-hidden mask-image-b w-full h-full">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <FloatingLines
            linesGradient={["#000000","#929292","#6a6a6a"]}
            animationSpeed={1}
            interactive
            bendRadius={8}
            bendStrength={-2}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16 relative z-10">
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Let's build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">future together.</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md">
              We're a digital agency crafting premium experiences for forward-thinking brands.
            </p>
          </div>
          
          <SpecularButton
            size="lg"
            radius={18}
            tint="#ffffff"
            tintOpacity={0.07}
            blur={4}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate
            onClick={() => console.log('clicked')}
          >
            Start a Project
          </SpecularButton>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Bottom Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-300 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wide text-white">
                AstraGG
              </span>
            </div>
            <p className="text-neutral-500 text-sm max-w-xs mb-8">
              Transforming ideas into digital reality. Designing and building the next generation of web applications.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://discord.gg/shopbyAstra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] hover:text-white hover:bg-[#5865F2] transition-colors shadow-[0_0_15px_rgba(88,101,242,0.1)] hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
              </a>
              <a href="mailto:hi@piyushravi.in" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div>
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
          <div>
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
