"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

// X (formerly Twitter) custom crisp SVG logo
const XIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const Footer: React.FC<{ onContact: () => void }> = ({ onContact }) => {
    return (
        <footer className="relative w-full bg-[#0d0d0d] text-white overflow-hidden pt-20 pb-0 select-none">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">

                {/* 1. TOP SECTION: CONTACT INFO & NAV COLUMNS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 justify-between items-start">

                    {/* LEFT (Col 1-5): SOCIAL ICONS & ADDRESS INFO */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {/* Circular Social Icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/5 transition-all"
                            >
                                <Instagram size={17} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X / Twitter"
                                className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/5 transition-all"
                            >
                                <XIcon />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/5 transition-all"
                            >
                                <Youtube size={17} />
                            </a>
                        </div>

                        {/* Location / Address */}
                        <div className="space-y-1 text-sm sm:text-base text-white/85 font-sans leading-relaxed">
                            <p>South Delhi, 110019</p>
                            <p>New Delhi, India</p>
                        </div>

                        {/* Email */}
                        <div>
                            <a
                                href="mailto:hello@tuhin.design"
                                className="text-sm sm:text-base text-white/85 hover:text-white transition-colors font-sans"
                            >
                                hello@tuhin.design
                            </a>
                        </div>

                        {/* Phone / Availability */}
                        <div>
                            <p className="text-sm sm:text-base text-white/85 font-sans">
                                (+91) Available for Commissions
                            </p>
                        </div>
                    </div>

                    {/* RIGHT (Col 6-12): 3 NAVIGATION COLUMNS */}
                    <div className="lg:col-span-7 grid grid-cols-3 gap-6 sm:gap-10 font-sans">
                        {/* Column 1: MENU */}
                        <div className="flex flex-col gap-4">
                            <span className="text-xs uppercase tracking-[0.18em] text-white font-medium">
                                MENU
                            </span>
                            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
                                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#trials" className="hover:text-white transition-colors">Trials</a></li>
                                <li><a href="#odyssey" className="hover:text-white transition-colors">Odyssey</a></li>
                                <li><a href="#studio" className="hover:text-white transition-colors">Studio</a></li>
                            </ul>
                        </div>

                        {/* Column 2: WORK */}
                        <div className="flex flex-col gap-4">
                            <span className="text-xs uppercase tracking-[0.18em] text-white font-medium">
                                WORK
                            </span>
                            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
                                <li><a href="#trials" className="hover:text-white transition-colors">Aeonix</a></li>
                                <li><a href="#trials" className="hover:text-white transition-colors">Scriptures</a></li>
                                <li><a href="#trials" className="hover:text-white transition-colors">KWAD</a></li>
                                <li><a href="#odyssey" className="hover:text-white transition-colors">Archive</a></li>
                            </ul>
                        </div>

                        {/* Column 3: CONNECT */}
                        <div className="flex flex-col gap-4">
                            <span className="text-xs uppercase tracking-[0.18em] text-white font-medium">
                                CONNECT
                            </span>
                            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                                <li><button onClick={onContact} className="hover:text-white transition-colors text-left">Contact</button></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* 2. FULL-WIDTH DIVIDER WITH PILL "Get Started" BUTTON */}
                <div className="relative w-full border-t border-white/20 mt-20 mb-8 flex items-center">
                    <button
                        type="button"
                        onClick={onContact}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg"
                    >
                        Get Started
                    </button>
                </div>

                {/* 3. STATEMENT & LEGAL ROW */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-2 pb-6 font-sans">
                    <p className="text-xs sm:text-sm text-white/50 max-w-md leading-relaxed">
                        From concept to digital execution. Our engineering is here to elevate your brand and connect you with your audience.
                    </p>

                    <div className="flex items-center gap-8 text-xs tracking-wider uppercase text-white/70 font-medium">
                        <a href="#terms" className="hover:text-white transition-colors">
                            TERMS & CONDITIONS
                        </a>
                        <a href="#privacy" className="hover:text-white transition-colors">
                            PRIVACY POLICY
                        </a>
                    </div>
                </div>

            </div>

            {/* 4. GIGANTIC MUTED LOWERCASE TEXT: tuhin .- thakur */}
            <div className="w-full overflow-hidden select-none -mb-4 sm:-mb-8 md:-mb-12 pointer-events-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    <span className="font-sans font-bold text-[22vw] leading-[0.72] tracking-[-0.05em] text-[#2c2c2c] lowercase pr-12">
                        tuhin .— thakur .— tuhin .— thakur .—
                    </span>
                    <span className="font-sans font-bold text-[22vw] leading-[0.72] tracking-[-0.05em] text-[#2c2c2c] lowercase pr-12">
                        tuhin .— thakur .— tuhin .— thakur .—
                    </span>
                </motion.div>
            </div>
        </footer>
    );
};
