// Abstract request path through a typical stack. Pure SVG + CSS animation;
// fixed viewBox keeps its box stable (no layout shift), motion stops under prefers-reduced-motion.

const layers = [
  { label: "Browser", sub: "PWA · SSR HTML" },
  { label: "Next.js", sub: "App Router · RSC" },
  { label: "Business logic", sub: "Payload hooks · access" },
  { label: "MongoDB", sub: "collections · indexes" },
  { label: "Infrastructure", sub: "Docker · Nginx · CI/CD" },
];

const W = 320;
const BOX_H = 52;
const GAP = 26;
const H = layers.length * BOX_H + (layers.length - 1) * GAP;

export function HeroDiagram() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Architecture layers: Browser, Next.js, business logic, MongoDB, infrastructure"
      className="h-auto w-full max-w-[320px]"
    >
      {layers.map((layer, i) => {
        const y = i * (BOX_H + GAP);
        return (
          <g key={layer.label}>
            {i > 0 && (
              <line
                className="flow-line"
                x1={W / 2}
                x2={W / 2}
                y1={y - GAP + 2}
                y2={y - 2}
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
            )}
            <rect
              x="0.75"
              y={y + 0.75}
              width={W - 1.5}
              height={BOX_H - 1.5}
              rx="10"
              fill="var(--surface)"
              stroke={i === 1 ? "var(--accent)" : "var(--border-strong)"}
            />
            <circle
              className="flow-dot"
              style={{ animationDelay: `${i * 0.4}s` }}
              cx="22"
              cy={y + BOX_H / 2}
              r="4"
              fill="var(--accent)"
            />
            <text x="38" y={y + 23} fill="var(--fg)" fontSize="14" fontWeight="600" fontFamily="var(--font-sans)">
              {layer.label}
            </text>
            <text x="38" y={y + 40} fill="var(--muted)" fontSize="11" fontFamily="var(--font-mono)">
              {layer.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
