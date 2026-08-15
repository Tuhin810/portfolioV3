"use client";

import React from "react";
import { motion, type MotionValue } from "framer-motion";

/* ----------------------------------
   THE MEANDER — a true running-spiral fret, tiled as an SVG pattern
   so it repeats seamlessly at any width.
----------------------------------- */

export const MeanderBand: React.FC<{ id: string; className?: string }> = ({ id, className = "" }) => (
    <svg className={className} width="100%" height="16" viewBox="0 0 192 16" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
            <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
                <path
                    d="M0 14 H16 M3 14 V3 H13 V11 H7 V7 H10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="square"
                />
            </pattern>
        </defs>
        <rect width="192" height="16" fill={`url(#${id})`} />
    </svg>
);

/* ----------------------------------
   CORNER — an angular Greek bracket
----------------------------------- */

export const GreekCorner: React.FC<{ className?: string }> = ({ className = "" }) => (
    <svg width="72" height="72" viewBox="0 0 72 72" className={className} aria-hidden>
        <path
            d="M2 70 V14 H14 V58 H30 V26 H22 V50 M2 14 H58 V26 H26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
        />
        <circle cx="62" cy="62" r="2" fill="currentColor" />
    </svg>
);

/* ----------------------------------
   SACRED GEOMETRY — concentric orbits, radiating spokes and the
   inscribed forms the Greeks built their proportions from.
----------------------------------- */

interface GeometryProps {
    rotate?: MotionValue<number>;
    counterRotate?: MotionValue<number>;
    still?: boolean;
}

export const SacredGeometry: React.FC<GeometryProps> = ({ rotate, counterRotate, still }) => (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <div className="relative aspect-square w-[min(150vh,150vw)] max-w-[1100px] text-gold">

            {/* radiating spokes — light thrown from the artefact */}
            <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
                style={rotate ? { rotate } : undefined}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.16 }}
                transition={{ duration: still ? 0.3 : 2.4, delay: still ? 0 : 0.5 }}
                aria-hidden
            >
                {Array.from({ length: 48 }).map((_, i) => {
                    const a = (i * 360) / 48;
                    const long = i % 4 === 0;
                    return (
                        <line
                            key={a}
                            x1={100 + 46 * Math.cos((a * Math.PI) / 180)}
                            y1={100 + 46 * Math.sin((a * Math.PI) / 180)}
                            x2={100 + (long ? 96 : 82) * Math.cos((a * Math.PI) / 180)}
                            y2={100 + (long ? 96 : 82) * Math.sin((a * Math.PI) / 180)}
                            stroke="currentColor"
                            strokeWidth={long ? 0.5 : 0.25}
                        />
                    );
                })}
            </motion.svg>

            {/* the outer orbit, carrying phase nodes */}
            <motion.div
                className="absolute inset-[6%] rounded-full border border-gold/25"
                style={counterRotate ? { rotate: counterRotate } : undefined}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: still ? 0.3 : 2, ease: [0.22, 1, 0.36, 1] }}
            >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <span
                        key={angle}
                        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full border border-gold/60 bg-[#0a0a09] md:h-3 md:w-3"
                        style={{ transform: `rotate(${angle}deg) translate(clamp(180px, 47vw, 520px)) rotate(-${angle}deg) translate(-50%, -50%)` }}
                    >
                        <span className={`absolute inset-[2px] rounded-full ${i % 2 === 0 ? "bg-gold/40" : "border border-gold/25"}`} />
                    </span>
                ))}
            </motion.div>

            {/* inner orbits + the inscribed forms */}
            <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
                style={rotate ? { rotate } : undefined}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: still ? 0.3 : 2.4, delay: still ? 0 : 0.3 }}
                aria-hidden
            >
                <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeOpacity="0.10" strokeWidth="0.4" />
                <circle cx="100" cy="100" r="52" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="0.4" strokeDasharray="1 4" />

                {/* two opposed triangles — earth and sky in one figure */}
                <polygon points="100,32 159,134 41,134" fill="none" stroke="currentColor" strokeOpacity="0.13" strokeWidth="0.5" />
                <polygon points="100,168 41,66 159,66" fill="none" stroke="currentColor" strokeOpacity="0.13" strokeWidth="0.5" />

                {/* the inscribed square, turned on its point */}
                <rect x="49" y="49" width="102" height="102" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.4" transform="rotate(45 100 100)" />
            </motion.svg>

            {/* the horizon, with nodes at either end */}
            <motion.div
                className="absolute left-1/2 top-1/2 flex h-px w-[96vw] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 items-center"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.25 }}
                transition={{ duration: still ? 0.3 : 2, ease: "circOut" }}
            >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                <span className="absolute left-0 h-1.5 w-1.5 rounded-full bg-gold/70" />
                <span className="absolute right-0 h-1.5 w-1.5 rounded-full bg-gold/70" />
            </motion.div>
        </div>
    </div>
);
