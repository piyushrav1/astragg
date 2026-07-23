"use client";

import React from 'react';
import { FaqAccordion } from '@/components/ui/faq-accordion';

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
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FaqAccordion items={faqData} title="Frequently Asked Questions" />
      </div>
    </section>
  );
}
