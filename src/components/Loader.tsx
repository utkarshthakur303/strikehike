"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Premium intro: logo fades + scales in while pastel shapes assemble behind it,
 * then the whole curtain lifts to reveal the page (~1.6s total).
 */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    // lock scroll while the curtain is up
    document.documentElement.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
          style={{ background: "var(--bg-page)" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {/* assembling pastel shapes */}
          <motion.span
            className="pointer-events-none absolute h-[360px] w-[360px] rounded-full"
            style={{ background: "var(--pastel-peach)", filter: "blur(8px)" }}
            initial={{ scale: 0, x: -260, y: -120, opacity: 0 }}
            animate={{ scale: 1, x: -180, y: -90, opacity: 0.7 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          <motion.span
            className="pointer-events-none absolute h-[300px] w-[300px] rounded-full"
            style={{ background: "var(--pastel-lavender)", filter: "blur(8px)" }}
            initial={{ scale: 0, x: 260, y: 140, opacity: 0 }}
            animate={{ scale: 1, x: 190, y: 110, opacity: 0.7 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.05 }}
          />
          <motion.span
            className="pointer-events-none absolute h-[240px] w-[240px] rounded-full"
            style={{ background: "var(--secondary-blue)", filter: "blur(6px)" }}
            initial={{ scale: 0, x: 220, y: -160, opacity: 0 }}
            animate={{ scale: 1, x: 170, y: -120, opacity: 0.6 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            <Logo />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
