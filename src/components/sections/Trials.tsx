"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { EditorialSidebar } from "@/components/shared/EditorialSidebar";
import { AboutView } from "@/components/views/AboutView";
import { SkillsView } from "@/components/views/SkillsView";
import { ExperienceView } from "@/components/views/ExperienceView";

type ViewState = "default" | "about" | "skills" | "experience";

const PORTALS = [
    // {
    //     id: "I",
    //     label: "The Origin",
    //     title: "About Me",
    //     view: "about" as ViewState,
    //     cover: "/gate1.png",
    //     origin: "20% 70%",
    //     size: "w-[20vw] max-w-[260px]",
    // },
    {
        id: "II",
        label: "The Armory",
        title: "Skills",
        view: "skills" as ViewState,
        cover: "/gate2.png",
        origin: "50% 70%",
        size: "w-[26vw] max-w-[340px]",
    },
    {
        id: "III",
        label: "The Odyssey",
        title: "Experience",
        view: "experience" as ViewState,
        cover: "/gate3.png",
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
                        {/* LEFT: THE GATES */}
                        <div className="flex-1 relative flex flex-col justify-between p-8 md:p-14 pb-0 md:pb-0 h-full border-l border-white/5">


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
                                        onClick={() => handlePortalClick(portal.id, portal.view)}
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

                                            {/* Numeral */}
                                            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3">
                                                <div className="w-px h-6 bg-gold-leaf/25" />
                                                <span className="text-2xl  text-gold-leaf/35 transition-colors duration-500 group-hover:text-gold-leaf/70">
                                                    {portal.id}
                                                </span>
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
