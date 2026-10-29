import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  icon?: ReactNode;
}

/**
 * Clean tactile input field styled with Hallmark Dose paper tones and focus rim.
 */
export function Input({
  label,
  helperText,
  error,
  icon,
  id,
  className = "",
  style,
  ...rest
}: InputProps) {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <div style={{ display: "grid", gap: "var(--space-2xs)", width: "100%", ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: 500,
            color: "var(--color-ink)",
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && (
          <span
            style={{
              position: "absolute",
              left: 14,
              pointerEvents: "none",
              color: "var(--color-muted)",
              display: "flex",
            }}
          >
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`input ${className}`.trim()}
          style={{
            height: 52,
            width: "100%",
            padding: icon ? "0 16px 0 42px" : "0 16px",
            border: `1px solid ${error ? "var(--color-error)" : "var(--color-rule)"}`,
            borderRadius: "var(--radius-input)",
            background: "var(--tone-99_8-95)",
            color: "var(--color-ink)",
            fontSize: "var(--text-md)",
            fontFamily: "var(--font-body)",
            outline: "none",
            transition: "border-color var(--dur-micro) var(--ease-out), box-shadow var(--dur-micro) var(--ease-out)",
            boxShadow: "inset 0 1px 2px oklch(30% 0.03 165 / 0.05)",
          }}
          {...rest}
        />
      </div>

      {(error || helperText) && (
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: error ? "var(--color-error)" : "var(--color-muted)",
          }}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}
