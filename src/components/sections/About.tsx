"use client";

import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
    return (
        <section className="relative py-48 px-6 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                {/* Visual Side / Large Title */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="md:col-span-12 lg:col-span-5 mb-12 lg:mb-0"
                >
                    <span className="font-serif text-[10px] tracking-[0.8em] uppercase text-gold-leaf opacity-60 mb-6 block">Chapter VI</span>
                    <h2 className="text-5xl md:text-7xl font-serif italic gold-text leading-[1.2]">
                        The <br /> Doctrine
                    </h2>
                </motion.div>

                {/* Narrative Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
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

            {/* Background Texture/Effect */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-leaf/5 blur-[120px] rounded-full" />
            </div>
        </section>
    );
};
