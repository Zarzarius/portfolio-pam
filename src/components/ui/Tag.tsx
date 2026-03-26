import type { ComponentPropsWithoutRef } from "react";

import styles from "./Tag.module.css";

export type TagSize = "sm" | "md";

type TagProps = ComponentPropsWithoutRef<"span"> & {
  size?: TagSize;
};

const sizeClass: Record<TagSize, string> = {
  sm: styles.sm,
  md: styles.md,
};

export function Tag({ size = "md", className, ...props }: TagProps) {
  return (
    <span
      className={[styles.root, sizeClass[size], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
