"use client";

import { usePathname } from "next/navigation";
import { localePath, splitLocale } from "@/lib/i18n";

// Links to the same page in the other language. A plain <a>: each locale has its own root layout,
// so the switch is a full document load anyway.
export function LanguageSwitcher({ target, short, label }) {
  const { path } = splitLocale(usePathname());
  return (
    <a
      href={localePath(target, path)}
      hrefLang={target}
      lang={target}
      aria-label={label}
      title={label}
      className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-2 font-mono text-xs font-medium text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {short}
    </a>
  );
}
