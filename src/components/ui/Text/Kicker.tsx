import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./Kicker.module.css";

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
  const toneClass = tone === "accent" ? styles.accent : styles.muted;
  const motion = animate ? styles.animate : "";

  if (withRule) {
    return (
      <div className={[styles.row, className].filter(Boolean).join(" ")}>
        <span className={styles.rule} aria-hidden />
        <p
          className={[styles.root, styles.withRuleText, toneClass, motion]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          {children}
        </p>
      </div>
    );
  }

  return (
    <p
      className={[styles.root, toneClass, motion, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </p>
  );
}
