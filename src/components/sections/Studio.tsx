"use client";

import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { AtelierScene } from "@/components/canvas/AtelierScene";

export const Studio: React.FC = () => {
    return (
        <section className="py-64 px-6 max-w-5xl mx-auto flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-center mb-16"
            >
                <div className="mb-4">
                    <span className="font-serif text-[10px] tracking-[0.8em] uppercase text-gold-leaf opacity-60">Chapter IV</span>
                </div>
                <h2 className="narrative-serif text-3xl md:text-5xl text-foreground/80 italic mb-8">
                    The Discipline
                </h2>
                <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-foreground/30">
                    &ldquo;Mastery is the silent work of a thousand trials.&rdquo;
                </p>
            </motion.div>

            <div className="space-y-48 w-full">
                {/* Frame 1: The Sky Window */}
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative group border border-white/5 p-1 bg-white/[0.02] aspect-[16/10] temple-shadow"
                >
                    <div className="relative w-full h-full overflow-hidden">
                        <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay z-10 pointer-events-none" />
                        <Canvas shadows dpr={[1, 2]}>
                            <AtelierScene type="window" />
                        </Canvas>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.4 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-8 left-8 z-20"
                        >
                            <p className="text-[10px] uppercase tracking-[0.5em] text-foreground italic gold-text">IV.I The Instruments of Aether</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Frame 2: The Sacred Codex */}
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    className="relative group border border-white/5 p-1 bg-white/[0.02] aspect-[16/10] temple-shadow"
                >
                    <div className="relative w-full h-full overflow-hidden">
                        <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay z-10 pointer-events-none" />
                        <Canvas shadows dpr={[1, 2]}>
                            <AtelierScene type="book" />
                        </Canvas>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.4 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-8 left-8 z-20"
                        >
                            <p className="text-[10px] uppercase tracking-[0.5em] text-foreground italic gold-text">IV.II The Codex of Chronos</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
                className="mt-32"
            >
                <p className="narrative-serif text-sm italic">Turning the page...</p>
            </motion.div>
        </section>
    );
};
