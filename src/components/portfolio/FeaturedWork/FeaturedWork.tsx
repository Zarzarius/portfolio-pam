import { Container, Section, SectionHeader } from "@/components/ui";
import bind from "classnames/bind";

import { ProjectCard } from "./ProjectCard";
import type { ProjectData } from "../projectsData";
import styles from "./FeaturedWork.module.css";
const cx = bind.bind(styles);

type FeaturedWorkProps = {
  title: string;
  description: string;
  projects: ProjectData[];
};

export function FeaturedWork({ title, description, projects }: FeaturedWorkProps) {
  return (
    <Section id="gallery" aria-labelledby="featured-heading">
      <Container size="wide" padding="none">
        <SectionHeader
          title={title}
          titleId="featured-heading"
          description={description}
          align="split"
        />
        <div className={cx("grid")}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
