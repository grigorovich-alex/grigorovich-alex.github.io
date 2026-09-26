import Link from "next/link";
import { experience } from "@/content/experience";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { PillList } from "@/components/ui/Pill";
import { Todo, isTodo } from "@/components/ui/Todo";

export const metadata = pageMetadata({
  title: "Experience",
  description: "Roles and focus areas: software architecture, technical leadership and full-stack product delivery.",
  path: "/experience/",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I’ve been building"
        description="Architecture, web products, full-stack development, infrastructure and technical leadership."
      />
      <Container className="py-14">
        <ol className="relative max-w-3xl border-l border-border">
          {experience.map((e) => (
            <li key={e.id} className="reveal relative pb-12 pl-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-bg bg-accent" />
              <p className="font-mono text-xs text-subtle">
                <Todo value={e.period} />
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight">
                <Todo value={e.role} />
              </h2>
              <p className="mt-0.5 text-muted">
                <Todo value={e.organization} />
              </p>
              {!isTodo(e.summary) && <p className="mt-3 leading-7">{e.summary}</p>}
              <div className="mt-4">
                <PillList items={e.focus} label="Focus areas" />
              </div>
              {e.projectSlug && (
                <Link href={`/projects/${e.projectSlug}/`} className="link-underline mt-4 inline-block text-sm text-accent">
                  Case study →
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
