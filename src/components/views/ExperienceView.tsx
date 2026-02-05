"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceViewProps {
    onBack: () => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({ onBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-[#0d0c0b] text-[#d4cdbc] p-6 md:p-12 overflow-y-auto flex flex-col"
        >
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-24 uppercase font-serif text-[10px] tracking-[0.5em] opacity-40">
                    <span>Chapter II</span>
                    <button
                        onClick={onBack}
                        className="hover:text-gold-leaf transition-colors cursor-pointer"
                    >
                        ← Return to Gates
                    </button>
                    <span>Timeline MMXXVI</span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12">
                    <span className="font-serif text-xs tracking-[1em] uppercase text-gold-leaf/60">The Journey</span>
                    <h1 className="text-6xl md:text-9xl font-serif italic gold-text">The Odyssey</h1>
                    <p className="max-w-2xl font-serif text-lg md:text-xl leading-relaxed opacity-60 italic">
                        "A path through the storm, where experience is forged in the fires of demand."
                    </p>

                    <div className="w-full max-w-3xl pt-24 space-y-24">
                        <div className="space-y-4">
                            <span className="font-serif text-[10px] tracking-[0.4em] uppercase text-gold-leaf/40">Present Day</span>
                            <h3 className="text-2xl md:text-4xl font-serif italic">Lead Architect of Chaos</h3>
                            <p className="opacity-40 font-serif">Shaping digital monuments for the future world.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            </div>
        </motion.div>
    );
};
