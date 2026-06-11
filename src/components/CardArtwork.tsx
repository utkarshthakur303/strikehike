"use client";

/**
 * Decorative SVG artwork for product cards. Three variants — a concentric
 * radial dot field, orbiting concentric rings, and a network graph. Each slowly
 * rotates/pulses and reacts to the parent `.group` hover (scale nudge).
 */

type Variant = "radial" | "rings" | "network";

export function CardArtwork({
  variant,
  color = "var(--primary-color)",
}: {
  variant: Variant;
  color?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-[0.9]">
      <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
        {variant === "radial" && <RadialDots color={color} />}
        {variant === "rings" && <Rings color={color} />}
        {variant === "network" && <Network color={color} />}
      </div>
    </div>
  );
}

// Round trig results so the server and client render byte-identical SVG
// attributes (floating-point precision otherwise differs in the last digit
// between Node and the browser → hydration mismatch).
const round = (n: number) => Math.round(n * 1000) / 1000;

function RadialDots({ color }: { color: string }) {
  const rings = [22, 40, 58, 76, 94];
  const dots: { x: number; y: number; r: number; o: number }[] = [];
  rings.forEach((radius, ri) => {
    const count = 6 + ri * 4;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      dots.push({
        x: round(110 + Math.cos(a) * radius),
        y: round(110 + Math.sin(a) * radius),
        r: round(1.6 + (4 - ri) * 0.3),
        o: round(0.25 + (4 - ri) * 0.14),
      });
    }
  });
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" className="animate-spin-slow">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={color} opacity={d.o} />
      ))}
    </svg>
  );
}

function Rings({ color }: { color: string }) {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220">
      {[40, 62, 84, 106].map((r, i) => (
        <circle
          key={r}
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeDasharray={i % 2 ? "4 8" : "0"}
          opacity={0.5 - i * 0.08}
        />
      ))}
      <circle
        cx="110"
        cy="110"
        r="106"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeDasharray="3 10"
        opacity="0.4"
        className="animate-spin-slow"
        style={{ transformOrigin: "110px 110px" }}
      />
      <circle cx="110" cy="48" r="4" fill={color} />
      <circle cx="172" cy="110" r="3" fill={color} opacity="0.7" />
    </svg>
  );
}

function Network({ color }: { color: string }) {
  const nodes = [
    [110, 40],
    [56, 86],
    [164, 86],
    [70, 156],
    [150, 156],
    [110, 110],
  ];
  const edges = [
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [0, 1],
    [0, 2],
    [3, 4],
  ];
  return (
    <svg width="220" height="220" viewBox="0 0 220 220">
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "110px 110px", animationDuration: "60s" }}
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke={color}
            strokeWidth="1.2"
            opacity="0.35"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 5 ? 6 : 4}
            fill={color}
            opacity={i === 5 ? 0.9 : 0.6}
          />
        ))}
      </g>
    </svg>
  );
}
