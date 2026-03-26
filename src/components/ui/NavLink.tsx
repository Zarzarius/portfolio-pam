import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import styles from "./NavLink.module.css";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  active?: boolean;
};

export function NavLink({ active, className, ...props }: NavLinkProps) {
  return (
    <Link
      className={[
        styles.root,
        active ? styles.active : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
