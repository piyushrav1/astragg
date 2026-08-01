"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsVisible(latest > 0.05);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-[5000] flex items-center justify-center cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8,
      }}
      style={{
        pointerEvents: isVisible ? "auto" : "none"
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
    >
      {/* SVG Circular Progress Ring */}
      <svg width="50" height="50" viewBox="0 0 100 100" className="-rotate-90">
        {/* Background track */}
        <circle 
          cx="50" cy="50" r="45" 
          pathLength="1" 
          className="fill-none stroke-white/10 stroke-[4px]"
        />
        {/* Progress line */}
        <motion.circle 
          cx="50" cy="50" r="45" 
          pathLength="1" 
          className="fill-none stroke-purple-500 stroke-[4px] drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
          style={{ pathLength: scaleX }}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Icon Inside */}
      <div className="absolute inset-0 flex items-center justify-center text-white/50 group-hover:text-purple-400 transition-colors">
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.div>
  );
}
