"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Thêm class `in` khi phần tử vào màn hình, đúng một lần. Dùng cho dấu đóng lên nhãn. */
export function Reveal({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`${className} ${seen ? "in" : ""}`.trim()}>{children}</div>;
}
