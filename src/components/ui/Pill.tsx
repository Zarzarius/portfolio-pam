import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./Pill.module.css";

export type PillVariant = "default" | "status";

type PillProps = ComponentPropsWithoutRef<"span"> & {
  variant?: PillVariant;
  leading?: ReactNode;
};

export function Pill({
  variant = "default",
  leading,
  children,
  className,
  ...props
}: PillProps) {
  return (
    <span
      className={[
        styles.root,
        variant === "status" ? styles.status : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {leading}
      {children}
    </span>
  );
}

export function StatusDot({ className }: { className?: string }) {
  return (
    <span
      className={[styles.dot, className].filter(Boolean).join(" ")}
      aria-hidden
    />
  );
}
