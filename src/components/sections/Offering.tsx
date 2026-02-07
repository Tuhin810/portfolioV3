"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
    Send,
    Globe,
    X,
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
                        className="relative w-full max-w-4xl max-h-[85vh] bg-black border border-[#cda56e]/20 shadow-[0_0_120px_rgba(205,165,110,0.12)]"
                    >
                        {/* AMBIENCE */}
                        <AmbientParticles />

                        {/* FRAME */}
                        <div className="absolute inset-4 md:inset-6 border border-[#cda56e]/10 pointer-events-none z-20" />

                        {/* CLOSE */}
                        <motion.button
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#cda56e]/10 text-[#cda56e] hover:bg-[#cda56e] hover:text-black transition-all duration-500"
                        >
                            <X size={18} />
                        </motion.button>

                        {/* CONTENT */}
                        <div className="relative z-10 px-8 py-10 md:px-12 md:py-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">

                                {/* LEFT — FORM */}
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                                            Initiate <br />
                                            <span className="text-[#cda56e]">Communion.</span>
                                        </h2>
                                        <p className="mt-4 max-w-xs font-serif italic text-white/40 text-sm">
                                            Across the digital aether, your message becomes a relic.
                                        </p>
                                    </div>

                                    <form className="space-y-6">
                                        <div>
                                            <label className="text-[9px] tracking-[0.4em] uppercase text-[#cda56e]/40 font-bold">
                                                The Oracle (Email)
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="w-full bg-transparent border-b border-[#cda56e]/20 py-2 font-serif text-base text-white placeholder:text-white/10 focus:outline-none focus:border-[#cda56e] transition-all duration-700"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-[9px] tracking-[0.4em] uppercase text-[#cda56e]/40 font-bold">
                                                The Prophecy (Message)
                                            </label>
                                            <textarea
                                                rows={1}
                                                placeholder="Speak your truth..."
                                                className="w-full bg-transparent border-b border-[#cda56e]/20 py-2 font-serif text-base text-white placeholder:text-white/10 focus:outline-none focus:border-[#cda56e] transition-all duration-700 resize-none"
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="relative overflow-hidden flex items-center justify-center gap-4 px-10 py-4 bg-[#cda56e] text-black font-serif tracking-[0.3em] uppercase text-xs font-bold"
                                        >
                                            <span>Ignite Connection</span>
                                            <Send size={18} />
                                            <motion.span
                                                className="absolute inset-0 bg-white/30"
                                                initial={{ y: "100%" }}
                                                whileHover={{ y: 0 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </motion.button>
                                    </form>
                                </div>

                                {/* RIGHT — RELIC */}
                                <div className="relative flex justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-[120%] aspect-square border border-[#cda56e]/10 rounded-full"
                                    />

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1.4 }}
                                        className="relative w-[240px] aspect-[3/4] bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(205,165,110,0.15)] overflow-hidden"
                                    >
                                        <Image
                                            src="/hermes.png"
                                            alt="Hermes"
                                            fill
                                            className="object-cover sepia-[0.4] brightness-75 hover:brightness-100 transition-all duration-[3s]"
                                        />

                                        {/* SCANLINE */}
                                        <motion.div
                                            animate={{ y: ["-100%", "300%"] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-x-0 h-px bg-[#cda56e]/50 shadow-[0_0_12px_#cda56e]"
                                        />

                                        <div className="absolute inset-6 border border-[#cda56e]/20 pointer-events-none" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
