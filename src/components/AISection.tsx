"use client";

import { motion } from "framer-motion";
import { yuverseProducts } from "@/data/content";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./motion/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const cardTints = [
  "var(--secondary-pink)",
  "var(--secondary-blue)",
  "var(--secondary-yellow)",
  "var(--pastel-lavender)",
  "var(--pastel-peach)",
  "var(--pastel-cream)",
];

/* Static node positions — deterministic, no trig (avoids SSR/hydration mismatch) */
const NODES = [
  { x: 190, y: 165, r: 44, main: true },   // hub
  { x: 58,  y: 82,  r: 22, main: false },
  { x: 322, y: 72,  r: 18, main: false },
  { x: 340, y: 240, r: 20, main: false },
  { x: 60,  y: 248, r: 18, main: false },
  { x: 190, y: 298, r: 16, main: false },
  { x: 190, y: 32,  r: 14, main: false },
];

const EDGES = NODES.slice(1).map((n) => ({
  x1: NODES[0].x, y1: NODES[0].y, x2: n.x, y2: n.y,
}));

/** Animated AI network visualization for the StrikeVerse section */
function AIVisualization() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[32px] p-6 sm:p-8"
      style={{
        background:
          "linear-gradient(145deg, #0e0a2e 0%, #130f3c 40%, #1e1260 70%, #130f3c 100%)",
        boxShadow: "0 40px 100px rgba(105,56,239,0.28)",
        minHeight: 340,
      }}
    >
      {/* glow blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 260, height: 260,
          top: -60, left: -60,
          background:
            "radial-gradient(circle at 40% 40%, rgba(240,93,73,0.45) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 300, height: 300,
          bottom: -80, right: -60,
          background:
            "radial-gradient(circle at 60% 60%, rgba(105,56,239,0.55) 0%, transparent 65%)",
          filter: "blur(35px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* network SVG */}
      <div className="relative aspect-square w-full max-w-[380px] mx-auto">
        <svg
          viewBox="0 0 380 340"
          className="h-full w-full"
          aria-label="StrikeVerse AI network"
        >
          <defs>
            <radialGradient id="ai-hub" cx="40%" cy="36%" r="60%">
              <stop offset="0%" stopColor="#f0a090" />
              <stop offset="45%" stopColor="#f05d49" />
              <stop offset="100%" stopColor="#b03020" />
            </radialGradient>
            <radialGradient id="ai-node" cx="38%" cy="34%" r="60%">
              <stop offset="0%" stopColor="#c8b0ff" />
              <stop offset="50%" stopColor="#9060f0" />
              <stop offset="100%" stopColor="#5030b8" />
            </radialGradient>
            <filter id="ai-glow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" />
            </filter>
          </defs>

          {/* connection edges — animated dashes */}
          {EDGES.map((e, i) => (
            <motion.line
              key={i}
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              stroke="rgba(150,120,255,0.35)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.15 + i * 0.1 }}
            />
          ))}

          {/* outer slowly rotating ring */}
          <motion.circle
            cx="190" cy="165" r="115"
            fill="none"
            stroke="rgba(240,93,73,0.2)"
            strokeWidth="1"
            strokeDasharray="4 12"
            style={{ originX: "190px", originY: "165px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          {/* inner ring */}
          <motion.circle
            cx="190" cy="165" r="75"
            fill="none"
            stroke="rgba(105,56,239,0.25)"
            strokeWidth="1"
            strokeDasharray="3 8"
            style={{ originX: "190px", originY: "165px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />

          {/* satellite nodes */}
          {NODES.slice(1).map((n, i) => (
            <motion.g
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              style={{ originX: `${n.x}px`, originY: `${n.y}px` }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.1 }}
            >
              {/* glow ring */}
              <circle
                cx={n.x} cy={n.y} r={n.r + 8}
                fill="rgba(105,56,239,0.12)"
              />
              <circle cx={n.x} cy={n.y} r={n.r} fill="url(#ai-node)" />
              <circle
                cx={n.x} cy={n.y} r={n.r}
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
              />
            </motion.g>
          ))}

          {/* pulsing halo behind hub */}
          <motion.circle
            cx="190" cy="165" r="58"
            fill="rgba(240,93,73,0.18)"
            animate={{ r: [54, 64, 54], opacity: [0.18, 0.35, 0.18] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* central hub */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            style={{ originX: "190px", originY: "165px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <circle cx="190" cy="165" r="46" fill="url(#ai-hub)" />
            <circle
              cx="190" cy="165" r="46"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
            />
            <text
              x="190" y="165"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="40"
              fontWeight="800"
              fill="#fff"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }}
            >
              S
            </text>
          </motion.g>

          {/* small orbiting dot */}
          <motion.circle
            r="5"
            fill="var(--primary-color)"
            style={{ originX: "190px", originY: "165px" }}
            animate={{
              cx: [268, 190, 112, 190, 268],
              cy: [165, 50, 165, 280, 165],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* label strip */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-[13px] font-semibold text-white/80 backdrop-blur-md whitespace-nowrap">
        StrikeVerse · AI Network
      </div>
    </div>
  );
}

export function AISection() {
  return (
    <section id="ai-solutions" className="section-pad">
      <div className="container-yubi">
        {/* Top: intro copy + animated visualization */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">AI Solutions</span>
            <h2 className="mt-4 max-w-[520px] text-[28px] font-extrabold leading-tight tracking-tight sm:text-[36px] lg:text-[42px]">
              Lending, upgraded.
              <br />
              <span className="text-gradient">AI that works.</span>
            </h2>
            <h3 className="mt-6 text-[18px] font-bold leading-snug sm:text-[20px]">
              StrikeVerse — AI-driven financial intelligence for inclusive banking
            </h3>
            <p
              className="mt-4 max-w-[520px] text-[15px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              A multiverse of AI-powered lending solutions designed to enhance
              decision-making and drive inclusion. By leveraging data-driven
              models and scalable infrastructure, it empowers lenders to deliver
              efficient, customer-centric experiences at scale.
            </p>
            <a href="/strikeverse" className="btn-yubi mt-7">
              Explore StrikeVerse
              <ArrowUpRight />
            </a>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <AIVisualization />
          </Reveal>
        </div>

        {/* Bottom: StrikeVerse product grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5 lg:mt-20 lg:grid-cols-4">
          {yuverseProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col gap-4 rounded-[20px] border p-5"
              style={{
                borderColor: "var(--border-light)",
                background: "var(--bg-white)",
                boxShadow: "var(--shadow-soft)",
                transition: "box-shadow 0.5s var(--ease-smooth)",
              }}
            >
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] text-[18px] font-extrabold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[6deg] group-hover:scale-110"
                style={{
                  background: cardTints[i % cardTints.length],
                  color: "var(--primary-color)",
                }}
              >
                {product.name.replace(/^Strike/, "").slice(0, 2)}
              </div>
              <div>
                <h4 className="text-[16px] font-bold">{product.name}</h4>
                <p
                  className="mt-1.5 text-[13.5px] leading-snug"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
