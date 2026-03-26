import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import styles from "./LogoMark.module.css";

export type LogoMarkSize = "default" | "sm";

type LogoMarkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "className"
> & {
  href?: string;
  size?: LogoMarkSize;
  className?: string;
};

export function LogoMark({
  href = "/",
  size = "default",
  children = "PAM.",
  className,
  ...rest
}: LogoMarkProps) {
  return (
    <Link
      href={href}
      className={[
        styles.root,
        size === "sm" ? styles.sm : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Link>
  );
}
