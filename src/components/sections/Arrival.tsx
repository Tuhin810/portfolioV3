"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
    const rotateSlow = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotateOpposite = useTransform(scrollYProgress, [0, 1], [0, -45]);

    return (
        <section ref={containerRef} className="relative flex flex-col items-center justify-center min-h-screen px-6 w-full max-w-[100vw] overflow-hidden bg-background">

            {/* --- EXACT GEOMETRY BACKGROUND LAYER (REPLICATING REFERENCE) --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                {/* Horizontal Horizon Line with End Nodes */}
                <div className="absolute w-[95vw] h-[1px] flex items-center justify-center top-1/2 -translate-y-1/2">
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 0.3 }}
                        transition={{ duration: 2, ease: "circOut" }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-[#cda56e] to-transparent"
                    />
                    <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#cda56e] opacity-40 shadow-[0_0_8px_rgba(205,165,110,0.5)]" />
                    <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#cda56e] opacity-40 shadow-[0_0_8px_rgba(205,165,110,0.5)]" />
                </div>

                {/* Symmetrical Lateral Arcs (Precisely as in reference) */}
                <div className="absolute inset-0 flex items-center justify-between px-[10%] opacity-20">
                    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center translate-x-16">
                        <motion.div style={{ rotate: rotateSlow }} className="absolute inset-0 border border-[#cda56e] rounded-full" />
                        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#cda56e] rounded-full -translate-y-1/2" />
                    </div>
                    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center -translate-x-16">
                        <motion.div style={{ rotate: rotateOpposite }} className="absolute inset-0 border border-[#cda56e] rounded-full" />
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#cda56e] rounded-full -translate-y-1/2" />
                    </div>
                </div>

                {/* Central Orbital Ring with Moon Phase Nodes */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="relative w-[85vw] h-[85vw] max-w-[580px] max-h-[580px] border border-[#cda56e]/60 rounded-full"
                >
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <div
                            key={angle}
                            className="absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full border border-[#cda56e] bg-[#0a0a09]"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${angle}deg) translate(clamp(150px, 42vw, 290px)) rotate(-${angle}deg) translate(-50%, -50%)`,
                            }}
                        >
                            <div className={`absolute inset-0.5 rounded-full ${i % 2 === 0 ? 'bg-[#cda56e]/40' : 'bg-transparent border border-[#cda56e]/20'}`} />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Top Label & Logo */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 3, delay: 0.1 }}
                className="absolute top-16 left-1/2 -translate-x-1/2 -mt-5 flex flex-col items-center gap-2"
            >
                <div className="relative w-32 h-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 mix-blend-screen">
                    <Image
                        src="/mythic-logo.png"
                        alt="Mythic Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="font-serif text-[10px] tracking-[0.8em] uppercase gold-text">The Epiphany</span>
            </motion.div>

            {/* Subtitle - Centered Bottom */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 0.4, y: 0, x: "-50%" }}
                transition={{ duration: 3, delay: 4 }}
                className="absolute bottom-24 left-1/2 text-center z-20 whitespace-nowrap"
            >
                <p className="font-serif text-[11px] tracking-[0.8em] uppercase italic text-white/40">
                    Architect of Order
                </p>
            </motion.div>

            {/* Main Name Reveal */}
            <motion.div
                style={{ opacity, scale, filter: blur, y, zIndex: 20 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="glow-text-container w-full flex flex-col items-center justify-center relative backdrop-blur-[2px]"
            >
                <div className="volumetric-glow" />
                <h1 className="text-[25vw] font-bold tracking-[-0.08em] uppercase leading-none liquid-light select-none text-center relative z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    Tuhin
                </h1>
            </motion.div>

            {/* Scroll Prompt */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 0.2, x: "-50%" }}
                transition={{ duration: 2, delay: 6 }}
                className="absolute bottom-12 left-1/2 px-12 text-white/40 text-[9px] uppercase tracking-[0.4em] font-medium opacity-30 whitespace-nowrap"
            >
                <p className="animate-pulse">Begin the descent</p>
            </motion.div>

            {/* STATUS BADGES - BOTTOM LEFT */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 5 }}
                className="absolute bottom-12 left-12 flex items-center gap-6 z-30 pointer-events-auto"
            >
                {/* Badge 1: Solid */}
                <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#cda56e" }}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#cda56e] flex items-center justify-center cursor-pointer transition-colors duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                    <span className="text-[8px] font-bold tracking-[0.4em] text-black">HIT</span>
                </motion.div>

                {/* Badge 2: Outline */}
                <motion.div
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,1)" }}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-700 hover:bg-white/[0.02]"
                >
                    <span className="text-[8px] font-bold tracking-[0.4em] text-white/40">NEW</span>
                </motion.div>
            </motion.div>
        </section>
    );
};
