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
            {/* Stage I: CHAOS - Pure darkness and minimalist text */}
            <div className="mb-32" />

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 3, delay: 0.5 }}
                className="font-serif text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl italic leading-relaxed tracking-widest"
            >
                &ldquo;Before structure, there was chaos.&rdquo;
            </motion.p>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-gold-leaf"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 1 }}
                className="mt-6 font-serif"
            >
                <span className="text-[9px] uppercase tracking-[1em] text-white">Observing the Void</span>
            </motion.div>
        </motion.div>
    );
};
