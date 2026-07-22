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
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
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
                <a href="mailto:hello@astragg.com" className="text-neutral-400 hover:text-white transition-colors text-sm relative group">
                  hello@astragg.com
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li className="text-neutral-500 text-sm mt-4">
                123 Innovation Drive<br />
                Tech City, TC 10101
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} AstraGG. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-neutral-600 hover:text-neutral-300 transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-neutral-600 hover:text-neutral-300 transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
