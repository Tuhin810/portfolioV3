"use client";

import React from "react";
import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { WorkType } from "./WorkData";

interface WorkItemProps {
    work: WorkType;
    index: number;
    progress: MotionValue<number>;
    itemCount: number;
}

export const WorkItem = ({ work, index, progress, itemCount }: WorkItemProps) => {
    const start = index / itemCount;
    const end = (index + 1) / itemCount;

    const opacity = useTransform(
        progress,
        [start, start + 0.1, end - 0.1, end],
        [0, 1, 1, 0]
    );

    const textY = useTransform(
        progress,
        [start, start + 0.1, end - 0.1, end],
        [40, 0, 0, -40]
    );

    const imageScale = useTransform(
        progress,
        [start, end],
        [1.15, 1.05]
    );

    return (
        <motion.div
            style={{
                opacity,
                pointerEvents: useTransform(opacity, (v) => v > 0.5 ? "auto" : "none"),
                visibility: useTransform(opacity, (v) => v > 0 ? "visible" : "hidden")
            }}
            className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-end px-8 md:px-24"
        >
            {/* RIGHT HALF: THE DESCRIPTION (Reverted to original behavior) */}
            <motion.div
                style={{ y: textY }}
                className="w-full lg:w-[40%] max-w-lg flex flex-col items-start text-left z-20"
            >
                <div className="mb-6 flex items-center gap-4 group/label">

                    <span className="text-[10px] tracking-[0.5em] uppercase text-[#cda56e]/60 font-medium">Artifact {work.id}</span>
                </div>

                <h3 className="text-5xl lg:text-7xl font-serif tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                    {work.title}
                </h3>

                <p className="text-base lg:text-lg font-sans font-light leading-relaxed tracking-wide text-white/40 mb-12 max-w-sm italic">
                    {work.description}
                </p>

                <div className="flex items-center gap-8 w-full">
                    {/* PRIMARY ACTION: THE ARCHITECTURAL PLINTH */}
                    <motion.button
                        className="group relative flex items-center gap-4 px-12 py-5 bg-transparent border border-[#cda56e]/20 overflow-hidden pointer-events-auto"
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Greek Meander (Key) Decorative Corners */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#cda56e]/60 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#cda56e]/20" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#cda56e]/60 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-[#cda56e]/20" />

                        {/* Divine Aura */}
                        <div className="absolute inset-0 bg-[#cda56e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

                        <span className="relative z-10 text-xs tracking-[0.4em] font-serif uppercase text-[#cda56e]/80 group-hover:text-[#cda56e] transition-colors duration-500">
                            view Artifact
                        </span>

                        <div className="relative z-10 text-[#cda56e]/30 group-hover:text-[#cda56e] transition-colors duration-500">
                            <ExternalLink size={14} strokeWidth={1.5} />
                        </div>

                        {/* Monumental Underline */}
                        <div className="absolute bottom-3 left-12 right-12 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-700 bg-gradient-to-r from-transparent via-[#cda56e]/40 to-transparent" />
                    </motion.button>

                    {/* SECONDARY ACTION: THE SACRED MEDALLION (GitHub) */}
                    <motion.button
                        className="group relative w-16 h-16 bg-black border border-[#cda56e]/20 rounded-full flex items-center justify-center pointer-events-auto overflow-hidden transition-all duration-700 hover:border-[#cda56e]/60 hover:shadow-[0_0_25px_rgba(205,165,110,0.15)]"
                        whileHover={{ rotate: 360 }}
                        title="View Source Relic"
                    >
                        {/* Medallion Engravings */}
                        <div className="absolute inset-1.5 rounded-full border border-dashed border-[#cda56e]/10 group-hover:border-[#cda56e]/30 transition-colors duration-500" />

                        {/* Core Aura */}
                        <div className="absolute inset-4 rounded-full bg-[#cda56e]/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10  group-hover:rotate-0 transition-transform duration-700">
                            <Github className="w-5 h-5 text-[#cda56e]/70 group-hover:text-[#cda56e] transition-all duration-500" strokeWidth={1.2} />
                        </div>

                        {/* Key Notches (North, South, East, West) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[#cda56e]/20 group-hover:bg-[#cda56e]/40" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-[#cda56e]/20 group-hover:bg-[#cda56e]/40" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[#cda56e]/20 group-hover:bg-[#cda56e]/40" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[#cda56e]/20 group-hover:bg-[#cda56e]/40" />
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};
