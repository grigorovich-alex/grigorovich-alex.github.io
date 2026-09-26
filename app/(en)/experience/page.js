import { ExperienceView, experienceMetadata } from "@/components/views/ExperienceView";

export const metadata = experienceMetadata("en");

export default function ExperiencePage() {
  return <ExperienceView locale="en" />;
}
