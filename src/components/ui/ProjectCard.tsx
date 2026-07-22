"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  color: string;
  image: string;
  className?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  category,
  color,
  image,
  className = "",
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative overflow-hidden rounded-3xl bg-neutral-900 cursor-pointer ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-60 group-hover:opacity-40"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradients */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${color} mix-blend-multiply opacity-50 transition-opacity duration-500 group-hover:opacity-80`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform transition-transform duration-500">
        <p className="text-xs md:text-sm font-bold tracking-widest text-neutral-300 mb-2 uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {category}
        </p>
        <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-500 delay-150">
          <span className="text-sm md:text-lg font-medium">View Case Study</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl group-hover:border-white/30 transition-colors duration-500" />
    </motion.div>
  );
}
