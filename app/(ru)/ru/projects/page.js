import { ProjectsView, projectsMetadata } from "@/components/views/ProjectsView";

export const metadata = projectsMetadata("ru");

export default function ProjectsPage() {
  return <ProjectsView locale="ru" />;
}
