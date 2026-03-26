import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./Container.module.css";

const cx = bind.bind(styles);

export type ContainerSize = "narrow" | "content" | "wide" | "full";
export type ContainerPadding = "default" | "none";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: ContainerSize;
  padding?: ContainerPadding;
};

const sizeKey: Record<ContainerSize, "narrow" | "content" | "wide" | "full"> = {
  narrow: "narrow",
  content: "content",
  wide: "wide",
  full: "full",
};

const paddingKey: Record<ContainerPadding, "paddingDefault" | "paddingNone"> = {
  default: "paddingDefault",
  none: "paddingNone",
};

export function Container({
  size = "wide",
  padding = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cx("root", sizeKey[size], paddingKey[padding], className)}
      {...props}
    />
  );
}
