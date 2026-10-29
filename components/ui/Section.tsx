import type { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  title?: ReactNode;
  lead?: ReactNode;
  tinted?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Standard content section with responsive spacing and container.
 * Hallmark Theme: Dose
 */
export function Section({
  id,
  title,
  lead,
  tinted,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`sec ${className}`.trim()}
      style={{
        paddingBlock: "var(--section-gap-s)",
        ...(tinted ? { background: "var(--color-paper-2)" } : {}),
      }}
    >
      <div className="container">
        {(title || lead) && (
          <div style={{ marginBottom: "var(--space-2xl)", maxWidth: "52ch" }}>
            {title && <h2>{title}</h2>}
            {lead && (
              <p className="lead" style={{ marginTop: "var(--space-md)", color: "var(--color-ink-2)" }}>
                {lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
