import type { ComponentPropsWithoutRef, ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./Pill.module.css";

const cx = bind.bind(styles);

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
      className={cx("root", { status: variant === "status" }, className)}
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
      className={cx("dot", className)}
      aria-hidden
    />
  );
}
