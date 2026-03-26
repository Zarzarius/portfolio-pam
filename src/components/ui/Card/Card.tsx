import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./Card.module.css";

const cx = bind.bind(styles);

export type CardElevation = "flat" | "raised";
export type CardPadding = "default" | "none";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  elevation?: CardElevation;
  padding?: CardPadding;
};

const elevationKey: Record<CardElevation, "flat" | "raised"> = {
  flat: "flat",
  raised: "raised",
};

const paddingKey: Record<CardPadding, "paddingDefault" | "paddingNone"> = {
  default: "paddingDefault",
  none: "paddingNone",
};

export function Card({
  elevation = "flat",
  padding = "default",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cx("root", elevationKey[elevation], paddingKey[padding], className)}
      {...props}
    />
  );
}
