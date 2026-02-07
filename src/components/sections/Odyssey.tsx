"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Work / Project Data (Preserved for future use)
const WORKS = [
    {
        id: 1,
        title: "The Forge of Hephaestus",
        category: "Web Application",
        year: "2025",
    },
    {
        id: 2,
        title: "Athena's Wisdom",
        category: "Mobile Experience",
        year: "2024",
    },
    {
        id: 3,
        title: "Apollo's Resonance",
        category: "Brand Identity",
        year: "2024",
    },
    {
        id: 4,
        title: "Poseidon's Depths",
        category: "UI/UX Design",
        year: "2023",
    },
];

export const Odyssey: React.FC = () => {
    const { scrollYProgress } = useScroll();

    // Parallax and Rotation effects
    const rotateSlow = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const rotateFast = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const opacityHero = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

    return (
        <section className="min-h-screen relative overflow-hidden bg-[#0a0a09] py-32 flex flex-col items-center justify-center">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

            {/* --- GEOMETRIC BACKGROUND LAYER --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pointer-events-none select-none">
                {/* Horizontal Horizon Line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent z-0"
                />

                {/* Symmetrical Lateral Arcs */}
                <div className="absolute inset-0 flex items-center justify-between px-[10%] opacity-20">
                    {/* Left Arc Group */}
                    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
                        <motion.div
                            style={{ rotate: rotateSlow }}
                            className="absolute inset-0 border border-[#c5a059] rounded-full"
                        />
                        <motion.div
                            style={{ rotate: rotateFast }}
                            className="absolute inset-10 border border-[#c5a059]/50 rounded-full border-dashed"
                        />
                        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#c5a059] rounded-full -translate-y-1/2" />
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#c5a059] rounded-full -translate-y-1/2" />
                    </div>

                    {/* Right Arc Group */}
                    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
                        <motion.div
                            style={{ rotate: rotateFast }}
                            className="absolute inset-0 border border-[#c5a059] rounded-full"
                        />
                        <motion.div
                            style={{ rotate: rotateSlow }}
                            className="absolute inset-10 border border-[#c5a059]/50 rounded-full border-dashed"
                        />
                        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#c5a059] rounded-full -translate-y-1/2" />
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#c5a059] rounded-full -translate-y-1/2" />
                    </div>
                </div>
            </div>

            {/* --- CENTRAL HERO COMPOSITION --- */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-[85vw] h-[85vw] max-w-[500px] max-h-[500px] md:w-[600px] md:h-[600px]"
                >
                    {/* Main Orbital Gold Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border border-[#c5a059]/60 rounded-full z-20"
                    >
                        {/* Moon Phases / Nodes on the ring */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                            <div
                                key={angle}
                                className="absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-[#c5a059] bg-[#0a0a09] shadow-[0_0_8px_rgba(197,160,89,0.4)]"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `rotate(${angle}deg) translate(clamp(150px, 42vw, 298px)) rotate(-${angle}deg) translate(-50%, -50%)`,
                                }}
                            >
                                {/* Small inner highlight for phase effect */}
                                <div className={`absolute inset-0.5 rounded-full ${i % 2 === 0 ? 'bg-[#c5a059]/30' : 'bg-transparent border border-[#c5a059]/20'}`} />
                            </div>
                        ))}
                    </motion.div>

                    {/* Image Mask Reveal */}
                    <div className="absolute inset-8 md:inset-10 rounded-full overflow-hidden border-2 border-[#c5a059]/40 bg-[#1a1a18] shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10">
                        <Image
                            src="/odyssey_hero.png"
                            alt="The Odyssey Hero"
                            fill
                            className="object-cover scale-110 hover:scale-125 transition-transform duration-[5s] ease-out opacity-80"
                        />
                        {/* Vignette & Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-[#c5a059]/10 mix-blend-color" />
                    </div>

                    {/* Central Text Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-[#c5a059] font-serif tracking-[0.4em] text-[10px] md:text-xs mb-4 uppercase"
                        >
                            The Archive
                        </motion.span>
                        <motion.h2
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, duration: 1.2 }}
                            className="font-playfair text-4xl md:text-7xl text-[#f3e3c3] text-center leading-[0.9] tracking-tighter drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                        >
                            THE <br /> ODYSSEY
                        </motion.h2>
                    </div>
                </motion.div>

                {/* --- BOTTOM INFORMATION FOOTER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-16 md:mt-24 grid grid-cols-3 gap-8 md:gap-24 items-start"
                >
                    <div className="flex flex-col items-center text-center max-w-[120px]">
                        <span className="text-sm text-[#c5a059] mb-3">✧</span>
                        <span className="text-[9px] md:text-[10px] text-[#c5a059]/60 tracking-[0.2em] uppercase font-serif mb-1">DATE</span>
                        <span className="text-[10px] md:text-xs text-[#f3e3c3]/80 font-serif">FEBRUARY 07</span>
                    </div>

                    <div className="flex flex-col items-center text-center max-w-[120px]">
                        <span className="text-sm text-[#c5a059] mb-3">✧</span>
                        <span className="text-[9px] md:text-[10px] text-[#c5a059]/60 tracking-[0.2em] uppercase font-serif mb-1">REVEAL</span>
                        <span className="text-[10px] md:text-xs text-[#f3e3c3]/80 font-serif">EXCLUSIVE ACCESS</span>
                    </div>

                    <div className="flex flex-col items-center text-center max-w-[120px]">
                        <span className="text-sm text-[#c5a059] mb-3">✧</span>
                        <span className="text-[9px] md:text-[10px] text-[#c5a059]/60 tracking-[0.2em] uppercase font-serif mb-1">TIME</span>
                        <span className="text-[10px] md:text-xs text-[#f3e3c3]/80 font-serif">14:30 PM</span>
                    </div>
                </motion.div>
            </div>

            {/* Corner Ornamental Accents */}
            <div className="absolute top-12 left-12 w-32 h-32 border-t border-l border-[#c5a059]/30 pointer-events-none" />
            <div className="absolute top-12 right-12 w-32 h-32 border-t border-r border-[#c5a059]/30 pointer-events-none" />
            <div className="absolute bottom-12 left-12 w-32 h-32 border-b border-l border-[#c5a059]/30 pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-32 h-32 border-b border-r border-[#c5a059]/30 pointer-events-none" />
        </section>
    );
};
