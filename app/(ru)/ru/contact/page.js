import { ContactView, contactMetadata } from "@/components/views/ContactView";

export const metadata = contactMetadata("ru");

export default function ContactPage() {
  return <ContactView locale="ru" />;
}
