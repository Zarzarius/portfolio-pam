import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./Tag.module.css";

const cx = bind.bind(styles);

export type TagSize = "sm" | "md";

type TagProps = ComponentPropsWithoutRef<"span"> & {
  size?: TagSize;
};

const sizeKey: Record<TagSize, "sm" | "md"> = {
  sm: "sm",
  md: "md",
};

export function Tag({ size = "md", className, ...props }: TagProps) {
  return (
    <span
      className={cx("root", sizeKey[size], className)}
      {...props}
    />
  );
}
