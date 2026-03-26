import Image from "next/image";
import Link from "next/link";
import bind from "classnames/bind";
import classNames from "classnames";

import { Heading } from "@/components/ui";
import type { ProjectData } from "../projectsData";

import styles from "./FeaturedWork.module.css";
const cx = bind.bind(styles);

type ProjectCardProps = {
  project: ProjectData;
};

export function ProjectCard({ project: p }: ProjectCardProps) {
  const areaClass = styles[p.area];

  return (
    <article className={classNames(cx("card"), areaClass)}>
      <Link href={`/projects/${p.id}`} className={cx("cardLink")} aria-label={`Open ${p.detail.title}`}>
        <Image
          className={cx("img")}
          src={p.cardImage.src}
          alt={p.cardImage.alt}
          fill
          sizes="(max-width: 900px) 100vw, 66vw"
          priority={p.cardImage.priority === true}
        />
        <div className={cx("overlay")}>
          <Heading as="h3" size="overlayTitle">
            {p.cardTitle}
          </Heading>
          {p.cardSubtitle ? (
            <p className={cx("cardSub")}>{p.cardSubtitle}</p>
          ) : null}
          {p.cardNote ? <p className={cx("cardNote")}>{p.cardNote}</p> : null}
        </div>
      </Link>
    </article>
  );
}
