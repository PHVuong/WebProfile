import type { ReactNode } from "react";

export interface InkBandProps {
  headline?: ReactNode;
  subline?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * Statement on the Ink Band: high-contrast dark section with massive typography.
 * Hallmark Theme: Dose
 */
export function InkBand({
  headline = "The family knows before the next dose is due.",
  subline = "Never ask if the morning tablets were taken.",
  children,
  className = "",
}: InkBandProps) {
  return (
    <section className={`band--ink ${className}`.trim()}>
      <div className="container">
        {headline && <h2 className="say__line">{headline}</h2>}
        {subline && <div className="say__sub">{subline}</div>}
        {children && <div style={{ marginTop: "var(--space-xl)" }}>{children}</div>}
      </div>
    </section>
  );
}
