"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { EditorialSidebar } from "@/components/shared/EditorialSidebar";
import { AboutView } from "@/components/views/AboutView";
import { SkillsView } from "@/components/views/SkillsView";
import { ExperienceView } from "@/components/views/ExperienceView";

type ViewState = "default" | "about" | "skills" | "experience";

const PORTALS = [
    {
        id: "I",
        years: "2023 - 2024",
        designation: "Fullstack Developer",
        label: "The Origin",
        title: "About Me",
        view: "about" as ViewState,
        cover: "/gate1.png",
        logo: "/logos/aeonix.png",
        logoClassName: "",
        origin: "20% 70%",
        size: "w-[20vw] max-w-[260px]",
    },
    {
        id: "II",
        years: "2024 - 2025",
        designation: "Team Lead",
        label: "The Armory",
        title: "Skills",
        view: "skills" as ViewState,
        cover: "/gate2.png",
        logo: "/logos/scriptures.svg",
        logoClassName: "brightness-0 invert",
        origin: "50% 70%",
        size: "w-[26vw] max-w-[340px]",
    },
    {
        id: "III",
        years: "2025 - 2026",
        designation: "Product Engineer",
        label: "The Odyssey",
        title: "Experience",
        view: "experience" as ViewState,
        cover: "/gate3.png",
        logo: "/logos/kwad.png",
        logoClassName: "brightness-0 invert",
        origin: "80% 70%",
        size: "w-[32vw] max-w-[420px]",
    },
];

const ZOOM_MS = 900;

// Doors arrive one after another, sliding in from the left
const ARCH_ROW = {
    hidden: {},
    shown: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

const ARCH = {
    hidden: { opacity: 0, x: -80 },
    shown: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};
const EASE = [0.22, 1, 0.36, 1] as const;

// Angel that falls down when Trials arrives in view, then gently floats
const FallingAngel = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.35 });
    const [landed, setLanded] = useState(false);

    return (
        <div
            ref={ref}
            className="absolute top-6 left-6 md:top-8 md:left-10 z-20 w-28 sm:w-36 md:w-68 pointer-events-none select-none"
        >
            <motion.div
                initial={{ y: -260, opacity: 0 }}
                animate={
                    isInView
                        ? landed
                            ? { y: [0, -10, 0], opacity: 0.85 }
                            : { y: 0, opacity: 0.85 }
                        : { y: -260, opacity: 0 }
                }
                transition={
                    landed
                        ? {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                        : {
                            duration: 1.8,
                            ease: [0.19, 1, 0.22, 1], // Smooth natural gravity descent
                            delay: 0.1,
                        }
                }
                onAnimationComplete={() => {
                    if (isInView && !landed) {
                        setLanded(true);
                    }
                }}
            >
                <Image
                    src="/design/fall1.png"
                    alt="The Fall"
                    width={1580}
                    height={1850}
                    priority
                    className="w-full h-auto opacit object-contain drop-shadow-[0_0_35px_rgba(197,160,40,0.22)]"
                />
                <Image
                    src="/design/fall.png"
                    alt="The Fall"
                    width={1580}
                    height={1850}
                    priority
                    className="w-full h-auto -mt-68 opacity-50 opacit object-contain drop-shadow-[0_0_35px_rgba(197,160,40,0.22)]"
                />
            </motion.div>
        </div>
    );
};

