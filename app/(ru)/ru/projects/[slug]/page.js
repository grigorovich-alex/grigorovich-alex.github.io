import { ProjectView, projectMetadata, projectStaticParams } from "@/components/views/ProjectView";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectStaticParams("ru");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return projectMetadata("ru", slug);
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  return <ProjectView locale="ru" slug={slug} />;
}
