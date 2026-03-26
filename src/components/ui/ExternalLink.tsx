import type { ComponentPropsWithoutRef, ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./ExternalLink.module.css";

const cx = bind.bind(styles);

export type ExternalLinkTone = "default" | "muted";

type ExternalLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "target" | "rel"
> & {
  tone?: ExternalLinkTone;
  children: ReactNode;
};

export function ExternalLink({
  tone = "default",
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cx("root", { muted: tone === "muted" }, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
