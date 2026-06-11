"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBackground } from "@/components/HeroBackground";
import { StatsSection } from "@/components/StatsSection";
import { LeadingFinancial } from "@/components/LeadingFinancial";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { products } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    bg: "var(--secondary-blue)",
    title: "AI-Powered Decisions",
    desc: "Machine learning models trained on 500M+ transactions deliver millisecond credit decisions with 95% accuracy.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    bg: "var(--secondary-pink)",
    title: "Real-Time Processing",
    desc: "End-to-end automation with sub-2-second loan origination and approval pipelines built for India's scale.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    bg: "var(--secondary-yellow)",
    title: "Deep Integrations",
    desc: "Connect with 100+ bureau, banking, and fintech APIs out of the box. REST, webhooks, and real-time event streams.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="12" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M10 12h4m2-4.5L14 10M16 14l-2 2.5" />
      </svg>
    ),
  },
  {
    bg: "var(--pastel-lavender)",
    title: "Actionable Analytics",
    desc: "Live dashboards tracking every loan, risk parameter, and collection metric. Drill-down to the transaction level.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.5 9l-5 5-3-3-5 5" />
      </svg>
    ),
  },
  {
    bg: "var(--pastel-peach)",
    title: "Enterprise Security",
    desc: "Bank-grade encryption, SOC 2 Type II certified, and RBI-compliant architecture. Zero-trust by design.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6L12 2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    bg: "var(--pastel-cream)",
    title: "Infinite Scalability",
    desc: "Auto-scaling cloud infrastructure handles 10M+ transactions per day without degradation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    num: "01",
    title: "Connect Your Systems",
    desc: "Integrate StrikeHike with your existing LOS, CRM, and bureau partners via REST APIs in under a day. Full sandbox available.",
  },
  {
    num: "02",
    title: "Configure Your Rules",
    desc: "Use no-code policy editors to set risk thresholds, approval workflows, and collection strategies — no engineering required.",
  },
  {
    num: "03",
    title: "Go Live Instantly",
    desc: "Deploy to production with confidence. Our SRE team ensures 99.9% uptime and handles the infrastructure from day one.",
  },
  {
    num: "04",
    title: "Scale Continuously",
    desc: "As your portfolio grows, StrikeHike adapts — retraining models, refining strategies, and delivering better outcomes.",
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

export default function ExplorePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <HeroBackground />
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="container-yubi flex flex-col items-center pt-[140px] pb-24 text-center sm:pt-[168px] sm:pb-28 lg:pt-[184px] lg:pb-32"
          >
            <motion.span variants={item} className="eyebrow mb-6">
              Platform Overview
            </motion.span>

            <motion.h1
              variants={item}
              className="text-balance text-[clamp(2.5rem,6.4vw,4.25rem)] font-extrabold leading-[1.07] tracking-[-0.025em]"
            >
              The Complete AI-Powered
              <br />
              <span className="text-gradient-orange">Financial Services OS</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-7 max-w-[50ch] text-[15.5px] leading-relaxed sm:text-[17px]"
              style={{ color: "var(--text-secondary)" }}
            >
              From loan origination to intelligent collections — StrikeHike&apos;s unified OS gives
              financial institutions everything they need to lend smarter, faster, and at scale.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
            >
              <a href="#demo" className="btn-yubi">
                Get Free Demo <ArrowUpRight />
              </a>
              <a href="/" className="btn-yubi btn-yubi-light">
                ← Back to Home
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Stats ── */}
        <StatsSection />

        {/* ── Products Overview ── */}
        <section className="section-pad" style={{ background: "var(--bg-light)" }}>
          <div className="container-yubi">
            <Reveal className="text-center">
              <span className="eyebrow">Our Products</span>
              <h2 className="mx-auto mt-5 max-w-[22ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                Three Intelligent OS.{" "}
                <span className="text-gradient">One Unified Platform.</span>
              </h2>
              <p
                className="mx-auto mt-5 max-w-[56ch] text-[16px] leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Each OS is purpose-built for a critical stage of the lending lifecycle — together
                they form the most complete financial infrastructure in India.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {products.map((p, i) => (
                <Reveal key={p.number} delay={i * 0.1}>
                  <a
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col rounded-[24px] p-7 card-soft"
                    style={{ background: p.pastel }}
                  >
                    <span
                      className="text-[12px] font-black tracking-widest"
                      style={{ color: "var(--primary-color)" }}
                    >
                      {p.number}
                    </span>
                    <h3 className="mt-4 text-[22px] font-bold tracking-tight">{p.title}</h3>
                    <p
                      className="mt-1.5 text-[13.5px] font-semibold"
                      style={{ color: "var(--primary-color)" }}
                    >
                      {p.subtitle}
                    </p>
                    <p
                      className="mt-3 flex-1 text-[14px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {p.description}
                    </p>
                    <div
                      className="mt-5 flex items-center gap-1.5 text-[14px] font-semibold"
                      style={{ color: "var(--primary-dark)" }}
                    >
                      Explore Now <ArrowUpRight />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Platform Features ── */}
        <section className="section-pad">
          <div className="container-yubi">
            <Reveal className="text-center">
              <span className="eyebrow">Platform Capabilities</span>
              <h2 className="mx-auto mt-5 max-w-[22ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                Everything you need.{" "}
                <span className="text-gradient">Nothing you don&apos;t.</span>
              </h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <Stagger.Item key={f.title}>
                  <div className="card-soft flex h-full flex-col gap-4 rounded-[20px] p-6">
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px]"
                      style={{ background: f.bg, color: "var(--primary-color)" }}
                    >
                      {f.icon}
                    </div>
                    <h3 className="text-[17px] font-bold leading-snug">{f.title}</h3>
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="section-pad" style={{ background: "var(--bg-light)" }}>
          <div className="container-yubi">
            <Reveal className="text-center">
              <span className="eyebrow">Getting Started</span>
              <h2 className="mx-auto mt-5 max-w-[22ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                Up and running
                <br />
                <span className="text-gradient-orange">in days, not months.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.num} delay={i * 0.12}>
                  <div className="flex flex-col gap-3">
                    <span
                      className="text-[52px] font-black leading-none tracking-tighter"
                      style={{ color: "var(--primary-color)", opacity: 0.14 }}
                    >
                      {s.num}
                    </span>
                    <h3 className="text-[17px] font-bold">{s.title}</h3>
                    <p
                      className="text-[14px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trusted By ── */}
        <LeadingFinancial />

        {/* ── CTA ── */}
        <section className="section-pad">
          <div className="container-yubi">
            <Reveal>
              <div
                className="flex flex-col items-center gap-7 rounded-[32px] px-8 py-16 text-center sm:px-14"
                style={{ background: "var(--primary-dark)", color: "#fff" }}
              >
                <span
                  className="eyebrow"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Get started today
                </span>
                <h2 className="max-w-[24ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                  Ready to transform your lending business?
                </h2>
                <p
                  className="max-w-[52ch] text-[16px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Join 17,000+ enterprises already using StrikeHike to drive financial inclusion,
                  reduce risk, and accelerate growth.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="#demo" className="btn-yubi">
                    Get Free Demo <ArrowUpRight />
                  </a>
                  <a
                    href="#"
                    className="btn-yubi"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      borderColor: "rgba(255,255,255,0.22)",
                    }}
                  >
                    Talk to Sales
                  </a>
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
