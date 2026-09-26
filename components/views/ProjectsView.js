import { getContent } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function projectsMetadata(locale) {
  const t = getContent(locale).ui.projectsPage;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, path: "/projects/" });
}

export function ProjectsView({ locale }) {
  const { projects, ui } = getContent(locale);
  const t = ui.projectsPage;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <Container className="py-14">
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} locale={locale} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
