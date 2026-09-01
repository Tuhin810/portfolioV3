"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PrologueProps {
  onEnter: () => void;
}

const GREETINGS = [
  "Welcome",
  "ようこそ",
  "स्वागत है",
  "欢迎",
  "مرحباً",
  "환영합니다",
  "무선",
  "Welcome",
];

export const Prologue: React.FC<PrologueProps> = ({ onEnter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll during preloader
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Step through multilingual greetings at a calm, smooth pace
  useEffect(() => {
    if (currentIndex >= GREETINGS.length - 1) {
      // Last greeting ("Welcome") reached — hold for 600ms, then lift curtain
      const finishTimer = setTimeout(() => {
        onEnter();
      }, 600);
      return () => clearTimeout(finishTimer);
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 550);

    return () => clearTimeout(timer);
  }, [currentIndex, onEnter]);

  const currentGreeting = GREETINGS[currentIndex];

  return (
    <motion.div
      key="prologue-curtain"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.95,
          ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curtain slide
        },
      }}
      className="fixed inset-0 z-50 flex flex-col justify-end items-end bg-[#0d0d0e] text-[#f5f5f5] overflow-hidden select-none cursor-pointer p-8 sm:p-12 md:p-16 lg:p-20"
      onClick={onEnter}
    >
      {/* Bottom Right Corner Multilingual Greeting */}
      <div className="text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight"
          >
            <div className="text-5xl sm:text-[7rem] font-light text-white leading-none">
              {currentGreeting}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
