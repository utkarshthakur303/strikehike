"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { PlayIcon, ArrowUpRight } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="section-pad">
      <div className="container-yubi">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hear from Our Clients"
          action={
            <div className="hidden gap-3 md:flex">
              <button
                aria-label="Previous testimonial"
                onClick={() => scrollBy(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border transition-all duration-300 hover:-translate-x-0.5 hover:bg-[var(--bg-light)]"
                style={{ borderColor: "var(--border-light)" }}
              >
                <ArrowUpRight style={{ transform: "rotate(-135deg)" }} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => scrollBy(1)}
                className="grid h-11 w-11 place-items-center rounded-full border transition-all duration-300 hover:translate-x-0.5 hover:bg-[var(--bg-light)]"
                style={{ borderColor: "var(--border-light)" }}
              >
                <ArrowUpRight style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>
          }
        />
      </div>

      <div
        ref={scroller}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(24px,calc((100vw-1320px)/2+24px))] pb-4 sm:mt-12 sm:gap-6"
      >
        {testimonials.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative aspect-[3/4] w-[300px] shrink-0 snap-start overflow-hidden rounded-[28px] sm:w-[360px]"
            style={{
              boxShadow: "var(--shadow-soft)",
              transition: "box-shadow 0.5s var(--ease-smooth)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              loading="lazy"
            />

            {/* Readable dark gradient overlay anchored to the lower portion */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(9,18,38,0.05) 0%, rgba(9,18,38,0.15) 40%, rgba(9,18,38,0.72) 78%, rgba(9,18,38,0.92) 100%)",
              }}
            />

            {/* Centered coral play button */}
            <motion.button
              aria-label={`Play ${item.title}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="absolute left-1/2 top-[38%] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white"
              style={{
                background: "var(--primary-color)",
                boxShadow: "0 10px 28px rgba(240,93,73,0.45)",
              }}
            >
              <PlayIcon className="ml-0.5 h-5 w-5" />
            </motion.button>

            {/* Quote + title overlaid on the lower portion of the image */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {item.subtitle}
              </span>
              <p className="text-[16px] font-bold leading-snug text-white sm:text-[18px]">
                {item.quote}
              </p>
              <span className="text-[13px] font-medium text-white/80">
                {item.title}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
