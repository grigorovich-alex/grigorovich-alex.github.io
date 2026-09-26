import { ArchitectureView, architectureMetadata } from "@/components/views/ArchitectureView";

export const metadata = architectureMetadata("en");

export default function ArchitecturePage() {
  return <ArchitectureView locale="en" />;
}
