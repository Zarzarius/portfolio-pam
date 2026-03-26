import type { ComponentPropsWithoutRef } from "react";

import styles from "./Card.module.css";

export type CardElevation = "flat" | "raised";
export type CardPadding = "default" | "none";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  elevation?: CardElevation;
  padding?: CardPadding;
};

const elevationClass: Record<CardElevation, string> = {
  flat: styles.flat,
  raised: styles.raised,
};

const paddingClass: Record<CardPadding, string> = {
  default: styles.paddingDefault,
  none: styles.paddingNone,
};

export function Card({
  elevation = "flat",
  padding = "default",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        styles.root,
        elevationClass[elevation],
        paddingClass[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
