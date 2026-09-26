import Link from "next/link";
import { getContent } from "@/content";
import { localePath } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function SiteFooter({ locale }) {
  const { site, navigation, contacts, ui } = getContent(locale);
  const links = [...navigation, { href: "/cv/", label: ui.common.cv }];
  return (
    <footer className="no-print mt-auto border-t border-border">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.roles.join(" · ")}</p>
        </div>
        <nav aria-label={ui.common.footerNav} className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
          {links.map((item) => (
            <Link key={item.href} href={localePath(locale, item.href)} className="link-underline w-fit text-muted hover:text-fg">
              {item.label}
            </Link>
          ))}
          {contacts.map((c) => (
            <a key={c.id} href={c.href} className="link-underline w-fit text-muted hover:text-fg">
              {c.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
