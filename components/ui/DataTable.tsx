import type { ReactNode } from "react";

export interface DataTableProps {
  head: string[];
  rows: ReactNode[][];
  caption?: string;
  className?: string;
}

/**
 * Tabular Schedule & Data Table with DM Mono numbers and subtle ruled lines.
 * Hallmark Theme: Dose
 */
export function DataTable({
  head,
  rows,
  caption,
  className = "",
}: DataTableProps) {
  return (
    <div
      className={`scroll ${className}`.trim()}
      style={{
        overflowX: "auto",
        borderRadius: "var(--radius-card)",
        border: "1px solid var(--color-rule)",
        background: "var(--color-paper)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        {caption && (
          <caption className="visually-hidden">{caption}</caption>
        )}
        <thead>
          <tr style={{ background: "var(--color-paper-2)" }}>
            {head.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "16px 20px",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  color: "var(--color-muted)",
                  borderBottom: "1px solid var(--color-rule)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              style={{
                borderBottom: i === rows.length - 1 ? 0 : "1px solid var(--color-rule)",
                transition: "background 0.15s ease",
              }}
            >
              {r.map((c, j) => (
                <td
                  key={j}
                  className={j === 0 ? "num" : ""}
                  style={{
                    padding: "16px 20px",
                    color: j === 0 ? "var(--color-ink)" : "var(--color-ink-2)",
                    fontFamily: j === 0 ? "var(--font-outlier)" : "inherit",
                    fontWeight: j === 0 ? 500 : 400,
                  }}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
