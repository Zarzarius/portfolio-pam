import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./SimpleGrid.module.css";

const cx = bind.bind(styles);

export type SimpleGridColumns = 2 | 3 | 4;

type SimpleGridProps = ComponentPropsWithoutRef<"div"> & {
  columns?: SimpleGridColumns;
};

const colsKey: Record<SimpleGridColumns, "cols2" | "cols3" | "cols4"> = {
  2: "cols2",
  3: "cols3",
  4: "cols4",
};

export function SimpleGrid({
  columns = 3,
  className,
  ...props
}: SimpleGridProps) {
  return (
    <div
      className={cx("root", colsKey[columns], className)}
      {...props}
    />
  );
}
