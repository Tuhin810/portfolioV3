"use client";

import React from "react";
import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";
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
                <div className="mb-4 flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase opacity-30">Artifact {work.id}</span>
                    <div className="w-8 h-px bg-white/10" />
                </div>

                <h3 className="text-5xl lg:text-7xl font-serif tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                    {work.title}
                </h3>

                <p className="text-base lg:text-lg font-sans font-light leading-relaxed tracking-wide opacity-50 mb-12 max-w-sm">
                    {work.description}
                </p>

                <motion.button
                    className="group relative px-10 py-4 bg-transparent border border-white/10 overflow-hidden pointer-events-auto"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                    <span className="relative z-10 text-[9px] tracking-[0.5em] uppercase font-medium" style={{ color: "#cda56e" }}>
                        Examine Artifact
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{ backgroundColor: "#cda56e" }} />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};
