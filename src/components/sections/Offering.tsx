"use client";

import React from "react";
import { motion } from "framer-motion";

export const Offering: React.FC = () => {
    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center px-6 bg-background">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 4 }}
                className="text-center space-y-16"
            >
                <div className="space-y-4">
                    <span className="font-serif text-[10px] tracking-[0.8em] uppercase text-gold-leaf opacity-40">The Final Offering</span>
                    <h2 className="text-3xl md:text-5xl font-serif italic text-foreground/80 lowercase tracking-widest leading-loose">
                        If this work calls to you, <br className="hidden md:block" /> respond.
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-12">
                    <motion.a
                        href="mailto:hello@tuhin.design"
                        whileHover={{ letterSpacing: "0.8em" }}
                        className="font-serif text-[11px] tracking-[0.6em] uppercase text-gold-leaf/60 hover:text-gold-leaf transition-all duration-700 underline underline-offset-[12px] decoration-gold-leaf/20"
                    >
                        hello@tuhin.design
                    </motion.a>

                    <div className="w-[1px] h-24 bg-gold-leaf/10" />
                </div>

                <div className="pt-24 opacity-20 hover:opacity-100 transition-opacity duration-1000">
                    <p className="font-serif text-[9px] tracking-[0.4em] uppercase">End of the first chronicle</p>
                    <p className="font-serif text-[8px] tracking-[0.2em] uppercase mt-2">© MMXXVI</p>
                </div>
            </motion.div>
        </section>
    );
};
