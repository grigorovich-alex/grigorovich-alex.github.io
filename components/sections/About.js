import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Systems, not just code">
      <div className="reveal grid max-w-4xl gap-6 text-lg leading-8 text-muted md:grid-cols-2">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
