"use client";

import React, { useEffect, useRef, useState } from "react";

import { animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import AnimatedButton from "./animated-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
    label: string;
    href: string;
}

export interface SpotlightNavbarProps {
    items?: NavItem[];
    className?: string;
    onItemClick?: (item: NavItem, index: number) => void;
    defaultActiveIndex?: number;
}

export function SpotlightNavbar({
    items = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    className,
}: SpotlightNavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const activeIndex = items.findIndex((item) => item.href === pathname) !== -1 
        ? items.findIndex((item) => item.href === pathname) 
        : 0;
    
    const [hoverX, setHoverX] = useState<number | null>(null);

    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverX(x);
            spotlightX.current = x;
            nav.style.setProperty("--spotlight-x", `${x}px`);
        };

        const handleMouseLeave = () => {
            setHoverX(null);
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        nav.style.setProperty("--spotlight-x", `${v}px`);
                    }
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;

            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v;
                    nav.style.setProperty("--ambience-x", `${v}px`);
                },
            });
        }
    }, [activeIndex]);

    return (
        <header className={cn("fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 gap-4 md:gap-0 transition-all", className)}>
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-300 flex items-center justify-center shadow-lg shadow-neutral-500/20 group-hover:shadow-neutral-500/40 transition-shadow">
                    <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading font-bold text-xl tracking-wide text-white group-hover:text-neutral-300 transition-colors">
                    AstraGG
                </span>
            </div>

            {/* Nav */}
            <div className="w-full md:flex-1 flex justify-center">
                <nav
                    ref={navRef}
                    className={cn(
                        "spotlight-nav spotlight-nav-bg glass-border",
                        "relative h-12 rounded-full transition-all duration-300 overflow-hidden",
                        "bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full md:w-auto"
                    )}
                >
                    <ul className="relative flex items-center justify-center w-full h-full px-1 md:px-2 gap-0 md:gap-1 z-[10] overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {items.map((item, idx) => (
                            <li key={idx} className="relative h-full flex items-center justify-center">
                                <Link
                                    href={item.href}
                                    data-index={idx}
                                    className={cn(
                                        "px-3 md:px-5 py-2 text-xs md:text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                                        activeIndex === idx
                                            ? "text-white"
                                            : "text-neutral-400 hover:text-white"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Spotlight Layer */}
                    <div
                        className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
                        style={{
                            opacity: hoverX !== null ? 1 : 0,
                            background: `
                  radial-gradient(
                    120px circle at var(--spotlight-x) 100%, 
                    var(--spotlight-color, rgba(255,255,255,0.15)) 0%, 
                    transparent 50%
                  )
                `
                        }}
                    />

                    {/* Active State Layer */}
                    <div
                        className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
                        style={{
                            background: `
                      radial-gradient(
                        60px circle at var(--ambience-x) 0%, 
                        var(--ambience-color, rgba(255,255,255,1)) 0%, 
                        transparent 100%
                      )
                    `
                        }}
                    />
                </nav>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
                <a href="https://discord.gg/shopbyAstra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] hover:text-white hover:bg-[#5865F2] transition-colors shadow-[0_0_15px_rgba(88,101,242,0.1)] hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]" title="Open Discord Ticket">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
                </a>
                <AnimatedButton 
                    className="bg-white text-black hover:bg-neutral-200 shadow-[0_0_15px_rgba(255,255,255,0.2)] rounded-full text-sm font-semibold border-none [--shine:rgba(0,0,0,0.3)] dark:[--shine:rgba(0,0,0,0.3)] dark:bg-white dark:text-black"
                    onClick={() => console.log('clicked')}
                >
                    Get Started
                </AnimatedButton>
            </div>

            <style jsx>{`
            nav {
              --spotlight-color: rgba(255, 255, 255, 0.15); /* Monochromatic tint */
              --ambience-color: rgba(255, 255, 255, 1);
            }
            ul::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </header>
    );
}
