import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailsPage } from "@/components/portfolio";
import { getProjectById, projectsData } from "@/components/portfolio/projectsData";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.detail.title} | Pam Portfolio`,
    description: project.detail.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsPage project={project} />;
}
