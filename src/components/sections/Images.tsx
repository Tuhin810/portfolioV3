"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Images = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden py-16 md:py-16">
            {/* Outer Border Container */}
            <div className="relative w-full  aspect-[16/10] md:aspect-[16/9]  border-[#a68b5c]/30 rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl">

                {/* Background Image - The Painting */}
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/images-bg.png"
                        alt="Classical Floral Painting"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                    <div className="absolute inset-0 bg-background/40 mix-blend-multiply" />
                </div>

                {/* Decorative Geometry - The Circles and Arcs */}
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                    {/* Center Pill Shape */}
                    <div className="w-[85%] md:w-[60%] aspect-[2.2/1] border border-[#a68b5c]/30 rounded-[10rem] md:rounded-[20rem]" />

                    {/* Left Overlapping Circle */}
                    <div className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 -translate-x-[20%] md:-translate-x-[15%] w-[350px] md:w-[650px] aspect-square border border-[#a68b5c]/30 rounded-full flex items-center justify-center">
                        {/* Vertical Text Container */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background md:px-4 py-8">
                            <div className="-rotate-90">
                                <span className="text-[#f2ede4] font-serif tracking-[0.6em] text-[10px] md:text-sm uppercase opacity-40">LUXURIOUS</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Overlapping Circle */}
                    <div className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-[20%] md:translate-x-[15%] w-[350px] md:w-[650px] aspect-square border border-[#a68b5c]/30 rounded-full flex items-center justify-center">
                        {/* Vertical Text Container */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background md:px-4 py-8">
                            <div className="rotate-90">
                                <span className="text-[#f2ede4] font-serif tracking-[0.6em] text-[10px] md:text-sm uppercase opacity-40">LUXURIOUS</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Layer */}
                <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-4">

                    {/* Introducing Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center gap-4 md:gap-8 mb-4 md:mb-8"
                    >
                        <div className="flex items-center">
                            <div className="w-12 md:w-24 h-[1px] bg-[#a68b5c]/60" />
                            <div className="w-2 h-2 border-r border-t border-[#a68b5c] rotate-45 -ml-1" />
                        </div>
                        <span className="text-[#f2ede4] font-serif tracking-[0.4em] text-[10px] md:text-sm uppercase font-light">
                            Memories
                        </span>
                        <div className="flex items-center">
                            <div className="w-2 h-2 border-l border-t border-[#a68b5c] -rotate-45 -mr-1" />
                            <div className="w-12 md:w-24 h-[1px] bg-[#a68b5c]/60" />
                        </div>
                    </motion.div>

                    {/* Title: Ceone */}
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-[18vw] md:text-[12vw] font-bold font-serif tracking-tight text-[#a68b5c] leading-none mb-4 md:mb-8"
                        style={{
                            // fontFamily: 'var(--font-syne), serif',
                            filter: 'drop-shadow(0 0 30px rgba(166, 139, 92, 0.4))'
                        }}
                    >
                        Odyssey
                    </motion.h2>


                </div>

                {/* Inner thin border */}
                {/* <div className="absolute inset-3 md:inset-6 border border-[#a68b5c]/20 rounded-[2.5rem] md:rounded-[4.5rem] pointer-events-none" /> */}
            </div>
        </section>
    );
};
