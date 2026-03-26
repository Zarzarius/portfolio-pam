import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailsPage } from "@/components/portfolio";
import { getSanityProjects } from "@/lib/sanity/projects";
import { getProjectById, projectsData } from "@/components/portfolio/projectsData";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const sanityProjects = await getSanityProjects();
  const projects = sanityProjects.length > 0 ? sanityProjects : projectsData;
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const sanityProjects = await getSanityProjects();
  const project =
    sanityProjects.find((item) => item.id === id) ?? (sanityProjects.length === 0 ? getProjectById(id) : null);

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
  const sanityProjects = await getSanityProjects();
  const projects = sanityProjects.length > 0 ? sanityProjects : projectsData;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return <ProjectDetailsPage project={project} nextProject={nextProject} />;
}
