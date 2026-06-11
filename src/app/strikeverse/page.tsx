"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/icons";
import React from "react";
import { yuverseProducts } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const CARD_TINTS = [
  "var(--secondary-pink)",
  "var(--secondary-blue)",
  "var(--secondary-yellow)",
  "var(--pastel-lavender)",
  "var(--pastel-peach)",
  "var(--pastel-cream)",
];

const PRODUCT_ICONS: Record<string, React.ReactElement> = {
  StrikeVoice: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 013 3v7a3 3 0 11-6 0V5a3 3 0 013-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8" />
    </svg>
  ),
  StrikeCI: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" />
    </svg>
  ),
  StrikeAlt: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M12 22V12M3.27 6.96L12 12l8.73-5.04" />
    </svg>
  ),
  StrikeVin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="14" height="14" rx="2" />
      <path d="M16 8l6-2v10l-6-2M7 10a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  ),
  StrikeSight: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35M11 8v3l2 2" />
    </svg>
  ),
  StrikeAccess: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
};

const PILLARS = [
  {
    title: "Data Intelligence",
    desc: "StrikeVerse ingests structured and unstructured data from 50+ sources — bureau, GST, bank statements, voice, and video — unifying them into a single borrower intelligence layer.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12M21 5v14c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" />
      </svg>
    ),
  },
  {
    title: "Decision Intelligence",
    desc: "Neural networks and explainable AI models transform raw data into actionable risk scores, credit assessments, and behavioural predictions — with full audit trails.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Automation Intelligence",
    desc: "From conversational bots to AI avatars, StrikeVerse automates customer touchpoints across the loan lifecycle — reducing manual effort while improving borrower experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export default function StrikeVersePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Dark Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, #0e0a2e 0%, #130f3c 40%, #1e1260 70%, #130f3c 100%)",
          }}
        >
          {/* background glow blobs */}
          <div
            className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #f05d49 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, #6938ef 0%, transparent 70%)",
            }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="container-yubi flex flex-col items-center pt-[140px] pb-24 text-center sm:pt-[168px] sm:pb-28 lg:pt-[184px] lg:pb-32"
          >
            <motion.span
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-semibold"
              style={{
                borderColor: "rgba(105,56,239,0.4)",
                background: "rgba(105,56,239,0.15)",
                color: "#a78bfa",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#a78bfa" }}
              />
              AI-Powered Suite
            </motion.span>

            <motion.h1
              variants={item}
              className="text-balance text-[clamp(2.5rem,6.4vw,4.25rem)] font-extrabold leading-[1.07] tracking-[-0.025em] text-white"
            >
              Introducing
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #f05d49 0%, #f7945d 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                StrikeVerse
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-7 max-w-[50ch] text-[15.5px] leading-relaxed sm:text-[17px]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              A multiverse of AI-powered lending solutions designed to enhance
              decision-making and drive inclusion. Leveraging data-driven models and
              scalable infrastructure, StrikeVerse empowers lenders at every scale.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
            >
              <a href="#demo" className="btn-yubi">
                Get Free Demo <ArrowUpRight />
              </a>
              <a
                href="/"
                className="btn-yubi"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                }}
              >
                ← Back to Home
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Products Grid ── */}
        <section className="section-pad">
          <div className="container-yubi">
            <Reveal className="text-center">
              <span className="eyebrow">The Suite</span>
              <h2 className="mx-auto mt-5 max-w-[22ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                Six AI modules.{" "}
                <span className="text-gradient">One intelligent ecosystem.</span>
              </h2>
              <p
                className="mx-auto mt-5 max-w-[56ch] text-[16px] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Each StrikeVerse product is a specialized AI engine that plugs directly into your
                existing lending stack — independently powerful, even stronger together.
              </p>
            </Reveal>

            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {yuverseProducts.map((product, i) => (
                <Stagger.Item key={product.name}>
                  <div
                    className="card-soft flex h-full flex-col gap-4 rounded-[20px] p-6"
                    style={{ background: CARD_TINTS[i % CARD_TINTS.length] }}
                  >
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-white/70"
                      style={{ color: "var(--primary-color)" }}
                    >
                      {PRODUCT_ICONS[product.name] ?? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-[18px] font-bold tracking-tight">{product.name}</h3>
                    <p
                      className="flex-1 text-[14px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {product.description}
                    </p>
                    <div
                      className="flex items-center gap-1.5 text-[13.5px] font-semibold"
                      style={{ color: "var(--primary-color)" }}
                    >
                      Learn More <ArrowUpRight />
                    </div>
                  </div>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── Three Pillars ── */}
        <section
          className="section-pad"
          style={{ background: "var(--bg-light)" }}
        >
          <div className="container-yubi">
            <Reveal className="text-center">
              <span className="eyebrow">Core Capabilities</span>
              <h2 className="mx-auto mt-5 max-w-[22ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                Three pillars of{" "}
                <span className="text-gradient">AI-powered lending.</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.1}>
                  <div className="card-soft flex flex-col gap-5 rounded-[20px] p-7">
                    <div
                      className="grid h-12 w-12 place-items-center rounded-[16px]"
                      style={{
                        background: "var(--primary-dark)",
                        color: "#a78bfa",
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <h3 className="text-[18px] font-bold">{pillar.title}</h3>
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dark CTA ── */}
        <section className="section-pad">
          <div className="container-yubi">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-[32px] px-8 py-16 text-center sm:px-14"
                style={{
                  background:
                    "linear-gradient(145deg, #0e0a2e 0%, #130f3c 50%, #1e1260 100%)",
                  color: "#fff",
                }}
              >
                {/* glow accent */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-25"
                  style={{
                    background:
                      "radial-gradient(circle, #f05d49 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex flex-col items-center gap-7">
                  <span
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-semibold"
                    style={{
                      borderColor: "rgba(167,139,250,0.3)",
                      background: "rgba(167,139,250,0.12)",
                      color: "#a78bfa",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "#a78bfa" }}
                    />
                    StrikeVerse
                  </span>
                  <h2 className="max-w-[26ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                    Bring AI intelligence to every layer of your lending stack.
                  </h2>
                  <p
                    className="max-w-[52ch] text-[16px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    StrikeVerse modules work standalone or as an integrated suite.
                    Start with one AI product and expand as your needs grow.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a href="#demo" className="btn-yubi">
                      Get Free Demo <ArrowUpRight />
                    </a>
                    <a
                      href="/explore"
                      className="btn-yubi"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        borderColor: "rgba(255,255,255,0.2)",
                        color: "#fff",
                      }}
                    >
                      Explore Platform
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
