import Image from "next/image";

import { Heading } from "@/components/ui";

import styles from "./FeaturedWork.module.css";

export type ProjectCardData = {
  id: string;
  areaClass: string;
  title: string;
  sub?: string;
  note?: string;
  src: string;
  alt: string;
  priority?: boolean;
};

type ProjectCardProps = {
  project: ProjectCardData;
};

export function ProjectCard({ project: p }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${p.areaClass}`}>
      <Image
        className={styles.img}
        src={p.src}
        alt={p.alt}
        fill
        sizes="(max-width: 900px) 100vw, 66vw"
        priority={p.priority === true}
      />
      <div className={styles.overlay}>
        <Heading as="h3" size="overlayTitle">
          {p.title}
        </Heading>
        {p.sub ? (
          <p className={styles.cardSub}>{p.sub}</p>
        ) : null}
        {p.note ? <p className={styles.cardNote}>{p.note}</p> : null}
      </div>
    </article>
  );
}
