import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Lock } from "lucide-react";
import { getContent, getProject } from "@/content";
import { localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { PillList } from "@/components/ui/Pill";
import { CaseStudy } from "@/components/projects/CaseStudy";

export function projectStaticParams(locale) {
  return getContent(locale).projects.map((p) => ({ slug: p.slug }));
}

export function projectMetadata(locale, slug) {
  const project = getProject(locale, slug);
  if (!project) return {};
  return pageMetadata({ locale, title: project.shortTitle, description: project.summary, path: `/projects/${slug}/` });
}

export function ProjectView({ locale, slug }) {
  const { projects, ui } = getContent(locale);
  const t = ui.project;
  const project = getProject(locale, slug);
  if (!project) notFound();

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article>
      <PageHeader eyebrow={project.type} title={project.title} description={project.summary}>
        <dl className="mt-8 grid max-w-3xl gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-subtle">{t.role}</dt>
            <dd className="mt-0.5 font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="text-subtle">{t.status}</dt>
            <dd className="mt-0.5 font-medium">{project.status}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <PillList items={project.stack} label={t.stack} />
        </div>
        {(project.links.length > 0 || project.confidential) && (
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent">
                <ExternalLink aria-hidden="true" className="size-4" />
                <span className="link-underline">{l.label}</span>
              </a>
            ))}
            {project.confidential && (
              <span className="inline-flex items-center gap-1.5 text-muted">
                <Lock aria-hidden="true" className="size-4" /> {project.confidential}
              </span>
            )}
          </div>
        )}
      </PageHeader>
      <Container className="py-6">
        <CaseStudy project={project} locale={locale} />
        <nav aria-label={t.moreNav} className="flex flex-col gap-4 border-t border-border py-10 sm:flex-row sm:justify-between">
          <Link href={localePath(locale, "/projects/")} className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <ArrowLeft aria-hidden="true" className="size-4" /> {t.allProjects}
          </Link>
          <Link href={localePath(locale, `/projects/${next.slug}/`)} className="text-sm">
            <span className="text-subtle">{t.nextCase} </span>
            <span className="link-underline font-medium text-accent">{next.shortTitle} →</span>
          </Link>
        </nav>
      </Container>
    </article>
  );
}
