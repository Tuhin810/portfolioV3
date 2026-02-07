"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const FibonacciCorner = ({ className, rotation = 0 }: { className: string, rotation?: number }) => (
    <div className={`absolute w-16 h-16 md:w-24 md:h-24 pointer-events-none z-0 ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
        <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <!-- Outer corner --> */}
            <path
                d="M0 80 V20 C0 9 9 0 20 0 H80"
                stroke="white"
                stroke-width="1"
            />

            {/* <!-- Inner square marker --> */}
            <rect
                x="18"
                y="18"
                width="10"
                height="10"
                fill="none"
                stroke="white"
                stroke-width="1"
            />
        </svg>
    </div>
);


const WorkSidebar = () => (
    <div className="hidden xl:flex flex-col w-[300px] border-r border-t border-b border-white/10 bg-black/40 backdrop-blur-sm self-stretch
      overflow-hidden   h-screen">
        <div className="grid grid-cols-[1fr_2.5fr] h-full">
            {/* <div className="absolute top-[55%] -right-16 translate-x-1 -rotate-90">
                <div className="px-10 py-2 border border-white/10 rounded-full bg-black/80 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                    <span className="text-[11px] tracking-[0.6em] uppercase text-[#d4d4d4] font-medium">Moscow</span>
                </div>
            </div> */}
            {/* Left Column */}
            <div className="flex flex-col border-r border-white/10 h-full">
                <div className="p-4 border-b border-white/10 h-32 flex flex-col justify-end">
                    <p className="text-[10px] text-white/20 uppercase leading-tight tracking-[0.2em] font-sans">
                        System.<br />
                        Archive.<br />
                        Vol.03
                    </p>
                </div>

                <div className="flex-1 border-b border-white/10 relative group overflow-hidden bg-black/40 min-h-[300px]">
                    <div className="absolute inset-0 opacity-20 grayscale transition-all duration-1000 group-hover:opacity-40 group-hover:scale-110">
                        <img
                            src="/gate1.png"
                            alt="Sidebar Decoration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                <div className="p-4 h-32 flex flex-col justify-start">
                    <p className="text-[10px] text-white/20 uppercase leading-tight tracking-[0.2em] font-sans">
                        Temporal.<br />
                        Entity.<br />
                        Fragment
                    </p>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col relative h-full">
                {/* Vertical Text Area */}
                <div className="flex-1 flex items-center justify-center py-12">
                    <h2 className="text-[120px] font- text-[#ece4d9]/50 uppercase tracking-tighter [writing-mode:vertical-rl] rotate-180 select-none">
                        WORK
                    </h2>
                </div>

                {/* Moscow Pill - Positioned relative to the right edge */}


                {/* Moon Square at bottom */}
                <div className="h-48 border-t border-white/10 flex items-center justify-center bg-black/10 p-4">
                    <div className="relative w-28 h-28 group">
                        <motion.div
                            initial={{ rotate: -15 }}
                            animate={{ rotate: 15 }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                            className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-2"
                        >
                            <div className="w-full h-full rounded-full bg-black overflow-hidden relative border border-white/10">
                                {/* First Quarter Moon Effect */}
                                <div className="absolute inset-0 left-1/2 bg-[#d4d4d4]" />
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </div>

        {/* Aesthetic vertical edge line */}
        <div className="absolute top-0 right-2 w-[1px] h-full bg-white/5" />
    </div>
);


export default function Work() {

    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const scrollLeft = containerRef.current.scrollLeft;
        const width = containerRef.current.offsetWidth;
        const index = Math.round(scrollLeft / width);
        if (index !== activeIndex && index >= 0 && index < WORKS.length) {
            setActiveIndex(index);
        }
    };

    const activeTheme = WORKS[activeIndex].themeColor;

    return (
        <section className="bg-[#0d0c0b] text-[#d4cdbc] min-h-screen overflow-hidden border-t border-white/5 font-serif select-none">
            <div className="relative z-10 w-full flex items-center gap-12">
                {/* DECORATIVE SIDEBAR COMPONENT */}
                <WorkSidebar />

                <div className="flex-1 w-full overflow-hidden">
                    <div className="relative w-full">


                        {/* HORIZONTAL EXHIBIT CONTAINER */}
                        <div
                            ref={containerRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-20"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {WORKS.map((work, index) => (
                                <div
                                    key={work.id}
                                    className="min-w-full snap-start flex flex-col lg:flex-row items-center px-6 md:px-12 gap-16 lg:gap-32"
                                >
                                    {/* CLASSICAL ARCHED CONTAINER */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative w-full lg:w-[40%] aspect-[4/5] max-w-md group"
                                    >
                                        <motion.div
                                            className="absolute inset-0 border p-4 rounded-t-full transition-colors duration-1000"
                                            animate={{ borderColor: activeIndex === index ? `${work.themeColor}44` : 'rgba(255,255,255,0.1)' }}
                                        >
                                            <div className="w-full h-full bg-marble-gray/30 rounded-t-full relative overflow-hidden flex items-center justify-center p-8">
                                                <div className="absolute inset-0 bg-marble-gray/20 mix-blend-overlay opacity-30 bg-[url('https://www.transparenttextures.com/patterns/granite.png')]" />

                                                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-t-[500px]">
                                                    <motion.span
                                                        className="text-[8vw] font-serif uppercase select-none tracking-tighter group-hover:scale-110 transition-transform duration-1000"
                                                        animate={{ color: activeIndex === index ? `${work.themeColor}22` : 'rgba(255,255,255,0.03)' }}
                                                    >
                                                        {work.god}
                                                    </motion.span>
                                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2"
                                            animate={{ borderColor: activeIndex === index ? work.themeColor : 'rgba(255,255,255,0.2)' }}
                                        />
                                        <motion.div
                                            className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2"
                                            animate={{ borderColor: activeIndex === index ? work.themeColor : 'rgba(255,255,255,0.2)' }}
                                        />
                                    </motion.div>

                                    {/* TEXT CONTENT */}
                                    <div className="w-full lg:w-[50%] max-w-xl space-y-10">
                                        <motion.div
                                            initial={{ opacity: 0, x: 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: 0.1 }}
                                        >

                                            <h3 className="text-5xl  lg:text-6xl font- tracking-tighter uppercase leading-[0.85] mb-6">
                                                {work.title}
                                            </h3>
                                        </motion.div>

                                        <motion.p
                                            initial={{ opacity: 0, x: 40 }}
                                            whileInView={{ opacity: 0.5, x: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="text-lg md:text-xl font-sans font-light leading-relaxed tracking-wide max-w-lg"
                                        >
                                            {work.description}
                                        </motion.p>


                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            <motion.button
                                                className="px-10 py-4 bg-white/[0.02] border border-white/10 transition-all duration-700 uppercase text-[10px] tracking-[0.6em] font-medium"
                                                animate={{
                                                    color: activeIndex === index ? work.themeColor : '#a68b5c',
                                                    borderColor: activeIndex === index ? `${work.themeColor}55` : 'rgba(255,255,255,0.1)'
                                                }}
                                                whileHover={{ backgroundColor: `${work.themeColor}11`, borderColor: work.themeColor }}
                                            >
                                                Inspect Artifact
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* SECTION NAVIGATION */}
                        <div className="px-6 md:px-12 flex justify-between items-center border-t border-white/5 pt-12">
                            <div className="flex gap-4">
                                {WORKS.map((work, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            containerRef.current?.scrollTo({ left: i * containerRef.current.offsetWidth, behavior: 'smooth' });
                                        }}
                                        className="h-[2px] transition-all duration-700"
                                        style={{
                                            width: activeIndex === i ? '80px' : '32px',
                                            backgroundColor: activeIndex === i ? work.themeColor : 'rgba(255,255,255,0.1)'
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-6 opacity-30 h-full">
                                <span className="text-[9px] uppercase tracking-[0.5em] italic">Odyssey {activeIndex + 1} / {WORKS.length}</span>
                                <div className="w-px h-8 bg-white/20" />
                                <span className="text-[9px] uppercase tracking-[0.3em] hidden sm:block">Scroll to Traverse</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes greek-slide {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100px); }
                }
                .animate-greek-slide {
                    animation: greek-slide 20s linear infinite;
                }
            `}</style>
        </section>
    );
}
