import type { ComponentPropsWithoutRef } from "react";

import styles from "./TextArea.module.css";

type TextAreaProps = ComponentPropsWithoutRef<"textarea"> & {
  invalid?: boolean;
};

export function TextArea({ className, invalid, ...props }: TextAreaProps) {
  return (
    <textarea
      className={[
        styles.textarea,
        invalid ? styles.textareaError : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
