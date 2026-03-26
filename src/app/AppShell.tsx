"use client";

import { usePathname } from "next/navigation";
import bind from "classnames/bind";

import { Stack } from "@/components/ui";
import { Footer, Header } from "@/components/portfolio";

import styles from "./page.module.css";
const cx = bind.bind(styles);

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <Stack
      gap="none"
      align="stretch"
      className={cx("shell", { shellContact: isContact })}
    >
      <Header />
      <main className={cx("main")}>{children}</main>
      <Footer variant={isContact ? "contact" : "default"} />
    </Stack>
  );
}
