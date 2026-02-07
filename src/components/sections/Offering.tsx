"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, ShieldCheck, Globe, X, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const RomanNumeral = ({ value, className = "" }: { value: string, className?: string }) => (
    <span className={`font-serif text-[10px] tracking-[0.2em] text-[#cda56e]/40 ${className}`}>{value}</span>
);

export const Offering: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-7xl max-h-[90vh] bg-black border border-[#cda56e]/20 overflow-y-auto overflow-x-hidden custom-scrollbar shadow-[0_0_100px_rgba(205,165,110,0.1)]"
                    >
                        {/* 1. THE ARCHITECTURAL FRAMEWORK */}
                        <div className="absolute inset-x-6 inset-y-6 md:inset-x-12 md:inset-y-12 border border-[#cda56e]/10 pointer-events-none z-20">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#cda56e]/60" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#cda56e]/60" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#cda56e]/60" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#cda56e]/60" />
                        </div>

                        {/* Close Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-8 right-8 z-50 p-3 bg-[#cda56e]/10 text-[#cda56e] rounded-full hover:bg-[#cda56e] hover:text-black transition-all duration-500"
                        >
                            <X size={20} />
                        </motion.button>

                        <div className="relative py-24 px-8 md:px-24 flex flex-col items-center">

                            {/* Header Section */}
                            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20">

                                {/* Left Side: The Form */}
                                <div className="w-full md:w-[45%] space-y-12">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    >
                                        <RomanNumeral value="INVOCATION" className="mb-4 block" />
                                        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none mb-8">
                                            Initiate <br /> <span className="text-[#cda56e]">Communion.</span>
                                        </h2>
                                        <p className="font-serif text-white/40 italic leading-relaxed max-w-sm">
                                            "Across the digital aether, your message becomes a relic in the archive of the unseen master."
                                        </p>
                                    </motion.div>

                                    <form className="space-y-8">
                                        <div className="space-y-2 group">
                                            <label className="text-[9px] tracking-[0.4em] uppercase text-[#cda56e]/40 font-bold">The Oracle (Email)</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your electronic essence..."
                                                className="w-full bg-transparent border-b border-[#cda56e]/20 py-4 font-serif text-lg text-white placeholder:text-white/5 focus:outline-none focus:border-[#cda56e] transition-all duration-700"
                                            />
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="text-[9px] tracking-[0.4em] uppercase text-[#cda56e]/40 font-bold">The Prophecy (Message)</label>
                                            <textarea
                                                rows={1}
                                                placeholder="Speak your truth..."
                                                className="w-full bg-transparent border-b border-[#cda56e]/20 py-4 font-serif text-lg text-white placeholder:text-white/5 focus:outline-none focus:border-[#cda56e] transition-all duration-700 resize-none"
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group flex items-center gap-6 py-6 px-10 bg-[#cda56e] text-black font-serif text-sm tracking-[0.3em] uppercase font-bold overflow-hidden relative"
                                        >
                                            <span className="relative z-10">Ignite Connection</span>
                                            <Send size={18} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        </motion.button>
                                    </form>
                                </div>

                                {/* Right Side: The Sculpture */}
                                <div className="w-full md:w-1/2 relative flex items-center justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 1.5, delay: 0.4 }}
                                        className="relative w-full max-w-[400px] aspect-[3/4] p-4 bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden group/relic"
                                    >
                                        <Image
                                            src="/hermes.png"
                                            alt="Hermes the Messenger"
                                            fill
                                            className="object-cover sepia-[0.4] brightness-75 group-hover/relic:scale-110 group-hover/relic:brightness-100 transition-all duration-[3s]"
                                        />

                                        <div className="absolute inset-0 p-8 flex flex-col justify-between border-[0.5px] border-[#cda56e]/20 m-4 pointer-events-none">
                                            <div className="flex justify-between items-start">
                                                <span className="font-serif text-[10px] tracking-[0.5em] text-[#cda56e]">01. HERMES</span>
                                                <Globe size={14} className="text-[#cda56e]/40 animate-pulse" />
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-4xl font-serif text-white/90 leading-tight">The <br /> Messenger's <br /> Burden.</h3>
                                                <div className="w-12 h-px bg-[#cda56e]" />
                                                <p className="text-[9px] tracking-[0.2em] text-[#cda56e]/60 uppercase">Sanctuary Alpha-7</p>
                                            </div>
                                        </div>
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
