import { EngineeringView, engineeringMetadata } from "@/components/views/EngineeringView";

export const metadata = engineeringMetadata("en");

export default function EngineeringPage() {
  return <EngineeringView locale="en" />;
}
