"use client";

import React from "react";
import { motion } from "framer-motion";

interface EditorialSidebarProps {
    title: string;
    mainImage: string;
    topImage?: string;
    showMoon?: boolean;
    showMoscowPill?: boolean;
    rotation?: 0 | 180;
    layout?: 'info-first' | 'title-first';
    className?: string;
}

export const EditorialSidebar: React.FC<EditorialSidebarProps> = ({
    title,
    mainImage,
    topImage,
    showMoon = false,
    showMoscowPill = false,
    rotation = 180,
    layout = 'info-first',
    className = ""
}) => {
    const InfoColumn = (
        <div className={`flex flex-col h-full ${layout === 'info-first' ? 'border-r' : 'border-l'} border-white/10`}>
            <div className="p-4 border-b border-white/10 h-32 flex flex-col justify-end">
                <p className="text-[10px] text-white/20 uppercase leading-tight tracking-[0.2em] font-sans">
                    System.<br />
                    Archive.<br />
                    Vol.03
                </p>
            </div>

            <div className="flex-1 border-b border-white/10 relative group overflow-hidden bg-black/40 min-h-[300px]">
                <div className="absolute inset-0 opacity-20 grayscale transition-all duration-1000 group-hover:opacity-40 group-hover:scale-110">
                    <img
                        src={mainImage}
                        alt="Sidebar Decoration"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="p-4 h-32 flex flex-col justify-start">
                <p className="text-[10px] text-white/20 uppercase leading-tight tracking-[0.2em] font-sans">
                    Temporal.<br />
                    Entity.<br />
                    Fragment
                </p>
            </div>
        </div>
    );

    const TitleColumn = (
        <div className="flex flex-col relative h-full">
            {topImage && (
                <div className="h-48 border-b border-white/10 flex items-center justify-center bg-black/10 overflow-hidden">
                    <img src={topImage} alt="" className="w-full h-full object-cover" />
                </div>
            )}

            <div className="flex-1 flex items-center justify-center py-12">
                <h2
                    className="text-[120px] font-serif text-[#ece4d9]/50 uppercase tracking-tighter [writing-mode:vertical-rl] select-none"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {title}
                </h2>
            </div>

            {showMoscowPill && (
                <div className={`absolute top-[55%] ${layout === 'info-first' ? '-right-5' : '-left-5'} translate-x-1/2 -rotate-90 z-20`}>
                    <div className="px-10 py-2 border border-white/10 rounded-full bg-black/80 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                        <span className="text-[11px] tracking-[0.6em] uppercase text-[#d4d4d4] font-medium">Moscow</span>
                    </div>
                </div>
            )}

            {showMoon && (
                <div className="h-48 border-t border-white/10 flex items-center justify-center bg-black/10 p-4">
                    <div className="relative w-28 h-28 group">
                        <motion.div
                            initial={{ rotate: -15 }}
                            animate={{ rotate: 15 }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                            className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-2"
                        >
                            <div className="w-full h-full rounded-full bg-black overflow-hidden relative border border-white/10">
                                <div className="absolute inset-0 left-1/2 bg-[#d4d4d4]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className={`hidden lg:flex flex-col w-[300px] border-white/10 bg-black/40 backdrop-blur-sm self-stretch overflow-hidden h-screen relative ${className}`}>
            <div className="grid grid-cols-[1fr_2.5fr] h-full">
                {layout === 'info-first' ? (
                    <>
                        {InfoColumn}
                        {TitleColumn}
                    </>
                ) : (
                    <>
                        {TitleColumn}
                        {InfoColumn}
                    </>
                )}
            </div>

            <div className={`absolute top-0 ${layout === 'info-first' ? 'right-2' : 'left-2'} w-[1px] h-full bg-white/5`} />
        </div>
    );
};
