"use client";

import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { ParallaxCard } from "./ui/ParallaxCard";
import Lenis from "lenis";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web Development",
    color: "from-blue-600 to-indigo-900",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Neon E-Commerce",
    category: "UI/UX Design",
    color: "from-pink-500 to-rose-900",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Quantum Dashboard",
    category: "Data Visualization",
    color: "from-emerald-500 to-teal-900",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Stellar Marketing",
    category: "Digital Marketing",
    color: "from-amber-500 to-orange-900",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080&auto=format&fit=crop",
  },
];

export default function WorkGlimpse() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    // Lenis is usually handled globally in SmoothScroll.tsx, 
    // but just in case, this component relies on smooth scrolling.
  }, []);

  return (
    <section ref={container} className="relative" id="work">
      <div className="h-[40vh] flex flex-col items-center justify-center bg-background relative z-10">
        <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-center">
          A Glimpse Into <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Our Universe</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-md text-center">
          Scroll down to explore our stellar creations.
        </p>
      </div>

      <div className="h-[400vh] w-full relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ perspective: "1000px" }}>
          {projects.map((project, i) => {
            return (
              <ParallaxCard
                key={project.id}
                i={i}
                title={project.title}
                category={project.category}
                color={project.color}
                image={project.image}
                progress={scrollYProgress}
                totalCards={projects.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
