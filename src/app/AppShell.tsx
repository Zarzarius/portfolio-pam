"use client";

import { usePathname } from "next/navigation";
import bind from "classnames/bind";
import type { ComponentType, ReactNode } from "react";

import { Stack } from "@/components/ui";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";

import styles from "./page.module.css";
const cx = bind.bind(styles);

type AppShellProps = {
  children: ReactNode;
  navItems: Array<{ label: string; href: string }>;
  hireMeLabel: string;
  footerEmail: string;
  footerCopyright: string;
  footerStatusText: string;
  socialLinks: Array<{ label: string; href: string }>;
};

type HeaderComponentProps = {
  navItems: Array<{ label: string; href: string }>;
  hireMeLabel: string;
};

type FooterComponentProps = {
  variant?: "default" | "contact";
  social: Array<{ label: string; href: string }>;
  email: string;
  copyright: string;
  statusText: string;
};

const TypedHeader = Header as ComponentType<HeaderComponentProps>;
const TypedFooter = Footer as ComponentType<FooterComponentProps>;

export function AppShell({
  children,
  navItems,
  hireMeLabel,
  footerEmail,
  footerCopyright,
  footerStatusText,
  socialLinks,
}: AppShellProps) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <main className={cx("main")}>{children}</main>;
  }

  return (
    <Stack
      gap="none"
      align="stretch"
      className={cx("shell", { shellContact: isContact })}
    >
      <TypedHeader navItems={navItems} hireMeLabel={hireMeLabel} />
      <main className={cx("main")}>{children}</main>
      <TypedFooter
        variant={isContact ? "contact" : "default"}
        social={socialLinks}
        email={footerEmail}
        copyright={footerCopyright}
        statusText={footerStatusText}
      />
    </Stack>
  );
}
