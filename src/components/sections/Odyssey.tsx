"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MEMORIES = [
    { src: "/odyssey-1.jpg", alt: "Memory I" },
    { src: "/odyssey-2.jpg", alt: "Memory II" },
    { src: "/odyssey-3.jpg", alt: "Memory III" }
];

export const Odyssey: React.FC = () => {
    return (
        <section className="py-64 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className="mb-32 px-6 max-w-5xl mx-auto text-center"
            >
                <span className="font-serif text-[10px] tracking-[0.8em] uppercase text-gold-leaf opacity-60 mb-6 block">Chapter V</span>
                <h2 className="text-4xl md:text-6xl font-serif italic mb-8">The Odyssey</h2>
                <div className="flex flex-col gap-4">
                    <p className="font-serif text-[11px] tracking-[0.6em] uppercase text-foreground/30 italic">Roads that shaped patience.</p>
                    <p className="font-serif text-[11px] tracking-[0.6em] uppercase text-foreground/30 italic">Places that taught silence.</p>
                </div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-4 px-4 h-[80vh] md:h-[60vh]">
                {MEMORIES.map((memory, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 0.6, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3, delay: index * 0.4 }}
                        className="relative flex-1 group overflow-hidden grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                    >
                        <div className="absolute inset-0 bg-background/40 z-10 group-hover:bg-transparent transition-colors duration-1000" />
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-[10px] uppercase tracking-[1em] text-white/20 italic">
                            Memory {index + 1}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-32 px-6 text-center">
                <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-foreground/20 italic italic">Knowledge is built outside the forge.</p>
            </div>
        </section>
    );
};
