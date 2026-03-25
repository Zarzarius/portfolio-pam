"use client";

import { usePathname } from "next/navigation";
import { Footer, Header } from "@/components/portfolio";
import styles from "./page.module.css";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <div
      className={
        isContact ? `${styles.shell} ${styles.shellContact}` : styles.shell
      }
    >
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer variant={isContact ? "contact" : "default"} />
    </div>
  );
}
