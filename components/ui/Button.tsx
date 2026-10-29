import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  isBusy?: boolean;
  children: ReactNode;
}

/**
 * Moulded plastic button with light bevel, rim shadow, and physical pressed active state.
 * Hallmark Theme: Dose
 */
export function Button({
  variant = "secondary",
  size = "md",
  href,
  isBusy,
  disabled,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    "btn",
    variant === "primary" ? "btn--primary" : "btn--secondary",
    size === "sm" ? "btn--sm" : size === "lg" ? "btn--lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          aria-busy={isBusy}
          target={isExternal && href.startsWith("http") ? "_blank" : undefined}
          rel={isExternal && href.startsWith("http") ? "noreferrer noopener" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-busy={isBusy}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={rest.type || "button"}
      className={classes}
      disabled={disabled}
      aria-busy={isBusy}
      {...rest}
    >
      {children}
    </button>
  );
}
