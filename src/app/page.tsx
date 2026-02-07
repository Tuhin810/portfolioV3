"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Prologue } from "@/components/sections/Prologue";
import { Arrival } from "@/components/sections/Arrival";
import { Studio } from "@/components/sections/Studio";

import { About } from "@/components/sections/About";
import { Trials } from "@/components/sections/Trials";
import { Odyssey } from "@/components/sections/Odyssey";
import { Offering } from "@/components/sections/Offering";
import WorkPage from "@/components/sections/Work";
import { Images } from "@/components/sections/Images";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [isOfferingOpen, setIsOfferingOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!started ? (
          <Prologue onEnter={() => setStarted(true)} />
        ) : (
          <>
            <motion.div
              key="story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 0.5 }}
              className="w-full relative z-10"
            >
              {/* Stage II: THE CALLING */}
              <Arrival onHit={() => setIsOfferingOpen(true)} />

              {/* Stage III: THE FORGE */}
              <Trials />

              {/* Stage IV: THE DISCIPLINE */}
              <Studio />

              <WorkPage />

              <Images />

              {/* Stage V: THE ODYSSEY */}
              <Odyssey />

              {/* FINAL NARRATIVE SPACER */}
              <div className="h-[20vh]" />
            </motion.div>

            {/* MODAL SYSTEM */}
            <Offering
              isOpen={isOfferingOpen}
              onClose={() => setIsOfferingOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
