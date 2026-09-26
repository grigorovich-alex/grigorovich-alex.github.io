import { site } from "@/content/site";

const defaultTitle = `${site.name} — ${site.roles.join(" · ")}`;

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: defaultTitle,
};

// Per-page metadata with canonical URL and matching Open Graph / Twitter fields.
// `title` is the bare page name — the root layout's template appends the site name.
export function pageMetadata({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} — ${site.name}` : defaultTitle;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${site.url}${path}`,
      type: "website",
      siteName: site.name,
      locale: site.locale,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}

export { defaultTitle };
