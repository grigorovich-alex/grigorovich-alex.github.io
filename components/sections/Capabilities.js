import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

export function Capabilities({ locale }) {
  const { capabilities, ui } = getContent(locale);
  const t = ui.home.capabilities;
  return (
    <Section
      id="capabilities"
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      className="border-t border-border"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <li key={c.id} className="reveal rounded-2xl border border-border bg-surface p-6">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Icon name={c.icon} />
            </span>
            <h3 className="mt-4 font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted">{c.summary}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {c.items.map((item) => (
                <li key={item} className="text-fg/85">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
