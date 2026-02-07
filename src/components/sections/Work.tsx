"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
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

                <WorkBackground rotateSlow={rotateSlow} rotateFast={rotateFast} />

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
