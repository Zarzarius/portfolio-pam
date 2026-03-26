"use client";

import { usePathname } from "next/navigation";
import bind from "classnames/bind";

import { Stack } from "@/components/ui";
import { Footer, Header } from "@/components/portfolio";

import styles from "./page.module.css";
const cx = bind.bind(styles);

type AppShellProps = {
  children: React.ReactNode;
  navItems: Array<{ label: string; href: string }>;
  hireMeLabel: string;
  footerEmail: string;
  footerCopyright: string;
  footerStatusText: string;
  socialLinks: Array<{ label: string; href: string }>;
};

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
      <Header navItems={navItems} hireMeLabel={hireMeLabel} />
      <main className={cx("main")}>{children}</main>
      <Footer
        variant={isContact ? "contact" : "default"}
        social={socialLinks}
        email={footerEmail}
        copyright={footerCopyright}
        statusText={footerStatusText}
      />
    </Stack>
  );
}
