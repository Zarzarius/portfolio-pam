import type { ComponentPropsWithoutRef } from "react";

import styles from "./Container.module.css";

export type ContainerSize = "narrow" | "content" | "wide" | "full";
export type ContainerPadding = "default" | "none";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: ContainerSize;
  padding?: ContainerPadding;
};

const sizeClass: Record<ContainerSize, string> = {
  narrow: styles.narrow,
  content: styles.content,
  wide: styles.wide,
  full: styles.full,
};

export function Container({
  size = "wide",
  padding = "default",
  className,
  ...props
}: ContainerProps) {
  const pad =
    padding === "default" ? styles.paddingDefault : styles.paddingNone;
  return (
    <div
      className={[styles.root, sizeClass[size], pad, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
