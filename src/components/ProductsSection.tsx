"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "./icons";
import { CardArtwork } from "./CardArtwork";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProductsSection() {
  // middle panel ("Risk Assessment OS") is expanded by default, like the reference
  const [active, setActive] = useState(1);

  return (
    <section id="products" className="section-pad">
      <div className="container-yubi">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              AI-Driven Lending Future{" "}
              <span
                className="mt-1 block text-[18px] font-medium sm:text-[22px]"
                style={{ color: "var(--text-secondary)" }}
              >
                With StrikeHike&apos;s Financial Services OS
              </span>
            </>
          }
        />

        {/* ── Desktop: horizontal expanding accordion ── */}
        <div className="mt-12 hidden h-[480px] gap-3 lg:flex">
          {products.map((product, i) => {
            const isActive = i === active;
            return (
              <div
                key={product.number}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-expanded={isActive}
                className="group relative cursor-pointer overflow-hidden rounded-[28px] outline-none"
                style={{
                  flexGrow: isActive ? 2.6 : 1,
                  flexBasis: 0,
                  background: product.pastel,
                  transition: "flex-grow 0.65s var(--ease-smooth)",
                }}
              >
                {/* decorative artwork (visible mainly on the expanded panel) */}
                <div
                  className="absolute -right-6 bottom-0 top-0 w-[55%]"
                  style={{
                    opacity: isActive ? 1 : 0.35,
                    transition: "opacity 0.6s var(--ease-smooth)",
                  }}
                >
                  <CardArtwork variant={product.artwork} />
                </div>

                <div className="relative flex h-full flex-col justify-between p-8">
                  <div className="min-w-[220px]">
                    <h3 className="text-[24px] font-bold leading-tight tracking-tight">
                      {product.title}
                    </h3>

                    {/* detail block — only on the expanded panel */}
                    <div
                      style={{
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? 260 : 0,
                        transform: isActive
                          ? "translateY(0)"
                          : "translateY(8px)",
                        transition:
                          "opacity 0.5s var(--ease-smooth) 0.12s, transform 0.5s var(--ease-smooth) 0.12s, max-height 0.5s var(--ease-smooth)",
                        overflow: "hidden",
                      }}
                    >
                      <h4
                        className="mt-3 text-[16px] font-semibold"
                        style={{ color: "var(--primary-color)" }}
                      >
                        {product.subtitle}
                      </h4>
                      <p
                        className="mt-3 max-w-[360px] text-[14.5px] leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`/products/${product.slug}`}
                    className="btn-yubi btn-yubi-outline w-fit !bg-white/70"
                  >
                    Explore Now
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile/tablet: stacked cards ── */}
        <div className="mt-10 flex flex-col gap-5 lg:hidden">
          {products.map((product, i) => (
            <motion.div
              key={product.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[28px] p-7"
              style={{ background: product.pastel }}
            >
              <div className="absolute -right-8 -top-6 h-[180px] w-[180px] opacity-60">
                <CardArtwork variant={product.artwork} />
              </div>
              <div className="relative">
                <h3 className="text-[22px] font-bold tracking-tight">
                  {product.title}
                </h3>
                <h4
                  className="mt-2 text-[15px] font-semibold"
                  style={{ color: "var(--primary-color)" }}
                >
                  {product.subtitle}
                </h4>
                <p
                  className="mt-3 max-w-[420px] text-[14.5px] leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {product.description}
                </p>
                <a
                  href="#demo"
                  className="btn-yubi btn-yubi-outline mt-5 w-fit !bg-white/70"
                >
                  Explore Now
                  <ArrowUpRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
