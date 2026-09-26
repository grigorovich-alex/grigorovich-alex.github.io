import { ContactView, contactMetadata } from "@/components/views/ContactView";

export const metadata = contactMetadata("en");

export default function ContactPage() {
  return <ContactView locale="en" />;
}
