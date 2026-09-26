import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui/Pill";

export function ProjectCard({ project, headingLevel = "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Pill tone="accent">{project.status}</Pill>
        <span className="font-mono text-xs text-subtle">{project.role}</span>
      </div>
      <Heading className="text-lg font-semibold tracking-tight">
        <Link href={`/projects/${project.slug}/`} className="after:absolute after:inset-0 after:rounded-2xl">
          {project.title}
        </Link>
      </Heading>
      <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
      <ul className="mt-5 space-y-1.5 text-sm">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <p className="mt-auto flex flex-wrap gap-x-2 gap-y-1 pt-6 font-mono text-xs text-subtle">
        {project.stack.slice(0, 5).join(" · ")}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Read case study
        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}
