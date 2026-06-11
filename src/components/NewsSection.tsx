"use client";

import { motion } from "framer-motion";
import { newsCards } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight, CalendarIcon, ClockIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function NewsSection() {
  return (
    <section id="resources" className="section-pad">
      <div className="container-yubi">
        <SectionHeading
          eyebrow="Resources"
          title="StrikeHike Latest Updates & Industry Trends"
          action={
            <a href="#" className="btn-yubi btn-yubi-outline">
              View All Blogs
              <ArrowUpRight />
            </a>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {newsCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-[24px] border"
              style={{
                borderColor: "var(--border-light)",
                background: "var(--bg-white)",
                boxShadow: "var(--shadow-soft)",
                transition: "box-shadow 0.5s var(--ease-smooth)",
              }}
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[180px] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute left-3 top-3 rounded-full px-3 py-1 text-[12px] font-semibold text-white shadow-sm"
                  style={{ background: "var(--primary-color)" }}
                >
                  {card.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3
                  className="line-clamp-2 text-[16px] font-bold leading-snug tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {card.excerpt}
                </p>

                <div
                  className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px]"
                  style={{ color: "var(--text-light)" }}
                >
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon className="h-4 w-4" />
                    {card.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="h-4 w-4" />
                    {card.readTime}
                  </span>
                </div>

                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:gap-2.5"
                  style={{ color: "var(--primary-color)" }}
                >
                  Continue Reading
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
