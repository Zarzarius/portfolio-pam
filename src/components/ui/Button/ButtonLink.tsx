import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

import type { ButtonVariant } from "./Button";

export type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  ghost: styles.ghost,
  outline: styles.outline,
  subtle: styles.subtle,
  submit: styles.submit,
};

function isAppRouterInternal(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

export function ButtonLink({
  href,
  variant = "primary",
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const cls = [
    styles.base,
    variantClass[variant],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isAppRouterInternal(href)) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}
