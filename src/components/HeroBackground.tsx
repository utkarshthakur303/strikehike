"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yA = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* warm radial wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 80% at 50% -5%, #fdeee7 0%, var(--bg-page) 55%)",
        }}
      />

      {/* Sphere 1 — coral/peach — top-left */}
      <motion.div
        style={{
          y: yA,
          opacity: fade,
          position: "absolute",
          left: "-4%",
          top: "6%",
        }}
      >
        <div
          style={{
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 36% 34%, #ffe5db 0%, #f5b09a 42%, #e07060 78%)",
            opacity: 0.55,
            animation: "floatDrift 32s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Sphere 2 — lavender/purple — top-right */}
      <motion.div
        style={{
          y: yA,
          opacity: fade,
          position: "absolute",
          right: "-5%",
          top: "2%",
        }}
      >
        <div
          style={{
            width: 340,
            height: 340,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 38% 32%, #ede0ff 0%, #c4a0f0 42%, #8a50d8 78%)",
            opacity: 0.48,
            animation: "floatDrift 40s ease-in-out infinite reverse",
          }}
        />
      </motion.div>

      {/* Sphere 3 — blue — mid-right */}
      <motion.div
        style={{
          y: yB,
          opacity: fade,
          position: "absolute",
          right: "8%",
          top: "55%",
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 38% 34%, #d8eaff 0%, #90b4f4 42%, #4870d0 78%)",
            opacity: 0.42,
            animation: "floatDrift 26s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Sphere 4 — yellow/cream — bottom-left */}
      <motion.div
        style={{
          y: yB,
          opacity: fade,
          position: "absolute",
          left: "4%",
          bottom: "12%",
        }}
      >
        <div
          style={{
            width: 230,
            height: 230,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 36% 33%, #fffbdc 0%, #f8e090 42%, #e0c040 78%)",
            opacity: 0.48,
            animation: "floatDrift 28s ease-in-out infinite reverse",
          }}
        />
      </motion.div>

      {/* Sphere 5 — small mint — center-left accent */}
      <motion.div
        style={{
          y: yC,
          opacity: fade,
          position: "absolute",
          left: "22%",
          top: "60%",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 38% 34%, #d8f5e8 0%, #88d8b0 42%, #40b080 78%)",
            opacity: 0.38,
            animation: "floatDrift 22s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* subtle SVG arc lines for depth */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.07 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 600 Q 400 200 900 550 Q 1200 800 1600 300"
          stroke="var(--primary-color)"
          strokeWidth="1.5"
        />
        <path
          d="M-50 800 Q 350 400 850 700 Q 1150 900 1500 450"
          stroke="var(--primary-purple)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
