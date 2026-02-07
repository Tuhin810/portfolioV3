"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    X,
    ListMusic,
    Music,
    Shuffle,
    Repeat,
    Volume2,
    Mic2,
    Share2,
    Heart
} from "lucide-react";

const TRACKS = [
    {
        id: 1,
        title: "The Architect's Intro",
        duration: "03:14",
        artist: "Grand Legend",
        url: "/intro.mp3",
        cover: "/gate1.png"
    },
    {
        id: 2,
        title: "Echoes of Olympus",
        duration: "04:45",
        artist: "Homer's Ghost",
        url: "",
        cover: "/gate2.png"
    },
    {
        id: 3,
        title: "Sacred Geometry",
        duration: "02:58",
        artist: "The Oracle",
        url: "",
        cover: "/gate3.png"
    },
];

export const Soundtrack: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(TRACKS[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
    const pointerEvents = useTransform(scrollYProgress, (p) => p > 0.05 ? "auto" : "none") as any;


    // Simulating progress
    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime(prev => (prev + 1) % 194); // Loop every 3:14
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const formatTime = (time: number) => {
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) audioRef.current.pause();
            else audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <motion.div style={{ opacity, scale, pointerEvents }} className="fixed bottom-[-15px] right-[-15px] z-[300]">
            <audio ref={audioRef} src={currentTrack.url} loop />

            {/* COMPACT PLAYER - THE VINYL DISC */}
            <div className="relative pointer-events-none">
                <div className="relative w-40 h-40 lg:w-48 lg:h-48 pointer-events-none">
                    <motion.div
                        onClick={() => setIsOpen(true)}
                        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                        transition={isPlaying ? { duration: 15, repeat: Infinity, ease: "linear" } : { duration: 2, ease: "circOut" }}
                        className="absolute top-[5%] left-[5%] w-[80%] h-[80%] z-10 cursor-pointer pointer-events-auto rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex items-center justify-center group"
                        style={{ background: "radial-gradient(circle at center, #1a1a1a 0%, #000 100%)" }}
                    >
                        <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
                        <div className="absolute inset-[32%] rounded-full bg-[#8b1a1a] shadow-inner border border-black/40 flex items-center justify-center overflow-hidden">
                            <motion.div
                                animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="font-display text-[8px] text-white tracking-widest text-center px-2"
                            >
                                {isPlaying ? "PLAYING" : "PAUSED"}
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="absolute bottom-4 right-4 w-[60%] h-[60%] bg-[#080808] border border-white/[0.07] rounded-xl z-20 shadow-xl" />
                </div>
            </div>


            {/* FULL MEDIA PLAYER MODAL */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 lg:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="relative w-full max-w-4xl h-[90vh] lg:h-[80vh] bg-[#0c0c0c] border border-white/[0.08] rounded-[3rem] shadow-[0_80px_200px_rgba(0,0,0,1)] overflow-hidden flex flex-col"
                        >
                            {/* TOP BAR */}
                            {/* <div className="flex justify-between items-center p-6 lg:p-8 border-b border-white/[0.03]">
                                <div className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-full bg-gold-leaf/20 flex items-center justify-center">
                                        <Music size={18} className="text-gold-leaf" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-mono">Master Catalog</span>
                                        <span className="text-sm font-serif italic text-white/80 tracking-widest uppercase">The Archive of Whispers</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 transition-all"
                                >
                                    <X size={18} className="text-white/40" />
                                </button>
                            </div> */}

                            {/* MAIN BODY: SPLIT VIEW */}
                            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

                                {/* LEFT: NOW PLAYING VISUALS */}
                                <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 relative border-r border-white/[0.03]">
                                    {/* GREEK MEANDER BACKGROUND PATTERN */}
                                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                            <pattern id="greek" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                                <path d="M0 0h100v100H0V0zm10 10v80h80V15h-10v65H20V20h50V10H10z" fill="white" />
                                            </pattern>
                                            <rect width="100%" height="100%" fill="url(#greek)" />
                                        </svg>
                                    </div>

                                    {/* ALBUM ART / VINYL */}
                                    <div className="relative group w-full max-w-[300px]">
                                        <motion.div
                                            animate={isPlaying ? { rotate: 360 } : {}}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="relative z-10 w-full aspect-square rounded-full shadow-[0_60px_120px_rgba(0,0,0,1)] p-1 border border-white/10"
                                        >
                                            <div className="w-full h-full rounded-full bg-[#111] overflow-hidden relative">
                                                <img src={currentTrack.cover} className="absolute inset-0 w-full h-full object-cover opacity-20 sepia contrast-125" alt="cover" />
                                                <div className="absolute inset-0 bg-black/40" />
                                                {[...Array(40)].map((_, i) => (
                                                    <div key={i} className="absolute inset-0 rounded-full border border-white/[0.03]" style={{ margin: `${i * 1.25}%` }} />
                                                ))}
                                                <div className="absolute inset-[35%] rounded-full bg-[#8b1a1a] shadow-inner border border-black/50" />
                                            </div>
                                        </motion.div>

                                        {/* TONE ARM (Stylus) */}
                                        <motion.div
                                            initial={{ rotate: -10 }}
                                            animate={{ rotate: isPlaying ? 10 : -10 }}
                                            transition={{ duration: 1.5 }}
                                            className="absolute top-0 -right-4 w-4 h-48 bg-neutral-800 rounded-full origin-top z-20 shadow-2xl hidden lg:block"
                                            style={{ boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
                                        />
                                    </div>

                                    <div className="mt-16 text-center space-y-4 relative z-10">
                                        <h2 className="font-display text-xl text-white tracking-widest uppercase leading-none drop-shadow-2xl">
                                            {currentTrack.title}
                                        </h2>
                                        <p className="font-serif text-[12px] uppercase tracking-[0.8em] text-gold-leaf italic">
                                            {currentTrack.artist}
                                        </p>
                                    </div>


                                </div>

                                {/* RIGHT: PLAYLIST & CATALOG */}
                                <div className="w-full lg:w-[420px] flex flex-col p-8 lg:p-10 bg-black/30">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="flex items-center gap-3">
                                            <ListMusic size={16} className="text-gold-leaf" />
                                            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-white/40">Queue List</span>
                                        </div>
                                        <span className="text-[9px] font-mono text-white/10 uppercase italic">3 Tracks Cached</span>
                                    </div>

                                    <div className="flex-1 space-y-3 overflow-y-auto pr-4 custom-scrollbar">
                                        {TRACKS.map((track) => (
                                            <motion.div
                                                key={track.id}
                                                whileHover={{ x: 5 }}
                                                onClick={() => {
                                                    setCurrentTrack(track);
                                                    if (track.url) setIsPlaying(true);
                                                }}
                                                className={`group relative flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-500 ${currentTrack.id === track.id ? 'bg-gold-leaf/10 border border-gold-leaf/20' : 'bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/10'}`}
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className={`w-12 h-12 rounded-lg overflow-hidden border border-white/5 ${currentTrack.id === track.id ? 'grayscale-0' : 'grayscale opacity-40'}`}>
                                                        <img src={track.cover} className="w-full h-full object-cover" alt="cover" />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <h4 className={`text-lg font-serif italic transition-all ${currentTrack.id === track.id ? 'text-gold-leaf' : 'text-white/70 group-hover:text-white'}`}>
                                                            {track.title}
                                                        </h4>
                                                        <span className="text-[8px] uppercase tracking-widest text-white/20">{track.artist}</span>
                                                    </div>
                                                </div>
                                                {currentTrack.id === track.id && isPlaying && (
                                                    <div className="flex gap-1 h-3 items-end">
                                                        {[...Array(3)].map((_, i) => (
                                                            <motion.div key={i} animate={{ height: [3, 10, 5, 10, 3] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }} className="w-0.5 bg-gold-leaf" />
                                                        ))}
                                                    </div>
                                                )}
                                                <span className="text-[10px] font-mono text-white/20 tabular-nums">{track.duration}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* BOTTOM CONTROL PANEL: THE "MEDIA PLAYER" CORE */}
                            <div className="px-4 py-4 bg-[#0a0a0a] border-t border-white/[0.05] relative z-10 flex flex-col gap-6">

                                {/* 1. SEEKER / PROGRESS BAR */}
                                <div className="flex items-center gap-5">
                                    <span className="text-[10px] font-mono text-white/20 tabular-nums w-12">{formatTime(currentTime)}</span>
                                    <div className="flex-1 h-1 bg-white/5 rounded-full relative group cursor-pointer overflow-hidden">
                                        <div className="absolute inset-x-0 h-full w-[45%] bg-gold-leaf/40 rounded-full relative overflow-hidden group-hover:bg-gold-leaf/60 transition-colors">
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-white/20 tabular-nums w-12">{currentTrack.duration}</span>
                                </div>

                                {/* 2. CONTROLS GRID */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-10">
                                        <button className="p-2 opacity-20 hover:opacity-100 transition-all"><Shuffle size={16} /></button>
                                        <button className="p-2 opacity-20 hover:opacity-100 transition-all"><Repeat size={16} /></button>
                                    </div>

                                    <div className="flex items-center gap-10 lg:gap-14">
                                        <button onClick={() => { }} className="p-3 opacity-40 hover:opacity-100 hover:scale-110 transition-all"><SkipBack size={22} fill="currentColor" /></button>

                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={togglePlay}
                                            className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white transition-transform border-[5px] border-black/10"
                                        >
                                            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                                        </motion.button>

                                        <button onClick={() => { }} className="p-3 opacity-40 hover:opacity-100 hover:scale-110 transition-all"><SkipForward size={22} fill="currentColor" /></button>
                                    </div>

                                    <div className="flex items-center gap-6 min-w-[130px] justify-end">
                                        <Volume2 size={16} className="text-white/40" />
                                        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-[60%] h-full bg-gold-leaf/50" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 2px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(197, 160, 40, 0.1); border-radius: 10px; }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(197, 160, 40, 0.4); }
                @keyframes shimmer {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite linear;
                }
            `}</style>
        </motion.div>
    );
};
