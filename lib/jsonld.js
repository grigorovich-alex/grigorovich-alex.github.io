import { contacts, site } from "@/content/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    url: site.url,
    email: contacts.find((c) => c.id === "email")?.value,
    sameAs: contacts.filter((c) => c.href.startsWith("https://")).map((c) => c.href),
    knowsLanguage: site.languages.map((l) => l.name),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en",
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
