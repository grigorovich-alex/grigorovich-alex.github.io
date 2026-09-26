import { ProjectView, projectMetadata, projectStaticParams } from "@/components/views/ProjectView";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectStaticParams("en");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return projectMetadata("en", slug);
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  return <ProjectView locale="en" slug={slug} />;
}
