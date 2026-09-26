import { ExperienceView, experienceMetadata } from "@/components/views/ExperienceView";

export const metadata = experienceMetadata("ru");

export default function ExperiencePage() {
  return <ExperienceView locale="ru" />;
}
