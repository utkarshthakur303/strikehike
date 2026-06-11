"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { solutionTabs } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { CardArtwork } from "./CardArtwork";
import { ArrowUpRight, PlayIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;
const MINT = "#e9f7ef";

export function SolutionsSection() {
  const [active, setActive] = useState(solutionTabs[0].id);
  const current = solutionTabs.find((t) => t.id === active)!;

  return (
    <section className="section-pad">
      <div className="container-yubi">
        <SectionHeading
          eyebrow="Use Cases"
          title={
            <>
              Loans. Leverage. Liabilities. Legacy{" "}
              <span style={{ color: "var(--primary-color)" }}>
                Reimagined by StrikeHike
              </span>
            </>
          }
        />

        <div className="mt-12 grid items-start gap-8 sm:mt-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ── LEFT: vertical tab list ─────────────────── */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {solutionTabs.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  aria-pressed={isActive}
                  className="relative flex items-center gap-4 overflow-hidden rounded-[24px] border px-5 py-4 text-left sm:px-6 sm:py-5"
                  style={{
                    background: isActive ? MINT : "transparent",
                    borderColor: isActive
                      ? "transparent"
                      : "var(--border-light)",
                    transition:
                      "background-color 0.5s var(--ease-smooth), border-color 0.5s var(--ease-smooth), transform 0.5s var(--ease-smooth)",
                    transform: isActive ? "translateX(6px)" : "translateX(0)",
                  }}
                >
                  {/* coral left accent on the active tab */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[4px] rounded-full"
                    style={{
                      background: "var(--primary-color)",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.4s var(--ease-smooth)",
                    }}
                  />
                  {/* small filled check / dot */}
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full"
                    style={{
                      background: isActive
                        ? "var(--primary-color)"
                        : "transparent",
                      border: isActive
                        ? "none"
                        : "1.5px solid var(--border-light)",
                      color: "#fff",
                      transition: "all 0.4s var(--ease-smooth)",
                    }}
                  >
                    <motion.svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.5 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <path
                        d="M5 12.5L10 17.5L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </span>
                  <span
                    className="flex-1 text-[16px] font-semibold sm:text-[19px]"
                    style={{
                      color: isActive
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                      transition: "color 0.4s var(--ease-smooth)",
                    }}
                  >
                    {tab.full}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full"
                    style={{
                      color: isActive
                        ? "var(--primary-color)"
                        : "var(--text-light)",
                      transition: "color 0.4s var(--ease-smooth)",
                    }}
                  >
                    <ArrowUpRight />
                  </span>
                </button>
              );
            })}

            <a href="#demo" className="btn-yubi mt-3 self-start">
              Get Free Demo
              <ArrowUpRight />
            </a>
          </motion.div>

          {/* ── RIGHT: designed dark media panel ────────── */}
          <motion.div
            className="relative flex h-[320px] flex-col overflow-hidden rounded-[28px] lg:h-[440px]"
            style={{
              background: "var(--primary-dark)",
              boxShadow: "var(--shadow-soft-lg)",
            }}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            {/* top header strip */}
            <div
              className="flex shrink-0 items-center gap-2 px-5 py-3 sm:px-7 sm:py-4"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: "var(--primary-color)" }}
              />
              <span
                className="text-[11px] font-medium sm:text-[13px]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Meet StrikeVerse &mdash; StrikeHike&apos;s AI powered
                Underwriting OS
              </span>
            </div>

            {/* center: rotating network graphic + play button */}
            <div className="relative flex flex-1 items-center justify-center">
              <motion.div
                aria-hidden
                className="absolute inset-0 grid scale-[1.35] place-items-center sm:scale-[1.7]"
                animate={{ rotate: 360 }}
                transition={{ duration: 90, ease: "linear", repeat: Infinity }}
              >
                <CardArtwork variant="network" color="rgba(255,255,255,0.5)" />
              </motion.div>

              <motion.button
                type="button"
                aria-label={`Play explainer video for ${current.short}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="relative z-10 grid h-16 w-16 place-items-center rounded-full text-white"
                style={{
                  background: "var(--primary-color)",
                  boxShadow: "0 16px 40px rgba(240,93,73,0.45)",
                }}
              >
                <PlayIcon className="ml-1" />
              </motion.button>
            </div>

            {/* bottom: coral pill bar showing the active solution */}
            <div className="shrink-0 px-4 pb-4 sm:px-5 sm:pb-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  className="flex items-center justify-between gap-3 rounded-full px-5 py-3 sm:px-6 sm:py-4"
                  style={{ background: "var(--primary-color)" }}
                  initial={{ opacity: 0, x: 24, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -24, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span className="text-[14px] font-semibold text-white sm:text-[16px]">
                    Solution for {current.short}
                  </span>
                  <span
                    className="hidden shrink-0 rounded-full px-3 py-1 text-[11px] font-medium sm:inline-block sm:text-[12px]"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      color: "#fff",
                    }}
                  >
                    Explainer Video
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
