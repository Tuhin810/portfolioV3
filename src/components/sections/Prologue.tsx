"use client";

import React from "react";
import { motion } from "framer-motion";

interface PrologueProps {
    onEnter: () => void;
}

export const Prologue: React.FC<PrologueProps> = ({ onEnter }) => {
    return (
        <motion.div
            key="prologue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        >
            <p className="font-serif text-2xl md:text-3xl text-foreground/80 mb-12 max-w-2xl italic leading-relaxed">
                &ldquo;The chronicles of the gods are not meant to be rushed.&rdquo;
            </p>
            <button
                onClick={onEnter}
                className="group relative px-10 py-4 overflow-hidden text-[10px] uppercase tracking-[0.6em] text-gold-leaf/40 hover:text-gold-leaf transition-colors"
            >
                <span className="relative z-10 transition-transform duration-700 group-hover:tracking-[0.8em]">Ascend</span>
                <div className="absolute inset-0 border border-gold-leaf/10 group-hover:border-gold-leaf/30 transition-colors" />
            </button>
        </motion.div>
    );
};
