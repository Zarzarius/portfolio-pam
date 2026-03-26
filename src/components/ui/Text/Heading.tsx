import type { HTMLAttributes } from "react";
import bind from "classnames/bind";

import styles from "./Heading.module.css";

const cx = bind.bind(styles);

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

const sizeKey: Record<
  HeadingSize,
  | "display"
  | "section"
  | "sectionSm"
  | "sectionLg"
  | "card"
  | "overlayTitle"
  | "page"
> = {
  display: "display",
  section: "section",
  sectionSm: "sectionSm",
  sectionLg: "sectionLg",
  card: "card",
  overlayTitle: "overlayTitle",
  page: "page",
};

const alignKey: Record<HeadingAlign, "alignLeft" | "alignCenter" | "alignRight"> =
  {
    left: "alignLeft",
    center: "alignCenter",
    right: "alignRight",
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
      className={cx(
        "root",
        sizeKey[size],
        alignKey[align],
        { fadeUp: animate },
        className,
      )}
      {...props}
    />
  );
}
