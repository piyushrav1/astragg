"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Code, Palette, Smartphone, Globe } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "ShopAstra",
    category: "E-Commerce",
    link: "https://shopastra.mysellauth.com/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1080&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Lumina Financial",
    category: "Fintech Platform",
    link: "https://dribbble.com/search/fintech-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Aero Dynamics",
    category: "Web Application",
    link: "https://dribbble.com/search/automotive-website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Echo Studio",
    category: "Branding & Web",
    link: "https://dribbble.com/search/architecture-portfolio",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Vertex Health",
    category: "iOS & Android",
    link: "https://dribbble.com/search/healthcare-app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1080&auto=format&fit=crop"
  }
];

const services = [
  { name: "UI/UX Design", icon: Palette },
  { name: "3D & Motion", icon: Globe },
  { name: "App Development", icon: Smartphone },
  { name: "Web Architecture", icon: Code }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white relative w-full pt-32 pb-24 px-4 md:px-8 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/30 blur-[150px]"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/30 blur-[150px]"
        />
      </div>

      {/* Inline styles for the inverted border-radius trick */}
      <style dangerouslySetInnerHTML={{__html: `
        .cutout-wrapper {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 76px;
          height: 76px;
          background-color: #171717; /* Matches bg-neutral-900 */
          border-top-left-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .cutout-wrapper::before {
          content: '';
          position: absolute;
          bottom: 100%;
          right: 0;
          width: 24px;
          height: 24px;
          background: transparent;
          border-bottom-right-radius: 24px;
          box-shadow: 12px 12px 0 0 #171717;
          pointer-events: none;
        }

        .cutout-wrapper::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 100%;
          width: 24px;
          height: 24px;
          background: transparent;
          border-bottom-right-radius: 24px;
          box-shadow: 12px 12px 0 0 #171717;
          pointer-events: none;
        }
      `}} />

      {/* Main Container mirroring the image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto bg-neutral-900 rounded-[2.5rem] p-6 md:p-12 lg:p-16 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
      >
        
        {/* Header Area */}
        <div className="flex flex-col mb-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-neutral-700 text-sm font-medium w-max mb-6 text-neutral-300"
          >
            Our Work
          </motion.div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-4 text-white tracking-tight">
                Our Latest Work
              </h1>
              <p className="text-neutral-400 text-lg">
                Our tailored solutions empower your online presence, ensuring growth and success in the digital landscape.
              </p>
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 group shrink-0"
            >
              See more
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Services Card (Matches the "What We're Good At" card from user's image) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[32px] overflow-hidden bg-neutral-950 p-8 flex flex-col justify-between border border-white/5"
          >
            <div>
              <h3 className="text-white font-bold text-3xl font-heading mb-8">What We're Good At</h3>
              <ul className="space-y-6">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <li key={idx} className="flex items-center justify-between border-b border-white/10 pb-4 group cursor-default">
                      <div className="flex items-center gap-4">
                        <span className="text-purple-400 text-sm font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                          0{idx + 1}
                        </span>
                        <span className="text-neutral-300 font-medium group-hover:text-white transition-colors">
                          {service.name}
                        </span>
                      </div>
                      <Icon className="w-5 h-5 text-neutral-600 group-hover:text-purple-400 transition-colors" />
                    </li>
                  )
                })}
              </ul>
            </div>
            
            {/* Cutout Button Wrapper (Decorative for consistency) */}
            <div className="cutout-wrapper">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center text-black shadow-lg">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[32px] overflow-hidden group bg-neutral-800"
            >
              <Link href={project.link} target={project.link.startsWith('http') ? '_blank' : '_self'} className="block w-full h-full">
                
                {/* Image */}
                <div className="absolute inset-0 z-0 bg-black">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-start z-10 pointer-events-none">
                  <div>
                    <h3 className="text-white font-bold text-3xl font-heading mb-1">{project.title}</h3>
                    <p className="text-neutral-300 text-sm font-medium">{project.category}</p>
                  </div>
                </div>

                {/* Cutout Button Wrapper */}
                <div className="cutout-wrapper">
                  <div className="w-[56px] h-[56px] rounded-full bg-black flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110 shadow-lg border border-white/10">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

        {/* Animated Marquee / Outro Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 pt-12 border-t border-white/10 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
            Ready to start a project?
          </h2>
          <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all flex items-center gap-2 group">
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </motion.div>
    </main>
  );
}
