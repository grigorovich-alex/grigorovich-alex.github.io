import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactList } from "@/components/sections/ContactList";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name}: email, Telegram and GitHub.`,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Open to architecture, CTO and lead developer roles, and to consulting on web products. Email or Telegram is the fastest way to reach me."
      />
      <Container className="py-14">
        <ContactList />
        <p className="mt-8 text-sm text-muted">
          Languages: {site.languages.map((l) => `${l.name} — ${l.level}`).join(", ")}.
        </p>
      </Container>
    </>
  );
}
