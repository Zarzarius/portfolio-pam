import { Link } from "next-view-transitions";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./Button.module.css";

import type { ButtonVariant } from "./Button";

const cx = bind.bind(styles);

export type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const variantKey: Record<
  ButtonVariant,
  "primary" | "ghost" | "outline" | "subtle" | "submit"
> = {
  primary: "primary",
  ghost: "ghost",
  outline: "outline",
  subtle: "subtle",
  submit: "submit",
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
  const cls = cx("base", variantKey[variant], { fullWidth }, className);

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
