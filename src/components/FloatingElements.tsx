"use client";

import { motion } from "framer-motion";
import { Code, PenTool, TrendingUp } from "lucide-react";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
      {/* Element 1: Web Dev */}
      <motion.div
        className="absolute top-1/4 left-[15%] p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex items-center gap-3"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className="p-2 bg-blue-500/20 rounded-full">
          <Code className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Web Dev</p>
          <p className="text-xs text-neutral-400">Next.js & React</p>
        </div>
      </motion.div>

      {/* Element 2: UI/UX Design */}
      <motion.div
        className="absolute top-1/3 right-[15%] p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex items-center gap-3"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      >
        <div className="p-2 bg-purple-500/20 rounded-full">
          <PenTool className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">UI/UX Design</p>
          <p className="text-xs text-neutral-400">Figma to Code</p>
        </div>
      </motion.div>

      {/* Element 3: Marketing */}
      <motion.div
        className="absolute bottom-1/4 left-[20%] p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl flex items-center gap-3"
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
      >
        <div className="p-2 bg-orange-500/20 rounded-full">
          <TrendingUp className="w-6 h-6 text-orange-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Digital Marketing</p>
          <p className="text-xs text-neutral-400">Growth & SEO</p>
        </div>
      </motion.div>
    </div>
  );
}
