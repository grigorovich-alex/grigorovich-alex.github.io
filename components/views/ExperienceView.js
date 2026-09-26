import Link from "next/link";
import { getContent } from "@/content";
import { localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { PillList } from "@/components/ui/Pill";
import { Todo, isTodo } from "@/components/ui/Todo";

export function experienceMetadata(locale) {
  const t = getContent(locale).ui.experiencePage;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, path: "/experience/" });
}

export function ExperienceView({ locale }) {
  const { experience, ui } = getContent(locale);
  const t = ui.experiencePage;
  const todo = ui.common.todo;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <Container className="py-14">
        <ol className="relative max-w-3xl border-l border-border">
          {experience.map((e) => (
            <li key={e.id} className="reveal relative pb-12 pl-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-bg bg-accent" />
              <p className="font-mono text-xs text-subtle">
                <Todo value={e.period} label={todo} />
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight">
                <Todo value={e.role} label={todo} />
              </h2>
              <p className="mt-0.5 text-muted">
                <Todo value={e.organization} label={todo} />
              </p>
              {!isTodo(e.summary) && <p className="mt-3 leading-7">{e.summary}</p>}
              <div className="mt-4">
                <PillList items={e.focus} label={t.focus} />
              </div>
              {e.projectSlug && (
                <Link href={localePath(locale, `/projects/${e.projectSlug}/`)} className="link-underline mt-4 inline-block text-sm text-accent">
                  {t.caseStudy}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
