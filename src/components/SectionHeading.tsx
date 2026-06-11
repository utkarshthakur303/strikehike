"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRightLine } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  light = false,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  light?: boolean;
  action?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, ease: EASE }}
      className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
      <div className="flex flex-col gap-4">
        <span
          className="eyebrow"
          style={light ? { color: "rgba(255,255,255,0.72)" } : undefined}
        >
          {eyebrow}
          <ArrowRightLine
            aria-hidden="true"
            style={{
              color: light ? "rgba(255,255,255,0.45)" : "var(--text-light)",
            }}
          />
        </span>
        <h2
          className="max-w-[680px] text-[26px] font-extrabold leading-tight tracking-tight sm:text-[34px] lg:text-[40px]"
          style={{ color: light ? "#fff" : "var(--text-primary)" }}
        >
          {title}
        </h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </motion.div>
  );
}
