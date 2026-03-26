"use client";

import { ButtonLink, LogoMark, NavLink } from "@/components/ui";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useState } from "react";
import bind from "classnames/bind";

import styles from "./Header.module.css";
const cx = bind.bind(styles);

const navItems = [
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;

  return (
    <header className={cx("header")}>
      <LogoMark className={cx("logoSlot")} />
      <nav className={cx("nav")} aria-label="Primary">
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
      <button
        type="button"
        className={cx("menuToggle", { menuToggleOpen: menuOpen })}
        aria-expanded={menuOpen}
        aria-controls="mobile-spotlight-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuPath((value) => (value === pathname ? null : pathname))}
      >
        <span className={cx("menuToggleOrbit")} aria-hidden="true">
          <span className={cx("menuToggleLine")} />
          <span className={cx("menuToggleLine")} />
        </span>
        <span className={cx("menuToggleLabel")}>MENU</span>
      </button>
      <ButtonLink
        className={cx("hireSlot")}
        href="/contact#collaborate"
        variant="subtle"
      >
        HIRE ME
      </ButtonLink>
      <div
        id="mobile-spotlight-nav"
        className={cx("mobileMenu", { mobileMenuOpen: menuOpen })}
      >
        <nav className={cx("mobileNav")} aria-label="Mobile primary">
          {navItems.map(({ href, label }, index) => {
            const active = href === "/contact" && pathname === "/contact";
            return (
              <NavLink
                key={`mobile-${href}`}
                href={href}
                active={active}
                aria-current={active ? "page" : undefined}
                className={cx("mobileNavLink")}
                style={{ "--mobile-link-delay": `${index * 50}ms` } as CSSProperties}
                onClick={() => setMenuPath(null)}
              >
                {label.toUpperCase()}
              </NavLink>
            );
          })}
          <ButtonLink
            href="/contact#collaborate"
            variant="subtle"
            className={cx("mobileHire")}
            onClick={() => setMenuPath(null)}
          >
            HIRE ME
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
