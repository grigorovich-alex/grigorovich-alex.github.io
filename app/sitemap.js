import { site } from "@/content/site";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

const staticRoutes = ["/", "/projects/", "/architecture/", "/engineering/", "/experience/", "/contact/", "/cv/"];

export default function sitemap() {
  const routes = [...staticRoutes, ...projects.map((p) => `/projects/${p.slug}/`)];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.6,
  }));
}
