"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EditorialSidebar } from "@/components/shared/EditorialSidebar";
import { WORKS } from "@/components/shared/work/WorkData";
import { WorkItem } from "@/components/shared/work/WorkItem";
import { NavIndicator } from "@/components/shared/work/NavIndicator";
import { WorkBackground } from "@/components/shared/work/WorkBackground";

export default function Work() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const rotateSlow = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const rotateFast = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <section
            ref={sectionRef}
            className="relative h-[600vh] w-full bg-black border-y border-white/10 text-[#d4cdbc] overflow-visible border-y border-white/5"
        >
            <div className="sticky top-0 left-0 h-screen w-full flex items-center justify-center z-10">
                {/* DECORATIVE CELESTIAL SUNBURST (Top Right) */}
                <div className="absolute top-12 right-12 w-32 h-32 pointer-events-none z-[100] opacity-30">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="relative w-full h-full"
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#cda56e] fill-none stroke-current stroke-[0.5]">
                            {/* Central Glow Point */}
                            <circle cx="50" cy="50" r="1" className="fill-current" />
                            {/* Rays */}
                            {Array.from({ length: 16 }).map((_, i) => (
                                <line
                                    key={i}
                                    x1="50" y1="50"
                                    x2={50 + 45 * Math.cos((i * Math.PI) / 8)}
                                    y2={50 + 45 * Math.sin((i * Math.PI) / 8)}
                                />
                            ))}
                        </svg>
                    </motion.div>
                </div>

                <WorkBackground rotateSlow={rotateSlow} rotateFast={rotateFast} progress={scrollYProgress} />

                <div className="relative w-full h-full flex items-center overflow-hidden">
                    <div className="h-full border-r border-white/5 bg-black/50 backdrop-blur-sm z-20 xl:block hidden">
                        <EditorialSidebar
                            title="WORK"
                            mainImage="/gate1.png"
                            showMoon={true}
                            rotation={180}
                            layout="info-first"
                            className="border-none"
                        />
                    </div>

                    <div className="flex-1 h-full relative">
                        {WORKS.map((work, index) => (
                            <WorkItem
                                key={work.id}
                                work={work}
                                index={index}
                                progress={scrollYProgress}
                                itemCount={WORKS.length}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-12 right-12 flex items-center gap-12 z-30 opacity-40">
                    <div className="flex items-center gap-2">
                        {WORKS.map((work, i) => (
                            <NavIndicator
                                key={i}
                                i={i}
                                work={work}
                                progress={scrollYProgress}
                                itemCount={WORKS.length}
                            />
                        ))}
                    </div>
                    <span className="text-[8px] tracking-[0.4em] uppercase italic">Trajectory</span>
                </div>
            </div>
        </section>
    );
}
