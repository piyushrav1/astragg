"use client";

import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { ParallaxCard } from "./ui/ParallaxCard";
import Lenis from "lenis";

const projects = [
  {
    id: 1,
    title: "Nexa Intelligence",
    category: "AI Architecture",
    color: "from-[#1a0b2e] to-[#0a0512]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop", // Abstract 3D fluid art
  },
  {
    id: 2,
    title: "Aura Core",
    category: "Design Engineering",
    color: "from-[#0a0f24] to-[#04060d]",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1080&auto=format&fit=crop", // Sleek tech aesthetic
  },
  {
    id: 3,
    title: "Quantum Nexus",
    category: "Data Visualization",
    color: "from-[#1d0e30] to-[#080410]",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1080&auto=format&fit=crop", // Abstract neon lines
  },
  {
    id: 4,
    title: "Prism Protocol",
    category: "Digital Growth",
    color: "from-[#120a1f] to-[#04020a]",
    image: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1080&auto=format&fit=crop", // Deep space geometry
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
