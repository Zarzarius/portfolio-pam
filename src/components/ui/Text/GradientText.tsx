import type { ComponentPropsWithoutRef } from "react";

import styles from "./GradientText.module.css";

type GradientTextProps = ComponentPropsWithoutRef<"span">;

export function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      className={[styles.root, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
