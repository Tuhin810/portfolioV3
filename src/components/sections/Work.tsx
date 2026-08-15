"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { WORKS } from "@/components/shared/work/WorkData";
import { WorkItem } from "@/components/shared/work/WorkItem";
import { NavIndicator } from "@/components/shared/work/NavIndicator";
import { WorkBackground } from "@/components/shared/work/WorkBackground";

export default function Work() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={sectionRef}
            className="relative h-[600vh] w-full bg-gradient-to-t from-background via-black to-background -black  text-[#d4cdbc]"
        >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 lg:w-56 z-[5] bg-gradient-to-r from-[#010000] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 lg:w-56 z-[5] bg-gradient-to-l from-[#010000] to-transparent" />

            <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
                {/* Top label */}
                <div className="absolute top-12 inset-x-8 md:inset-x-14 z-30 flex justify-between text-[9px] tracking-[0.6em] uppercase text-white/25">
                    <span>Selected Work</span>
                    <span>{WORKS.length.toString().padStart(2, "0")} Artifacts</span>
                </div>

                <WorkBackground progress={scrollYProgress} />

                {WORKS.map((work, index) => (
                    <WorkItem
                        key={work.id}
                        work={work}
                        index={index}
                        progress={scrollYProgress}
                        itemCount={WORKS.length}
                    />
                ))}

                {/* Progress rule */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
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
            </div>
        </section>
    );
}
