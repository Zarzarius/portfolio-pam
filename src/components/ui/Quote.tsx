import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./Quote.module.css";

type QuoteProps = ComponentPropsWithoutRef<"figure"> & {
  quote: ReactNode;
  attribution?: ReactNode;
};

export function Quote({ quote, attribution, className, ...props }: QuoteProps) {
  return (
    <figure
      className={[styles.figure, className].filter(Boolean).join(" ")}
      {...props}
    >
      <blockquote className={styles.quote}>{quote}</blockquote>
      {attribution ? (
        <figcaption className={styles.attribution}>{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
