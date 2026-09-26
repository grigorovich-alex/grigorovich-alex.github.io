"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ label }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode) — the theme still switches for this page.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      <Sun aria-hidden="true" className="size-[18px] dark:hidden" strokeWidth={1.7} />
      <Moon aria-hidden="true" className="hidden size-[18px] dark:block" strokeWidth={1.7} />
    </button>
  );
}
