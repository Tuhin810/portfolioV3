"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectsViewProps {
    onBack: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onBack }) => {
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
                    <span>Chapter III</span>
                    <button
                        onClick={onBack}
                        className="hover:text-gold-leaf transition-colors cursor-pointer"
                    >
                        ← Return to Gates
                    </button>
                    <span>Manifest MMXXVI</span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12">
                    <span className="font-serif text-xs tracking-[1em] uppercase text-gold-leaf/60">Final Resolution</span>
                    <h1 className="text-6xl md:text-9xl font-serif italic gold-text">The Trials</h1>
                    <p className="max-w-2xl font-serif text-lg md:text-xl leading-relaxed opacity-60 italic">
                        "The manifestations of order. Here, the sketches become sanctuary."
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-24">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-[3/4] border border-white/5 bg-white/[0.02] rounded-t-full flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                                <span className="font-serif text-[10px] tracking-[1em] opacity-20 uppercase">Trial 0{i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
