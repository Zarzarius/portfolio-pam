import { Container, Section, SectionHeader } from "@/components/ui";
import bind from "classnames/bind";

import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../projectsData";
import { getSanityProjects } from "@/lib/sanity/projects";
import styles from "./FeaturedWork.module.css";
const cx = bind.bind(styles);

export async function FeaturedWork() {
  const sanityProjects = await getSanityProjects();
  const displayProjects = sanityProjects.length > 0 ? sanityProjects : projectsData;

  return (
    <Section id="gallery" aria-labelledby="featured-heading">
      <Container size="wide" padding="none">
        <SectionHeader
          title="FEATURED WORK"
          titleId="featured-heading"
          description="A selection of recent projects focusing on hyper-realistic character anatomy and complex sci-fi environments."
          align="split"
        />
        <div className={cx("grid")}>
          {displayProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
