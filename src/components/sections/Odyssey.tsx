"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Work / Project Data
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
    return (
        <section className="min-h-screen relative overflow-hidden bg-[#0a0a0a] py-32 lg:py-48">

            {/* SECTION HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="mb-24 lg:mb-40 px-6 max-w-5xl mx-auto text-center"
            >
                <span className="font-serif text-[10px] tracking-[0.8em] uppercase text-gold-leaf opacity-60 mb-6 block">
                    Chapter V
                </span>
                <h2 className="text-5xl md:text-8xl font-serif italic mb-8 gold-text tracking-tighter">
                    The Gallery
                </h2>
                <p className="font-serif text-[11px] tracking-[0.6em] uppercase text-foreground/30 italic">
                    Artifacts forged in the digital realm.
                </p>
            </motion.div>

            {/* GALLERY GRID */}
            <div className="px-8 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
                {WORKS.map((work, index) => (
                    <motion.div
                        key={work.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: index * 0.15,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="group relative"
                    >
                        {/* THE ORNATE FRAME */}
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <Image
                                    src="/frame.png"
                                    alt="Ornate Frame"
                                    fill
                                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                                />
                            </div>

                            {/* THE WORK IMAGE */}
                            <div className="absolute inset-[12%] top-[18%] bottom-[16%] z-10 overflow-hidden bg-neutral-900">
                                <motion.div
                                    className="w-full h-full relative flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <span className="text-[10px] tracking-[0.5em] uppercase text-white/20 font-serif italic">
                                        Artifact {work.id}
                                    </span>
                                </motion.div>
                                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none z-20" />
                            </div>
                        </div>

                        {/* CAPTION */}
                        <div className="mt-8 text-center">
                            <div className="flex items-center justify-center gap-4 mb-3">
                                <div className="w-6 h-px bg-gold-leaf/30" />
                                <span className="text-[9px] tracking-[0.5em] uppercase text-gold-leaf/60 font-mono">
                                    0{work.id}
                                </span>
                                <div className="w-6 h-px bg-gold-leaf/30" />
                            </div>
                            <h3 className="font-serif text-xl lg:text-2xl italic text-white/90 tracking-tight mb-2">
                                {work.title}
                            </h3>
                            <div className="flex items-center justify-center gap-4 text-[9px] tracking-[0.4em] uppercase text-white/30">
                                <span>{work.category}</span>
                                <span className="text-gold-leaf/40">•</span>
                                <span className="text-gold-leaf/40">{work.year}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* FOOTER */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                className="mt-32 lg:mt-48 px-6 text-center"
            >
                <div className="flex flex-col items-center gap-6">
                    <div className="w-px h-16 bg-gradient-to-b from-gold-leaf/40 to-transparent" />
                    <p className="font-serif text-[10px] tracking-[0.5em] uppercase text-foreground/20 italic">
                        The archive continues to grow.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};
