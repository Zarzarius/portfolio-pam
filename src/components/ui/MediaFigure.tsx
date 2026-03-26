import type { ComponentPropsWithoutRef, ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./MediaFigure.module.css";

const cx = bind.bind(styles);

export type MediaAspectRatio = "16x9" | "4x3" | "1x1" | "3x4";

type MediaFigureProps = ComponentPropsWithoutRef<"figure"> & {
  aspectRatio?: MediaAspectRatio;
  caption?: ReactNode;
};

const ratioKey: Record<
  MediaAspectRatio,
  "ratio16x9" | "ratio4x3" | "ratio1x1" | "ratio3x4"
> = {
  "16x9": "ratio16x9",
  "4x3": "ratio4x3",
  "1x1": "ratio1x1",
  "3x4": "ratio3x4",
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
      className={cx("figure", className)}
      {...props}
    >
      <div className={cx("frame", ratioKey[aspectRatio])}>
        {children}
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
