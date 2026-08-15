"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import SideRays from "@/components/shared/SideRays";

export const Arrival: React.FC<{ onHit?: () => void }> = ({ onHit }) => {
    const containerRef = useRef<HTMLDivElement>(null);


    // Pointer-driven 3D tilt for the eye (-0.5 .. 0.5 across the viewport)
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const springCfg = { stiffness: 60, damping: 18, mass: 0.8 };
    const tiltY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-22, 22]), springCfg);
    const tiltX = useSpring(useTransform(pointerY, [-0.5, 0.5], [16, -16]), springCfg);
    const shiftX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-26, 26]), springCfg);
    const shiftY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-18, 18]), springCfg);
    // Specular sheen slides opposite the tilt, selling the surface curvature
    const sheenX = useTransform(pointerX, [-0.5, 0.5], ["75%", "25%"]);
    const sheenY = useTransform(pointerY, [-0.5, 0.5], ["70%", "30%"]);

    const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,244,214,0.35) 0%, rgba(205,165,110,0.10) 35%, transparent 65%)`;

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
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative flex flex-col items-center justify-center min-h-screen px-6 w-full max-w-[100vw] overflow-hidden bg-background">

            {/* Light Rays from the top-right corner */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <SideRays
                    origin="top-right"
                    rayColor1="#e3bb84ff"
                    rayColor2="#f5e6c8"
                    speed={1.2}
                    intensity={1.1}
                    spread={1.6}
                    falloff={1.4}
                    saturation={1.2}
                    blend={0.55}
                    opacity={1}
                />
            </div>

            {/* --- EXACT GEOMETRY BACKGROUND LAYER (REPLICATING REFERENCE) --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                {/* Horizontal Horizon Line with End Nodes */}
                <div className="absolute w-[95vw] h-[1px] flex items-center justify-center top-1/2 -translate-y-1/2">
                    <div className="w-full h-full opacity-30 bg-gradient-to-r from-transparent via-[#cda56e] to-transparent" />
                    <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#cda56e] opacity-40 shadow-[0_0_8px_rgba(205,165,110,0.5)]" />
                    <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#cda56e] opacity-40 shadow-[0_0_8px_rgba(205,165,110,0.5)]" />
                </div>

                {/* Symmetrical Lateral Arcs (Precisely as in reference) */}
                <div className="absolute inset-0 flex items-center justify-between px-[10%] opacity-20">
                    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center translate-x-16">
                        <div className="absolute inset-0 border border-[#cda56e] rounded-full" />
                        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-[#cda56e] rounded-full -translate-y-1/2" />
                    </div>
                    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center -translate-x-16">
                        <div className="absolute inset-0 border border-[#cda56e] rounded-full" />
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#cda56e] rounded-full -translate-y-1/2" />
                    </div>
                </div>

                {/* Central Orbital Ring with Moon Phase Nodes */}
                <div className="relative w-[85vw] h-[85vw] max-w-[580px] max-h-[580px] opacity-40 border border-[#cda56e]/60 rounded-full">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <div
                            key={angle}
                            className="absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full border border-[#cda56e] bg-[#0a0a09]"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${angle}deg) translate(clamp(150px, 42vw, 290px)) rotate(-${angle}deg) translate(-50%, -50%)`,
                            }}
                        >
                            <div className={`absolute inset-0.5 rounded-full ${i % 2 === 0 ? 'bg-[#cda56e]/40' : 'bg-transparent border border-[#cda56e]/20'}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Cast shadow — its own layer beneath the wordmark, parallaxing with the tilt */}
            <motion.div
                className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
            >
                <motion.div
                    style={{ x: shiftX, y: shiftY }}
                    className="w-[38vw] h-[38vw] max-w-[330px] max-h-[330px] rounded-full bg-black blur-2xl"
                />
            </motion.div>

            {/* Centered Eye — 3D tilt driven by the pointer */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, delay: 2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none select-none"
            >
                <motion.div
                    style={{
                        rotateX: tiltX,
                        rotateY: tiltY,
                        x: shiftX,
                        y: shiftY,
                        transformStyle: "preserve-3d",
                    }}
                    animate={{ translateZ: [0, 28, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[60vw] h-[60vw] max-w-[720px] max-h-[720px]"
                >
                    <motion.div style={{ transformStyle: "preserve-3d" }} className="absolute inset-0">
                        <Image
                            src="/eye.png"
                            alt="Eye"
                            fill
                            priority
                            className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                        />

                        {/* Specular sheen clipped to the relic silhouette */}
                        <motion.div
                            aria-hidden
                            style={{
                                translateZ: 1,
                                background: sheen,
                                WebkitMaskImage: "url(/eye.png)",
                                maskImage: "url(/eye.png)",
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

            {/* Top Label & Logo */}
            {/* <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 3, delay: 0.1 }}
                className="absolute top-16 left-1/2 -translate-x-1/2 -mt-5 flex flex-col items-center gap-2"
            >
                <div className="relative w-32 h-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 mix-blend-screen">
                    <Image
                        src="/mythic-logo.png"
                        alt="Mythic Logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </motion.div> */}

            {/* Subtitle - Centered Bottom */}
            <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 0.4, y: 0, x: "-50%" }}
                transition={{ duration: 3, delay: 4 }}
                className="absolute bottom-24 left-1/2 text-center z-20 whitespace-nowrap"
            >

            </motion.div>

            {/* Main Name Reveal — split around the eye */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-between px-[4vw] pointer-events-none"
            >
                <div className="glow-text-container translate-x-[5vw] -translate-y-[10vh]">
                    <h1 className="text-[clamp(2.5rem,11vw,10rem)] font-bold tracking-[-0.06em] uppercase leading-none liquid-light select-none whitespace-nowrap relative z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        HI   I&apos;m
                    </h1>
                </div>
                <div className="glow-text-container -translate-x-[5vw] translate-y-[10vh]">
                    <h1 className="text-[clamp(2.5rem,11vw,10rem)] font-bold tracking-[-0.06em] uppercase leading-none liquid-light select-none whitespace-nowrap relative z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        Tuhin
                    </h1>
                </div>
            </motion.div>

            {/* Scroll Prompt */}
            <motion.div
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 0.2, x: "-50%" }}
                transition={{ duration: 2, delay: 6 }}
                className="absolute bottom-12 left-1/2 px-12 text-white/40 text-[9px] uppercase tracking-[0.4em] font-medium opacity-30 whitespace-nowrap"
            >
                <p className="animate-pulse">Begin the descent</p>
            </motion.div>

            {/* STATUS BADGES - BOTTOM LEFT */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 5 }}
                className="absolute bottom-12 left-12 flex items-center gap-6 z-30 pointer-events-auto"
            >
                {/* Badge 1: Solid */}
                <motion.div
                    onClick={onHit}
                    whileHover={{ scale: 1.05, backgroundColor: "#cda56e" }}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#cda56e] flex items-center justify-center cursor-pointer transition-colors duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                    <span className="text-[8px] font-bold tracking-[0.4em] text-black">HIT</span>
                </motion.div>

                {/* Badge 2: Outline */}
                <motion.div
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,1)" }}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-700 hover:bg-white/[0.02]"
                >
                    <span className="text-[8px] font-bold tracking-[0.4em] text-white/40">NEW</span>
                </motion.div>
            </motion.div>
        </section>
    );
};
