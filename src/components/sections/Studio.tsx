"use client";

import React from "react";
import { motion } from "framer-motion";

export const Studio: React.FC = () => {
    return (
        <section className="min-h-screen bg-[#050505] relative flex items-center justify-center p-8 lg:p-24 overflow-hidden py-64">
            {/* BACKGROUND VIDEO MASK CONTAINER */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-nebula-in-outer-space-3205-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 w-full max-w-[1400px]">
                {/* TOP SECTION: TYPO STYLE */}
                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 mb-[-5vw]">
                    {/* LEFT LABEL (01 BEBAS) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="order-2 lg:order-1 self-start lg:mb-24"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">01</span>
                            <h3 className="font-display text-4xl lg:text-5xl text-white tracking-widest uppercase leading-none">Bebas Neue</h3>
                            <span className="text-[8px] uppercase tracking-[0.6em] text-white/20 italic">Headline Typography</span>
                        </div>
                    </motion.div>

                    {/* MAIN WORD: STUDIO */}
                    <div className="order-1 lg:order-2 relative group">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[32vw] lg:text-[25vw] font-display text-transparent uppercase leading-[0.75] select-none text-center lg:text-left"
                            style={{
                                backgroundImage: 'url("/gate1.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text'
                            }}
                        >
                            STUDIO
                        </motion.h1>

                        {/* ALPHABET GRID (A-M) embedded beside the text */}
                        <div className="absolute top-1/2 left-[40%] -translate-y-1/2 hidden lg:grid grid-cols-4 gap-x-8 gap-y-2 opacity-10 pointer-events-none">
                            {"ABCDEFGHIJKL".split('').map(l => (
                                <span key={l} className="text-[9px] font-mono text-white">{l}</span>
                            ))}
                        </div>
                    </div>

                    {/* FLOATING VIDEO "BESIDE" THE TEXT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 2, delay: 1 }}
                        className="hidden lg:block absolute -right-20 top-0 w-48 h-80 border border-white/10 p-1 bg-white/5 backdrop-blur-xl rotate-[90deg]
                         group-hover:rotate-0 transition-transform duration-1000 z-20 overflow-hidden rounded-full shadow-2xl"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-smoke-and-ink-fills-vertical-screen-34440-large.mp4" type="video/mp4" />
                        </video>
                        {/* <div className="absolute bottom-4 left-4 flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-white/40 font-mono">Process Reel</span>
                            <span className="text-[6px] uppercase tracking-widest text-[#cda56e]">Active Capture</span>
                        </div> */}
                    </motion.div>
                </div>

                {/* BOTTOM SECTION: GRAPHY STYLE */}
                <div className="relative flex flex-col lg:flex-row items-end justify-between gap-12 mt-[-5vw]">
                    {/* ALPHABET GRID (N-Z) embedded beside the text */}
                    <div className="order-3 lg:order-1 hidden lg:grid grid-cols-4 gap-x-8 gap-y-2 opacity-10 pointer-events-none self-center">
                        {"MNOPQRSTUVWX".split('').map(l => (
                            <span key={l} className="text-[9px] font-mono text-white">{l}</span>
                        ))}
                    </div>

                    {/* MAIN WORD: ARCHIVE */}
                    <div className="order-1 lg:order-2 flex flex-col items-end">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="text-[32vw] lg:text-[25vw] font-display text-transparent uppercase leading-[0.75] select-none text-right"
                            style={{
                                backgroundImage: 'url("/gate2.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'bottom',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text'
                            }}
                        >
                            CRAFT
                        </motion.h1>
                    </div>

                    {/* RIGHT LABEL (02 MONTSERRAT) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="order-2 lg:order-3 text-right"
                    >
                        <div className="flex flex-col gap-1 items-end">
                            <span className="text-[10px] font-mono text-white/40 tracking-[0.4em]">02</span>
                            <h3 className="font-sans font-light text-4xl lg:text-5xl text-white tracking-[0.2em] uppercase leading-none">Montserrat</h3>
                            <span className="text-[8px] uppercase tracking-[0.6em] text-white/20 italic">Functional Typography</span>

                            {/* SMALL SECONDARY VIDEO FOR MOBILE/TABLET BESIDE TEXT */}
                            <div className="mt-8 w-32 h-20 border border-white/5 bg-white/[0.02] relative overflow-hidden rounded lg:hidden">
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                    <source src="https://assets.mixkit.co/videos/preview/mixkit-smoke-and-ink-fills-vertical-screen-34440-large.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* DECORATIVE ELEMENTS */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center opacity-10">
                <p className="font-serif text-[10px] tracking-[1em] uppercase">The Art of the Archive</p>
            </div>
        </section>
    );
};
