import type { ComponentPropsWithoutRef } from "react";

import styles from "./Section.module.css";

export type SectionSpacing = "default" | "compact" | "hero";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
  borderTop?: boolean;
};

const spacingClass: Record<SectionSpacing, string> = {
  default: styles.spacingDefault,
  compact: styles.spacingCompact,
  hero: styles.spacingHero,
};

export function Section({
  spacing = "default",
  borderTop = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        styles.root,
        spacingClass[spacing],
        borderTop ? styles.borderTop : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
