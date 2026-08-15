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


                <div className="mt-4 text-6xl lg:text-7xl uppercase  leading-none text-white/70 font-bold">
                    {work.title}
                </div>

                <p className="mt-4 text-xs lg:text-xl leading-relaxed text-white/35">
                    {work.description}
                </p>


                <motion.div

                    className=" flex items-center gap-6 mt-6 z-30 pointer-events-auto"
                >
                    {/* Badge 1: Solid */}
                    <motion.div
                        onClick={() => window.open(work.liveUrl, "_blank")}
                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#cda56e] flex items-center justify-center cursor-pointer transition-colors duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    >
                        <span className="text-[8px] font-bold tracking-[0.4em] text-black">View</span>
                    </motion.div>

                    {/* Badge 2: Outline */}
                    <motion.div
                        onClick={() => window.open(work.githubUrl, "_blank")}

                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border bg-black border-white/50 flex items-center justify-center cursor-pointer transition-all duration-700 hover:bg-white/[0.02]"
                    >
                        <span className="text-[8px] font-bold tracking-[0.4em] text-white/70">Source</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
