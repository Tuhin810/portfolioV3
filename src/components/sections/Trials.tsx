"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TRIALS_DATA = [
    {
        phase: "Phase I / III",
        subject: "The Sacred Forge",
        year: "MMXXVI",
        title: "Ancient Artistry Awakens",
        narrative: `In the architecture of our world, we found structure resisting its own weight. The systems of old were bound by legacy gravity, collapsing into noise. We forged order through a stateless, divine architecture, balancing the structural with the ethereal. Every pixel was a trial, every line of code a vow to clarity. The craftsman does not merely build; he listens to the silence between the stones. Here, in the heart of the forge, we learned that silence is the highest form of order. The work survives not because it is loud, but because it is true.`,
        quote: "Silence is the highest form of order.",
        id: "01"
    }
];

export const Trials: React.FC = () => {
    const data = TRIALS_DATA[0];

    return (
        <section className="relative  bg-[#0d0c0b] text-[#d4cdbc] p-6 md:px-12 md:py-16 overflow-hidden flex flex-col border-t border-white/5">
            {/* Editorial Header */}
            <div className="flex justify-between items-start mb-16 uppercase font-serif text-[10px] tracking-[0.5em] opacity-40">
                <div className="flex flex-col gap-1">
                    <span>{data.phase}</span>
                    <span className="tracking-[0.2em]">{data.subject}</span>
                </div>
                <div className="text-right">
                    <span>Established</span>
                    <span className="block tracking-[0.2em]">{data.year}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 relative">
                {/* Left Column: Title & Arches */}
                <div className="lg:col-span-9 flex flex-col justify-between h-full">
                    {/* Large Stylized Title */}


                    {/* Arched Portals (Bottom Left) */}
                    <div className="flex items-end gap-6 mt-12 lg:mt-0">
                        {/* Smaller Arch */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-[30%] aspect-[4/5] rounded-t-full border border-[#d4cdbc]/20 overflow-hidden relative group bg-[#1a1816]"
                        >
                            <Image
                                src="/greek_myth_sketch_1_1770305784106.png"
                                alt="Greek Myth Sketch"
                                fill
                                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-[#0d0c0b]/40 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-0" />
                        </motion.div>

                        {/* Larger Arch */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 100 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            className="w-[50%] aspect-[4/5] rounded-t-full border border-[#d4cdbc]/30 overflow-hidden relative group bg-[#1a1816]"
                        >
                            <Image
                                src="/greek_myth_sketch_1_1770305784106.png"
                                alt="Greek Myth Sketch Main"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] backdrop-blur-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer">←</div>
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] backdrop-blur-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer">→</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Narrative Sidebar */}
                <div className="lg:col-span-3 flex flex-col justify-between border-l border-[#d4cdbc]/10 pl-8 lg:pl-12 py-4 h-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <span className="block w-8 h-[1px] bg-gold-leaf/40" />
                            <p className="font-serif text-sm leading-relaxed text-[#d4cdbc]/60 font-light text-justify hyphens-auto">
                                {data.narrative}
                            </p>
                        </div>

                        <div className="space-y-4 pt-12">
                            <h4 className="font-serif text-[10px] tracking-[0.4em] uppercase text-gold-leaf/40">The Resolve</h4>
                            <p className="font-serif italic text-xl opacity-90 leading-tight">
                                "{data.quote}"
                            </p>
                        </div>
                    </motion.div>

                    {/* Footer Marker */}
                    <div className="mt-auto flex flex-col items-end gap-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full border border-[#d4cdbc]/20 flex items-center justify-center text-[10px] opacity-40 hover:opacity-100 transition-all cursor-pointer">
                                {data.id}
                            </div>
                        </div>
                        <div className="w-px h-24 bg-gradient-to-t from-gold-leaf/40 to-transparent opacity-20 mr-5" />
                    </div>
                </div>
            </div>

            {/* Background Star Flourishes */}
            <div className="absolute top-[10%] right-[10%] opacity-10 pointer-events-none">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z" />
                </svg>
            </div>
            <div className="absolute bottom-[40%] left-[5%] opacity-5 pointer-events-none rotate-45">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z" />
                </svg>
            </div>
        </section>
    );
};
