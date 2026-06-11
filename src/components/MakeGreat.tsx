"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "./icons";
import { Parallax } from "./motion/Parallax";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MakeGreat() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-yubi">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative overflow-hidden rounded-[48px] px-8 py-24 text-center sm:px-12 sm:py-32"
          style={{
            background:
              "linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 45%, var(--primary-purple) 130%)",
          }}
        >
          {/* parallax decorative blobs */}
          <Parallax speed={50} className="pointer-events-none absolute -left-20 -top-20">
            <div
              className="h-72 w-72 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, #fff, transparent 70%)",
              }}
            />
          </Parallax>
          <Parallax speed={-40} className="pointer-events-none absolute -bottom-24 -right-16">
            <div
              className="h-80 w-80 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, #fff, transparent 70%)",
              }}
            />
          </Parallax>

          <p className="relative text-[15px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Built To
          </p>
          <h2 className="relative mt-3 text-[clamp(1.75rem,7vw,4.25rem)] font-extrabold tracking-tight text-white">
            #MakeGreatHappen
          </h2>
          <a
            href="#demo"
            className="relative mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            style={{ color: "var(--primary-color)" }}
          >
            Get Free Demo
            <ArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
