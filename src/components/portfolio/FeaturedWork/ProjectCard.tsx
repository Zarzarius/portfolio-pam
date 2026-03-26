import Image from "next/image";
import bind from "classnames/bind";
import classNames from "classnames";

import { Heading } from "@/components/ui";

import styles from "./FeaturedWork.module.css";
const cx = bind.bind(styles);

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
    <article className={classNames(cx("card"), p.areaClass)}>
      <Image
        className={cx("img")}
        src={p.src}
        alt={p.alt}
        fill
        sizes="(max-width: 900px) 100vw, 66vw"
        priority={p.priority === true}
      />
      <div className={cx("overlay")}>
        <Heading as="h3" size="overlayTitle">
          {p.title}
        </Heading>
        {p.sub ? (
          <p className={cx("cardSub")}>{p.sub}</p>
        ) : null}
        {p.note ? <p className={cx("cardNote")}>{p.note}</p> : null}
      </div>
    </article>
  );
}
