"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Arrival: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const blur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(12px)"]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative flex flex-col items-center justify-center min-h-screen px-6 w-full max-w-[100vw] overflow-hidden">
            {/* Top Label */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 3, delay: 0.5 }}
                className="absolute top-24 left-1/2 -translate-x-1/2"
            >
                <span className="font-serif text-[10px] tracking-[0.8em] uppercase gold-text">The Epiphany</span>
            </motion.div>

            {/* Subtitle - Centered Bottom */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 0.3, y: 0, x: "-50%" }}
                transition={{ duration: 3, delay: 4 }}
                className="absolute bottom-24 left-1/2 text-center z-20 whitespace-nowrap"
            >
                <p className="font-serif text-[10px] tracking-[0.6em] uppercase italic">
                    Architect of Olympus
                </p>
            </motion.div>

            {/* Main Name Reveal */}
            <motion.div
                style={{ opacity, scale, filter: blur, y }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="glow-text-container w-full flex flex-col items-center justify-center"
            >
                <div className="volumetric-glow" />
                <h1 className="text-[22vw] font-bold tracking-[-0.08em] uppercase leading-none liquid-light select-none text-center">
                    Tuhin
                </h1>
            </motion.div>

            {/* Scroll Prompt */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 0.2, x: "-50%" }}
                transition={{ duration: 2, delay: 6 }}
                className="absolute bottom-12 left-1/2 px-12 text-[9px] uppercase tracking-[0.4em] font-medium opacity-30 whitespace-nowrap"
            >
                <p className="animate-pulse">Begin the descent</p>
            </motion.div>
        </section>
    );
};
