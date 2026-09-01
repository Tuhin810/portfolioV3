"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface WorkProject {
    id: string;
    title: string;
    client: string;
    category: string;
    domain: string;
    image: string;
    liveUrl?: string;
}

const PROJECTS: WorkProject[] = [
    {
        id: "01",
        title: "Adyan Digital Agency website",
        client: "Adyan Studio",
        category: "Website",
        domain: "adyan.design",
        image: "/work/adyan.png",
        liveUrl: "#",
    },

    {
        id: "03",
        title: "TON Testnet DeFi App",
        client: "Tuhin",
        category: "DeFi",
        domain: "https://tonattest.tuhin.online/",
        image: "/work/ton.png",
        liveUrl: "#",
    },
    {
        id: "02",
        title: "The Suits Trial Web3 protocol",
        client: "Suits Gaming",
        category: "Web3 / App",
        domain: "suitstrial.io",
        image: "/work/parki.png",
        liveUrl: "#",
    },


];

// Doubled for smooth infinite looping
const INFINITE_TRACK = [...PROJECTS, ...PROJECTS];

const WorkCard: React.FC<{ project: WorkProject }> = ({ project }) => {
    return (
        <div className="flex flex-col group rounded w-[340px] sm:w-[720px] h-[400px]  flex-shrink-0 select-none">
            {/* Card Image Container with Hover Action */}
            <a
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-[16/11]  overflow-hidden bg-[#141414] border border-white/10 group-hover:border-white/25 transition-all duration-500 cursor-pointer block"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 440px, 540px"
                    className="object-cover object-top rounded transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5 sm:p-6">
                    {/* Center Circular Arrow Button */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1c1c1c]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                        <ArrowUpRight size={40} className="text-white" />
                    </div>
                </div>
            </a>


        </div>
    );
};

export default function Work() {
    return (
        <section
            id="work"
            className="relative w-full bg-[#080808] text-white py-24 sm:py-32 overflow-hidden select-none"
        >
            <style>{`
                @keyframes work-infinite-marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .work-marquee-track {
                    display: flex;
                    width: max-content;
                    animation: work-infinite-marquee 38s linear infinite;
                }
                .work-marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Section Header: Centered Clean Title */}
            <div className="text-center mb-16 sm:mb-20 px-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-medium text-white tracking-tight">
                    Latest Works
                </h2>
            </div>

            {/* Smooth Edge Fades so cards emerge & leave seamlessly */}
            <div className="relative w-full overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-44 z-20 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-44 z-20 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent" />

                {/* Continuous Infinite Scrolling Track (Pauses cleanly on hover) */}
                <div className="work-marquee-track gap-8 sm:gap-10 px-4 will-change-transform">
                    {INFINITE_TRACK.map((project, idx) => (
                        <WorkCard key={`${project.id}-${idx}`} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
