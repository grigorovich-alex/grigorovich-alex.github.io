import { EngineeringView, engineeringMetadata } from "@/components/views/EngineeringView";

export const metadata = engineeringMetadata("ru");

export default function EngineeringPage() {
  return <EngineeringView locale="ru" />;
}
