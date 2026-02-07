"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
    Send,
    Globe,
    X,
    Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ----------------------------------
   SMALL UTILS
----------------------------------- */

const RomanNumeral = ({ value, className = "" }: { value: string; className?: string }) => (
    <span className={`font-serif text-[10px] tracking-[0.3em] text-[#cda56e]/40 ${className}`}>
        {value}
    </span>
);

/* ----------------------------------
   AMBIENT PARTICLES (SCREENSAVER FEEL)
----------------------------------- */

const AmbientParticles = ({ count = 10 }: { count?: number }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {Array.from({ length: count }).map((_, i) => {
                const size = Math.random() * 120 + 60;
                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-[#cda56e]/15 bg-[#cda56e]/5 backdrop-blur-2xl"
                        style={{
                            width: size,
                            height: size,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 40, -30, 0],
                            y: [0, -50, 30, 0],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 30 + 30,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
};

/* ----------------------------------
   MAIN COMPONENT
----------------------------------- */

export const Offering: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    /* Lock scroll + ESC close */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";

        const esc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", esc);
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", esc);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    {/* BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                    />

                    {/* MODAL */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ type: "spring", damping: 28, stiffness: 180 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c0c0c] border border-[#cda56e]/20 shadow-[0_0_120px_rgba(205,165,110,0.12)] overflow-hidden"
                    >
                        {/* AMBIENCE */}
                        <AmbientParticles />

                        {/* FRAME LINES */}
                        <div className="absolute top-12 bottom-12 left-0 right-0 border-t border-b border-[#cda56e]/10 pointer-events-none z-20" />
                        <div className="absolute left-10 right-10 top-0 bottom-0 border-l border-r border-[#cda56e]/10 pointer-events-none z-20" />

                        {/* CLOSE */}
                        <motion.button
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#cda56e]/10 text-[#cda56e] hover:bg-[#cda56e] hover:text-black transition-all duration-500"
                        >
                            <X size={18} />
                        </motion.button>

                        {/* CONTENT: BOOK COVER LAYOUT */}
                        <div className="relative z-10 flex flex-col h-full select-none">

                            {/* TOP BANNER */}
                            <div className="h-12 flex items-center justify-between px-6 border-b border-[#cda56e]/10">
                                <div className="flex gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full border border-[#cda56e]/40" />
                                    <Sparkles size={8} className="text-[#cda56e]/40" />
                                </div>
                                <h1 className="font-serif text-lg tracking-[0.4em] text-[#cda56e] uppercase">Offeren</h1>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full border border-[#cda56e]/20" />
                                    <div className="w-3 h-3 rounded-full border border-[#cda56e]/20 -ml-1.5" />
                                </div>
                            </div>

                            <div className="flex flex-1 min-h-0">
                                {/* LEFT MARGIN: VERTICAL TEXT */}
                                <div className="w-10 border-r border-[#cda56e]/10 flex items-center justify-center">
                                    <span className="[writing-mode:vertical-rl] rotate-180 font-serif text-[10px] tracking-[0.5em] text-[#cda56e]/30 uppercase">The Archive of Whispers</span>
                                </div>

                                {/* MAIN BODY CONTAINER */}
                                <div className="flex-1 relative overflow-y-auto custom-scrollbar p-6 md:p-10">

                                    {/* OVAL QUOTE BUBBLE */}
                                    <div className="absolute top-4 left-4 w-40 p-3 rounded-[100%] border border-[#cda56e]/20 text-center">
                                        <p className="font-serif text-[8px] italic leading-tight text-white/40">
                                            "And perhaps it is the greater grief, after all, to be left on earth when another is gone."
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                                        {/* FORM SIDE */}
                                        <div className="space-y-8">
                                            <div>
                                                <h2 className="text-4xl md:text-5xl font-serif text-white leading-none">
                                                    Initiate <br />
                                                    <span className="text-[#cda56e]">Communion.</span>
                                                </h2>
                                            </div>

                                            <form className="space-y-6">
                                                <div>
                                                    <label className="text-[9px] tracking-[0.4em] uppercase text-[#cda56e]/40 font-bold">The Oracle (Email)</label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your electronic essence..."
                                                        className="w-full bg-transparent border-b border-[#cda56e]/20 py-2 font-serif text-base text-white placeholder:text-white/10 focus:outline-none focus:border-[#cda56e] transition-all duration-700"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] tracking-[0.4em] uppercase text-[#cda56e]/40 font-bold">The Prophecy (Message)</label>
                                                    <textarea
                                                        rows={1}
                                                        placeholder="Speak your truth..."
                                                        className="w-full bg-transparent border-b border-[#cda56e]/20 py-2 font-serif text-base text-white placeholder:text-white/10 focus:outline-none focus:border-[#cda56e] transition-all duration-700 resize-none"
                                                    />
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="relative overflow-hidden w-full flex items-center justify-center gap-4 py-4 bg-[#cda56e] text-black font-serif tracking-[0.3em] uppercase text-xs font-bold"
                                                >
                                                    <span>Ignite Connection</span>
                                                    <Send size={14} />
                                                </motion.button>
                                            </form>
                                        </div>

                                        {/* RELIC SIDE WITH STARBURST */}
                                        <div className="relative flex justify-center pt-8">
                                            {/* LARGE DECORATIVE STARBURST (TOP RIGHT) */}
                                            <div className="absolute -top-4 -right-4 w-28 h-28 pointer-events-none z-20">
                                                <svg viewBox="0 0 100 100" className="w-full h-full text-[#cda56e]/30 fill-none stroke-current stroke-[0.5]">
                                                    {Array.from({ length: 16 }).map((_, i) => (
                                                        <line key={i} x1="50" y1="50" x2={50 + 45 * Math.cos((i * Math.PI) / 8)} y2={50 + 45 * Math.sin((i * Math.PI) / 8)} />
                                                    ))}
                                                </svg>
                                            </div>

                                            {/* THE OVAL FRAME (CLASSICAL ARCH) */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="relative w-[280px] aspect-[4/5] rounded-t-full border border-[#cda56e]/20 overflow-hidden bg-[#111]"
                                            >
                                                <Image
                                                    src="/hermes.png"
                                                    alt="Hermes"
                                                    fill
                                                    className="object-cover sepia-[0.3] brightness-75 hover:brightness-100 transition-all duration-[3s]"
                                                />

                                                {/* SCANLINE */}
                                                <motion.div
                                                    animate={{ y: ["-100%", "300%"] }}
                                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-x-0 h-px bg-[#cda56e]/40 shadow-[0_0_12px_#cda56e]"
                                                />
                                            </motion.div>

                                            {/* BOTTOM BUBBLE DECOR */}
                                            <div className="absolute -bottom-6 right-0 flex gap-2">
                                                <Sparkles size={12} className="text-[#cda56e]/20" />
                                                <div className="w-4 h-4 rounded-full border border-[#cda56e]/10 flex items-center justify-center">
                                                    <div className="w-1 h-1 rounded-full bg-[#cda56e]/40" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* LOWER QUOTE TEXT */}
                                    <div className="mt-16 text-center max-w-lg mx-auto">
                                        <p className="font-serif text-[9px] tracking-[0.1em] leading-relaxed text-[#cda56e]/40 uppercase">
                                            "I could recognize him by touch alone, by smell; I would know him blind, by the way his breaths came and his feet struck the earth. I would know him in death, at the end of the world."
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT MARGIN: VERTICAL TEXT */}
                                <div className="w-10 border-l border-[#cda56e]/10 flex items-center justify-center">
                                    <span className="[writing-mode:vertical-rl] font-serif text-[10px] tracking-[0.5em] text-[#cda56e]/30 uppercase">Divine Messenger</span>
                                </div>
                            </div>

                            {/* BOTTOM BANNER */}
                            <div className="h-12 flex items-center justify-center border-t border-[#cda56e]/10">
                                <span className="font-serif text-sm tracking-[0.8em] text-[#cda56e]/60 uppercase ml-8">Tuhin ठाकुर</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
