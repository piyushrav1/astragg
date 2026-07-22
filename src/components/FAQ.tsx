"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300">
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-neutral-400" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-neutral-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
