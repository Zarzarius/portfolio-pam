import type { ComponentPropsWithoutRef } from "react";

import styles from "./Body.module.css";

export type BodyTone = "default" | "muted" | "bright";
export type BodySize = "default" | "small" | "smaller";
export type BodyMaxWidth = "none" | "sm" | "md";
export type BodyAlign = "left" | "center" | "right";

type BodyProps = ComponentPropsWithoutRef<"p"> & {
  as?: "p" | "div";
  size?: BodySize;
  tone?: BodyTone;
  maxWidth?: BodyMaxWidth;
  align?: BodyAlign;
  center?: boolean;
  animate?: boolean;
};

const sizeClass: Record<BodySize, string> = {
  default: styles.default,
  small: styles.small,
  smaller: styles.smaller,
};

const toneClass: Record<BodyTone, string> = {
  default: styles.inherit,
  muted: styles.muted,
  bright: styles.bright,
};

const maxClass: Record<BodyMaxWidth, string> = {
  none: "",
  sm: styles.maxSm,
  md: styles.maxMd,
};

const alignClass: Record<BodyAlign, string> = {
  left: styles.textLeft,
  center: styles.textCenter,
  right: styles.textRight,
};

export function Body({
  as: Comp = "p",
  size = "default",
  tone = "default",
  maxWidth = "none",
  align = "left",
  center = false,
  animate = false,
  className,
  ...props
}: BodyProps) {
  return (
    <Comp
      className={[
        styles.root,
        sizeClass[size],
        toneClass[tone],
        maxClass[maxWidth],
        alignClass[align],
        center ? styles.center : "",
        animate ? styles.fadeUp : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
