import type { CSSProperties, ReactNode } from "react";
import type { Tint } from "./Plastic";

export interface StageTimeItem {
  time: string;
  label: string;
}

export interface PlasticStageBandProps {
  stepNumber?: number | string;
  tint?: Tint;
  title: string;
  lead?: string;
  times?: StageTimeItem[];
  children?: ReactNode;
  className?: string;
}

/**
 * Translucent Plastic Stage Band with watermark number, schedule list, and phone preview slots.
 * Hallmark Theme: Dose
 */
export function PlasticStageBand({
  stepNumber,
  tint = "thu",
  title,
  lead,
  times = [],
  children,
  className = "",
}: PlasticStageBandProps) {
  const style = {
    "--t": `var(--p-${tint})`,
  } as CSSProperties;

  return (
    <div className={`stage plastic ${stepNumber ? "has-custom-step" : ""} ${className}`.trim()} style={style}>
      <div className="stage__text">
        {stepNumber && (
          <span className="stage__num" aria-hidden="true">
            {stepNumber}
          </span>
        )}
        <h3>{title}</h3>
        {lead && <p style={{ color: "var(--color-ink-2)", margin: 0 }}>{lead}</p>}

        {times.length > 0 && (
          <ul className="stage__times">
            {times.map((item, idx) => (
              <li key={idx}>
                <span className="dose">{item.time}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {children && <div className="stage__phones">{children}</div>}
    </div>
  );
}
