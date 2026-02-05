"use client";

import React from "react";
import { motion } from "framer-motion";

const TRIALS = [
    {
        id: "I",
        title: "The Fragmented Core",
        challenge: "The system resisted scale, collapsing under its own weight.",
        constraint: "Bound by legacy stone and the pressure of immediate demand.",
        resolution: "Forged a stateless spine, allowing the architecture to breathe across the void."
    },
    {
        id: "II",
        title: "The Ghostly Interface",
        challenge: "Information was noise. The user was lost in the storm.",
        constraint: "The eye demands speed; the soul demands depth.",
        resolution: "Sculpted silence. Every pixel now serves the meditation of the user."
    }
];

export const Trials: React.FC = () => {
    return (
        <section className="py-64 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="mb-32 text-center"
            >
                <span className="font-serif text-[10px] tracking-[0.8em] uppercase text-gold-leaf opacity-60 mb-6 block">Chapter III</span>
                <h2 className="text-4xl md:text-6xl font-serif italic mb-6">The Forge</h2>
                <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-foreground/40 italic">
                    &ldquo;Trials that shaped the hand.&rdquo;
                </p>
            </motion.div>

            <div className="space-y-64">
                {TRIALS.map((trial, index) => (
                    <motion.div
                        key={trial.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
                    >
                        <div className="md:col-span-4 sticky top-32">
                            <span className="font-serif text-6xl md:text-8xl text-white/5 block mb-4">{trial.id}</span>
                            <h3 className="text-2xl md:text-3xl font-serif italic gold-text">{trial.title}</h3>
                        </div>

                        <div className="md:col-span-8 flex flex-col gap-12">
                            <div className="space-y-4">
                                <h4 className="font-serif text-[10px] tracking-[0.4em] uppercase text-gold-leaf/60">The Challenge</h4>
                                <p className="narrative-serif text-lg md:text-xl text-foreground/80 leading-relaxed italic">{trial.challenge}</p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-serif text-[10px] tracking-[0.4em] uppercase text-gold-leaf/60">The Constraint</h4>
                                <p className="font-sans text-sm text-foreground/60 leading-loose tracking-wide">{trial.constraint}</p>
                            </div>

                            <div className="space-y-4 pt-8 border-t border-white/5">
                                <h4 className="font-serif text-[10px] tracking-[0.4em] uppercase text-gold-leaf/60">The Resolution</h4>
                                <p className="font-sans text-sm text-foreground/50 leading-loose tracking-wide italic">{trial.resolution}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
