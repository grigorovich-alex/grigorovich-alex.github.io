import { getContent, SITE_URL } from "@/content";
import { localePath } from "./i18n";

export function personJsonLd(locale) {
  const { site, contacts } = getContent(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    url: `${SITE_URL}${localePath(locale)}`,
    email: contacts.find((c) => c.id === "email")?.value,
    sameAs: contacts.filter((c) => c.href.startsWith("https://")).map((c) => c.href),
    knowsLanguage: site.languages.map((l) => l.name),
  };
}

export function websiteJsonLd(locale) {
  const { site, ui } = getContent(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${SITE_URL}${localePath(locale)}`,
    inLanguage: ui.htmlLang,
  };
}

export function JsonLd({ data }) {
  // `<` is escaped so content can never close the script tag.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
