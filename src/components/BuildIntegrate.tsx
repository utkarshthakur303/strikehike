"use client";

import { motion } from "framer-motion";
import { integrationFeatures, apiCodeLines } from "@/data/content";
import { Logo } from "./Logo";
import { ArrowUpRight, PuzzleIcon, CodeIcon, WebhookIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const iconMap = {
  puzzle: PuzzleIcon,
  code: CodeIcon,
  webhook: WebhookIcon,
};

export function BuildIntegrate() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--primary-dark)" }}
    >
      <div className="container-yubi">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span style={{ color: "var(--primary-color)" }}>Bh</span>arat&apos;s
            Lending Stacks
          </span>
          <h2 className="mt-4 max-w-[760px] text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[40px]">
            Build, Integrate, and Scale — Build India&apos;s Credit
            Infrastructure with StrikeHike
          </h2>
        </motion.div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Features */}
          <div className="flex flex-col gap-8">
            {integrationFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.title}
                  className="group flex gap-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
                >
                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-6 group-hover:scale-110"
                    style={{
                      background: "rgba(240,93,73,0.15)",
                      color: "var(--primary-color)",
                    }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center logo orb with orbiting rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative mx-auto hidden h-[240px] w-[240px] place-items-center lg:grid"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(240,93,73,0.32) 0%, transparent 70%)",
                animation: "pulseSoft 4s ease-in-out infinite",
              }}
            />
            <svg
              className="animate-spin-slow absolute inset-0 h-full w-full"
              viewBox="0 0 240 240"
              style={{ animationDuration: "40s" }}
            >
              <circle
                cx="120"
                cy="120"
                r="92"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
                strokeDasharray="3 9"
              />
              <circle cx="120" cy="28" r="4" fill="var(--primary-color)" />
              <circle cx="212" cy="120" r="3" fill="rgba(255,255,255,0.5)" />
            </svg>
            <div
              className="grid h-[120px] w-[120px] place-items-center rounded-full"
              style={{ background: "#fff" }}
            >
              <Logo />
            </div>
          </motion.div>

          {/* API code mock */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="overflow-hidden rounded-[20px]"
            style={{
              background: "#0b1a30",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-[13px] font-semibold text-white/80">
                StrikeHike
              </span>
              <span className="flex items-center gap-1 text-[12px] text-white/40">
                change language <ArrowUpRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-4 text-[13px] leading-relaxed">
              <code>
                {apiCodeLines.map((codeLine, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  >
                    <span className="w-4 shrink-0 select-none text-right text-white/25">
                      {i + 1}
                    </span>
                    <span style={{ color: "#9bd3a0" }}>{codeLine}</span>
                  </motion.div>
                ))}
              </code>
            </pre>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#demo" className="btn-yubi">
            Get Free Demo
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
