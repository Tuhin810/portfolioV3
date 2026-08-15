"use client";

import React from "react";
import Image from "next/image";

interface EditorialSidebarProps {
    title?: string;
    mainImage: string;
    topImage?: string;
    showMoon?: boolean;
    showMoscowPill?: boolean;
    rotation?: 0 | 180;
    layout?: 'info-first' | 'title-first';
    className?: string;
}

export const EditorialSidebar: React.FC<EditorialSidebarProps> = ({
    mainImage,
    topImage,
    className = ""
}) => {
    return (
        <div className={`hidden lg:flex flex-col w-[300px] self-stretch h-screen relative overflow-hidden  ${className}`}>
            {/* STAR */}
            {/* {topImage && (
                <div className="relative h-44 shrink-0 border-b border-white/10 overflow-hidden">
                    <Image
                        src={topImage}
                        alt=""
                        fill
                        sizes="300px"
                        className="object-cover object-center "
                    />
                </div>
            )} */}

            {/* PILLAR */}
            <div className="relative flex-1 overflow-hidden">
                <Image
                    src={mainImage}
                    alt=""
                    fill
                    sizes="300px"
                    className="object-cover object-center opacity-70"
                />
            </div>

        </div>
    );
};
