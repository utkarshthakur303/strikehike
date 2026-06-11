import { socialIcons, ArrowUpRight } from "./icons";
import { footerColumns as columns } from "@/data/content";
import { Logo } from "./Logo";
import { Reveal } from "./motion/Reveal";

const socials: { key: keyof typeof socialIcons; label: string }[] = [
  { key: "facebook", label: "Facebook" },
  { key: "twitter", label: "Twitter" },
  { key: "youtube", label: "Youtube" },
  { key: "linkedin", label: "Linkedin" },
  { key: "instagram", label: "Instagram" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-light)" }}>
      <div className="container-yubi py-16 sm:py-20">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
          {/* Left: newsletter + socials */}
          <div>
            <Logo />
            <span className="eyebrow mt-8 block">Subscribe Newsletter</span>
            <h2 className="mt-4 max-w-[440px] text-[22px] font-bold leading-snug tracking-tight sm:text-[24px]">
              Stay ahead with fintech trends, lending insights, and StrikeHike
              updates!
            </h2>

            <form
              className="mt-6 flex w-full max-w-[440px] items-center gap-2 rounded-full border bg-white p-1.5 pl-5 transition-colors focus-within:border-[var(--primary-color)]"
              style={{ borderColor: "var(--border-light)" }}
            >
              <input
                type="email"
                required
                placeholder="Enter Your Email Id"
                className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[var(--text-light)]"
                style={{ color: "var(--text-primary)" }}
                // email autofill browser extensions inject inline styles/attrs
                // onto this field before hydration — ignore the resulting diff
                suppressHydrationWarning
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white transition-transform duration-300 hover:scale-105"
                style={{ background: "var(--primary-color)" }}
              >
                <ArrowUpRight />
              </button>
            </form>

            <div className="mt-8 flex items-start gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
                style={{ color: "var(--primary-color)" }}
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                304, Rupa Solitaire, Millennium Business Park,<br />
                Mahape, Andheri East, Mumbai,<br />
                Maharashtra 400093, India
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.key}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
                  style={{
                    borderColor: "var(--border-light)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {socialIcons[s.key]}
                </a>
              ))}
            </div>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[15px] font-bold tracking-tight">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] transition-colors duration-200 hover:text-[var(--primary-color)]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center sm:flex-row sm:text-left"
          style={{ borderColor: "var(--border-light)" }}
        >
          <p className="text-[13px]" style={{ color: "var(--text-light)" }}>
            Copyright © 2025 StrikeHike. All Rights Reserved.
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px]"
            style={{ color: "var(--text-light)" }}
          >
            <a
              href="#"
              className="transition-colors duration-200 hover:text-[var(--primary-color)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-[var(--primary-color)]"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-[var(--primary-color)]"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
