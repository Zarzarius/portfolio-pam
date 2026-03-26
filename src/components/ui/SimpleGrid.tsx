import type { ComponentPropsWithoutRef } from "react";

import styles from "./SimpleGrid.module.css";

export type SimpleGridColumns = 2 | 3 | 4;

type SimpleGridProps = ComponentPropsWithoutRef<"div"> & {
  columns?: SimpleGridColumns;
};

const colsClass: Record<SimpleGridColumns, string> = {
  2: styles.cols2,
  3: styles.cols3,
  4: styles.cols4,
};

export function SimpleGrid({
  columns = 3,
  className,
  ...props
}: SimpleGridProps) {
  return (
    <div
      className={[styles.root, colsClass[columns], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
