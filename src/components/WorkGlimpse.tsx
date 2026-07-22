"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web Development",
    color: "from-neutral-400 to-neutral-700",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Neon E-Commerce",
    category: "UI/UX Design",
    color: "from-neutral-500 to-neutral-800",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Quantum Dashboard",
    category: "Data Visualization",
    color: "from-neutral-600 to-neutral-900",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Stellar Marketing",
    category: "Digital Marketing",
    color: "from-neutral-300 to-neutral-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080&auto=format&fit=crop",
  },
];

export default function WorkGlimpse() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the cards horizontally based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background" id="work">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <div className="pl-6 md:pl-24 w-full flex items-center gap-12 md:gap-24">
          
          <div className="min-w-[300px] md:min-w-[450px] shrink-0 z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              A Glimpse Into <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Our Universe</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-neutral-400 text-lg md:text-xl max-w-md"
            >
              We don't just build websites; we craft digital experiences that leave a lasting impact. Scroll to explore some of our stellar creations.
            </motion.p>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-4 z-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative h-[450px] w-[320px] md:h-[600px] md:w-[450px] overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl shrink-0 cursor-pointer"
              >
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                  style={{ backgroundImage: "url(" + project.image + ")" }}
                />
                
                {/* Gradient Overlay */}
                <div className={"absolute inset-0 bg-gradient-to-t " + project.color + " mix-blend-multiply opacity-60 transition-opacity duration-700 group-hover:opacity-90"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 transition-transform duration-700 group-hover:translate-y-0">
                  <p className="text-sm font-bold tracking-widest text-neutral-300 mb-2 uppercase">{project.category}</p>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-700 delay-100">
                    <span className="text-lg font-medium">View Case Study</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] group-hover:border-white/30 transition-colors duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
