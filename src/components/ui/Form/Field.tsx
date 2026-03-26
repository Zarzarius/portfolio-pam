import type { ReactNode } from "react";
import bind from "classnames/bind";

import styles from "./Field.module.css";

const cx = bind.bind(styles);

type FieldProps = {
  label: ReactNode;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, error, children, className }: FieldProps) {
  return (
    <div className={cx("root", className)}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
