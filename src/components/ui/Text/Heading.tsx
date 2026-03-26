import type { HTMLAttributes } from "react";

import styles from "./Heading.module.css";

export type HeadingSize =
  | "display"
  | "section"
  | "sectionSm"
  | "sectionLg"
  | "card"
  | "overlayTitle"
  | "page";

export type HeadingAlign = "left" | "center" | "right";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: HeadingSize;
  align?: HeadingAlign;
  animate?: boolean;
} & HTMLAttributes<HTMLHeadingElement>;

const sizeClass: Record<HeadingSize, string> = {
  display: styles.display,
  section: styles.section,
  sectionSm: styles.sectionSm,
  sectionLg: styles.sectionLg,
  card: styles.card,
  overlayTitle: styles.overlayTitle,
  page: styles.page,
};

const alignClass: Record<HeadingAlign, string> = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
};

export function Heading({
  as: Comp = "h2",
  size = "section",
  align = "left",
  animate = false,
  className,
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={[
        styles.root,
        sizeClass[size],
        alignClass[align],
        animate ? styles.fadeUp : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
