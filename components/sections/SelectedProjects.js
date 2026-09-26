import Link from "next/link";
import { getContent } from "@/content";
import { localePath } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function SelectedProjects({ locale }) {
  const { projects, ui } = getContent(locale);
  const t = ui.home.projects;
  return (
    <Section
      id="projects"
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      className="border-t border-border"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="reveal">
            <ProjectCard project={p} locale={locale} />
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm">
        <Link href={localePath(locale, "/architecture/")} className="link-underline text-accent">
          {t.architectureLink}
        </Link>
      </p>
    </Section>
  );
}
