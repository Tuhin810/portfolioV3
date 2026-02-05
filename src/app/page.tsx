"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Prologue } from "@/components/sections/Prologue";
import { Arrival } from "@/components/sections/Arrival";
import { Studio } from "@/components/sections/Studio";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!started ? (
          <Prologue onEnter={() => setStarted(true)} />
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, delay: 0.5 }}
            className="w-full"
          >
            <Arrival />
            <Studio />

            {/* SPACER FOR SCROLLING NARRATIVE */}
            <div className="h-[20vh]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
