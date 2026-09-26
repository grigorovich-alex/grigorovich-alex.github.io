"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { isActive } from "./NavLinks";

export function MobileMenu({ items, cv, labels }) {
  const pathname = usePathname();
  // Remember where the menu was opened: navigating elsewhere closes it without an effect.
  const [openedAt, setOpenedAt] = useState(null);
  const open = openedAt === pathname;
  const setOpen = (value) => setOpenedAt(value ? pathname : null);
  const panelId = useId();

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpenedAt(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.closeMenu : labels.openMenu}
        onClick={() => setOpen(!open)}
        className="inline-flex size-10 items-center justify-center rounded-lg text-fg hover:bg-surface"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>
      {open && (
        <nav
          id={panelId}
          aria-label={labels.mobileNav}
          className="absolute inset-x-0 top-full border-b border-border bg-bg px-4 pb-6 pt-2 shadow-sm"
        >
          <ul className="flex flex-col">
            {items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-base ${active ? "bg-surface text-fg" : "text-muted"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-3">
              <Link href={cv.href} className="block rounded-lg bg-fg px-3 py-3 text-center text-base font-medium text-bg">
                {cv.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
