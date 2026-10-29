"use client";
import { useState } from "react";

/** Phím nhựa chọn được. Được chọn thì chuyển sang màu mint. */
export function Key({ children, defaultPressed = false, onChange }: { children: string; defaultPressed?: boolean; onChange?: (v: boolean) => void }) {
  const [on, setOn] = useState(defaultPressed);
  return (
    <button type="button" className="key" aria-pressed={on} onClick={() => { setOn(!on); onChange?.(!on); }}>
      {children}
    </button>
  );
}
