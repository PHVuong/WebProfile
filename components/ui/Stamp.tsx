import type { ReactNode } from "react";

/** Dấu xác nhận hai vòng. Xanh = đã xong, xám = lỡ hoặc chưa xong (không dùng đỏ hay cam). */
export function Stamp({ tone = "green", static: still, children }: { tone?: "green" | "grey"; static?: boolean; children: ReactNode }) {
  return <span className={`stamp ${tone === "grey" ? "stamp--grey" : ""} ${still ? "stamp--static" : ""}`.trim()}>{children}</span>;
}
