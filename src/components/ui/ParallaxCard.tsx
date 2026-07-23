"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ParallaxCardProps {
  title: string;
  category: string;
  color: string;
  image: string;
  i: number;
  progress: MotionValue<number>;
  totalCards: number;
}

export function ParallaxCard({
  title,
  category,
  color,
  image,
  i,
  progress,
  totalCards,
}: ParallaxCardProps) {
  
  const yPercent = useTransform(progress, (p) => {
    const segmentSize = 1 / totalCards;
    const clampedP = Math.min(Math.max(p, 0), 0.9999);
    const activeIndex = Math.floor(clampedP / segmentSize);
    
    if (i < activeIndex) {
      return -250;
    } else if (i === activeIndex) {
      const segProgress = (clampedP - i * segmentSize) / segmentSize;
      return -50 - (segProgress * 150);
    } else {
      const segProgress = (clampedP - activeIndex * segmentSize) / segmentSize;
      const behindIndex = i - activeIndex;
      const currentYOffset = (behindIndex - segProgress) * 5;
      return -50 + currentYOffset;
    }
  });

  const rotationX = useTransform(progress, (p) => {
    const segmentSize = 1 / totalCards;
    const clampedP = Math.min(Math.max(p, 0), 0.9999);
    const activeIndex = Math.floor(clampedP / segmentSize);
    
    if (i < activeIndex) {
      return 35;
    } else if (i === activeIndex) {
      const segProgress = (clampedP - i * segmentSize) / segmentSize;
      return segProgress * 35;
    } else {
      return 0;
    }
  });

  const scale = useTransform(progress, (p) => {
    const segmentSize = 1 / totalCards;
    const clampedP = Math.min(Math.max(p, 0), 0.9999);
    const activeIndex = Math.floor(clampedP / segmentSize);
    
    if (i <= activeIndex) {
      return 1;
    } else {
      const segProgress = (clampedP - activeIndex * segmentSize) / segmentSize;
      const behindIndex = i - activeIndex;
      return 1 - ((behindIndex - segProgress) * 0.075);
    }
  });

  const y = useTransform(yPercent, (v) => `${v}%`);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        x: "-50%",
        y,
        rotateX: rotationX,
        scale,
        transformOrigin: "center bottom",
        zIndex: totalCards - i,
      }}
      className="flex flex-col md:flex-row h-[500px] md:h-[60vh] w-[90%] md:w-[70%] max-w-5xl rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/80"
    >
      {/* Left Col: Info */}
      <div className={`flex flex-col justify-between p-8 md:p-12 w-full md:w-1/2 bg-gradient-to-br ${color}`}>
        <p className="text-sm md:text-base font-bold tracking-widest text-white/70 mb-2 uppercase font-mono">
          {category}
        </p>
        <div>
          <h3 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 uppercase leading-none">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 w-fit cursor-pointer group">
            <span className="text-lg md:text-xl font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              View Case Study
            </span>
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Right Col: Image */}
      <div className="w-full md:w-1/2 relative h-full">
        <div className="absolute inset-0 border-l border-white/20 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      </div>

    </motion.div>
  );
}
