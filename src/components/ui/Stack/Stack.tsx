import type { ComponentPropsWithoutRef } from "react";

import styles from "./Stack.module.css";

export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type StackAlign = "start" | "center" | "stretch";

type StackProps = ComponentPropsWithoutRef<"div"> & {
  gap?: StackGap;
  align?: StackAlign;
};

const gapClass: Record<StackGap, string> = {
  none: styles.gapNone,
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
};

const alignClass: Record<StackAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
};

export function Stack({
  gap = "md",
  align = "stretch",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={[styles.root, gapClass[gap], alignClass[align], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
