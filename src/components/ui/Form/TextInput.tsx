import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./TextInput.module.css";

const cx = bind.bind(styles);

type TextInputProps = ComponentPropsWithoutRef<"input"> & {
  invalid?: boolean;
};

export function TextInput({ className, invalid, ...props }: TextInputProps) {
  return (
    <input
      className={cx("input", { inputError: invalid }, className)}
      {...props}
    />
  );
}
