"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
    initial: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.02,
    },
    in: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
    },
    out: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.98,
    },
};

const pageTransition = {
    ease: "easeInOut",
    duration: 1.2,
} as any;

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full min-h-screen"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedPage;
