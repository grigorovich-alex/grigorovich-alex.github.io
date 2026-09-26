import Link from "next/link";
import { getContent } from "@/content";
import { localePath } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { PillList } from "@/components/ui/Pill";

export function engineeringMetadata(locale) {
  const t = getContent(locale).ui.engineeringPage;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, path: "/engineering/" });
}

export function EngineeringView({ locale }) {
  const { principles, ui } = getContent(locale);
  const t = ui.engineeringPage;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <Container className="py-14">
        <ol className="grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <li key={p.id} className="reveal flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-3 leading-7 text-muted">{p.body}</p>
              <div className="mt-5">
                <PillList items={p.points} label={`${p.title}: ${t.keyPoints}`} />
              </div>
              <div className="mt-auto pt-6">
                <p className="border-t border-border pt-5 text-sm">
                  <span className="text-subtle">{t.inPractice}</span>
                  <Link href={localePath(locale, p.example.href)} className="link-underline font-medium text-accent">
                    {p.example.label}
                  </Link>
                  <span className="text-muted">: {p.example.text}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
