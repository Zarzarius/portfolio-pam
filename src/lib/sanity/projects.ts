import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import type { ProjectData } from "@/components/portfolio/projectsData";

const projectId = "8km354zm";
const dataset = "production";
const apiVersion = "2026-03-26";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(client);

type SanityImageRef = {
  asset?: {
    _ref: string;
    _type: "reference";
  };
};

type SanityProject = {
  slug?: { current?: string };
  area?: ProjectData["area"];
  cardTitle?: string;
  cardSubtitle?: string;
  cardNote?: string;
  cardImage?: SanityImageRef;
  cardImageUrl?: string;
  cardImageAlt?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  overview?: string;
  role?: string;
  pipeline?: string[];
  timeline?: string;
  metrics?: Array<{ label?: string; value?: string }>;
  heroImage?: SanityImageRef;
  heroImageUrl?: string;
  heroImageAlt?: string;
  gallery?: Array<{
    image?: SanityImageRef;
    imageUrl?: string;
    alt?: string;
    label?: string;
  }>;
};

const projectsQuery = `*[_type == "project"] | order(order asc, _createdAt desc){
  slug,
  area,
  cardTitle,
  cardSubtitle,
  cardNote,
  cardImage,
  cardImageUrl,
  cardImageAlt,
  kicker,
  title,
  subtitle,
  overview,
  role,
  pipeline,
  timeline,
  metrics,
  heroImage,
  heroImageUrl,
  heroImageAlt,
  gallery
}`;

function asImageUrl(image?: SanityImageRef, width = 1600): string | null {
  if (!image?.asset?._ref) {
    return null;
  }
  return builder.image(image).width(width).auto("format").url();
}

function toProjectData(project: SanityProject): ProjectData | null {
  const id = project.slug?.current?.trim();
  const cardImage = asImageUrl(project.cardImage, 1400) ?? project.cardImageUrl ?? null;
  const heroImage = asImageUrl(project.heroImage, 1600) ?? project.heroImageUrl ?? null;

  if (
    !id ||
    !project.title ||
    !project.subtitle ||
    !project.overview ||
    !project.role ||
    !project.timeline ||
    !project.kicker ||
    !project.cardTitle ||
    !project.cardImageAlt ||
    !project.heroImageAlt ||
    !cardImage ||
    !heroImage
  ) {
    return null;
  }

  const area = project.area ?? "neon";
  const pipeline = (project.pipeline ?? []).filter(Boolean);
  const metrics =
    project.metrics
      ?.filter((item): item is { label: string; value: string } => Boolean(item?.label && item?.value))
      .map((item) => ({ label: item.label, value: item.value })) ?? [];

  const gallery =
    project.gallery
      ?.map((item) => {
        const src = asImageUrl(item.image, 1200) ?? item.imageUrl ?? null;
        if (!src || !item.alt || !item.label) {
          return null;
        }

        return {
          src,
          alt: item.alt,
          label: item.label,
        };
      })
      .filter((item): item is { src: string; alt: string; label: string } => item !== null) ?? [];

  if (pipeline.length === 0 || metrics.length === 0 || gallery.length === 0) {
    return null;
  }

  return {
    id,
    area,
    cardTitle: project.cardTitle,
    cardSubtitle: project.cardSubtitle,
    cardNote: project.cardNote,
    cardImage: {
      src: cardImage,
      alt: project.cardImageAlt,
    },
    detail: {
      kicker: project.kicker,
      title: project.title,
      subtitle: project.subtitle,
      overview: project.overview,
      role: project.role,
      pipeline,
      timeline: project.timeline,
      metrics,
      hero: {
        src: heroImage,
        alt: project.heroImageAlt,
      },
      gallery,
    },
  };
}

export async function getSanityProjects(): Promise<ProjectData[]> {
  const projects = await client.fetch<SanityProject[]>(projectsQuery);
  return projects.map(toProjectData).filter((project): project is ProjectData => project !== null);
}

export async function getSanityProjectById(id: string): Promise<ProjectData | null> {
  const projects = await getSanityProjects();
  return projects.find((project) => project.id === id) ?? null;
}
