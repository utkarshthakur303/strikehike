import { bankLogos } from "@/data/content";
import { Reveal } from "./motion/Reveal";

export function LeadingFinancial() {
  // Duplicate the logo list so the -50% translate loop is seamless.
  const loop = [...bankLogos, ...bankLogos];

  return (
    <section
      className="py-16 sm:py-20"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="container-yubi">
        <Reveal>
          <h2 className="mx-auto max-w-[760px] text-center text-[24px] font-bold leading-snug tracking-tight sm:text-[32px]">
            <span style={{ color: "var(--primary-color)" }}>StrikeHike</span> is
            empowering{" "}
            <span style={{ color: "var(--primary-color)" }}>80%</span> of
            India&apos;s leading financial institutions to accelerate access to
            credit
          </h2>
        </Reveal>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        {/* edge fade gradients */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
          style={{
            background: "linear-gradient(90deg, var(--bg-light), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
          style={{
            background: "linear-gradient(270deg, var(--bg-light), transparent)",
          }}
        />

        <div className="marquee-track gap-10 px-6 sm:gap-14 sm:px-8 group-hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= bankLogos.length}
              className="whitespace-nowrap text-[18px] font-bold tracking-tight transition-opacity duration-300 hover:!opacity-100 sm:text-[22px]"
              style={{ color: "var(--text-light)", opacity: 0.7 }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
