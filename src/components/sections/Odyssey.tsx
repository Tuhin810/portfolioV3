"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Images } from "./Images";

const MEMORIES = [
    { id: "01", title: "ACROPOLIS", image: "/gate1.png", shape: "pill-v", quote: "The crown of the world." },
    { id: "02", title: "DELPHI", image: "/gate2.png", shape: "circle", quote: "The Oracle whispers." },
    { id: "03", title: "METEORA", location: "Thessaly", image: "/gate3.png", shape: "pill-h", quote: "Between heaven and earth." },
    { id: "04", title: "SANTORINI", image: "/ob1.png", shape: "circle", quote: "A caldera of dreams." },
    { id: "05", title: "CORINTH", image: "/gate1.png", shape: "pill-v", quote: "The ancient bridge." },
    { id: "06", title: "OLYMPIA", image: "/gate2.png", shape: "circle", quote: "Flame of the ages." },
];

const CircularText = ({ text, id, className }: { text: string; id: string; className?: string }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slowest opacity-30">
                <path
                    id={`circlePath-${id}`}
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="none"
                />
                <text className="text-[5.5px] uppercase tracking-[0.3em] font-serif fill-[#a68b5c]">
                    <textPath xlinkHref={`#circlePath-${id}`}>
                        {text} • {text} • {text} •
                    </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border border-[#a68b5c]/20 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#a68b5c]/40 rounded-full" />
                </div>
            </div>
        </div>
    );
};

const MagneticShape = ({ m, index, scrollYProgress, className }: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, (index % 4 - 2) * 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    const getRadius = () => {
        if (m.shape === 'circle') return 'rounded-full';
        return 'rounded-[80px] md:rounded-[120px]';
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ y: yParallax, opacity, rotateX, rotateY, perspective: 1000 }}
            className={`relative group overflow-hidden border border-white/5 bg-black/40 ${getRadius()} ${className} cursor-crosshair`}
        >
            <Image
                src={m.image}
                alt=""
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />

            {/* Minimal Label Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 p-8 backdrop-blur-[2px]">
                <div className="w-px h-12 bg-[#a68b5c]/60 mb-4" />
                <span className="text-[10px] tracking-[0.6em] text-[#a68b5c] uppercase mb-2">Fragment {m.id}</span>
                <h4 className="text-2xl font-serif italic text-white text-center leading-tight">{m.title}</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-4 font-mono">{m.quote}</p>
            </div>
        </motion.div>
    );
};

export const Odyssey: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 25 });

    return (
        <section ref={sectionRef} className="relative min-h-[100vh] bg-[#030303] p-40 overflow-visible -mt-10">

            {/* 1. STRUCTURAL BACKGROUND (The Web of Time) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,139,92,0.05)_0%,transparent_80%)]" />

                {/* Fixed Grid Pattern */}
                <svg width="100%" height="100%" className="opacity-[0.05]">
                    <defs>
                        <pattern id="matrix-grid" width="200" height="200" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="200" y2="200" stroke="#a68b5c" strokeWidth="0.5" />
                            <circle cx="0" cy="0" r="1.5" fill="#a68b5c" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#matrix-grid)" />
                </svg>

                {/* Floating Large Rings */}
                <motion.div
                    style={{ rotate: useTransform(smoothProgress, [0, 1], [0, 45]) }}
                    className="absolute top-1/4 -left-1/4 w-[100vw] h-[100vw] border border-[#a68b5c]/5 rounded-full"
                />
            </div>

            {/* 2. THE CHRONICLE MATRIX */}
            <div className="container mx-auto px-6 relative z-10">
                {/* <Images /> */}

                {/* --- THE GEOMETRIC ASSEMBLAGE --- */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 items-center">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-12 lg:pt-40">
                        <MagneticShape m={MEMORIES[0]} index={0} scrollYProgress={smoothProgress} className="aspect-[0.6/1] w-full" />
                        <CircularText id="t1" text="ancient chronicles revealed " className="w-full aspect-square" />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-12 md:pt-64">
                        <MagneticShape m={MEMORIES[1]} index={1} scrollYProgress={smoothProgress} className="aspect-square w-full" />
                        <MagneticShape m={MEMORIES[2]} index={2} scrollYProgress={smoothProgress} className="aspect-[2/1] w-full" />
                        <div className="w-full aspect-square border border-white/10 rounded-full flex items-center justify-center overflow-hidden grayscale opacity-30">
                            <Image src="/ob1.png" alt="" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-12 lg:pt-20">
                        <CircularText id="t2" text="floating through the archive " className="w-full aspect-square" />
                        <MagneticShape m={MEMORIES[3]} index={3} scrollYProgress={smoothProgress} className="aspect-square w-full" />
                        <MagneticShape m={MEMORIES[4]} index={4} scrollYProgress={smoothProgress} className="aspect-[0.55/1] w-full" />
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-12 md:pt-80">
                        <MagneticShape m={MEMORIES[5]} index={5} scrollYProgress={smoothProgress} className="aspect-square w-full" />
                        <div className="w-full aspect-[2/1] bg-black border border-white/10 rounded-full flex flex-col items-center justify-center">
                            <span className="text-[8px] tracking-[1.5em] text-[#a68b5c] uppercase mb-1">Archive.05</span>
                            <div className="w-8 h-px bg-[#a68b5c]/20" />
                        </div>
                        <CircularText id="t3" text="the stone remembers everything " className="w-full aspect-square" />
                    </div>

                </div>

            </div>

            {/* 3. POST-SECTION DETAIL (Massive Kinetic Text) */}
            <div className="mt-64 relative border-t border-[#a68b5c]/10 py-20 overflow-hidden bg-black/40">
                <motion.div
                    style={{ x: useTransform(smoothProgress, [0, 1], ["20%", "-20%"]) }}
                    className="flex gap-40 whitespace-nowrap opacity-[0.03]"
                >
                    {Array.from({ length: 3 }).map((_, i) => (
                        <h5 key={i} className="text-[25vw] font-serif font-black uppercase italic tracking-tighter leading-none">
                            Mnemosyne // The Archive // Odyssey
                        </h5>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};
