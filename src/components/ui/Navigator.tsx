"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navigator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const chapters = [
        { name: "Prologue", path: "/" },
        { name: "Archive", path: "/archive" },
        { name: "Trials", path: "/trials" },
        { name: "Gallery", path: "/gallery" },
        { name: "Identity", path: "/identity" },
        { name: "Seal", path: "/seal" },
    ];

    return (
        <div className="fixed bottom-8 left-8 z-[110]">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 mystic-glass rounded-full border border-primary/20 flex items-center justify-center text-primary group"
            >
                <span className="text-xl font-display group-hover:glow-on-hover">†</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-16 left-0 bg-black/80 backdrop-blur-xl border border-white/5 p-4 min-w-[200px]"
                    >
                        <ul className="space-y-2">
                            {chapters.map((chapter) => (
                                <li key={chapter.path}>
                                    <Link
                                        href={chapter.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-2 text-xs uppercase tracking-widest transition-colors ${pathname === chapter.path ? "text-primary bg-primary/10" : "text-slate-400 hover:text-white"
                                            }`}
                                    >
                                        {chapter.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navigator;
