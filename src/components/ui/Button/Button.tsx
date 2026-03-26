import type { ComponentPropsWithoutRef } from "react";
import bind from "classnames/bind";

import styles from "./Button.module.css";

const cx = bind.bind(styles);

export type ButtonVariant = "primary" | "ghost" | "outline" | "subtle" | "submit";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const variantKey: Record<
  ButtonVariant,
  "primary" | "ghost" | "outline" | "subtle" | "submit"
> = {
  primary: "primary",
  ghost: "ghost",
  outline: "outline",
  subtle: "subtle",
  submit: "submit",
};

export function Button({
  variant = "primary",
  fullWidth = false,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx("base", variantKey[variant], { fullWidth }, className)}
      {...props}
    />
  );
}
