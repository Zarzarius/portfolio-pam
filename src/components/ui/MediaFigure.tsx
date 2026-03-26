import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./MediaFigure.module.css";

export type MediaAspectRatio = "16x9" | "4x3" | "1x1" | "3x4";

type MediaFigureProps = ComponentPropsWithoutRef<"figure"> & {
  aspectRatio?: MediaAspectRatio;
  caption?: ReactNode;
};

const ratioClass: Record<MediaAspectRatio, string> = {
  "16x9": styles.ratio16x9,
  "4x3": styles.ratio4x3,
  "1x1": styles.ratio1x1,
  "3x4": styles.ratio3x4,
};

export function MediaFigure({
  aspectRatio = "16x9",
  caption,
  children,
  className,
  ...props
}: MediaFigureProps) {
  return (
    <figure
      className={[styles.figure, className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className={[styles.frame, ratioClass[aspectRatio]].join(" ")}>
        {children}
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
