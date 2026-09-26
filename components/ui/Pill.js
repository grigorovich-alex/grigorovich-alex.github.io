export function Pill({ children, tone = "default" }) {
  const tones = {
    default: "border-border bg-surface text-muted",
    accent: "border-transparent bg-accent-soft text-accent",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function PillList({ items, label, tone }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Pill tone={tone}>{item}</Pill>
        </li>
      ))}
    </ul>
  );
}
