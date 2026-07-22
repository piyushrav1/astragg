"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ParallaxCardProps {
  title: string;
  category: string;
  color: string;
  image: string;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export function ParallaxCard({
  title,
  category,
  color,
  image,
  i,
  progress,
  range,
  targetScale,
}: ParallaxCardProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  
  // Calculate top offset so cards stack nicely
  const topOffset = `calc(10vh + ${i * 30}px)`;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky" style={{ top: topOffset }}>
      <motion.div
        style={{ scale: cardScale }}
        className={`relative flex flex-col h-[500px] md:h-[600px] w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden bg-neutral-900 origin-top shadow-2xl shadow-black/50`}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[2rem]">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full bg-cover bg-center"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${image})` }}
            />
          </motion.div>
        </div>

        {/* Gradients */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${color} mix-blend-multiply opacity-50`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end group cursor-pointer">
          <p className="text-sm md:text-base font-bold tracking-widest text-neutral-300 mb-2 uppercase">
            {category}
          </p>
          <h3 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 w-fit">
            <span className="text-lg md:text-xl font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              View Case Study
            </span>
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Static Border */}
        <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
      </motion.div>
    </div>
  );
}
