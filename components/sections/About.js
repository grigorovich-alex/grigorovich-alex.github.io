import { getContent } from "@/content";
import { Section } from "@/components/ui/Section";

export function About({ locale }) {
  const { site, ui } = getContent(locale);
  return (
    <Section id="about" eyebrow={ui.home.about.eyebrow} title={ui.home.about.title}>
      <div className="reveal grid max-w-4xl gap-6 text-lg leading-8 text-muted md:grid-cols-2">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
