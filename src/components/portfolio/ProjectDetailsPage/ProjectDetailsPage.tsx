import Image from "next/image";
import Link from "next/link";
import bind from "classnames/bind";

import { Body, Container, Heading, Kicker, Section, Tag } from "@/components/ui";

import type { ProjectData } from "../projectsData";
import styles from "./ProjectDetailsPage.module.css";

const cx = bind.bind(styles);

type ProjectDetailsPageProps = {
  project: ProjectData;
  nextProject: ProjectData;
};

export function ProjectDetailsPage({ project, nextProject }: ProjectDetailsPageProps) {
  return (
    <div className={cx("wrap")}>
      <Section spacing="hero" className={cx("heroSection")}>
        <Container size="wide" padding="none" className={cx("heroGrid")}>
          <div className={cx("heroMedia")}>
            <Image
              src={project.detail.hero.src}
              alt={project.detail.hero.alt}
              fill
              priority
              className={cx("heroImage")}
              sizes="(max-width: 960px) 100vw, 52vw"
            />
          </div>

          <div className={cx("heroContent")}>
            <Kicker withRule>{project.detail.kicker}</Kicker>
            <Heading as="h1" size="page" className={cx("title")}>
              {project.detail.title}
            </Heading>
            <Body tone="bright" size="default" maxWidth="md">
              {project.detail.subtitle}
            </Body>
          </div>
        </Container>
      </Section>

      <Section spacing="compact" borderTop>
        <Container size="wide" padding="none" className={cx("overviewGrid")}>
          <div>
            <Kicker withRule tone="muted">
              OVERVIEW
            </Kicker>
            <Body className={cx("overviewBody")}>{project.detail.overview}</Body>
          </div>

          <div className={cx("specPanel")}>
            <p className={cx("specLine")}>
              <span>ROLE</span>
              <strong>{project.detail.role}</strong>
            </p>
            <p className={cx("specLine")}>
              <span>TIMELINE</span>
              <strong>{project.detail.timeline}</strong>
            </p>
            <div className={cx("tags")} aria-label="Pipeline tools">
              {project.detail.pipeline.map((tool) => (
                <Tag key={tool} size="sm">
                  {tool}
                </Tag>
              ))}
            </div>
            <div className={cx("metrics")}>
              {project.detail.metrics.map((metric) => (
                <p key={metric.label} className={cx("metric")}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="compact">
        <Container size="wide" padding="none" className={cx("galleryGrid")}>
          {project.detail.gallery.map((item, idx) => (
            <article key={item.label} className={cx("galleryCard", { galleryWide: idx === 3 })}>
              <div className={cx("galleryMedia")}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={cx("galleryImage")}
                  sizes={idx === 3 ? "(max-width: 960px) 100vw, 66vw" : "(max-width: 960px) 100vw, 33vw"}
                />
              </div>
              <p className={cx("galleryLabel")}>{item.label}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section spacing="default" borderTop>
        <Container size="wide" padding="none" className={cx("nextWrap")}>
          <Kicker tone="muted">NEXT WORK</Kicker>
          <Heading as="h2" size="sectionLg" className={cx("nextTitle")}>
            {nextProject.detail.title}
          </Heading>
          <Link href={`/projects/${nextProject.id}`} className={cx("nextLink")}>
            OPEN PROJECT
          </Link>
        </Container>
      </Section>
    </div>
  );
}
