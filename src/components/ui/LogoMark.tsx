import { Link } from "next-view-transitions";
import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./LogoMark.module.css";

const cx = bind.bind(styles);

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
      className={cx("root", { sm: size === "sm" }, className)}
      {...rest}
    >
      {children}
    </Link>
  );
}
