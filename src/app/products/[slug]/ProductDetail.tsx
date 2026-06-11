"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

type ProductKey = "lending-os" | "risk-assessment-os" | "collections-os";

const PRODUCT_DATA: Record<
  ProductKey,
  {
    number: string;
    title: string;
    subtitle: string;
    tagline: string;
    description: string;
    heroBg: string;
    accentColor: string;
    cardBg: string;
    features: { title: string; desc: string }[];
    workflow: { step: string; title: string; desc: string }[];
    metrics: { value: string; label: string; note: string }[];
  }
> = {
  "lending-os": {
    number: "01",
    title: "Lending OS",
    subtitle: "Smart Lending Platform",
    tagline: "Originate. Underwrite. Disburse. At Scale.",
    description:
      "Automate your entire lending lifecycle from application to disbursal with AI-powered decisions, co-lending capabilities, and real-time risk management — all on a single platform.",
    heroBg: "linear-gradient(135deg, #d7e2ff 0%, #eef2ff 60%, #f5f7ff 100%)",
    accentColor: "#3b6ef0",
    cardBg: "var(--secondary-blue)",
    features: [
      {
        title: "Automated Underwriting",
        desc: "AI-powered credit decisioning using bureau data, bank statements, and alternative data sources. Sub-2-second decisions at enterprise scale.",
      },
      {
        title: "Co-Lending Module",
        desc: "Manage co-lending partnerships with top PSU and private banks. Seamless balance sheet optimization and yield management.",
      },
      {
        title: "Disbursement Automation",
        desc: "One-click disbursement to any UPI handle, bank account, or digital wallet. Full reconciliation and audit trail included.",
      },
      {
        title: "Risk-Based Pricing",
        desc: "Dynamic pricing engine adjusts rates based on real-time risk scores, product type, and borrower profile for maximum yield.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Apply",
        desc: "Borrower applies via web, mobile, or API. Documents uploaded and verified in real-time through AI-powered OCR and validation.",
      },
      {
        step: "02",
        title: "Underwrite",
        desc: "AI engine pulls bureau scores, bank statements, and alternative data. Composite risk score computed in milliseconds.",
      },
      {
        step: "03",
        title: "Approve",
        desc: "Automated approval or escalation to human reviewer. Policy engine applies all lending rules with full explainability.",
      },
      {
        step: "04",
        title: "Disburse",
        desc: "Funds disbursed directly to borrower account via UPI, NEFT, or IMPS. Loan management system activates automatically.",
      },
    ],
    metrics: [
      { value: "2s", label: "Decision Time", note: "Median end-to-end credit decision" },
      { value: "40%", label: "Faster Approvals", note: "Vs. traditional underwriting" },
      { value: "3×", label: "Loan Volume", note: "Average portfolio growth in year 1" },
    ],
  },
  "risk-assessment-os": {
    number: "02",
    title: "Risk Assessment OS",
    subtitle: "Advanced Credit Intelligence Platform",
    tagline: "See More. Know More. Risk Less.",
    description:
      "Transform unstructured data into real-time risk intelligence. Predictive scoring, fraud detection, and adaptive algorithms that evolve continuously with your portfolio.",
    heroBg: "linear-gradient(135deg, #ffeae4 0%, #fff0ec 60%, #fff7f5 100%)",
    accentColor: "#f05d49",
    cardBg: "var(--secondary-pink)",
    features: [
      {
        title: "Alternative Data Ingestion",
        desc: "Pull from 50+ data sources — GST, ITR, bank statements, utility payments, and social signals — for a complete borrower picture.",
      },
      {
        title: "Predictive Scoring",
        desc: "XGBoost and neural network models trained on your portfolio data, refreshed weekly to reflect current market conditions.",
      },
      {
        title: "Fraud Detection",
        desc: "Multi-layered fraud signals including device fingerprinting, velocity checks, and identity verification. Reduce first-party fraud by 60%.",
      },
      {
        title: "Bureau Integration",
        desc: "Real-time connections to CIBIL, Experian, CRIF, and Equifax. Tri-merge reports with automated consent and compliance logging.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Collect",
        desc: "Ingest data from bureaus, banks, GST, and alternative sources via API or secure file upload.",
      },
      {
        step: "02",
        title: "Analyze",
        desc: "AI models process 200+ variables in parallel. Anomaly detection flags unusual patterns in real time.",
      },
      {
        step: "03",
        title: "Score",
        desc: "Composite risk score generated with full explainability. Each contributing factor ranked by weight and impact.",
      },
      {
        step: "04",
        title: "Decide",
        desc: "Policy engine maps score to approval, rejection, or escalation. Full audit log for regulatory compliance.",
      },
    ],
    metrics: [
      { value: "95%", label: "Scoring Accuracy", note: "On held-out validation sets" },
      { value: "30%", label: "NPA Reduction", note: "Average within 12 months of deployment" },
      { value: "60%", label: "Fraud Reduction", note: "Vs. rule-based systems" },
    ],
  },
  "collections-os": {
    number: "03",
    title: "Collections OS",
    subtitle: "Intelligent Recovery System",
    tagline: "Recover More. Spend Less. Stay Compliant.",
    description:
      "Optimize every collections touchpoint with behavioral analytics, AI-driven engagement, and automated payment plans designed to maximize recovery while preserving borrower relationships.",
    heroBg: "linear-gradient(135deg, #fff6e3 0%, #fffbf0 60%, #fffff8 100%)",
    accentColor: "#d4890a",
    cardBg: "var(--secondary-yellow)",
    features: [
      {
        title: "Behavioral Analytics",
        desc: "Deep learning models predict payment intent from 100+ behavioral signals — app usage, transaction patterns, and communication response rates.",
      },
      {
        title: "Multi-Channel Engagement",
        desc: "Automated WhatsApp, SMS, email, and IVR campaigns triggered by AI-determined optimal time and channel for each borrower.",
      },
      {
        title: "Smart Payment Plans",
        desc: "AI generates personalized repayment schedules based on borrower capacity, historical patterns, and portfolio strategy.",
      },
      {
        title: "Recovery Tracking",
        desc: "Real-time visibility into every account — from early delinquency to write-off. Full team performance dashboard included.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Identify",
        desc: "AI flags early delinquency signals before EMI due date. Proactive outreach reduces bucket roll rates significantly.",
      },
      {
        step: "02",
        title: "Engage",
        desc: "Personalized multi-channel communication at the optimal time for each borrower — WhatsApp, call, SMS, or email.",
      },
      {
        step: "03",
        title: "Recover",
        desc: "Smart payment link delivery with one-click pay. Auto-reconciliation back to the LOS within minutes.",
      },
      {
        step: "04",
        title: "Report",
        desc: "Full MIS with bucket-wise recovery rates, channel effectiveness, and team performance analytics.",
      },
    ],
    metrics: [
      { value: "25%", label: "Better Recovery", note: "Vs. manual collections teams" },
      { value: "40%", label: "Agent Efficiency", note: "Time saved per agent per day" },
      { value: "50%", label: "Digital Payments", note: "Shift to self-serve channels" },
    ],
  },
};

