"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillsViewProps {
    onBack: () => void;
}

const getIconUrl = (slug: string) => {
    const mapping: Record<string, string> = {
        python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        nextdotjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        nodedotjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        aws: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        solidity: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/solidity.svg",
        firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        githubactions: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
        graphql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    };
    return mapping[slug] || `https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${slug}.svg`;
};

const MeanderRing = ({ radius, speed, reverse = false, color = "var(--gold-leaf)", opacity = 0.1, strokeWidth = 15 }) => {
    // Generate an accurate Greek Meander path for a circle
    // This is a simplified but visually effective pattern for SVG
    return (
        <motion.div
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
            <svg 
                viewBox="0 0 1000 1000" 
                className="w-full h-full overflow-visible"
                style={{ width: radius * 2, height: radius * 2 }}
            >
                <circle 
                    cx="500" cy="500" r={radius} 
                    fill="none" 
                    stroke={color} 
                    strokeWidth={strokeWidth} 
                    strokeDasharray="40 20" // Simulates the meander gaps
                    className="opacity-20"
                    style={{ opacity }}
                />
                {/* Decorative Pattern overlay */}
                <path 
                    d={`M 500 ${500 - radius} A ${radius} ${radius} 0 1 1 499.9 ${500 - radius}`}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth / 2}
                    strokeDasharray="20 10 5 10"
                    className="opacity-40"
                    style={{ opacity: opacity * 2 }}
                />
            </svg>
        </motion.div>
    );
};

const SkillNode = ({ slug, radius, angle, speed }: { slug: string, radius: number, angle: number, speed: number }) => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
            <div 
                className="absolute pointer-events-auto group"
                style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
                }}
            >
                {/* Medallion */}
                <motion.div 
                    whileHover={{ scale: 1.2, zIndex: 100 }}
                    className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-black border border-gold-leaf/20 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 hover:border-gold-leaf"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,139,92,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                        src={getIconUrl(slug)} 
                        alt={slug} 
                        className="w-8 h-8 md:w-10 md:h-10 object-contain filter group-hover:filter-none transition-all duration-700 contrast-125"
                    />
                </motion.div>

                {/* Tactical Meta */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                   <span className="text-[8px] tracking-[0.4em] uppercase text-gold-leaf bg-black/80 px-2 py-1 rounded-sm border border-gold-leaf/20">
                    {slug}
                   </span>
                </div>
            </div>
        </motion.div>
    );
};

export const SkillsView: React.FC<SkillsViewProps> = ({ onBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#030302] text-[#f2ede4d6] overflow-hidden font-serif select-none"
        >
            {/* 1. ATMOSPHERIC LAYER */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,139,92,0.05)_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20" />
            </div>

            {/* 2. THE MEANDER AXIS SYSTEM (Axis and Moving) */}
            <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Concentric Meander Rings from the Image */}
                <MeanderRing radius={450} speed={120} color="#cda56e" strokeWidth={60} opacity={0.15} />
                <MeanderRing radius={380} speed={80} reverse color="#222" strokeWidth={40} opacity={0.8} />
                <MeanderRing radius={330} speed={60} color="#cda56e" strokeWidth={30} opacity={0.3} />
                <MeanderRing radius={290} speed={40} reverse color="#111" strokeWidth={20} opacity={1} />

                {/* Central Focus: Ancient Theta */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-40 h-40 rounded-full border border-gold-leaf/10 flex items-center justify-center bg-black/40 backdrop-blur-3xl shadow-[0_0_100px_rgba(166,139,92,0.1)]">
                        <span className="text-8xl italic gold-text liquid-light drop-shadow-2xl">Θ</span>
                    </div>
                </div>

                {/* SKILLS DISTRIBUTED ALONG MOVING AXIS */}
                {/* Languages - Outer Fast Ring */}
                {["python", "typescript", "solidity", "rust", "javascript"].map((s, i) => (
                    <SkillNode key={s} slug={s} radius={430} angle={i * 72} speed={120} />
                ))}

                {/* Frameworks - Mid Ring */}
                {["react", "nextdotjs", "graphql", "nodedotjs"].map((s, i) => (
                    <SkillNode key={s} slug={s} radius={350} angle={i * 90 + 45} speed={80} />
                ))}

                {/* Infra - Inner Ring */}
                {["aws", "docker", "terraform", "githubactions", "mongodb"].map((s, i) => (
                    <SkillNode key={s} slug={s} radius={260} angle={i * 72 + 30} speed={60} />
                ))}
            </div>

            {/* 3. EDITORIAL NAVIGATION */}
            <div className="fixed top-0 left-0 w-full z-[300] p-12 md:p-14 flex justify-between items-start">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                         <span className="text-gold-leaf">✦</span>
                         <span className="text-[10px] tracking-[1em] uppercase opacity-40">Fragment II</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl italic gold-text tracking-tighter leading-none liquid-light">The Axis</h1>
                </div>

                <button
                    onClick={onBack}
                    className="group relative px-10 py-3 rounded-full border border-gold-leaf/20 hover:border-gold-leaf transition-all duration-700 overflow-hidden"
                >
                    <span className="relative z-10 text-[10px] tracking-[0.6em] uppercase text-gold-leaf/60 group-hover:text-gold-leaf">← Discard Portal</span>
                    <div className="absolute inset-0 bg-gold-leaf/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </button>
            </div>

            {/* 4. TACTICAL FOOTER */}
            <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-6 z-[300]">
                <div className="w-[1px] h-20 bg-gradient-to-b from-gold-leaf/40 to-transparent" />
                <p className="text-[10px] md:text-xs tracking-[1em] uppercase opacity-30 italic text-center px-8 leading-relaxed">
                    "Geometric order is the blueprint (Θ) of the digital divine."
                </p>
                <div className="flex gap-12 opacity-10 text-[9px] tracking-[0.5em] uppercase">
                    <span>Archived MMXXVI</span>
                    <span>System_Active</span>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-10">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30 mix-blend-overlay" />
            </div>
        </motion.div>
    );
};
