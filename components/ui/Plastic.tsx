import type { CSSProperties, ReactNode } from "react";

export type Tint = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

/** Bề mặt nhựa trong có màu nhạt. Màu chỉ để phân loại, không bao giờ là trạng thái. */
export function Plastic({ tint = "thu", pad, className = "", children }: { tint?: Tint; pad?: boolean; className?: string; children: ReactNode }) {
  return (
    <div className={`plastic ${pad ? "plastic--pad" : ""} ${className}`.trim()} style={{ "--t": `var(--p-${tint})` } as CSSProperties}>
      {children}
    </div>
  );
}
