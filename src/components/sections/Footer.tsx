"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Sparkles, ArrowUp } from "lucide-react";

export const Footer: React.FC<{ onContact: () => void }> = ({ onContact }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-black border-t border-[#cda56e]/20 overflow-hidden py-24 px-6 md:px-12">

            {/* 1. BACKGROUND AMBIENCE: THE CELESTIAL RADIANCE */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cda56e]/40 to-transparent" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                {/* Rotating Sunburst (Inspiration from previous request) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] aspect-square border border-[#cda56e]/5 rounded-full opacity-20"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square border-dashed border-[#cda56e]/10 rounded-full opacity-10"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-32">

                    {/* LEFT: THE SIGNATURE */}
                    <div className="space-y-8 text-center md:text-left">
                        <div className="space-y-2">
                            <span className="font-serif text-[10px] tracking-[0.5em] text-[#cda56e]/60 uppercase block italic">End of Odyssey</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-none">
                                Tuhin <br /> Thakur.
                            </h2>
                        </div>

                        <div className="pt-4">
                            <motion.button
                                onClick={onContact}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-4 py-4 px-8 border border-[#cda56e]/20 hover:border-[#cda56e] transition-colors duration-500"
                            >
                                <span className="font-serif text-[10px] tracking-[0.4em] text-[#cda56e] uppercase font-bold">Initiate Communion</span>
                                <Sparkles size={14} className="text-[#cda56e] animate-pulse" />
                            </motion.button>
                        </div>
                    </div>

                    {/* MIDDLE: THE TESTAMENT (Song of Achilles Inspiration) */}
                    <div className="flex-1 max-w-sm text-center">
                        <div className="relative py-12 px-8 border-x border-[#cda56e]/10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-[#cda56e]/20" />
                            <p className="font-serif text-[11px] md:text-xs leading-relaxed italic text-white/40 tracking-wide">
                                "I could recognize him by touch alone, by smell; I would know him blind, by the way his breaths came and his feet struck the earth. I would know him in death, at the end of the world."
                            </p>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-[#cda56e]/20" />

                            {/* Celestial Decor */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#cda56e]/40 flex gap-2">
                                <Sparkles size={10} />
                                <Sparkles size={10} />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: THE CONNECTIONS */}
                    <div className="flex flex-col items-center md:items-end gap-12">
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-4">
                            {[
                                { icon: <Mail size={16} />, label: "Email", href: "mailto:hello@tuhin.design" },
                                { icon: <Github size={16} />, label: "GitHub", href: "https://github.com" },
                                { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://linkedin.com" },
                                { icon: <Twitter size={16} />, label: "Twitter", href: "https://twitter.com" }
                            ].map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: -10, color: "#cda56e" }}
                                    className="flex items-center gap-4 text-white/40 font-serif text-[9px] tracking-[0.3em] uppercase transition-colors duration-500 hover:text-[#cda56e]"
                                >
                                    <span className="hidden md:block">{link.label}</span>
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 p-4 border border-white/10 text-white/40 hover:text-[#cda56e] hover:border-[#cda56e]/40 transition-all duration-500"
                        >
                            <ArrowUp size={18} />
                        </motion.button>
                    </div>
                </div>

                {/* BOTTOM METADATA: THE ARCHITECTURAL FRAME */}
                <div className="mt-24 pt-12 border-t border-[#cda56e]/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-1">
                            <span className="font-serif text-[8px] tracking-[0.4em] text-[#cda56e]/20 uppercase">V. III Archive</span>
                            <span className="font-serif text-[9px] tracking-[0.2em] text-white/40">© MMXXVI</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-serif text-[8px] tracking-[0.4em] text-[#cda56e]/20 uppercase">Coordinates</span>
                            <span className="font-serif text-[9px] tracking-[0.2em] text-white/40">28.6139° N, 77.2090° E</span>
                        </div>
                    </div>

                    <div className="relative group p-4 border border-[#cda56e]/10">
                        <span className="font-serif text-[9px] tracking-[0.8em] text-[#cda56e]/40 uppercase block mb-1">Architecture of Silence</span>
                        <div className="w-full h-px bg-gradient-to-r from-[#cda56e]/0 via-[#cda56e]/40 to-[#cda56e]/0" />

                        {/* Interactive Corner Brackets */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#cda56e]/60 group-hover:w-4 group-hover:h-4 transition-all duration-700" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#cda56e]/60 group-hover:w-4 group-hover:h-4 transition-all duration-700" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
