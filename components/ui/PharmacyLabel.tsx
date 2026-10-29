import type { CSSProperties, ReactNode } from "react";
import { InkStamp, type StampKind } from "./InkStamp";
import type { Tint } from "./Plastic";

export interface LabelRow {
  label: string;
  value: string;
}

export interface PharmacyLabelProps {
  title: string;
  regimen?: string;
  tag?: string;
  rxNumber?: string;
  rows?: [string, string][] | LabelRow[];
  stubText?: ReactNode;
  stamp?: {
    kind?: StampKind;
    title?: string;
    subtitle?: string;
    isStamped?: boolean;
  };
  tint?: Tint;
  variant?: "default" | "flat" | "missed";
  isSunk?: boolean;
  className?: string;
}

/**
 * Pharmacy Prescription Slip standing on paper / in the organiser compartment.
 * Hallmark Theme: Dose
 */
export function PharmacyLabel({
  title,
  regimen,
  tag = "MORNING · 08:00",
  rxNumber = "RX-88412",
  rows = [
    { label: "Take", value: "1 capsule with water" },
    { label: "Course", value: "Day 4 of 7" },
  ],
  stubText,
  stamp = { kind: "given", title: "GIVEN", subtitle: "08:32 · ON TIME", isStamped: true },
  tint = "thu",
  variant = "default",
  isSunk = false,
  className = "",
}: PharmacyLabelProps) {
  const normalizedRows: LabelRow[] = rows.map((r) =>
    Array.isArray(r) ? { label: r[0], value: r[1] } : r
  );

  const classes = [
    "label",
    variant === "flat" ? "label--flat" : "",
    variant === "missed" ? "label--flat label--missed" : "",
    isSunk ? "is-sunk" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = {
    "--cast": `var(--p-${tint})`,
  } as CSSProperties;

  return (
    <article className={classes} style={style}>
      <div className="label__main">
        <div className="label__head">
          <span>{tag}</span>
          <span className="dose">{rxNumber}</span>
        </div>

        <div className="label__what">{title}</div>
        {regimen && <div className="dose" style={{ color: "var(--color-muted)", fontSize: "0.85rem", marginTop: 2 }}>{regimen}</div>}

        <div style={{ marginTop: "var(--space-sm)", display: "grid", gap: "var(--space-3xs)" }}>
          {normalizedRows.map((row, i) => (
            <div className="label__row" key={i}>
              <span>{row.label}</span>
              <span className="dose">{row.value}</span>
            </div>
          ))}
        </div>

        {stamp && (
          <InkStamp
            kind={stamp.kind}
            title={stamp.title}
            subtitle={stamp.subtitle}
            isStamped={stamp.isStamped}
          />
        )}
      </div>

      <div className="label__stub">
        {stubText || (
          <>
            <div>TEAR & KEEP</div>
            <div className="dose" style={{ fontSize: "0.7rem", marginTop: 2 }}>KEEP IN BATCH</div>
          </>
        )}
      </div>
    </article>
  );
}

