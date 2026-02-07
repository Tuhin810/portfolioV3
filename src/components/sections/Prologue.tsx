"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PrologueProps {
    onEnter: () => void;
}

export const Prologue: React.FC<PrologueProps> = ({ onEnter }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 4000; // 4 seconds for a grander feel
        const interval = 30;
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onEnter, 1000); // Wait a second at 100%
                    return 100;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onEnter]);

    return (
        <motion.div
            key="prologue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 2.5 } }}
            className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-[#050505] overflow-hidden relative"
        >
            {/* GREEK KEY (MEANDER) BORDER TOP */}
            <div className="absolute top-0 left-0 w-full h-8 opacity-[0.03] overflow-hidden select-none pointer-events-none">
                <div className="flex whitespace-nowrap animate-greek-slide">
                    {[...Array(20)].map((_, i) => (
                        <svg key={i} width="100" height="40" viewBox="0 0 100 40" className="inline-block fill-white">
                            <path d="M0 0h100v40H0V0zm10 10v20h20V15h10v15h15V10h-5v15h-5V10H10z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* GREEK KEY (MEANDER) BORDER BOTTOM */}
            <div className="absolute bottom-0 left-0 w-full h-8 opacity-[0.03] overflow-hidden select-none pointer-events-none rotate-180">
                <div className="flex whitespace-nowrap animate-greek-slide">
                    {[...Array(20)].map((_, i) => (
                        <svg key={i} width="100" height="40" viewBox="0 0 100 40" className="inline-block fill-white">
                            <path d="M0 0h100v40H0V0zm10 10v20h20V15h10v15h15V10h-5v15h-5V10H10z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* ARCHITECTURAL ELEMENTS: COLUMN SILHOUETTES */}
            <div className="absolute inset-0 flex justify-between px-[5vw] opacity-[0.02] pointer-events-none">
                <div className="h-full w-24 border-x border-white" />
                <div className="h-full w-24 border-x border-white" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                className="relative z-10"
            >
                {/* GRAND TITLE */}
                <div className="mb-12">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="w-16 h-px bg-gold-leaf mx-auto mb-6"
                    />
                    <h1 className="font-serif text-[10px] tracking-[1.5em] uppercase text-gold-leaf opacity-60 mb-2">
                        The Architect's Archive
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 4, delay: 1 }}
                    className="font-serif text-2xl md:text-3xl text-foreground/80 mb-20 max-w-2xl italic leading-relaxed tracking-widest px-8"
                >
                    &ldquo;Structure is the geometry of the soul.&rdquo;
                </motion.p>

                {/* THE GREEK PEDIMENT PROGRESS AREA */}
                <div className="flex flex-col items-center">
                    {/* Progress Bar (The Fluted Column Style) */}
                    <div className="relative w-72 h-[2px] bg-white/5 overflow-hidden rounded-full">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-gold-leaf/40 to-transparent"
                            style={{ width: `${progress}%` }}
                            initial={{ x: "-100%" }}
                            animate={{ x: `${progress - 100}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-2">
                        <span className="text-[9px] uppercase tracking-[1.2em] text-white/20 font-mono animate-pulse">
                            Summoning the Pantheon
                        </span>
                        <div className="text-[14px] font-serif italic text-gold-leaf/40">
                            {Math.round(progress)}%
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* VOLUMETRIC LIGHT BEAM (Center) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-leaf/5 to-transparent opacity-30 shadow-[0_0_50px_rgba(197,160,40,0.1)]" />

            <style jsx>{`
                @keyframes greek-slide {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100px); }
                }
                .animate-greek-slide {
                    animation: greek-slide 20s linear infinite;
                }
            `}</style>
        </motion.div>
    );
};
