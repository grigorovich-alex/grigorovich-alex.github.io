import Link from "next/link";
import { getContent, locales } from "@/content";
import { localePath } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { NavLinks } from "@/components/navigation/NavLinks";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ locale }) {
  const { site, navigation, ui } = getContent(locale);
  const items = navigation.map((n) => ({ ...n, href: localePath(locale, n.href) }));
  const cv = { href: localePath(locale, "/cv/"), label: ui.common.cv };
  const target = locales.find((l) => l !== locale);
  const { common } = ui;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        {common.skipToContent}
      </a>
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link href={localePath(locale)} className="flex items-center gap-2.5" aria-label={`${site.name} — ${common.home}`}>
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-fg font-mono text-xs font-semibold text-bg">
            {site.shortName}
          </span>
          <span className="hidden text-sm font-medium sm:inline">{site.name}</span>
        </Link>
        <nav aria-label={common.mainNav} className="hidden lg:block">
          <NavLinks items={items} />
        </nav>
        <div className="flex items-center gap-1">
          <LanguageSwitcher target={target} short={ui.switchShort} label={ui.switchTo} />
          <ThemeToggle label={common.toggleTheme} />
          {/* Wrapper carries `hidden`: the button's own inline-flex would override it. */}
          <span className="hidden lg:inline-flex">
            <Link href={cv.href} className={`${buttonClasses.base} ${buttonClasses.primary} h-9`}>
              {cv.label}
            </Link>
          </span>
          <MobileMenu
            items={items}
            cv={cv}
            labels={{ openMenu: common.openMenu, closeMenu: common.closeMenu, mobileNav: common.mobileNav }}
          />
        </div>
      </Container>
    </header>
  );
}
