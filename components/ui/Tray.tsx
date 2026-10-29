import type { ReactNode } from "react";
import { Plastic, type Tint } from "./Plastic";

/** Khay 7 ngăn như hộp chia thuốc. */
export function Tray({ label, children }: { label: string; children: ReactNode }) {
  return <div className="tray" role="list" aria-label={label}>{children}</div>;
}

export function Cell({ day, what, meta, tint, busy }: { day: string; what: string; meta: string; tint: Tint; busy?: boolean }) {
  return (
    <div role="listitem">
      <Plastic tint={tint} className={`cell ${busy ? "cell--busy" : ""}`.trim()}>
        <b>{day}</b><span className="what">{what}</span><span className="mono">{meta}</span>
      </Plastic>
    </div>
  );
}
