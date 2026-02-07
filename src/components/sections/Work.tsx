"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { EditorialSidebar } from "@/components/shared/EditorialSidebar";

const WORKS = [
    {
        id: "01",
        title: "The Forge",
        subtitle: "Architectural Backend Systems",
        description: "A robust infrastructure designed for resilience and performance, echoing the precision of the divine blacksmith's craft. Built with scalable microservices and immutable data structures.",
        god: "Hephaestus",
        mythos: "Master of Fire & Craft",
        themeColor: "#c5a028" // Gold
    },
    {
        id: "02",
        title: "The Loom",
        subtitle: "Intricate Frontend Weaving",
        description: "Interweaving complex UI patterns with strategic clarity. Each thread of logic is placed with intention, creating a tapestry of seamless user experiences.",
        god: "Athena",
        mythos: "Goddess of Wisdom & Strategy",
        themeColor: "#387299" // Azure
    },
    {
        id: "03",
        title: "The Message",
        subtitle: "Low-Latency Communication",
        description: "Facilitating the swift exchange of information across digital realms. A high-frequency data layer that ensures the word reaches its destination with divine speed.",
        god: "Hermes",
        mythos: "The Swift-Footed Messenger",
        themeColor: "#a68b5c" // Bronze
    },
    {
        id: "04",
        title: "The Harmony",
        subtitle: "Creative Media Systems",
        description: "A symphony of interactive media and artistic expression. Harmonizing visual data with auditory feedback to create a transcendent digital performance.",
        god: "Apollo",
        mythos: "God of Music, Light & Truth",
        themeColor: "#e0b870" // Sunlight
    }
];

const WorkItem = ({ work, index, progress }: { work: typeof WORKS[0], index: number, progress: MotionValue<number> }) => {
    const itemCount = WORKS.length;
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
            <div className="relative w-full lg:w-[40%] aspect-[4/5] max-w-[340px] group shrink-0">
                <motion.div
                    style={{ scale, borderColor: `${work.themeColor}33` }}
                    className="absolute inset-0 border-[0.5px] p-3 rounded-t-full transition-colors duration-1000 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <div className="w-full h-full bg-[#111] rounded-t-full relative overflow-hidden flex items-center justify-center p-6 border border-white/5">
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-t-[500px]">
                            <motion.span
                                className="text-[120px] font-serif uppercase select-none tracking-tighter opacity-20 pointer-events-none"
                                style={{ color: work.themeColor }}
                            >
                                {work.god[0]}
                            </motion.span>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
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

const NavIndicator = ({ i, work, progress }: { i: number, work: typeof WORKS[0], progress: MotionValue<number> }) => {
    const start = i / WORKS.length;
    const end = (i + 1) / WORKS.length;

    const width = useTransform(progress, [start, start + 0.1, end - 0.1, end], ["12px", "40px", "40px", "12px"]);
    const backgroundColor = useTransform(progress, [start, start + 0.1, end - 0.1, end], ["rgba(255,255,255,0.1)", work.themeColor, work.themeColor, "rgba(255,255,255,0.1)"]);

    return (
        <motion.div
            style={{ width, backgroundColor }}
            className="h-[1px] rounded-full transition-all duration-300"
        />
    );
};

export default function Work() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    return (
        <section
            ref={sectionRef}
            className="relative h-[600vh] w-full bg-black text-[#d4cdbc] overflow-visible border-y border-white/5"
        >
            <div className="sticky top-0 left-0 h-screen w-full flex items-center justify-center z-10">
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
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-12 right-12 flex items-center gap-12 z-30 opacity-40">
                    <div className="flex items-center gap-2">
                        {WORKS.map((work, i) => (
                            <NavIndicator key={i} i={i} work={work} progress={scrollYProgress} />
                        ))}
                    </div>
                    <span className="text-[8px] tracking-[0.4em] uppercase italic">Trajectory</span>
                </div>
            </div>
        </section>
    );
}
