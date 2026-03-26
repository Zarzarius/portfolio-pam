import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./TextArea.module.css";

const cx = bind.bind(styles);

type TextAreaProps = ComponentPropsWithoutRef<"textarea"> & {
  invalid?: boolean;
};

export function TextArea({ className, invalid, ...props }: TextAreaProps) {
  return (
    <textarea
      className={cx("textarea", { textareaError: invalid }, className)}
      {...props}
    />
  );
}
