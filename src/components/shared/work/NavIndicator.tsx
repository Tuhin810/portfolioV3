"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { WorkType } from "./WorkData";

interface NavIndicatorProps {
    i: number;
    work: WorkType;
    progress: MotionValue<number>;
    itemCount: number;
}

export const NavIndicator = ({ i, work, progress, itemCount }: NavIndicatorProps) => {
    const start = i / itemCount;
    const end = (i + 1) / itemCount;

    const width = useTransform(progress, [start, start + 0.1, end - 0.1, end], ["12px", "40px", "40px", "12px"]);
    const backgroundColor = useTransform(progress, [start, start + 0.1, end - 0.1, end], ["rgba(255,255,255,0.1)", work.themeColor, work.themeColor, "rgba(255,255,255,0.1)"]);

    return (
        <motion.div
            style={{ width, backgroundColor }}
            className="h-[1px] rounded-full transition-all duration-300"
        />
    );
};
