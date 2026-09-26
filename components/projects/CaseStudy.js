import { FlowDiagram } from "@/components/architecture/FlowDiagram";

import { getContent } from "@/content";

// The 11 sections every case study follows (titles come from the locale's ui dictionary).
export const caseSectionIds = [
  "overview",
  "problem",
  "constraints",
  "architecture",
  "decisions",
  "data-model",
  "performance",
  "security",
  "deployment",
  "challenges",
  "improvements",
];

function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span aria-hidden="true" className="mt-3 size-1 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ id, index, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="reveal scroll-mt-24 border-t border-border py-10">
      <h2 id={`${id}-h`} className="mb-5 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
        <span className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="text-[15px] text-fg/90">{children}</div>
    </section>
  );
}

export function CaseStudy({ project: p, locale }) {
  const t = getContent(locale).ui.project;
  const caseSections = caseSectionIds.map((id) => ({ id, title: t.sections[id] }));
  const content = {
    overview: <p className="leading-7">{p.overview}</p>,
    problem: <p className="leading-7">{p.problem}</p>,
    constraints: <Bullets items={p.constraints} />,
    architecture: (
      <div className="grid gap-8 lg:grid-cols-2">
        {p.diagrams.map((d) => (
          <FlowDiagram key={d.title} {...d} />
        ))}
      </div>
    ),
    decisions: (
      <dl className="grid gap-4 sm:grid-cols-2">
        {p.decisions.map((d) => (
          <div key={d.title} className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-medium">{d.title}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted">{d.body}</dd>
          </div>
        ))}
      </dl>
    ),
    "data-model": (
      <dl className="divide-y divide-border rounded-xl border border-border bg-surface">
        {p.dataModel.map((m) => (
          <div key={m.name} className="grid gap-1 px-5 py-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6">
            <dt className="font-mono text-sm text-accent">{m.name}</dt>
            <dd className="text-sm leading-6 text-muted">{m.detail}</dd>
          </div>
        ))}
      </dl>
    ),
    performance: <Bullets items={p.performance} />,
    security: <Bullets items={p.security} />,
    deployment: (
      <div className="space-y-4">
        <FlowDiagram nodes={p.deployment.nodes} horizontal />
        {p.deployment.notes && <p className="text-sm leading-6 text-muted">{p.deployment.notes}</p>}
      </div>
    ),
    challenges: <Bullets items={p.challenges} />,
    improvements: <Bullets items={p.improvements} />,
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
      <nav aria-label={t.sectionsNav} className="hidden lg:block">
        <ol className="sticky top-24 space-y-1.5 text-sm">
          {caseSections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="link-underline text-muted hover:text-fg">
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="min-w-0">
        {caseSections.map((s, i) => (
          <Block key={s.id} id={s.id} index={i} title={s.title}>
            {content[s.id]}
          </Block>
        ))}
      </div>
    </div>
  );
}
