"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WorkView } from "@/components/views/WorkView";
import { ExperienceView } from "@/components/views/ExperienceView";
import { ProjectsView } from "@/components/views/ProjectsView";

type ViewState = "default" | "work" | "experience" | "projects";

const PORTALS = [
    {
        id: "I",
        label: "The Forge",
        title: "Work",
        view: "work" as ViewState,
        cover: "/gate1.png",
        x: "15%",
        y: "85%",
        w: "w-[16vw]",
        max_w: "max-w-[210px]",
        h: "aspect-[2/3]",
        origin: "15% 80%",
        Component: WorkView
    },
    {
        id: "II",
        label: "The Odyssey",
        title: "Experience",
        view: "experience" as ViewState,
        cover: "/gate2.png",
        x: "42%",
        y: "85%",
        w: "w-[20vw]",
        max_w: "max-w-[280px]",
        h: "aspect-[2/3]",
        origin: "42% 80%",
        Component: ExperienceView
    },
    {
        id: "III",
        label: "The Trials",
        title: "Projects",
        view: "projects" as ViewState,
        cover: "/gate3.png",
        x: "75%",
        y: "85%",
        w: "w-[28vw]",
        max_w: "max-w-[360px]",
        h: "aspect-[2/3]",
        origin: "75% 80%",
        Component: ProjectsView
    },
];

