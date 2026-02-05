"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRACKS = [
    { id: 1, title: "Sacred Silence", duration: "4:22", artist: "The Architect" },
    { id: 2, title: "Echoes of Olympus", duration: "3:45", artist: "Homer's Ghost" },
    { id: 3, title: "Digital Odyssey", duration: "5:12", artist: "Cyber Oracle" },
    { id: 4, title: "The Forge Ritual", duration: "2:58", artist: "Hephaestus" },
];

export const Soundtrack: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(TRACKS[0]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            {/* THE PHOTOGRAPHIC REALISTIC VINYL INTERFACE */}
            <div className="fixed bottom-[-15px] right-[-15px] z-[300] pointer-events-none">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72 pointer-events-none">

                    {/* 1. THE VINYL RECORD - High visibility peeking state */}
                    <motion.div
                        onClick={() => setIsOpen(true)}
                        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                        transition={isPlaying ? { duration: 10, repeat: Infinity, ease: "linear" } : { duration: 2, ease: "circOut" }}
                        className="absolute top-[1%] left-[8%] w-[72%] h-[72%] z-10 cursor-pointer pointer-events-auto rounded-full shadow-[0_30px_70px_rgba(0,0,0,1)] group"
                        style={{
                            background: "radial-gradient(circle at center, #1a1a1a 0%, #020202 100%)",
                        }}
                    >
                        {/* Physical Reflection Layer */}
                        <div className="absolute inset-0 rounded-full">
                            {/* Anisotropic highlights (The classic 'X' light reflection) */}
                            {/* <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.06)_45deg,transparent_90deg,rgba(255,255,255,0.06)_160deg,transparent_220deg,rgba(255,255,255,0.06)_300deg,transparent_360deg)] opacity-70 group-hover:opacity-90 transition-opacity" /> */}

                            {/* Subtle sheen layer */}
                            <div className="absolute inset-0 bg-[conic-gradient(from_90deg,transparent_0deg,rgba(255,255,255,0.03)_120deg,transparent_240deg)] opacity-40" />

                            {/* Dense Micro-Grooves */}
                            {[...Array(30)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0 rounded-full border border-white/20"
                                    style={{ margin: `${i * 1.5}%` }}
                                />
                            ))}

                            {/* Inner Depth Polish */}
                            {/* <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,1)]" /> */}
                        </div>

                        {/* Center Label (Deep Photographic Red) */}
                        <div className="absolute inset-[32%] rounded-full bg-[#8b1a1a] shadow-[inset_0_4px_15px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6)] border-[5px] border-black/40 flex flex-col items-center justify-center text-center p-3 select-none overflow-hidden">
                            <div className="relative flex flex-col items-center">
                                <span className="text-[9px] lg:text-[11px] font-bold tracking-tighter uppercase text-white leading-none mb-1 border-b border-white/20 pb-1">Portfolio</span>
                                <span className="text-[5px] uppercase text-white/30 tracking-[0.4em] font-mono leading-none">MASTER RELEASE</span>
                                <div className="mt-2 text-[4px] font-mono text-white/10 uppercase tracking-tighter italic">High Fidelity Physical Artifact</div>
                            </div>
                        </div>

                        {/* Central Spindle Hole */}
                        <div className="absolute inset-[48%] rounded-full bg-black/80 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]" />
                    </motion.div>

                    {/* 2. THE SLEEVE COVER - Tilted and overlapping */}
                    <div className="absolute bottom-0 right-0 w-[65%] h-[65%] bg-[#080808] border border-white/[0.07] rounded-xl z-20 shadow-[-30px_-30px_100px_rgba(0,0,0,0.9)] overflow-hidden origin-bottom-right rotate-[-4deg] transform">
                        {/* Paper Texture Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                        {/* Sleeve Labeling */}
                        <div className="absolute top-10 left-10 space-y-4">
                            <div className="w-10 h-px bg-gold-leaf/40" />
                            <div className="space-y-1">
                                <h4 className="text-[10px] tracking-[0.8em] uppercase font-serif italic gold-text font-medium">The Archive</h4>
                                <p className="text-[6px] tracking-[0.4em] uppercase text-white/20">Soundtrack Series II • Fragment 03</p>
                            </div>
                        </div>

                        {/* Status Light */}
                        <div className="absolute bottom-16 right-16 flex items-center gap-4 opacity-30">
                            <span className="text-[7px] tracking-[0.4em] uppercase">{isPlaying ? "Active Resonance" : "Silent Void"}</span>
                            <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-gold-leaf shadow-[0_0_10px_rgba(212,175,55,1)]' : 'bg-white/10'} transition-all duration-1000`} />
                        </div>

                        {/* Physical Pocket Depth */}
                        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/90 to-transparent pointer-events-none" />
                        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
                    </div>

                    {/* 3. PHYSICAL PRESENCE SHADOW */}
                    <div className="absolute inset-0 z-0 bg-black/60 blur-[100px] translate-x-20 translate-y-20 rounded-full opacity-60" />
                </div>
            </div>

            {/* AUDIOPHILE LIBRARY MODAL */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 50 }}
                            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-12 lg:p-16 shadow-[0_100px_200px_rgba(0,0,0,1)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none" />

                            <div className="flex justify-between items-start mb-20">
                                <div className="space-y-4">
                                    <div className="w-14 h-px bg-gold-leaf/60" />
                                    <h3 className="font-serif text-5xl italic gold-text tracking-tighter uppercase leading-none">Sound <br /> Library</h3>
                                    <p className="text-[10px] tracking-[0.6em] uppercase text-white/20 italic font-light">Archive of the Unspoken</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-xs opacity-30 hover:opacity-100 hover:border-gold-leaf/40 hover:bg-gold-leaf/5 transition-all duration-700"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-6 custom-scrollbar">
                                {TRACKS.map((track) => (
                                    <motion.div
                                        key={track.id}
                                        onClick={() => {
                                            setCurrentTrack(track);
                                            setIsPlaying(true);
                                        }}
                                        className={`group relative flex items-center justify-between p-8 rounded-[2rem] cursor-pointer transition-all duration-1000 ${currentTrack.id === track.id ? 'bg-gold-leaf/10' : 'bg-white/[0.01] hover:bg-white/[0.03]'}`}
                                    >
                                        <div className="relative z-10 flex items-center gap-10">
                                            <span className={`text-[11px] font-mono tracking-[0.5em] transition-colors ${currentTrack.id === track.id ? 'text-gold-leaf' : 'text-white/10'}`}>
                                                0{track.id}
                                            </span>
                                            <div className="space-y-2">
                                                <h4 className={`text-2xl font-serif italic leading-none transition-colors ${currentTrack.id === track.id ? 'text-gold-leaf' : 'text-white/80 group-hover:text-white'}`}>
                                                    {track.title}
                                                </h4>
                                                <p className="text-[9px] uppercase tracking-[0.4em] font-light text-white/20">{track.artist}</p>
                                            </div>
                                        </div>
                                        <span className="relative z-10 text-[11px] font-mono text-white/15 tabular-nums">{track.duration}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* AUDIOPHILE CONTROLS */}
                            <div className="mt-20 bg-[#0c0c0c] p-12 rounded-[3rem] border border-white/[0.03] shadow-inner">
                                <div className="flex flex-col items-center gap-12">
                                    <div className="flex items-center gap-20 justify-center w-full">
                                        <button className="text-3xl opacity-20 hover:opacity-100 transition-opacity">⏮</button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setIsPlaying(!isPlaying)}
                                            className="w-28 h-28 rounded-full bg-gold-leaf flex items-center justify-center text-black shadow-[0_30px_60px_rgba(212,175,55,0.2)] transition-all"
                                        >
                                            {isPlaying ?
                                                <div className="flex gap-3"><div className="w-2.5 h-10 bg-black rounded-full" /><div className="w-2.5 h-10 bg-black rounded-full" /></div>
                                                : <div className="ml-3 border-[20px] border-l-black border-y-transparent border-r-transparent" />}
                                        </motion.button>
                                        <button className="text-3xl opacity-20 hover:opacity-100 transition-opacity">⏭</button>
                                    </div>
                                    <div className="w-full space-y-6">
                                        <div className="w-full h-[2px] bg-white/[0.03] rounded-full overflow-hidden">
                                            <motion.div
                                                animate={isPlaying ? { x: ["-100%", "0%"] } : { x: "-100%" }}
                                                transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                                                className="w-full h-full bg-gold-leaf/50 shadow-[0_0_10px_gold]"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] px-2 italic">
                                            <span className="flex items-center gap-4">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gold-leaf ${isPlaying ? 'animate-pulse' : 'opacity-20'}`} />
                                                {currentTrack.title}
                                            </span>
                                            <span>Side A • Vol. III</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(212, 175, 55, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(212, 175, 55, 0.4);
                }
            `}</style>
        </>
    );
};
