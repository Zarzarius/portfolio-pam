"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        PAM.
      </Link>
      <nav className={styles.nav} aria-label="Primary">
        {navItems.map(({ href, label }) => {
          const active = href === "/contact" && pathname === "/contact";
          return (
            <Link
              key={href}
              href={href}
              className={
                active ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
              }
              aria-current={active ? "page" : undefined}
            >
              {label.toUpperCase()}
            </Link>
          );
        })}
      </nav>
      <Link className={styles.hire} href="/contact#collaborate">
        HIRE ME
      </Link>
    </header>
  );
}
