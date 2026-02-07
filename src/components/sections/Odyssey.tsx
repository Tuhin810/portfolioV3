"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
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
    { id: "07", title: "MYKONOS", image: "/gate3.png", shape: "pill-h", quote: "A white-washed labyrinth." },
    { id: "08", title: "RHODES", image: "/ob1.png", shape: "pill-v", quote: "Colossus of the mind." },
];

/* ----------------------------------
   BUBBLE SCREENSAVER EFFECT (Background)
----------------------------------- */

const FloatingBubble = () => {
    // Random initial positions and velocities
    const x = useMotionValue(Math.random() * 100);
    const y = useMotionValue(Math.random() * 100);
    const vx = useRef((Math.random() - 0.5) * 0.05);
    const vy = useRef((Math.random() - 0.5) * 0.05);
    const size = useRef(Math.random() * 100 + 50);

    useAnimationFrame((t) => {
        let nextX = x.get() + vx.current;
        let nextY = y.get() + vy.current;

        // Bounce off walls (percentage based 0-100)
        if (nextX < 0 || nextX > 100) vx.current *= -1;
        if (nextY < 0 || nextY > 100) vy.current *= -1;

        x.set(nextX);
        y.set(nextY);
    });

    return (
        <motion.div
            style={{
                x: useTransform(x, (v) => `${v}vw`),
                y: useTransform(y, (v) => `${v}vh`),
                width: size.current,
                height: size.current,
            }}
            className="absolute rounded-full border border-[#a68b5c]/10 bg-gradient-to-br from-[#a68b5c]/5 to-transparent blur-sm pointer-events-none"
        />
    );
};

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
}) => {
    // Randomly decide if this instance shows the star or the half-moon
    const [style, setStyle] = useState<"star" | "moon">("star");

    useEffect(() => {
        // Deterministic but "random" look based on ID
        const charCodeSum = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        setStyle(charCodeSum % 2 === 0 ? "star" : "moon");
    }, [id]);

    return (
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

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {style === "star" ? (
                    <div className="relative w-72 h-72">
                        <Image src="/start.png" alt="" fill className="object-contain" />
                    </div>
                ) : (
                    <div className="w-24 h-24 rounded-full border border-white/20 overflow-hidden relative rotate-[15deg]">
                        {/* The "Attached Image" Moon Design: Half light grey, half black with a tilt */}
                        <div className="absolute inset-0 flex">
                            <div className="flex-1 bg-black" />
                            <div className="flex-1 bg-[#d1d1d1]" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ----------------------------------
   KINETIC BUBBLE CARD (Memory)
----------------------------------- */

const KineticBubbleCard = ({
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
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Repulsion Offset (The "Shift" effect)
    const repelX = useSpring(0, { stiffness: 50, damping: 20 });
    const repelY = useSpring(0, { stiffness: 50, damping: 20 });

    // Floating drift (Idle animation)
    const driftX = useMotionValue(0);
    const driftY = useMotionValue(0);

    useEffect(() => {
        let frame: number;
        const animate = (t: number) => {
            driftX.set(Math.sin(t / 2000 + index) * 20);
            driftY.set(Math.cos(t / 2500 + index) * 20);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [index]);

    const onMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Distance from cursor to center
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repulsion logic: shift away if mouse is within 300px
        const maxDist = 300;
        if (dist < maxDist) {
            const power = (1 - dist / maxDist) * 100;
            repelX.set(-dx / dist * power);
            repelY.set(-dy / dist * power);
        } else {
            repelX.set(0);
            repelY.set(0);
        }

        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const onLeave = () => {
        repelX.set(0);
        repelY.set(0);
        mouseX.set(0);
        mouseY.set(0);
    };

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

    const parallaxY = useTransform(progress, [0, 1], [0, (index - 2) * 100]);
    const opacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
                y: useTransform([parallaxY, repelY, driftY], ([p, r, d]) => (p as number) + (r as number) + (d as number)),
                x: useTransform([repelX, driftX], ([r, d]) => (r as number) + (d as number)),
                rotateX,
                rotateY,
                opacity,
                perspective: 1000,
                // Fix for Safari/Chrome hardware clipping failures
                WebkitMaskImage: "-webkit-radial-gradient(white, black)"
            }}
            className={`relative overflow-hidden bg-black/40 border border-white/10 rounded-full ${className} group cursor-none isolation-isolate z-0`}
        >
            <Image
                src={memory.image}
                alt={memory.title}
                fill
                className="object-cover scale-150 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1600ms] rounded-full"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 rounded-full" />

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 backdrop-blur-[4px] rounded-full overflow-hidden">
                <div className="w-12 h-px bg-[#a68b5c]/50 mb-4" />
                <span className="text-[10px] tracking-[0.6em] text-[#a68b5c] uppercase mb-3">
                    Fragment {memory.id}
                </span>
                <h3 className="text-3xl font-serif italic text-white tracking-wide">{memory.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#a68b5c]/60 mt-4 px-8 text-center leading-relaxed">
                    {memory.quote}
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-[#a68b5c] mt-6" />
            </div>

            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
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
            className="relative min-h-[150vh] bg-[#030303] px-10 -mt-20 overflow-hidden"
        >
            {/* BACKGROUND BUBBLES SCREENSAVER */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                    <FloatingBubble key={i} />
                ))}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,139,92,0.04)_0%,transparent_70%)]" />
            </div>



            {/* GRID OF KINETIC BUBBLES */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
                <div className="flex flex-col gap-24 pt-32">
                    <KineticBubbleCard memory={MEMORIES[0]} index={0} progress={smooth} className="aspect-[0.6/1]" />
                    <KineticBubbleCard memory={MEMORIES[6]} index={6} progress={smooth} className="aspect-[2/1]" />
                    <CircularText text="ancient chronicles revealed" id="a" className="aspect-square" />
                </div>

                <div className="flex flex-col gap-24 pt-64">
                    <KineticBubbleCard memory={MEMORIES[1]} index={1} progress={smooth} className="aspect-square" />
                    <KineticBubbleCard memory={MEMORIES[2]} index={2} progress={smooth} className="aspect-[2.2/1]" />
                    <KineticBubbleCard memory={MEMORIES[7]} index={7} progress={smooth} className="aspect-[0.55/1]" />
                </div>

                <div className="flex flex-col gap-24 pt-20">
                    <CircularText text="floating through the archive" id="b" className="aspect-square" />
                    <KineticBubbleCard memory={MEMORIES[3]} index={3} progress={smooth} className="aspect-square" />
                    <KineticBubbleCard memory={MEMORIES[4]} index={4} progress={smooth} className="aspect-[0.55/1]" />
                </div>

                <div className="flex flex-col gap-24 pt-80">
                    <KineticBubbleCard memory={MEMORIES[5]} index={5} progress={smooth} className="aspect-square" />
                    <div className="hidden lg:block h-32" />
                    <CircularText text="the stone remembers everything" id="c" className="aspect-square" />
                </div>
            </div>


            {/* KINETIC TEXT FOOTER */}
            <div className="mt-80 border-t border-[#a68b5c]/10 py-32 overflow-hidden relative">
                <motion.div
                    style={{ x: useTransform(smooth, [0, 1], ["20%", "-20%"]) }}
                    className="flex gap-40 whitespace-nowrap opacity-[0.03]"
                >
                    {Array.from({ length: 3 }).map((_, i) => (
                        <h2
                            key={i}
                            className="text-[25vw] font-serif uppercase italic font-black"
                        >
                            Mnemosyne // The Archive // Odyssey
                        </h2>
                    ))}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
            </div>
        </section>
    );
};

export default Odyssey;
