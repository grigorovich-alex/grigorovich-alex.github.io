import { getContent } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FlowDiagram } from "@/components/architecture/FlowDiagram";

export function architectureMetadata(locale) {
  const t = getContent(locale).ui.architecturePage;
  return pageMetadata({ locale, title: t.metaTitle, description: t.metaDescription, path: "/architecture/" });
}

function CardGrid({ items, cols = "sm:grid-cols-2 lg:grid-cols-3" }) {
  return (
    <dl className={`grid gap-4 ${cols}`}>
      {items.map((i) => (
        <div key={i.title} className="reveal rounded-xl border border-border bg-surface p-5">
          <dt className="font-medium">{i.title}</dt>
          <dd className="mt-2 text-sm leading-6 text-muted">{i.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ArchitectureView({ locale }) {
  const { architecture: a, ui } = getContent(locale);
  const t = ui.architecturePage;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <Section id="system" eyebrow="01" title={t.system.title} description={t.system.description}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <FlowDiagram title={t.system.core} nodes={a.systemCore} />
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-subtle">{t.system.around}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {a.systemAround.map((s) => (
                <li key={s.label} className="rounded-xl border border-dashed border-border-strong px-4 py-3">
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="mt-0.5 text-xs leading-5 text-muted">{s.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section id="database" eyebrow="02" title={t.database.title} description={a.database.intro} className="border-t border-border">
        <CardGrid items={a.database.reasons} cols="sm:grid-cols-2" />
        <p className="mt-6 max-w-3xl rounded-xl bg-accent-soft px-5 py-4 text-sm leading-6">
          <strong className="font-medium">{t.database.tradeoff} </strong>
          {a.database.tradeoff}
        </p>
      </Section>
      <Section id="caching" eyebrow="03" title={t.caching.title} description={t.caching.description} className="border-t border-border">
        <CardGrid items={a.caching} />
      </Section>
      <Section id="security" eyebrow="04" title={t.security.title} description={t.security.description} className="border-t border-border">
        <CardGrid items={a.security} />
      </Section>
      <Section id="deployment" eyebrow="05" title={t.deployment.title} description={t.deployment.description} className="border-t border-border">
        <FlowDiagram nodes={a.deploymentFlow.slice(0, 4)} horizontal />
        <div className="h-3" />
        <FlowDiagram nodes={a.deploymentFlow.slice(4)} horizontal />
      </Section>
    </>
  );
}
