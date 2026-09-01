"use client";

import React, { useEffect, useRef, useState } from "react";
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
        id: "01",
        title: "Adyan Digital Agency website",
        client: "Adyan Studio",
        category: "Website",
        domain: "adyan.design",
        image: "/work/hobi.png",
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
    const sectionRef = useRef<HTMLElement | null>(null);
    // 0 = idle, 1 = artwork in, 2 = title in, 3 = marquee running
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const timers: ReturnType<typeof setTimeout>[] = [];
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                setStage(1);
                timers.push(setTimeout(() => setStage(2), 900));
                timers.push(setTimeout(() => setStage(3), 1700));
            },
            { threshold: 0.25 }
        );

        observer.observe(node);
        return () => {
            observer.disconnect();
            timers.forEach(clearTimeout);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="work"
            className="relative w-full h-screen  bg-[#080808] text-white py-24 sm:py-32 overflow-hidden select-none"
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
                .work-marquee-track.is-idle {
                    animation-play-state: paused;
                }

            `}</style>

            {/* Decorative Line-Art Backdrop */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <div
                    className={`relative h-[110%] w-[69%] max-w-[560px] -mt-36 mix-blend-screen transition-all duration-[1400ms] ease-out ${stage >= 1 ? "opacity-40 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                        }`}
                >
                    <Image
                        src="/design/her.png"
                        alt=""
                        fill
                        priority={false}
                        sizes="(max-width: 868px) 70vw, 720px"
                        className="object-contain object-center"
                    />
                </div>
            </div>
            {/* Vignette so the artwork melts into the section */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#080808_95%)]" />

            {/* Section Header: Centered Clean Title */}
            <div className="relative z-10 text-center mb-16 sm:mb-20 px-6">
                <h2
                    className={`text-4xl sm:text-5xl md:text-6xl font-sans font-medium text-white tracking-tight transition-all duration-1000 ease-out ${stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    Latest Works
                </h2>
            </div>

            {/* Smooth Edge Fades so cards emerge & leave seamlessly */}
            <div className="relative z-10 w-full overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-44 z-20 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-44 z-20 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent" />

                {/* Continuous Infinite Scrolling Track (Pauses cleanly on hover) */}
                <div
                    className={`work-marquee-track gap-8 sm:gap-10 px-4 will-change-transform transition-opacity duration-1000 ease-out ${stage >= 3 ? "opacity-100" : "opacity-0 is-idle"
                        }`}
                >
                    {INFINITE_TRACK.map((project, idx) => (
                        <WorkCard key={`${project.id}-${idx}`} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
