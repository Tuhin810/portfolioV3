"use client";

import React from "react";
import { motion } from "framer-motion";

const Atmosphere = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-background overflow-hidden" aria-hidden="true">
            {/* Mystical Fog */}
            <motion.div
                animate={{
                    x: [-100, 100],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(107,33,168,0.1)_0%,transparent_70%)] blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [100, -100],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-[120px]"
            />

            {/* Floating Particles (Placeholder logic) */}
            <div className="absolute inset-0 opacity-20 reveal-mask">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 20
                        }}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default Atmosphere;
