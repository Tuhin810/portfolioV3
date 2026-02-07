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

    const y = useTransform(
        progress,
        [start, start + 0.1, end - 0.1, end],
        [30, 0, 0, -30]
    );

    const scale = useTransform(
        progress,
        [start, start + 0.1, end - 0.1, end],
        [0.95, 1, 1, 1.05]
    );

    const imageScale = useTransform(
        progress,
        [start, end],
        [1.1, 1]
    );

    return (
        <motion.div
            style={{
                opacity,
                y,
                pointerEvents: useTransform(opacity, (v) => v > 0.5 ? "auto" : "none"),
                visibility: useTransform(opacity, (v) => v > 0 ? "visible" : "hidden")
            }}
            className="absolute inset-0 w-full h-full flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 gap-12 lg:gap-24"
        >
            <div className="relative w-full lg:w-[60%] aspect-[4/5] max-w-[540px] group shrink-0 h-[400px]">
                <motion.div
                    style={{ scale, borderColor: `${work.themeColor}33` }}
                    className="absolute inset-0 border-[0.5px] p-3 rounded-lg transition-colors duration-1000 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black"
                >
                    <div className="w-full h-full rounded-lg relative overflow-hidden flex items-center justify-center border border-white/5">
                        <div className="absolute inset-0 z-0">
                            <motion.div style={{ scale: imageScale }} className="w-full h-full">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] brightness-50 group-hover:brightness-100"
                                />
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg pointer-events-none">
                            <motion.span
                                className="text-[120px] font-serif uppercase select-none tracking-tighter opacity-10"
                                style={{ color: work.themeColor }}
                            >
                                {work.god[0]}
                            </motion.span>
                        </div>

                        <div className="absolute bottom-10 flex flex-col items-center">
                            <span className="text-[8px] tracking-[0.6em] uppercase text-white/20 mb-2">Mythos</span>
                            <span className="text-xl font-serif italic text-white/40 tracking-widest">{work.god}</span>
                        </div>
                    </div>
                </motion.div>

                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l opacity-40" style={{ borderColor: work.themeColor }} />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r opacity-40" style={{ borderColor: work.themeColor }} />
            </div>

            <div className="w-full lg:w-[50%] max-w-lg flex flex-col items-start text-left">
                <div className="mb-4 flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase opacity-30">Artifact {work.id}</span>
                    <div className="w-8 h-px bg-white/10" />
                </div>

                <h3 className="text-5xl lg:text-7xl font-serif tracking-tighter uppercase leading-[0.9] mb-8">
                    {work.title}
                </h3>

                <p className="text-base lg:text-lg font-sans font-light leading-relaxed tracking-wide opacity-50 mb-12 max-w-md">
                    {work.description}
                </p>

                <motion.button
                    className="group relative px-10 py-4 bg-transparent border border-white/10 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                    <span className="relative z-10 text-[9px] tracking-[0.5em] uppercase font-medium" style={{ color: work.themeColor }}>
                        Examine Artifact
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{ backgroundColor: work.themeColor }} />
                </motion.button>
            </div>
        </motion.div>
    );
};
