import type { ComponentPropsWithoutRef, ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./Kicker.module.css";

const cx = bind.bind(styles);

export type KickerTone = "accent" | "muted";

type KickerProps = ComponentPropsWithoutRef<"p"> & {
  tone?: KickerTone;
  withRule?: boolean;
  animate?: boolean;
  children: ReactNode;
};

export function Kicker({
  tone = "accent",
  withRule = false,
  animate = false,
  className,
  children,
  ...props
}: KickerProps) {
  const toneKey = tone === "accent" ? "accent" : "muted";

  if (withRule) {
    return (
      <div className={cx("row", className)}>
        <span className={styles.rule} aria-hidden />
        <p
          className={cx("root", "withRuleText", toneKey, { animate })}
          {...props}
        >
          {children}
        </p>
      </div>
    );
  }

  return (
    <p
      className={cx("root", toneKey, { animate }, className)}
      {...props}
    >
      {children}
    </p>
  );
}
