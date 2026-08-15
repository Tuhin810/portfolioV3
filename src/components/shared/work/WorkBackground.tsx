"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { WORKS } from "./WorkData";

interface WorkBackgroundProps {
    progress: MotionValue<number>;
}

export const WorkBackground = ({ progress }: WorkBackgroundProps) => {
    const [active, setActive] = useState(0);

    // Which project is on screen — the rock re-enters whenever this changes
    useMotionValueEvent(progress, "change", (v) => {
        const i = Math.min(WORKS.length - 1, Math.max(0, Math.floor(v * WORKS.length)));
        setActive((prev) => (prev === i ? prev : i));
    });

    return (
        <div className="absolute inset-0 flex items-center justify-start pl-[4vw] lg:pl-[8vw] pointer-events-none select-none overflow-hidden z-0">
            {/* Horizon axis */}

            {/* THE ROCK — rises again on every project */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 70, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -40, scale: 0.97 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-[46vw] max-w-[720px] aspect-square"
                    >
                        <Image
                            src="/stome.png"
                            alt=""
                            fill
                            sizes="760px"
                            className="object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.85)]"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Contact shadow, arriving with it */}
                <motion.div
                    key={`shadow-${active}`}
                    aria-hidden
                    initial={{ opacity: 0, scaleX: 0.7 }}
                    animate={{ opacity: 0.7, scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-[6%] w-[46%] h-8 rounded-[50%] bg-black blur-2xl"
                />
            </div>
        </div>
    );
};
