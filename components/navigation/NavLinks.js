"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function isActive(pathname, href) {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return normalized.startsWith(href);
}

export function NavLinks({ items }) {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                active ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
              {active && <span className="absolute inset-x-3 -bottom-px h-px bg-accent" aria-hidden="true" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
