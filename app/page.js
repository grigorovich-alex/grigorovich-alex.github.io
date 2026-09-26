import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { ContactList } from "@/components/sections/ContactList";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <SelectedProjects />
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s talk about your product"
        description="Architecture review, technical leadership or building a product from zero — write to me directly."
        className="border-t border-border"
      >
        <ContactList />
      </Section>
    </>
  );
}
