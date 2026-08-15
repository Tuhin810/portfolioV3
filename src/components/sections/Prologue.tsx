"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// WebGL only — keep it off the server render
const Dither = dynamic(() => import("@/components/shared/Dither"), { ssr: false });

interface PrologueProps {
    onEnter: () => void;
}

// Dot geometry — the swap distance is one dot plus the gap between them
const DOT = 96;
const GAP = 28;
const SWAP = DOT + GAP;

export const Prologue: React.FC<PrologueProps> = ({ onEnter }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 4000;
        const interval = 30;
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onEnter, 1000);
                    return 100;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onEnter]);

    // One dot moves, then the other — a two-beat swap that loops
    const swapTransition = {
        duration: 2.4,
        times: [0, 0.4, 0.5, 0.9, 1],
        repeat: Infinity,
        ease: "easeInOut" as const,
    };

    return (
        <motion.div
            key="prologue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 2.5 } }}
            className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-br from-[#111] to-[#000]/10 overflow-hidden relative"
        >

            <img src="/mythic-logo.png" className="w-96 grayscale" alt="" />


            {/* TWO DOTS — swapping places, one at a time */}
            <div
                className="relative z-20 flex items-center"
                style={{ gap: GAP, height: DOT }}
                aria-label={`Loading ${Math.round(progress)}%`}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
            >
                {/* Solid */}
                <motion.div
                    animate={{ x: [0, 0, SWAP, SWAP, 0] }}
                    transition={swapTransition}
                    style={{ width: DOT, height: DOT }}
                    className="rounded-full bg-[#cda56e] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />

                {/* Outline */}
                <motion.div
                    animate={{ x: [0, -SWAP, -SWAP, 0, 0] }}
                    transition={swapTransition}
                    style={{ width: DOT, height: DOT }}
                    className="rounded-full border border-white/10"
                />
            </div>
        </motion.div>
    );
};
