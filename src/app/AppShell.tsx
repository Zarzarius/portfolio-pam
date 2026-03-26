"use client";

import { usePathname } from "next/navigation";

import { Stack } from "@/components/ui";
import { Footer, Header } from "@/components/portfolio";

import styles from "./page.module.css";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <Stack
      gap="none"
      align="stretch"
      className={
        isContact ? `${styles.shell} ${styles.shellContact}` : styles.shell
      }
    >
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer variant={isContact ? "contact" : "default"} />
    </Stack>
  );
}
