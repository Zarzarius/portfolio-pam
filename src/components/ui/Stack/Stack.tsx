import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./Stack.module.css";

const cx = bind.bind(styles);

export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type StackAlign = "start" | "center" | "stretch";

type StackProps = ComponentPropsWithoutRef<"div"> & {
  gap?: StackGap;
  align?: StackAlign;
};

const gapKey: Record<
  StackGap,
  "gapNone" | "gapXs" | "gapSm" | "gapMd" | "gapLg" | "gapXl"
> = {
  none: "gapNone",
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl",
};

const alignKey: Record<StackAlign, "alignStart" | "alignCenter" | "alignStretch"> =
  {
    start: "alignStart",
    center: "alignCenter",
    stretch: "alignStretch",
  };

export function Stack({
  gap = "md",
  align = "stretch",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cx("root", gapKey[gap], alignKey[align], className)}
      {...props}
    />
  );
}