export const Trials: React.FC = () => {
    const [view, setView] = useState<ViewState>("default");
    const [zoomingPortal, setZoomingPortal] = useState<string | null>(null);

    const handlePortalClick = (id: string, targetView: ViewState) => {
        if (view !== "default" || zoomingPortal) return;
        setZoomingPortal(id);

        setTimeout(() => {
            setView(targetView);
            setZoomingPortal(null);
        }, ZOOM_MS);
    };

    const activePortal = PORTALS.find(p => p.id === zoomingPortal);

    return (
        <section className="relative bg-gradient-to-b from-background to-black text-[#d4cdbc] min-h-screen overflow-hidden bordey border-white/5 font-serif select-none">

            <AnimatePresence mode="wait">
                {view === "default" ? (
                    <motion.div
                        key="gateway-world"
                        className="w-full h-screen flex overflow-hidden"
                        animate={zoomingPortal
                            ? { scale: 1.6, opacity: 0 }
                            : { scale: 1, opacity: 1 }}
                        transition={{ duration: ZOOM_MS / 1000, ease: EASE }}
                        style={{ transformOrigin: activePortal?.origin ?? "50% 50%" }}
                    >


                        {/* LEFT: THE GATES */}
                        <div className="flex-1 relative flex flex-col justify-between p-8 md:p-14 pb-0 md:pb-0 h-full border-l border-white/5">

                            {/* Top Left Corner: Golden Angel that falls on arrival then floats */}
                            <FallingAngel />

                            {/* Arches */}
                            <motion.div
                                variants={ARCH_ROW}
                                initial="hidden"
                                whileInView="shown"
                                viewport={{ once: true, amount: 0.4 }}
                                className="flex-1 flex items-end justify-center w-full max-w-6xl mx-auto gap-6 md:gap-12"
                            >
                                {PORTALS.map((portal) => (
                                    <motion.button
                                        variants={ARCH}
                                        type="button"
                                        key={portal.id}
                                        aria-label={portal.title}
                                        className={`group relative ${portal.size} flex flex-col items-center focus:outline-none`}
                                    >
                                        {/* THE ARCH */}
                                        <div className="relative w-full aspect-[2/3] rounded-t-full overflow-hidden bg-[#0a0a0a] border border-white/[0.07] transition-colors duration-500 group-hover:border-gold-leaf/40">
                                            <Image
                                                src={portal.cover}
                                                alt=""
                                                fill
                                                sizes="(max-width: 768px) 33vw, 420px"
                                                className="object-cover opacity-50 blur-0 transition-[opacity,filter] duration-500 ease-out group-hover:opacity-40 group-hover:blur-[6px]"
                                            />

                                            {/* Base fade */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-[#0d0c0b]/20 to-transparent" />

                                            {/* Center Logo on Hover — completely unblurred on z-30 above the blurred background */}
                                            <div className="absolute inset-0 flex items-center justify-center p-6 z-30 pointer-events-none">
                                                <div className="w-full max-w-[170px] h-16 sm:h-20 flex items-center justify-center opacity-0 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                                                    <img
                                                        src={portal.logo}
                                                        alt={portal.title}
                                                        className={`max-w-full max-h-full object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] ${portal.logoClassName}`}
                                                    />
                                                </div>
                                            </div>

                                            {/* Numeral / Years & Designation on Hover */}
                                            <div className="absolute inset-x-0 bottom-6 sm:bottom-8 flex flex-col items-center gap-2 sm:gap-3 z-30 pointer-events-none px-2">
                                                <div className="w-px h-5 sm:h-6 bg-gold-leaf/25 group-hover:bg-gold-leaf/50 transition-colors duration-500" />
                                                <div className="relative h-12 sm:h-16 flex items-center justify-center">
                                                    {/* Default: Roman numeral */}
                                                    <span className="text-2xl sm:text-3xl text-gold-leaf/40 tracking-widest transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2 group-hover:scale-90 absolute">
                                                        {portal.id}
                                                    </span>
                                                    {/* Hover: Designation & Year range in normal font (Bigger) */}
                                                    <div className="flex flex-col items-center gap-1 font-sans transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap text-center">
                                                        <span className="text-sm sm:text-lg md:text-xl font-medium text-white tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                                                            {portal.designation}
                                                        </span>
                                                        <span className="text-xs sm:text-sm md:text-base font-normal text-white/70 tracking-wider">
                                                            {portal.years}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </motion.button>
                                ))}
                            </motion.div>


                        </div>

                        {/* RIGHT: SIDEBAR */}
                        <EditorialSidebar
                            title="TRIALS"
                            mainImage="/piller.png"
                            topImage="/start.png"
                            showMoon={false}
                            showMoscowPill={true}
                            rotation={0}
                            layout="title-first"
                            className=""
                        />
                    </motion.div>
                ) : (
                    <div key="active-stage" className="fixed inset-0 z-[200]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={view}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.6, ease: EASE }}
                                className="w-full h-full"
                            >
                                {view === "about" && <AboutView onBack={() => setView("default")} />}
                                {view === "skills" && <SkillsView onBack={() => setView("default")} />}
                                {view === "experience" && <ExperienceView onBack={() => setView("default")} />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
