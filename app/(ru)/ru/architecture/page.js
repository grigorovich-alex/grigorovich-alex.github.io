import { ArchitectureView, architectureMetadata } from "@/components/views/ArchitectureView";

export const metadata = architectureMetadata("ru");

export default function ArchitecturePage() {
  return <ArchitectureView locale="ru" />;
}
