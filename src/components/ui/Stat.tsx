import type { ReactNode } from "react";

import styles from "./Stat.module.css";

type StatProps = {
  value: ReactNode;
  label: ReactNode;
  className?: string;
};

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={className}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
