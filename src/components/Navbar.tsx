"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { navItems } from "@/data/content";
import { ArrowUpRight, MenuIcon, CloseIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the viewport grows to desktop width.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background:
          scrolled || open
            ? "rgba(252,250,247,0.85)"
            : "rgba(252,250,247,0.5)",
        backdropFilter: scrolled || open ? "blur(20px)" : "blur(10px)",
        WebkitBackdropFilter: scrolled || open ? "blur(20px)" : "blur(10px)",
        borderBottom:
          scrolled || open
            ? "1px solid var(--border-light)"
            : "1px solid transparent",
        boxShadow: scrolled ? "0 6px 30px rgba(9,18,38,0.06)" : "none",
        transition:
          "background 0.4s var(--ease-smooth), box-shadow 0.4s var(--ease-smooth), border-color 0.4s var(--ease-smooth), backdrop-filter 0.4s var(--ease-smooth)",
      }}
    >
      <nav
        className="container-yubi flex items-center justify-between"
        style={{
          height: scrolled ? 62 : 76,
          transition: "height 0.4s var(--ease-smooth)",
        }}
      >
        <motion.a
          href="/"
          aria-label="StrikeHike home"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
          className="inline-flex shrink-0 items-center"
        >
          <Logo />
        </motion.a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="link-underline text-[15px] font-medium transition-colors duration-300 hover:text-[var(--primary-color)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#"
            className="link-underline text-[15px] font-semibold transition-colors duration-300 hover:text-[var(--primary-color)]"
            style={{ color: "var(--text-primary)" }}
          >
            Login
          </a>
          <a href="#demo" className="btn-yubi">
            Get Free Demo
            <ArrowUpRight />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-[var(--bg-light)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ color: "var(--text-primary)" }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid var(--border-light)",
            }}
          >
            <ul className="container-yubi flex flex-col gap-1 py-5">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: EASE,
                    delay: 0.05 + i * 0.04,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[14px] px-3 py-3 text-[16px] font-medium transition-colors duration-300 hover:bg-[var(--bg-light)] hover:text-[var(--primary-color)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="mt-3 flex flex-col gap-3 px-3 sm:flex-row"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                  delay: 0.05 + navItems.length * 0.04,
                }}
              >
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="btn-yubi btn-yubi-outline flex-1 justify-center"
                >
                  Login
                </a>
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="btn-yubi flex-1 justify-center"
                >
                  Get Free Demo
                  <ArrowUpRight />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
