import type { ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./SectionHeader.module.css";

const cx = bind.bind(styles);

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
  return (
    <header className={cx("root", { stack: align === "stack" }, className)}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title} id={titleId}>
          {title}
        </h2>
        <span className={styles.underline} aria-hidden />
      </div>
      {description ? (
        <p
          className={cx("description", {
            splitDescription: align === "split",
          })}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
