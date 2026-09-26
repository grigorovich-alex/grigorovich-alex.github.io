import { getContent } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactList } from "@/components/sections/ContactList";

export function contactMetadata(locale) {
  const t = getContent(locale).ui.contactPage;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, path: "/contact/" });
}

export function ContactView({ locale }) {
  const { site, ui } = getContent(locale);
  const t = ui.contactPage;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <Container className="py-14">
        <ContactList locale={locale} />
        <p className="mt-8 text-sm text-muted">
          {ui.common.languages}: {site.languages.map((l) => `${l.name} — ${l.level}`).join(", ")}.
        </p>
      </Container>
    </>
  );
}
