"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface WorkBackgroundProps {
    rotateSlow: MotionValue<number>;
    rotateFast: MotionValue<number>;
}

export const WorkBackground = ({ rotateSlow, rotateFast }: WorkBackgroundProps) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            {/* 1. Horizontal Horizon Axis */}
            <div className="absolute w-[95vw] h-[1px] flex items-center justify-center top-1/2 -translate-y-1/2">
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 0.17 }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-[#cda56e] to-transparent"
                />
                <div className="absolute left-0 w-1.5 h-1.5 rounded-full border border-[#cda56e]/40 bg-black shadow-[0_0_8px_rgba(205,165,110,0.2)]" />
                <div className="absolute right-0 w-1.5 h-1.5 rounded-full border border-[#cda56e]/40 bg-black shadow-[0_0_8px_rgba(205,165,110,0.2)]" />
            </div>

            {/* 2. Symmetrical Lateral Full Circles */}
            <div className="absolute inset-0 flex items-center justify-between px-[2%] md:px-[5%] opacity-[0.1]">
                {/* Left Architecture */}
                <div className="relative w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] flex items-center justify-center">
                    <motion.div
                        style={{ rotate: rotateSlow }}
                        className="absolute inset-0 border border-[#cda56e] rounded-full"
                    />
                    <motion.div
                        style={{ rotate: rotateFast }}
                        className="absolute inset-[15%] border border-[#cda56e]/40 rounded-full border-dashed"
                    />
                    <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 bg-[#cda56e] rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(205,165,110,0.3)]" />
                </div>

                {/* Right Architecture */}
                <div className="relative w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] flex items-center justify-center">
                    <motion.div
                        style={{ rotate: rotateFast }}
                        className="absolute inset-0 border border-[#cda56e] rounded-full"
                    />
                    <motion.div
                        style={{ rotate: rotateSlow }}
                        className="absolute inset-[15%] border border-[#cda56e]/40 rounded-full border-dashed"
                    />
                    <div className="absolute top-1/2 -right-1 w-2.5 h-2.5 bg-[#cda56e] rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(205,165,110,0.3)]" />
                </div>
            </div>

            {/* 3. Central Sacred Circle with Phases */}
            <motion.div
                style={{ rotate: rotateSlow }}
                className="relative w-[90vw] h-[90vw] max-w-[650px] max-h-[650px] border border-[#cda56e]/30 rounded-full flex items-center justify-center opacity-[0.35]"
            >
                {/* Moon Phase Nodes on Central Ring */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <div
                        key={angle}
                        className="absolute w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full border border-[#cda56e] bg-black"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: `rotate(${angle}deg) translate(clamp(160px, 44vw, 325px)) rotate(-${angle}deg) translate(-50%, -50%)`,
                        }}
                    >
                        <div className={`absolute inset-0.5 rounded-full ${i % 2 === 0 ? 'bg-[#cda56e]/50' : 'bg-transparent border border-[#cda56e]/30'}`} />
                    </div>
                ))}

                {/* Additional Structured Rings */}
                <div className="absolute inset-[10%] border border-[#cda56e]/5 rounded-full" />
                <div className="absolute inset-[30%] border border-[#cda56e]/10 rounded-full border-dotted" />
            </motion.div>
        </div>
    );
};
