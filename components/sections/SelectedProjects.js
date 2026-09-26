import Link from "next/link";
import { projects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function SelectedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Case studies"
      description="Real systems I designed and built — each with architecture, decisions and trade-offs."
      className="border-t border-border"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug} className="reveal">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm">
        <Link href="/architecture/" className="link-underline text-accent">
          How I approach architecture →
        </Link>
      </p>
    </Section>
  );
}