export function ProductDetail({ slug }: { slug: string }) {
  if (!(slug in PRODUCT_DATA)) {
    notFound();
  }
  const p = PRODUCT_DATA[slug as ProductKey];

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: p.heroBg }}
        >
          <div className="container-yubi pt-[140px] pb-20 sm:pt-[168px] sm:pb-24 lg:pt-[184px] lg:pb-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <span
                className="inline-block rounded-full px-3 py-1 text-[12px] font-black tracking-widest"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  color: p.accentColor,
                }}
              >
                PRODUCT {p.number}
              </span>

              <h1 className="mt-5 text-[clamp(2.2rem,5.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.025em]">
                {p.title}
              </h1>

              <p
                className="mt-2 text-[clamp(1.1rem,2vw,1.4rem)] font-semibold"
                style={{ color: p.accentColor }}
              >
                {p.tagline}
              </p>

              <p
                className="mt-5 max-w-[52ch] text-[16px] leading-relaxed sm:text-[17px]"
                style={{ color: "var(--text-secondary)" }}
              >
                {p.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#demo" className="btn-yubi">
                  Get Free Demo <ArrowUpRight />
                </a>
                <a href="/explore" className="btn-yubi btn-yubi-light">
                  ← All Products
                </a>
              </div>
            </motion.div>
          </div>

          {/* decorative blob */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle at 36% 34%, rgba(255,255,255,0.9) 0%, ${p.accentColor}44 55%, transparent 80%)`,
            }}
          />
        </section>

        {/* ── Metrics ── */}
        <section
          className="py-10 sm:py-14"
          style={{ background: "var(--primary-dark)" }}
        >
          <div className="container-yubi">
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {p.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <span
                    className="text-[clamp(2rem,5vw,3rem)] font-black leading-none tracking-tight"
                    style={{ color: p.accentColor }}
                  >
                    {m.value}
                  </span>
                  <span className="text-[14px] font-semibold text-white sm:text-[16px]">
                    {m.label}
                  </span>
                  <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {m.note}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="section-pad" style={{ background: "var(--bg-light)" }}>
          <div className="container-yubi">
            <Reveal className="text-center">
              <span className="eyebrow">Core Features</span>
              <h2 className="mx-auto mt-5 max-w-[24ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                Built for every stage of{" "}
                <span className="text-gradient">the lending cycle.</span>
              </h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
              {p.features.map((f) => (
                <Stagger.Item key={f.title}>
                  <div className="card-soft flex flex-col gap-3 rounded-[20px] p-7">
                    <div
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] text-[18px] font-black"
                      style={{
                        background: p.cardBg,
                        color: p.accentColor,
                      }}
                    >
                      ✦
                    </div>
                    <h3 className="text-[17px] font-bold">{f.title}</h3>
                    <p
                      className="text-[14.5px] leading-relaxed"
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

        {/* ── Workflow ── */}
        <section className="section-pad">
          <div className="container-yubi">
            <Reveal className="text-center">
              <span className="eyebrow">How It Works</span>
              <h2 className="mx-auto mt-5 max-w-[20ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                Simple steps.{" "}
                <span className="text-gradient-orange">Powerful results.</span>
              </h2>
            </Reveal>

            <div className="relative mt-14">
              {/* connector line (desktop) */}
              <div
                className="absolute left-0 right-0 hidden h-px top-[26px] lg:block"
                style={{ background: "var(--border-light)" }}
              />

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {p.workflow.map((w, i) => (
                  <Reveal key={w.step} delay={i * 0.12}>
                    <div className="relative flex flex-col gap-4">
                      <div
                        className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 text-[14px] font-bold"
                        style={{
                          background: p.cardBg,
                          borderColor: p.accentColor,
                          color: p.accentColor,
                        }}
                      >
                        {w.step}
                      </div>
                      <h3 className="text-[17px] font-bold">{w.title}</h3>
                      <p
                        className="text-[14px] leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {w.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad" style={{ background: "var(--bg-light)" }}>
          <div className="container-yubi">
            <Reveal>
              <div
                className="flex flex-col items-center gap-7 rounded-[32px] px-8 py-16 text-center sm:px-14"
                style={{ background: p.heroBg, border: "1px solid var(--border-light)" }}
              >
                <span className="eyebrow">{p.number} / {p.title}</span>
                <h2 className="max-w-[24ch] text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
                  Start using {p.title} for your business today.
                </h2>
                <p
                  className="max-w-[52ch] text-[16px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Join thousands of lenders who already use StrikeHike to make smarter decisions,
                  faster — at any scale.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="#demo" className="btn-yubi">
                    Get Free Demo <ArrowUpRight />
                  </a>
                  <a href="/explore" className="btn-yubi btn-yubi-outline">
                    See All Products
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
