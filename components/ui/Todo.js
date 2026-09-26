import { TODO } from "@/content/shared";

// Renders a value, or a visible placeholder if the value is still TODO.
export function Todo({ value, label, children }) {
  if (value && value !== TODO) return children ?? value;
  return (
    <span className="rounded border border-dashed border-border-strong px-1.5 py-0.5 font-mono text-xs text-subtle">
      {label}
    </span>
  );
}

export const isTodo = (value) => !value || value === TODO;
