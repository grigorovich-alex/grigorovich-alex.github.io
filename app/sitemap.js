import { getContent, locales, SITE_URL } from "@/content";
import { localePath } from "@/lib/i18n";

export const dynamic = "force-static";

const staticRoutes = ["/", "/projects/", "/architecture/", "/engineering/", "/experience/", "/contact/", "/cv/"];

export default function sitemap() {
  const paths = [...staticRoutes, ...getContent("en").projects.map((p) => `/projects/${p.slug}/`)];
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${localePath(l, path)}`])),
      },
    })),
  );
}
