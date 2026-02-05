"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PrologueProps {
    onEnter: () => void;
}

export const Prologue: React.FC<PrologueProps> = ({ onEnter }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 3000; // 3 seconds
        const interval = 30;
        const step = (interval / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onEnter, 800);
                    return 100;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onEnter]);

    return (
        <motion.div
            key="prologue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 2 } }}
            className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-background"
        >
            {/* Centered Mythic Logo */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 2 }}
                className="relative w-48 h-48 md:w-72 md:h-72 mb-12 grayscale mix-blend-screen"
            >
                <Image
                    src="/mythic-logo.png"
                    alt="Mythic Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="font-serif text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl italic leading-relaxed"
            >
                &ldquo;The chronicles of the gods are not meant to be rushed.&rdquo;
            </motion.p>

            {/* Cinematic Loading Bar */}
            <div className="w-48 md:w-64 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-gold-leaf"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1 }}
                className="mt-6 font-serif"
            >
                <span className="text-[9px] uppercase tracking-[0.6em] gold-text">Gathering Divine Whispers</span>
            </motion.div>
        </motion.div>
    );
};
