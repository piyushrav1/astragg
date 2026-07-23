"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end digital solutions including full-stack web application development, brand identity design, UI/UX design, and scalable cloud infrastructure architecture."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard marketing website might take 2-4 weeks, while a complex custom web application could take 2-3 months from design to deployment."
  },
  {
    question: "Do you work with startups or established brands?",
    answer: "Both! We love helping ambitious startups build their MVPs from scratch, and we also work with established enterprise brands to modernize their digital presence and infrastructure."
  },
  {
    question: "How much does a website cost?",
    answer: "We provide custom quotes for every project because every client's needs are unique. Contact us with your project details and we'll provide a transparent, detailed proposal."
  }
];

// Kinetic Text Component for Questions
const KineticText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const letters = text.split("");
  
  return (
    <div className="flex overflow-hidden">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.02,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${char === " " ? "w-2" : ""} ${isActive ? "text-purple-400" : "text-white group-hover:text-neutral-300"}`}
          style={{ transition: "color 0.3s ease" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-40 relative overflow-hidden bg-background" ref={containerRef}>
      {/* Intense Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none z-0" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-white uppercase">
            Demystify <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-text-gradient bg-[length:200%_auto]">
              The Process
            </span>
          </h2>
          <div className="w-24 h-1 bg-purple-500/50 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="space-y-6">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 border ${isOpen ? 'border-purple-500/50 bg-purple-900/10' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'}`}
              >
                {/* Spotlight hover effect background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none" />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full relative z-10 p-8 md:p-10 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold pr-8">
                    {isInView && <KineticText text={faq.question} isActive={isOpen} />}
                  </div>
                  
                  {/* Animated Cross Icon */}
                  <div className="shrink-0 relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 overflow-hidden">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.1 : 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute inset-0 flex items-center justify-center text-white"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                      animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                      exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 md:px-10 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-4xl relative z-10">
                        {/* Staggered answer reveal */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
