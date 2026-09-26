import { getContent } from "@/content";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { ContactList } from "@/components/sections/ContactList";
import { Section } from "@/components/ui/Section";

export function HomeView({ locale }) {
  const t = getContent(locale).ui.home.contactSection;
  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Capabilities locale={locale} />
      <SelectedProjects locale={locale} />
      <Section id="contact" eyebrow={t.eyebrow} title={t.title} description={t.description} className="border-t border-border">
        <ContactList locale={locale} />
      </Section>
    </>
  );
}
