import type { HTMLAttributes } from "react";

export type StampKind = "given" | "missed" | "due";

export interface InkStampProps extends HTMLAttributes<HTMLDivElement> {
  kind?: StampKind;
  title?: string;
  subtitle?: string;
  isStamped?: boolean;
}

/**
 * Authentic pharmacy ink stamp pressed with turbulence SVG noise mask and double ring border.
 * Hallmark Theme: Dose
 */
export function InkStamp({
  kind = "given",
  title = "GIVEN",
  subtitle = "08:32 · ON TIME",
  isStamped = true,
  className = "",
  children,
  ...rest
}: InkStampProps) {
  return (
    <div
      className={`stamp ${className}`.trim()}
      data-kind={kind}
      style={{
        opacity: isStamped ? 1 : 0,
        transform: isStamped ? "scale(1)" : "scale(1.3)",
      }}
      {...rest}
    >
      {children || (
        <>
          <span>{title}</span>
          <span>{subtitle}</span>
        </>
      )}
    </div>
  );
}

