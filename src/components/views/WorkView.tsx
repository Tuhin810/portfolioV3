"use client";

import React from "react";
import { motion } from "framer-motion";
import { Images } from "../sections/Images";

interface WorkViewProps {
    onBack: () => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-[#0d0c0b] text-[#d4cdbc] p-6 md:p-12 overflow-y-auto flex flex-col"
        >
       {/* <Images /> */}
        </motion.div>
    );
};
