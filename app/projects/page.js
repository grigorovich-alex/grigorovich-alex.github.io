import { projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Case studies: a translation bureau platform, a multi-locale marketplace, a VR rehabilitation platform and a product launch.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case studies"
        description="Each case follows the same structure: problem, constraints, architecture, decisions, data model, performance, security, deployment — and what I would do differently."
      />
      <Container className="py-14">
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
