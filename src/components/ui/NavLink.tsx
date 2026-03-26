import { Link } from "next-view-transitions";
import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./NavLink.module.css";

const cx = bind.bind(styles);

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  active?: boolean;
};

export function NavLink({ active, className, ...props }: NavLinkProps) {
  return (
    <Link
      className={cx("root", { active }, className)}
      {...props}
    />
  );
}
