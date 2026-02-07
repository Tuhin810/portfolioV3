"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { WORKS } from "./WorkData";
import Image from "next/image";

interface WorkBackgroundProps {
    rotateSlow: MotionValue<number>;
    rotateFast: MotionValue<number>;
    progress: MotionValue<number>;
}

const EmbeddedWorkImage = ({ work, index, total, progress }: { work: any, index: number, total: number, progress: MotionValue<number> }) => {
    const start = index / total;
    const end = (index + 1) / total;

    const opacity = useTransform(
        progress,
        [start, start + 0.1, end - 0.1, end],
        [0, 1, 1, 0]
    );

    const interiorScale = useTransform(
        progress,
        [start, end],
        [1.25, 1.1]
    );

    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0"
        >
            <motion.div style={{ scale: interiorScale }} className="w-full h-full">
                <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover brightness-[0.5]"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60" />
        </motion.div>
    );
};

export const WorkBackground = ({ rotateSlow, rotateFast, progress }: WorkBackgroundProps) => {
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
            </div>

            {/* 2. Symmetrical Lateral Full Circles */}
            <div className="absolute inset-0 flex items-center justify-between px-[2%] md:px-[5%] opacity-[0.2]">
                <div className="relative w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] flex items-center justify-center">
                    <motion.div style={{ rotate: rotateSlow }} className="absolute inset-0 border border-[#cda56e] rounded-full" />
                </div>
                <div className="relative w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] flex items-center justify-center">
                    <motion.div style={{ rotate: rotateFast }} className="absolute inset-0 border border-[#cda56e] rounded-full" />
                </div>
            </div>

            {/* 3. CENTRAL ARCHAEOLOGICAL FOCAL POINT (The Embedded Image Host) */}
            <div className="relative w-[85vw] h-[85vw] max-w-[620px] max-h-[620px] flex items-center justify-center">

                {/* The "Metal Circle" Container */}
                <div className="absolute inset-0 z-0 rounded-full overflow-hidden border border-[#cda56e]/40 p-1.5 bg-black/40 backdrop-blur-md">
                    <div className="w-full h-full rounded-full overflow-hidden relative border border-white/10 shadow-[inner_0_0_100px_rgba(0,0,0,0.9)]">
                        {WORKS.map((work, index) => (
                            <EmbeddedWorkImage
                                key={work.id}
                                work={work}
                                index={index}
                                total={WORKS.length}
                                progress={progress}
                            />
                        ))}
                    </div>
                </div>

                {/* Rotating Geometrical Rings (Layered OVER the images) */}
                <motion.div
                    style={{ rotate: rotateSlow }}
                    className="absolute -inset-10 border border-[#cda56e]/20 rounded-full flex items-center justify-center z-10 opacity-[0.4]"
                >
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <div
                            key={angle}
                            className="absolute w-2 h-2 rounded-full border border-[#cda56e] bg-black"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${angle}deg) translate(335px) rotate(-${angle}deg) translate(-50%, -50%)`,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Outer Orbitals */}
                <motion.div
                    style={{ rotate: rotateFast }}
                    className="absolute -inset-24 border border-[#cda56e]/5 rounded-full border-dashed opacity-20 z-10"
                />
            </div>
        </div>
    );
};
