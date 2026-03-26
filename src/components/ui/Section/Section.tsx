import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./Section.module.css";

const cx = bind.bind(styles);

export type SectionSpacing = "default" | "compact" | "hero";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
  borderTop?: boolean;
};

const spacingKey: Record<
  SectionSpacing,
  "spacingDefault" | "spacingCompact" | "spacingHero"
> = {
  default: "spacingDefault",
  compact: "spacingCompact",
  hero: "spacingHero",
};

export function Section({
  spacing = "default",
  borderTop = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cx("root", spacingKey[spacing], { borderTop }, className)}
      {...props}
    />
  );
}
