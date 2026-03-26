import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./GradientText.module.css";

const cx = bind.bind(styles);

type GradientTextProps = ComponentPropsWithoutRef<"span">;

export function GradientText({ className, ...props }: GradientTextProps) {
  return (
    <span
      className={cx("root", className)}
      {...props}
    />
  );
}
