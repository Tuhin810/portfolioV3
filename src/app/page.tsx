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
import { Footer } from "@/components/sections/Footer";
import WorkPage from "@/components/sections/Work";
import { Images } from "@/components/sections/Images";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [isOfferingOpen, setIsOfferingOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence>
        {!started && (
          <Prologue onEnter={() => setStarted(true)} />
        )}
      </AnimatePresence>

      <motion.div
        key="story"
        initial={{ opacity: 0 }}
        animate={{ opacity: started ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`w-full relative z-10 ${!started ? "pointer-events-none" : ""}`}
      >
              {/* Stage II: THE CALLING */}
              <Arrival onHit={() => setIsOfferingOpen(true)} />

              {/* Stage III: THE FORGE */}
              <Trials />

              {/* Stage IV: THE DISCIPLINE */}
              <Studio />

              {/* <WorkPage /> */}

              {/* <Images title="Odessy" /> */}

              {/* Stage V: THE ODYSSEY */}
              <Odyssey />

              {/* FINAL NARRATIVE FOOTER */}
              {/* <Footer onContact={() => setIsOfferingOpen(true)} /> */}
      </motion.div>

      {/* MODAL SYSTEM */}
      <Offering
        isOpen={isOfferingOpen}
        onClose={() => setIsOfferingOpen(false)}
      />
    </div>
  );
}
