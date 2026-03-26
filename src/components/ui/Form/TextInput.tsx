import type { ComponentPropsWithoutRef } from "react";

import styles from "./TextInput.module.css";

type TextInputProps = ComponentPropsWithoutRef<"input"> & {
  invalid?: boolean;
};

export function TextInput({ className, invalid, ...props }: TextInputProps) {
  return (
    <input
      className={[
        styles.input,
        invalid ? styles.inputError : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
