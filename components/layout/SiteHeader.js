import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { NavLinks } from "@/components/navigation/NavLinks";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-fg font-mono text-xs font-semibold text-bg">
            {site.shortName}
          </span>
          <span className="hidden text-sm font-medium sm:inline">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link href="/cv/" className={`${buttonClasses.base} ${buttonClasses.primary} hidden h-9 md:inline-flex`}>
            CV
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
