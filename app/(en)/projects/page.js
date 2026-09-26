import { ProjectsView, projectsMetadata } from "@/components/views/ProjectsView";

export const metadata = projectsMetadata("en");

export default function ProjectsPage() {
  return <ProjectsView locale="en" />;
}
