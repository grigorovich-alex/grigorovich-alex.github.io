import { getContent, locales, SITE_URL } from "@/content";
import { localePath } from "./i18n";

export function defaultTitle(locale) {
  const { site } = getContent(locale);
  return `${site.name} — ${site.roles.join(" · ")}`;
}

// Per-page metadata: canonical + hreflang alternates, Open Graph and Twitter.
// `title` is the bare page name — the root layout's template appends the site name.
export function pageMetadata({ locale, title, description, path = "/" }) {
  const { site } = getContent(locale);
  const fullTitle = title ? `${title} — ${site.name}` : defaultTitle(locale);
  const canonical = localePath(locale, path);
  const image = { url: "/og.png", width: 1200, height: 630, alt: defaultTitle(locale) };
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${canonical}`,
      type: "website",
      siteName: site.name,
      locale: site.ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => getContent(l).site.ogLocale),
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}

export function rootMetadata(locale) {
  const { site } = getContent(locale);
  return {
    metadataBase: new URL(SITE_URL),
    ...pageMetadata({ locale, description: site.positioning }),
    title: { default: defaultTitle(locale), template: `%s — ${site.name}` },
    authors: [{ name: site.name, url: SITE_URL }],
    creator: site.name,
  };
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0f" },
  ],
};
