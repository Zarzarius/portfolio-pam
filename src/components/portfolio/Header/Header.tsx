"use client";

import { ButtonLink, LogoMark, NavLink } from "@/components/ui";
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
      <LogoMark className={styles.logoSlot} />
      <nav className={styles.nav} aria-label="Primary">
        {navItems.map(({ href, label }) => {
          const active = href === "/contact" && pathname === "/contact";
          return (
            <NavLink
              key={href}
              href={href}
              active={active}
              aria-current={active ? "page" : undefined}
            >
              {label.toUpperCase()}
            </NavLink>
          );
        })}
      </nav>
      <ButtonLink
        className={styles.hireSlot}
        href="/contact#collaborate"
        variant="subtle"
      >
        HIRE ME
      </ButtonLink>
    </header>
  );
}
