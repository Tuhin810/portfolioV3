"use client";

import React from "react";
import { motion } from "framer-motion";
import { Images } from "../sections/Images";

interface AboutViewProps {
    onBack: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-[#0d0c0b] text-[#d4cdbc]  overflow-y-auto flex flex-col"
        >
            <div className="fixed top-10 w-full bg-white h-32">
                   <div className="flex justify-between items-start mb-24 uppercase font-serif text-[10px] tracking-[0.5em] opacity-40">
                    <span>Fragment I</span>
                    <button
                        onClick={onBack}
                        className="hover:text-gold-leaf transition-colors cursor-pointer px-4 py-2 border border-white/10 rounded-full"
                    >
                        ← Return to Gates
                    </button>
                    <span>The Essence</span>
                </div>
            </div>
        <Images title="Essence"/>
    <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
             

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center flex-1">
                    {/* Visual Side / Large Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-12 lg:col-span-5 mb-12 lg:mb-0"
                    >
                        <span className="font-serif text-[10px] tracking-[0.8em] uppercase text-gold-leaf opacity-60 mb-6 block">The Doctrine</span>
                        <h2 className="text-6xl md:text-8xl font-serif italic gold-text leading-[1.1]">
                            The <br /> Origin
                        </h2>
                    </motion.div>

                    {/* Narrative Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-12 lg:col-span-7 flex flex-col gap-12"
                    >
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <p className="font-serif text-3xl md:text-5xl text-foreground/80 tracking-tight italic">Clarity over noise.</p>
                                <p className="font-serif text-3xl md:text-5xl text-foreground/60 tracking-tight italic">Depth over speed.</p>
                                <p className="font-serif text-3xl md:text-5xl text-foreground/40 tracking-tight italic">Work that survives time.</p>
                            </div>

                            <div className="w-24 h-[1px] bg-gold-leaf opacity-20" />

                            <p className="font-sans text-sm md:text-base leading-loose text-foreground/40 tracking-wide max-w-lg">
                                Wisdom is not found in volume, but in the silence between decisions. I believe in the persistent pursuit of order, crafting digital monuments that do not yell, but endure.
                            </p>
                        </div>

                        {/* Divine Aspects */}
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <div>
                                <h4 className="font-serif text-[10px] tracking-[0.4em] uppercase text-gold-leaf/60 mb-3">The Ideal</h4>
                                <p className="text-[11px] uppercase tracking-widest text-foreground/40 leading-relaxed font-sans">
                                    Minimalist <br /> Timeless <br /> Human-Centric
                                </p>
                            </div>
                            <div>
                                <h4 className="font-serif text-[10px] tracking-[0.4em] uppercase text-gold-leaf/60 mb-3">The Execution</h4>
                                <p className="text-[11px] uppercase tracking-widest text-foreground/40 leading-relaxed font-sans">
                                    3D Realism <br /> Fluid Motion <br /> Strategic Design
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Background Texture/Effect */}
            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-leaf/5 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            </div>
        </motion.div>
    );
};