const TrialsSidebar = () => (
    <div className="hidden lg:flex flex-col w-[300px] border border-white/10 bg-black/40 backdrop-blur-sm self-stretch overflow-hidden h-screen relative">
        <div className="grid grid-cols-[1fr_2.5fr] h-full">


            {/* Right Column */}
            <div className="flex flex-col relative h-full">
                <div className="h-48 border-b border-white/10 flex items-center justify-center bg-black/10 ">
                    <img src="/start.png" alt="" className="w-full h-full object-cover" />
                </div>
                {/* Vertical Text Area */}
                <div className="flex-1 flex items-center justify-center py-12">
                    <h2 className="text-[120px] font-serif text-[#ece4d9]/50 uppercase tracking-tighter [writing-mode:vertical-rl] rotate-0 select-none">
                        TRIALS
                    </h2>
                </div>

                {/* Moscow Pill - Positioned relative to the right edge */}
                <div className="absolute top-[55%] -right-5 translate-x-1/2 -rotate-90">
                    <div className="px-10 py-2 border border-white/10 rounded-full bg-black/80 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                        <span className="text-[11px] tracking-[0.6em] uppercase text-[#d4d4d4] font-medium">Moscow</span>
                    </div>
                </div>

                {/* Moon Square at bottom */}

            </div>
            {/* Left Column */}
            <div className="flex flex-col border-l border-white/10 h-full">
                <div className="p-4 border-b border-white/10 h-32 flex flex-col justify-end">
                    <p className="text-[10px] text-[#d4cdbc]/40 uppercase leading-tight tracking-[0.2em] font-sans">
                        System.<br />
                        Archive.<br />
                        Vol.03
                    </p>
                </div>

                <div className="flex-1 border-b border-white/10 relative group overflow-hidden bg-black/40 min-h-[300px]">
                    <div className="absolute inset-0 opacity-20 grayscale transition-all duration-1000 group-hover:opacity-40 group-hover:scale-110">
                        <img
                            src="/gate3.png"
                            alt="Sidebar Decoration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                <div className="p-4 h-40 flex flex-col justify-start">
                    <p className="text-[10px] text-[#d4cdbc]/40 uppercase leading-tight tracking-[0.2em] font-sans">
                        Temporal.<br />
                        Entity.<br />
                        Fragment
                    </p>
                </div>
            </div>
        </div>

        {/* Aesthetic vertical edge line */}
        <div className="absolute top-0 left-2 w-[1px] h-full bg-white/5" />
    </div>
);

export const Trials: React.FC = () => {
    const [view, setView] = useState<ViewState>("default");
    const [zoomingPortal, setZoomingPortal] = useState<string | null>(null);

    const handlePortalClick = (id: string, targetView: ViewState) => {
        if (view !== "default") return;
        setZoomingPortal(id);

        setTimeout(() => {
            setView(targetView);
            setZoomingPortal(null);
        }, 1200);
    };

    const activePortal = PORTALS.find(p => p.id === zoomingPortal);

    return (
        <section className="relative bg-[#0d0c0b] text-[#d4cdbc] min-h-screen overflow-hidden border-t border-white/5 font-serif select-none">

            <AnimatePresence mode="wait">
                {view === "default" ? (
                    <motion.div
                        key="gateway-world"
                        className="w-full h-screen flex overflow-hidden"
                        animate={zoomingPortal ? {
                            scale: 18,
                            opacity: 0,
                            filter: "blur(5px)"
                        } : {
                            scale: 1,
                            opacity: 1,
                            filter: "blur(0px)"
                        }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            transformOrigin: activePortal?.origin || "50% 50%",
                        }}
                    >
                        {/* LEFT: THE GATES OF OLYMPUS */}
                        <div className="flex-1 relative flex flex-col justify-between p-8 md:p-14 h-full border-l border-white/5">
                            {/* Header */}
                            <div className="flex justify-between items-start uppercase text-[10px] tracking-[0.8em] opacity-30">
                                <div className="flex items-center gap-3">
                                    <span className="text-gold-leaf">✦</span>
                                    <span>Sacred Thresholds</span>
                                </div>
                                <span className="italic tracking-[0.2em]">Fragment I - III</span>
                            </div>

                            {/* Arches Interaction Area */}
                            <div className="flex-1 flex items-end justify-between w-full max-w-7xl mx-auto pb-12 pt-0 px-4 -mb-10 gap-10">
                                {PORTALS.map((portal) => (
                                    <div
                                        key={portal.id}
                                        onClick={() => handlePortalClick(portal.id, portal.view)}
                                        className={`relative group cursor-pointer ${portal.w} ${portal.max_w} ${portal.h} flex flex-col items-center justify-end`}
                                    >
                                        {/* THE ARCH STRUCTURE */}
                                        <div className="absolute inset-0 rounded-t-full border border-[#d4cdbc]/10 group-hover:border-gold-leaf/60 transition-all duration-1000 bg-[#0a0a0a] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">

                                            {/* 1. LAYER: INTERNAL VIEW (Pre-rendered Room) */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-all duration-1000 scale-150 group-hover:scale-100 filter blur-md group-hover:blur-none">
                                                <div className="w-[100vw] h-[100vh] origin-top">
                                                    <portal.Component onBack={() => { }} />
                                                </div>
                                            </div>

                                            {/* 2. LAYER: THE BANNER COVER (Sketches) */}
                                            <div className="absolute inset-0 transition-opacity duration-1000 group-hover:opacity-0 flex items-center justify-center">
                                                <img
                                                    src={portal.cover}
                                                    alt="Cover"
                                                    className="w-full h-full object-cover opacity-40 grayscale-0 group-hover:scale-110 transition-transform duration-[3s]"
                                                />
                                                {/* Threshold Banner Label */}
                                                <div className="absolute bottom-16 flex flex-col items-center gap-3">
                                                    <div className="w-px h-8 bg-gold-leaf/30" />
                                                    <span className="text-[9px] tracking-[0.6em] uppercase text-gold-leaf/60">Threshold</span>
                                                    <h4 className="text-3xl font-serif italic text-gold-leaf/40">{portal.id}</h4>
                                                </div>
                                            </div>

                                            {/* Architectural Overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-transparent to-transparent opacity-90" />
                                            <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-t-full pointer-events-none" />
                                        </div>

                                        {/* HOVER LABELS */}
                                        <div className="relative z-10 text-center pb-8 flex flex-col items-center gap-6 transition-all duration-1000 group-hover:-translate-y-6">
                                            <div className="flex flex-col items-center gap-3">
                                                <span className="text-[10px] tracking-[0.8em] uppercase text-gold-leaf/40 opacity-0 group-hover:opacity-100 group-hover:text-gold-leaf transition-all duration-700">
                                                    {portal.label}
                                                </span>
                                                <span className="text-lg md:text-2xl font-medium tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100">
                                                    {portal.title}
                                                </span>
                                            </div>

                                            <div className="w-px h-16 bg-gradient-to-down from-gold-leaf/40 to-transparent group-hover:h-24 transition-all duration-1000 opacity-20" />
                                        </div>

                                        {/* Flourish */}
                                        <div className="absolute -bottom-2 -left-2 text-[10px] text-gold-leaf/10 group-hover:text-gold-leaf group-hover:rotate-45 transition-all duration-700">✦</div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Marker */}
                            <div className="flex justify-between items-end text-[10px] tracking-[0.8em] uppercase opacity-30 mt-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-px bg-white/10" />
                                    <span>Fragment {zoomingPortal || "0"}</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span>Archiving Order</span>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px]">
                                        0{zoomingPortal ? (zoomingPortal === "I" ? 1 : zoomingPortal === "II" ? 2 : 3) : 0}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: THE TRIALS SIDEBAR */}
                        <TrialsSidebar />
                    </motion.div>
                ) : (
                    <div key="active-stage" className="fixed inset-0 z-[200]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={view}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(40px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "blur(40px)" }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full"
                            >
                                {view === "work" && <WorkView onBack={() => setView("default")} />}
                                {view === "experience" && <ExperienceView onBack={() => setView("default")} />}
                                {view === "projects" && <ProjectsView onBack={() => setView("default")} />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
