"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the preloader has already been shown in this session
    const hasLoadedBefore = sessionStorage.getItem("astragg_preloader_shown");
    
    if (hasLoadedBefore) {
      setIsLoading(false);
      return;
    }

    // Otherwise, show the preloader and set the flag after it finishes
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("astragg_preloader_shown", "true");
    }, 2500); // 2.5 seconds loading sequence

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#02040A] text-white overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Logo Animation */}
          <motion.div 
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
              ASTRAGG
            </h1>
            
            {/* Loading Bar */}
            <div className="w-48 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-purple-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
            
            <motion.p 
              className="text-purple-400/60 font-mono text-xs uppercase tracking-[0.2em] mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Initializing Universe...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
