import { caching, database, deploymentFlow, security, systemAround, systemCore } from "@/content/architecture";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FlowDiagram } from "@/components/architecture/FlowDiagram";

export const metadata = pageMetadata({
  title: "Architecture",
  description: "Reference architecture behind my products: Next.js + Payload CMS + MongoDB, caching, security and deployment.",
  path: "/architecture/",
});

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

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Architecture"
        title="One coherent stack, from browser to server"
        description="The reference architecture I use across products: a single Next.js application with Payload CMS as the application layer, MongoDB for data, and a small, well-understood production setup."
      />
      <Section id="system" eyebrow="01" title="System design" description="A narrow core with well-defined services around it.">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <FlowDiagram title="Core request path" nodes={systemCore} />
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-subtle">Around the core</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {systemAround.map((s) => (
                <li key={s.label} className="rounded-xl border border-dashed border-border-strong px-4 py-3">
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="mt-0.5 text-xs leading-5 text-muted">{s.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section id="database" eyebrow="02" title="Database architecture" description={database.intro} className="border-t border-border">
        <CardGrid items={database.reasons} cols="sm:grid-cols-2" />
        <p className="mt-6 max-w-3xl rounded-xl bg-accent-soft px-5 py-4 text-sm leading-6">
          <strong className="font-medium">Trade-off. </strong>
          {database.tradeoff}
        </p>
      </Section>
      <Section id="caching" eyebrow="03" title="Caching" description="Cheap reads come from decisions made at write time." className="border-t border-border">
        <CardGrid items={caching} />
      </Section>
      <Section id="security" eyebrow="04" title="Security" description="Defaults that hold on every write path." className="border-t border-border">
        <CardGrid items={security} />
      </Section>
      <Section id="deployment" eyebrow="05" title="Deployment" description="Every push to main ends up in production the same way." className="border-t border-border">
        <FlowDiagram nodes={deploymentFlow.slice(0, 4)} horizontal />
        <div className="h-3" />
        <FlowDiagram nodes={deploymentFlow.slice(4)} horizontal />
      </Section>
    </>
  );
}
