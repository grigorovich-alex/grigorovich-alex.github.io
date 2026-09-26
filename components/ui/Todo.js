import { TODO } from "@/content/experience";

// Renders a value, or a visible placeholder if the value is still TODO.
export function Todo({ value, children }) {
  if (value && value !== TODO) return children ?? value;
  return (
    <span className="rounded border border-dashed border-border-strong px-1.5 py-0.5 font-mono text-xs text-subtle">
      to be added
    </span>
  );
}

export const isTodo = (value) => !value || value === TODO;
