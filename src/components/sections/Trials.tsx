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
        label: "Work",
        title: "The Craft",
        view: "work" as ViewState,
        x: "15%",
        y: "80%",
        w: "w-[12vw]",
        h: "aspect-[3/5]",
        origin: "15% 80%",
        Component: WorkView
    },
    {
        id: "II",
        label: "Experience",
        title: "The Odyssey",
        view: "experience" as ViewState,
        x: "42%",
        y: "80%",
        w: "w-[18vw]",
        h: "aspect-[3/5]",
        origin: "42% 80%",
        Component: ExperienceView
    },
    {
        id: "III",
        label: "Projects",
        title: "The Trials",
        view: "projects" as ViewState,
        x: "75%",
        y: "80%",
        w: "w-[28vw]",
        h: "aspect-[3/5]",
        origin: "75% 80%",
        Component: ProjectsView
    },
];

export const Trials: React.FC = () => {
    const [view, setView] = useState<ViewState>("default");
    const [zoomingPortal, setZoomingPortal] = useState<string | null>(null);

    const handlePortalClick = (id: string, targetView: ViewState) => {
        if (view !== "default") return;
        setZoomingPortal(id);

        // Orchestrate the camera move through the gate
        setTimeout(() => {
            setView(targetView);
            setZoomingPortal(null);
        }, 1200);
    };

    const activePortal = PORTALS.find(p => p.id === zoomingPortal);

    return (
        <section className="relative bg-[#0d0c0b] text-[#d4cdbc] min-h-screen overflow-hidden border-t border-white/5 font-serif">

            <AnimatePresence mode="wait">
                {view === "default" ? (
                    <motion.div
                        key="gateway-world"
                        className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12"
                        animate={zoomingPortal ? {
                            scale: 18,
                            opacity: 0,
                            filter: "blur(10px)"
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
                        {/* LEFT: THE GATES OF ASCENSION (High-scale arches) */}
                        <div className="lg:col-span-9 relative flex flex-col justify-between p-12 h-full border-r border-white/5">
                            {/* Top Marker */}
                            <div className="flex justify-between items-start uppercase text-[9px] tracking-[0.6em] opacity-30">
                                <span>Threshold I - III</span>
                                <span>Gateway of Creation</span>
                            </div>

                            {/* The Gates */}
                            <div className="flex items-end justify-between w-full h-[80vh] pt-12">
                                {PORTALS.map((portal) => (
                                    <div
                                        key={portal.id}
                                        onClick={() => handlePortalClick(portal.id, portal.view)}
                                        className={`relative group cursor-pointer ${portal.w} ${portal.h} flex flex-col items-center justify-end`}
                                    >
                                        {/* THE ARCH (Visual Gate) */}
                                        <div className="absolute inset-0 rounded-t-full border border-white/20 group-hover:border-gold-leaf/40 transition-all duration-700 bg-black/40 overflow-hidden">
                                            {/* Preview content visible inside the gate */}
                                            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity flex items-center justify-center scale-50">
                                                <div className="w-[100vw] h-[100vh]">
                                                    <portal.Component onBack={() => { }} />
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-transparent to-transparent opacity-60" />
                                        </div>

                                        {/* Gate ID & Label */}
                                        <div className="relative z-10 text-center pb-8 flex flex-col items-center gap-4 transition-transform duration-700 group-hover:-translate-y-4">
                                            <span className="text-[10px] tracking-[0.8em] uppercase opacity-40 group-hover:text-gold-leaf group-hover:opacity-100 transition-all">
                                                {portal.label}
                                            </span>
                                            <div className="w-px h-12 bg-white/10 group-hover:h-20 group-hover:bg-gold-leaf/40 transition-all duration-700" />
                                            <span className="text-xl md:text-2xl italic opacity-10 group-hover:opacity-60 transition-opacity">
                                                {portal.id}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Marker */}
                            <div className="flex justify-between items-end text-[8px] tracking-[1em] uppercase opacity-20">
                                <span>The Descent Begins</span>
                                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">✦</div>
                            </div>
                        </div>

                        {/* RIGHT: THE EDITORIAL SIDEBAR (Matching reference image) */}
                        <div className="lg:col-span-3 h-full bg-[#0a0a0a] border-l border-white/10 p-10 flex flex-col justify-between relative">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="w-8 h-[1px] bg-gold-leaf/60" />
                                    <h2 className="text-2xl md:text-3xl font-serif italic gold-text tracking-tight uppercase leading-none">
                                        The <br /> Chronicles
                                    </h2>
                                </div>

                                {/* Justified Editorial Text */}
                                <div className="space-y-8">
                                    <p className="text-[11px] leading-relaxed text-justify text-[#d4cdbc]/50 font-light opacity-80 hyphens-auto uppercase tracking-wider">
                                        In the architecture of our world, we found structure resisting its own weight.
                                        The systems of old were bound by legacy gravity, collapsing into noise.
                                        We forged order through a stateless, divine architecture,
                                        balancing the structural with the ethereal. Every pixel was a trial,
                                        every line of code a vow to clarity.
                                    </p>
                                    <p className="text-[11px] leading-relaxed text-justify text-[#d4cdbc]/50 font-light opacity-80 hyphens-auto uppercase tracking-wider">
                                        The craftsman does not merely build; he listens to the silence between the stones.
                                        Here, in the heart of the forge, we learned that silence is the highest form of order.
                                        The work survives not because it is loud, but because it is true.
                                    </p>
                                </div>
                            </div>

                            {/* Decorative marker at bottom like reference */}
                            <div className="mt-auto flex justify-end">
                                <div className="w-12 h-12 rounded-full border border-gold-leaf/10 flex items-center justify-center text-[10px] opacity-20">
                                    03
                                </div>
                            </div>

                            {/* Grainy Texture Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        </div>
                    </motion.div>
                ) : (
                    <div key="active-stage" className="fixed inset-0 z-[200]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={view}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
