"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroWords } from "@/data/content";
import { ArrowUpRight } from "./icons";
import { HeroBackground } from "./HeroBackground";

const EASE = [0.22, 1, 0.36, 1] as const;

// widest word reserves the slot so the centered line never reflows as words cycle
const longest = heroWords.reduce((a, b) => (a.length >= b.length ? a : b));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroWords.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-yubi flex flex-col items-center pt-[140px] pb-24 text-center sm:pt-[168px] sm:pb-28 lg:pt-[184px] lg:pb-32"
      >
        <h1 className="text-balance text-[clamp(2.5rem,6.4vw,4.25rem)] font-extrabold leading-[1.07] tracking-[-0.025em]">
          <motion.span variants={item} className="block">
            Built for Billions
          </motion.span>
          <motion.span
            variants={item}
            className="mt-1 flex flex-wrap items-baseline justify-center gap-x-[0.26em]"
          >
            <span>Designed for</span>
            <span
              className="relative inline-block overflow-hidden align-bottom"
              style={{ height: "1.08em" }}
            >
              {/* invisible sizer reserves the widest word's width */}
              <span aria-hidden className="invisible whitespace-nowrap">
                {longest}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  className="text-gradient-orange absolute bottom-0 left-0 flex h-full items-end whitespace-nowrap leading-[1.08]"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-110%" }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {heroWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-[44ch] text-[15.5px] leading-relaxed sm:text-[17px]"
          style={{ color: "var(--text-secondary)" }}
        >
          StrikeHike is fuelling financial inclusion, scaling lending,
          transforming credit evaluation, and driving intelligent collections
          with the power of AI.
        </motion.p>

        <motion.a
          variants={item}
          href="#products"
          className="btn-yubi btn-yubi-light mt-9"
        >
          Explore StrikeHike
          <ArrowUpRight />
        </motion.a>
      </motion.div>
    </section>
  );
}
