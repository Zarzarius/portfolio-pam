import type { ComponentPropsWithoutRef } from "react";

import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "ghost" | "outline" | "subtle" | "submit";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  ghost: styles.ghost,
  outline: styles.outline,
  subtle: styles.subtle,
  submit: styles.submit,
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
      className={[
        styles.base,
        variantClass[variant],
        fullWidth ? styles.fullWidth : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
