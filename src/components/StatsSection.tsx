"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function format(n: number) {
  return n.toLocaleString("en-IN");
}

function Counter({
  stat,
  run,
  index,
}: {
  stat: (typeof stats)[number];
  run: boolean;
  index: number;
}) {
  const value = useCountUp(stat.value, run);
  return (
    <motion.div
      className="flex flex-col items-center gap-2 px-2 text-center lg:border-l lg:first:border-l-0"
      style={{ borderColor: "var(--border-light)" }}
      initial={{ opacity: 0, y: 36 }}
      animate={run ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
    >
      <p
        className="text-[13px] font-medium sm:text-[14px]"
        style={{ color: "var(--text-secondary)" }}
      >
        {stat.label}
      </p>
      <h3 className="text-[22px] font-extrabold leading-none tracking-tight sm:text-[30px] lg:text-[38px]">
        {stat.prefix ? (
          <span style={{ color: "var(--primary-color)" }}>{stat.prefix}</span>
        ) : null}
        {format(value)}
        {stat.suffix ? (
          <span style={{ color: "var(--primary-color)" }}>{stat.suffix}</span>
        ) : null}
      </h3>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-12 sm:py-16">
      <div
        ref={ref}
        className="container-yubi grid grid-cols-1 gap-y-10 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      >
        {stats.map((stat, i) => (
          <Counter key={stat.label} stat={stat} run={inView} index={i} />
        ))}
      </div>
    </section>
  );
}
