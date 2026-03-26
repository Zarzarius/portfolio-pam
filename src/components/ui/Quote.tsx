import type { ComponentPropsWithoutRef, ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./Quote.module.css";

const cx = bind.bind(styles);

type QuoteProps = ComponentPropsWithoutRef<"figure"> & {
  quote: ReactNode;
  attribution?: ReactNode;
};

export function Quote({ quote, attribution, className, ...props }: QuoteProps) {
  return (
    <figure
      className={cx("figure", className)}
      {...props}
    >
      <blockquote className={styles.quote}>{quote}</blockquote>
      {attribution ? (
        <figcaption className={styles.attribution}>{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
