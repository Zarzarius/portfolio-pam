import type { ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./Stat.module.css";
const cx = bind.bind(styles);

type StatProps = {
  value: ReactNode;
  label: ReactNode;
  className?: string;
};

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cx(className)}>
      <div className={cx("value")}>{value}</div>
      <div className={cx("label")}>{label}</div>
    </div>
  );
}
