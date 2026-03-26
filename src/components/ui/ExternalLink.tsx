import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./ExternalLink.module.css";

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
      className={[
        styles.root,
        tone === "muted" ? styles.muted : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
