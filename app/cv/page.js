import { contacts, site } from "@/content/site";
import { cvSkills } from "@/content/skills";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { deploymentFlow } from "@/content/architecture";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { PrintButton } from "@/components/ui/PrintButton";
import { isTodo } from "@/components/ui/Todo";

export const metadata = pageMetadata({
  title: "CV",
  description: `Printable CV of ${site.name} — ${site.roles.join(", ")}.`,
  path: "/cv/",
});

function CvSection({ title, children }) {
  return (
    <section className="print-avoid-break border-t border-border py-5 print:py-3">
      <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{title}</h2>
      {children}
    </section>
  );
}

const architecturePoints = [
  "Next.js App Router with Payload CMS as the application layer in one deployable",
  "Business rules in collection hooks; role- and document-level access control",
  "Webhook contracts, legacy-system bridges and strangler-style migrations",
  "SEO architecture: localized path-based filters, canonical/hreflang, sitemaps",
];

export default function CvPage() {
  const jobs = experience.filter((e) => !isTodo(e.role));
  return (
    <Container className="max-w-4xl py-10 print:max-w-none print:px-0 print:py-0">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4">
        <p className="text-sm text-muted">Printable A4 CV — use “Save as PDF” in the print dialog.</p>
        <PrintButton />
      </div>

      <article className="rounded-2xl border border-border bg-surface p-6 sm:p-10 print:rounded-none print:border-0 print:p-0">
        <header className="pb-5">
          <h1 className="text-3xl font-semibold tracking-tight print:text-2xl">{site.name}</h1>
          <p className="mt-1 text-lg text-muted print:text-base">{site.roles.join(" · ")}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {contacts.map((c) => (
              <li key={c.id}>
                <a href={c.href} className="link-underline">
                  {c.value}
                </a>
              </li>
            ))}
            <li>
              <a href={site.url} className="link-underline">
                {site.url.replace(/^https?:\/\//, "")}
              </a>
            </li>
          </ul>
        </header>

        <CvSection title="Summary">
          <p className="leading-7">
            {site.about[0]} {site.about[1]}
          </p>
        </CvSection>

        <CvSection title="Core skills">
          <dl className="grid gap-1.5 text-sm">
            {cvSkills.map((s) => (
              <div key={s.group} className="grid gap-x-4 sm:grid-cols-[8rem_1fr] print:grid-cols-[8rem_1fr]">
                <dt className="font-medium">{s.group}</dt>
                <dd className="text-muted">{s.items}</dd>
              </div>
            ))}
          </dl>
        </CvSection>

        <CvSection title="Experience">
          <ol className="space-y-4">
            {jobs.map((e) => (
              <li key={e.id} className="print-avoid-break">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold">
                    {e.role} <span className="font-normal text-muted">— {e.organization}</span>
                  </h3>
                  {!isTodo(e.period) && <span className="font-mono text-xs text-subtle">{e.period}</span>}
                </div>
                <p className="mt-1 text-sm leading-6">{e.summary}</p>
              </li>
            ))}
          </ol>
        </CvSection>

        <CvSection title="Selected projects">
          <ul className="space-y-3">
            {projects.map((p) => (
              <li key={p.slug} className="print-avoid-break">
                <h3 className="font-medium">
                  {p.title} <span className="font-normal text-subtle">· {p.status}</span>
                </h3>
                <p className="mt-0.5 text-sm leading-6 text-muted">{p.summary}</p>
                <p className="mt-0.5 font-mono text-xs text-subtle">{p.stack.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title="Architecture">
          <ul className="list-disc space-y-1 pl-5 text-sm leading-6">
            {architecturePoints.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </CvSection>

        <CvSection title="Infrastructure">
          <p className="text-sm leading-6">{deploymentFlow.map((d) => d.label).join(" → ")}</p>
        </CvSection>

        <CvSection title="Languages">
          <p className="text-sm">{site.languages.map((l) => `${l.name} — ${l.level}`).join(" · ")}</p>
        </CvSection>
      </article>
    </Container>
  );
}
