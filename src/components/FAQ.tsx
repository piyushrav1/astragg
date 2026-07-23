"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: "services",
    question: "What services do you offer?",
    answer: "We offer end-to-end digital solutions including full-stack web application development, brand identity design, UI/UX design, and scalable cloud infrastructure architecture."
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard marketing website might take 2-4 weeks, while a complex custom web application could take 2-3 months from design to deployment."
  },
  {
    id: "clients",
    question: "Do you work with startups or established brands?",
    answer: "Both! We love helping ambitious startups build their MVPs from scratch, and we also work with established enterprise brands to modernize their digital presence and infrastructure."
  },
  {
    id: "pricing",
    question: "How much does a website cost?",
    answer: "We provide custom quotes for every project because every client's needs are unique. Contact us with your project details and we'll provide a transparent, detailed proposal."
  }
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(faqData[0].id);

  const activeContent = faqData.find((faq) => faq.id === activeTab);

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white tracking-tight"
          >
            Answers to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Everything you need to know about working with AstraGG.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Tabs List */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2 relative">
            {faqData.map((faq) => (
              <button
                key={faq.id}
                onClick={() => setActiveTab(faq.id)}
                className={`relative px-6 py-5 text-left rounded-xl transition-all duration-300 ${
                  activeTab === faq.id 
                    ? "text-white" 
                    : "text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.02]"
                }`}
              >
                {activeTab === faq.id && (
                  <motion.div
                    layoutId="activeTabFAQ"
                    className="absolute inset-0 bg-white/[0.05] border border-white/10 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-medium text-lg">{faq.question}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3 min-h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-md rounded-3xl p-8 md:p-14"
              >
                <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20">
                  <span className="text-purple-400 font-bold font-heading text-2xl">A.</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                  {activeContent?.question}
                </h3>
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                  {activeContent?.answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
