import type { ReactNode } from "react";

import styles from "./SectionHeader.module.css";

export type SectionHeaderAlign = "split" | "stack";

type SectionHeaderProps = {
  title: ReactNode;
  titleId?: string;
  description?: ReactNode;
  align?: SectionHeaderAlign;
  className?: string;
};

export function SectionHeader({
  title,
  titleId,
  description,
  align = "split",
  className,
}: SectionHeaderProps) {
  const rootClass =
    align === "stack"
      ? `${styles.root} ${styles.stack}`
      : styles.root;

  return (
    <header className={[rootClass, className].filter(Boolean).join(" ")}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title} id={titleId}>
          {title}
        </h2>
        <span className={styles.underline} aria-hidden />
      </div>
      {description ? (
        <p
          className={[
            styles.description,
            align === "split" ? styles.splitDescription : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
