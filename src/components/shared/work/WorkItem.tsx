"use client";

import React from "react";
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

    const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
    const textY = useTransform(progress, [start, start + 0.1, end - 0.1, end], [24, 0, 0, -24]);

    return (
        <motion.div
            style={{
                opacity,
                pointerEvents: useTransform(opacity, (v) => (v > 0.5 ? "auto" : "none")),
                visibility: useTransform(opacity, (v) => (v > 0 ? "visible" : "hidden")),
            }}
            className="absolute inset-0 flex items-center justify-end pr-[6vw] lg:pr-[10vw] pl-[50vw]"
        >
            <motion.div style={{ y: textY }} className="flex flex-col items-start text-left max-w-md">
                <span className="text-[9px] tracking-[0.6em] uppercase text-[#cda56e]/50">
                    Artifact {work.id}
                </span>

                <h3 className="mt-4 text-4xl lg:text-5xl font-serif tracking-tight uppercase leading-none text-white/90">
                    {work.title}
                </h3>

                <p className="mt-4 text-xs lg:text-sm leading-relaxed text-white/35">
                    {work.description}
                </p>

                <div className="mt-6 flex items-center gap-8 text-[10px] tracking-[0.4em] uppercase">
                    <a
                        href={work.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto text-[#cda56e]/70 hover:text-[#cda56e] border-b border-[#cda56e]/25 hover:border-[#cda56e]/60 pb-1 transition-colors duration-500"
                    >
                        View
                    </a>
                    <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto text-white/30 hover:text-white/70 border-b border-white/10 hover:border-white/30 pb-1 transition-colors duration-500"
                    >
                        Source
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};
