"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
    useInView,
} from "framer-motion";

// Same stack the Skills view catalogues, grouped into three marquee rows
const ROWS = [
    ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Framer Motion", "GraphQL"],
    ["Node.js", "Python", "Rust", "Solidity", "MongoDB", "PostgreSQL", "Redis"],
    ["AWS", "Docker", "Terraform", "GitHub Actions", "WebGL", "Three.js", "Vercel"],
];

const DIRECTIONS = [-1, 1, -1] as const;
const DURATIONS = [38, 46, 42];

const Marquee: React.FC<{
    items: string[];
    direction: number;
    duration: number;
    phase: number;
    started: boolean;
    index: number;
}> = ({ items, direction, duration, phase, started, index }) => {
    // Two identical halves, translated by exactly 50% — the seam never shows
    const doubled = [...items, ...items];

    return (
        <motion.div
            // The line itself rides the wave — a slow rock plus a vertical swell
            initial={{ opacity: 0 }}
            animate={
                started
                    ? { opacity: 1, y: [0, -22, 0, 22, 0], rotate: [0, -1.6, 0, 1.6, 0] }
                    : { opacity: 0 }
            }
            transition={{
                opacity: { duration: 1.2, delay: index * 0.25, ease: "easeOut" },
                y: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: phase },
                rotate: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: phase },
            }}
            className="flex overflow-hidden py-6">
            <motion.div
                className="flex shrink-0 items-center gap-10 pr-10"
                animate={started ? { x: direction < 0 ? ["0%", "-50%"] : ["-50%", "0%"] } : {}}
                transition={{ duration, repeat: Infinity, ease: "linear", delay: index * 0.25 }}
                style={{ width: "200%" }}
            >
                {doubled.map((item, i) => (
                    <span
                        key={`${item}-${i}`}
                        className="whitespace-nowrap text-6xl lg:text-8xl tracking-tight text-white/25"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export const Studio: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.4 });

    // The rows hold until the face has landed
    const [textStarted, setTextStarted] = useState(false);
    useEffect(() => {
        if (!inView) return;
        const t = setTimeout(() => setTextStarted(true), 1500);
        return () => clearTimeout(t);
    }, [inView]);

    // Pointer-driven 3D tilt, same treatment as the hero relic
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const springCfg = { stiffness: 60, damping: 18, mass: 0.8 };
    const tiltY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-16, 16]), springCfg);
    const tiltX = useSpring(useTransform(pointerY, [-0.5, 0.5], [11, -11]), springCfg);
    const shiftX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-18, 18]), springCfg);
    const shiftY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-12, 12]), springCfg);
    const sheenX = useTransform(pointerX, [-0.5, 0.5], ["75%", "25%"]);
    const sheenY = useTransform(pointerY, [-0.5, 0.5], ["70%", "30%"]);
    const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,244,214,0.28) 0%, rgba(205,165,110,0.08) 35%, transparent 65%)`;

    const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handlePointerLeave = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    return (
        <section
            ref={sectionRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-t from-[#111111]/10 to-[#010000] pt-56 pb-32"
        >
            {/* MARQUEE ROWS — behind the face */}
            <div className="relative z-0 w-full flex flex-col gap-10 lg:gap-16">
                {ROWS.map((items, i) => (
                    <Marquee
                        key={i}
                        items={items}
                        index={i}
                        direction={DIRECTIONS[i]}
                        duration={DURATIONS[i]}
                        phase={i * 1.6}
                        started={textStarted}
                    />
                ))}
            </div>

            {/* Edge fade, so words enter and leave rather than popping */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 lg:w-56 z-[5] bg-gradient-to-r from-[#010000] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 lg:w-56 z-[5] bg-gradient-to-l from-[#010000] to-transparent" />

            {/* CONTACT SHADOW — darkens the words passing behind the face */}
            <motion.div
                aria-hidden
                style={{ x: shiftX, y: shiftY }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: [0, 1, 0.85, 1], scale: [0.9, 1, 0.94, 1] } : { opacity: 0 }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[8] w-[52vw] max-w-[720px] aspect-square rounded-full blur-3xl bg-[radial-gradient(circle,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.6)_45%,transparent_72%)]"
            />

            {/* FACE — centered, uncropped, 3D tilt */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ perspective: 1200 }}
                    className="select-none"
                >
                    <motion.div
                        animate={{ y: [0, -18, 0], rotate: [0, -1.2, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div
                            style={{
                                rotateX: tiltX,
                                rotateY: tiltY,
                                x: shiftX,
                                y: shiftY,
                                transformStyle: "preserve-3d",
                            }}
                            animate={{ translateZ: [0, 24, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[42vw] max-w-[720px] aspect-[3/4]"
                        >
                            <Image
                                src="/face.png"
                                alt=""
                                fill
                                priority={false}
                                sizes="(max-width: 868px) 70vw, 520px"
                                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]"
                            />

                            {/* Specular sheen clipped to the silhouette */}
                            <motion.div
                                aria-hidden
                                style={{
                                    translateZ: 1,
                                    background: sheen,
                                    WebkitMaskImage: "url(/face.png)",
                                    maskImage: "url(/face.png)",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain",
                                    WebkitMaskPosition: "center",
                                    maskPosition: "center",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                }}
                                className="absolute inset-0 mix-blend-screen"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
