"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectCases = [
  {
    num: "CASE I",
    title: "The Golden Web",
    intent: "Designed to endure misuse.",
    decision: "Prioritized resilience over feature-bloat, ensuring a fail-safe architecture for high-stakes trade.",
    outcome: "A marketplace that breathes under pressure."
  },
  {
    num: "CASE II",
    title: "The Oracle",
    intent: "Making the unseen visible.",
    decision: "Implemented real-time data orchestration to predict flux before it manifests.",
    outcome: "Clarity in the center of chaos."
  }
];

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="prologue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground/80 mb-12 max-w-2xl italic leading-relaxed">
              &ldquo;Some stories are not meant to be rushed.&rdquo;
            </p>
            <button
              onClick={() => setStarted(true)}
              className="group relative px-8 py-3 overflow-hidden text-[10px] uppercase tracking-[0.5em] text-foreground/40 hover:text-foreground/90 transition-colors"
            >
              <span className="relative z-10 transition-transform duration-700 group-hover:tracking-[0.7em]">Enter</span>
              <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 transition-colors" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, delay: 0.5 }}
            className="w-full"
          >
            {/* CHAPTER I — ARRIVAL */}
            <section className="relative flex flex-col items-center justify-center min-h-screen px-6 w-full max-w-[100vw] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 4, delay: 0.5 }}
                className="glow-text-container w-full flex justify-center"
              >
                <div className="volumetric-glow" />
                <h1 className="text-[25vw] font-bold tracking-[-0.08em] uppercase leading-none liquid-light select-none text-center">
                  Tuhin
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 4 }}
                className="absolute bottom-12 px-12 text-[9px] uppercase tracking-[0.4em] font-medium opacity-30"
              >
                <p className="animate-pulse">Scroll to explore</p>
              </motion.div>
            </section>

            {/* CHAPTER II — THE WORK */}
            <section className="py-32 px-6 max-w-5xl mx-auto space-y-64">
              {projectCases.map((project, i) => (
                <div key={project.num} className="flex flex-col items-start">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    viewport={{ once: true, margin: "-20%" }}
                    className="font-serif text-[10px] tracking-[0.6em] mb-4"
                  >
                    {project.num}
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 2 }}
                  >
                    <h2 className="font-serif text-4xl md:text-6xl text-foreground/90 mb-8 italic">
                      {project.title}
                    </h2>

                    <div className="w-full aspect-video bg-white/5 border border-white/5 mb-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-[10px] uppercase tracking-widest text-foreground/20 italic">
                        Cinematic Still Case Study
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                      <div className="space-y-4">
                        <p className="font-serif text-xl italic text-foreground/70">&ldquo;{project.intent}&rdquo;</p>
                      </div>
                      <div className="space-y-6 text-sm text-foreground/50 leading-relaxed font-sans font-light">
                        <p><span className="text-foreground/80 block mb-2 uppercase text-[9px] tracking-widest font-normal">Technical Decision</span> {project.decision}</p>
                        <p><span className="text-foreground/80 block mb-2 uppercase text-[9px] tracking-widest font-normal">Outcome</span> {project.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </section>

            {/* INTERLUDE — PAUSE */}
            <section className="min-h-[60vh] flex items-center justify-center group">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-[9px] uppercase tracking-[0.8em] text-foreground/5 transition-opacity duration-1000 group-hover:opacity-30"
              >
                Still reading?
              </motion.p>
            </section>

            {/* CHAPTER III — FRAGMENTS (Gallery) */}
            <section className="py-32 space-y-32">
              <div className="px-6 max-w-5xl mx-auto mb-24">
                <h2 className="font-serif text-[10px] tracking-[0.6em] text-foreground/40 uppercase">Chapter III — Fragments</h2>
              </div>

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3 }}
                  className="relative group w-full h-[70vh] bg-white/5 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
                  <div className="w-full h-full bg-white/5 flex items-center justify-center text-[10px] uppercase tracking-widest text-foreground/10 italic">
                    Visual Fragment {i + 1}
                  </div>
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                    <p className="narrative-serif text-sm italic text-foreground tracking-wide">
                      {i === 0 ? "Some places stay longer than others." : i === 1 ? "Silence is an architect's best tool." : "The work endures through the noise."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* CHAPTER IV — PHILOSOPHY */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center py-32">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className="space-y-4 max-w-4xl"
              >
                <p className="font-serif text-3xl md:text-5xl text-foreground/90 leading-tight">Clarity over noise.</p>
                <p className="font-serif text-3xl md:text-5xl text-foreground/90 leading-tight">Depth over speed.</p>
                <p className="font-serif text-3xl md:text-5xl text-foreground/90 leading-tight">Work that endures.</p>
              </motion.div>
            </section>

            {/* FINAL CHAPTER — CONTACT */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center py-32 bg-[#080808]">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                className="font-serif text-[9px] tracking-[0.6em] mb-12 uppercase"
              >
                Ending
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="font-serif text-3xl md:text-4xl text-foreground/90 mb-16 italic"
              >
                &ldquo;If this resonated, we can talk.&rdquo;
              </motion.h2>

              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
                href="mailto:thakur@architect.com"
                className="narrative-serif text-xl border-b border-white/10 pb-1 hover:border-accent transition-colors duration-700 text-foreground/80 hover:text-foreground"
              >
                thakur@architect.com
              </motion.a>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
