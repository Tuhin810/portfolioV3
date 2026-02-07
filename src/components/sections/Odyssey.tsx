"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

/* ----------------------------------
   DATA
----------------------------------- */

type Memory = {
    id: string;
    title: string;
    image: string;
    shape: "circle" | "pill-v" | "pill-h";
    quote: string;
};

const MEMORIES: Memory[] = [
    { id: "01", title: "ACROPOLIS", image: "/gate1.png", shape: "pill-v", quote: "The crown of the world." },
    { id: "02", title: "DELPHI", image: "/gate2.png", shape: "circle", quote: "The Oracle whispers." },
    { id: "03", title: "METEORA", image: "/gate3.png", shape: "pill-h", quote: "Between heaven and earth." },
    { id: "04", title: "SANTORINI", image: "/ob1.png", shape: "circle", quote: "A caldera of dreams." },
    { id: "05", title: "CORINTH", image: "/gate1.png", shape: "pill-v", quote: "The ancient bridge." },
    { id: "06", title: "OLYMPIA", image: "/gate2.png", shape: "circle", quote: "Flame of the ages." },
];

/* ----------------------------------
   CIRCULAR TEXT
----------------------------------- */

const CircularText = ({
    text,
    id,
    className = "",
}: {
    text: string;
    id: string;
    className?: string;
}) => (
    <div className={`relative ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slowest opacity-30">
            <path
                id={`circle-${id}`}
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                fill="none"
            />
            <text className="text-[6px] uppercase tracking-[0.35em] fill-[#a68b5c] font-serif">
                <textPath href={`#circle-${id}`}>
                    {text} • {text} • {text}
                </textPath>
            </text>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a68b5c]/60" />
        </div>
    </div>
);

/* ----------------------------------
   MAGNETIC CARD
----------------------------------- */

const MagneticShape = ({
    memory,
    index,
    progress,
    className = "",
}: {
    memory: Memory;
    index: number;
    progress: any;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
        stiffness: 120,
        damping: 25,
    });

    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
        stiffness: 120,
        damping: 25,
    });

    const parallaxY = useTransform(progress, [0, 1], [0, (index - 2) * 140]);
    const opacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    const onMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    const radius =
        memory.shape === "circle"
            ? "rounded-full"
            : memory.shape === "pill-h"
                ? "rounded-[120px]"
                : "rounded-[120px]";

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ y: parallaxY, rotateX, rotateY, opacity, perspective: 1000 }}
            className={`relative overflow-hidden bg-black/40 border border-white/10 ${radius} ${className} group`}
        >
            <Image
                src={memory.image}
                alt={memory.title}
                fill
                className="object-cover scale-150 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1600ms]"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 backdrop-blur-[2px]">
                <span className="text-[10px] tracking-[0.6em] text-[#a68b5c] uppercase mb-3">
                    Fragment {memory.id}
                </span>
                <h3 className="text-2xl font-serif italic text-white">{memory.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mt-4">
                    {memory.quote}
                </p>
            </div>
        </motion.div>
    );
};

/* ----------------------------------
   MAIN SECTION
----------------------------------- */

export const Odyssey = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 25 });

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-[#030303] px-10 py-0 overflow-visible"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,139,92,0.06)_0%,transparent_70%)]" />
                <motion.div
                    style={{ rotate: useTransform(smooth, [0, 1], [0, 40]) }}
                    className="absolute -left-1/3 top-1/4 w-[120vw] h-[120vw] border border-[#a68b5c]/10 rounded-full"
                />
            </div>

            {/* GRID */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16">
                <div className="flex flex-col gap-16 pt-32">
                    <MagneticShape memory={MEMORIES[0]} index={0} progress={smooth} className="aspect-[0.6/1]" />
                    <CircularText text="ancient chronicles revealed" id="a" className="aspect-square" />
                </div>

                <div className="flex flex-col gap-16 pt-64">
                    <MagneticShape memory={MEMORIES[1]} index={1} progress={smooth} className="aspect-square" />
                    <MagneticShape memory={MEMORIES[2]} index={2} progress={smooth} className="aspect-[2/1]" />
                </div>

                <div className="flex flex-col gap-16 pt-20">
                    <CircularText text="floating through the archive" id="b" className="aspect-square" />
                    <MagneticShape memory={MEMORIES[3]} index={3} progress={smooth} className="aspect-square" />
                    <MagneticShape memory={MEMORIES[4]} index={4} progress={smooth} className="aspect-[0.55/1]" />
                </div>

                <div className="flex flex-col gap-16 pt-80">
                    <MagneticShape memory={MEMORIES[5]} index={5} progress={smooth} className="aspect-square" />
                    <CircularText text="the stone remembers everything" id="c" className="aspect-square" />
                </div>
            </div>

            {/* KINETIC TEXT */}
            <div className="mt-64 border-t border-[#a68b5c]/10 py-24 overflow-hidden">
                <motion.div
                    style={{ x: useTransform(smooth, [0, 1], ["20%", "-20%"]) }}
                    className="flex gap-40 whitespace-nowrap opacity-[0.03]"
                >
                    {Array.from({ length: 3 }).map((_, i) => (
                        <h2
                            key={i}
                            className="text-[24vw] font-serif uppercase italic font-black"
                        >
                            Mnemosyne // The Archive // Odyssey
                        </h2>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Odyssey;
