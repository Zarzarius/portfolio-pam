import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./Body.module.css";

const cx = bind.bind(styles);

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

const sizeKey: Record<BodySize, "default" | "small" | "smaller"> = {
  default: "default",
  small: "small",
  smaller: "smaller",
};

const toneKey: Record<BodyTone, "inherit" | "muted" | "bright"> = {
  default: "inherit",
  muted: "muted",
  bright: "bright",
};

const alignKey: Record<BodyAlign, "textLeft" | "textCenter" | "textRight"> = {
  left: "textLeft",
  center: "textCenter",
  right: "textRight",
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
      className={cx(
        "root",
        sizeKey[size],
        toneKey[tone],
        maxWidth === "sm" && "maxSm",
        maxWidth === "md" && "maxMd",
        alignKey[align],
        { center, fadeUp: animate },
        className,
      )}
      {...props}
    />
  );
}
