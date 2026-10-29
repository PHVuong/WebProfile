"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "./Button";

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavTrayProps {
  wordmark?: ReactNode;
  wordmarkHref?: string;
  links?: NavLinkItem[];
  note?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  transparentAtTop?: boolean;
  className?: string;
}

const defaultLinks: NavLinkItem[] = [
  { label: "Định hướng", href: "#dinh-huong" },
  { label: "Kỹ năng", href: "#ky-nang" },
  { label: "Dự án", href: "#du-an" },
  { label: "Lịch thực tập", href: "#lich-thuc-tap" },
  { label: "Liên hệ", href: "#lien-he" },
];

/**
 * Docked tray of clear plastic navigation header.
 * Hallmark Theme: Dose
 */
export function NavTray({
  wordmark = "Dose",
  wordmarkHref = "/",
  links = defaultLinks,
  note = "Care Register v2.8",
  action = { label: "Try Dose", href: "#setup" },
  transparentAtTop = true,
  className = "",
}: NavTrayProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!transparentAtTop) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentAtTop]);

  return (
    <header
      className={`site ${transparentAtTop ? "is-live" : ""} ${isScrolled ? "is-over" : ""} ${className}`.trim()}
    >
      <div className="container">
        <nav className="tray" aria-label="Main Navigation">
          <Link href={wordmarkHref} className="wordmark">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ color: "var(--color-accent-deep)" }}
            >
              <rect x="3" y="5" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="2.2" />
              <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
              <circle cx="7.5" cy="12" r="2" fill="currentColor" />
            </svg>
            <span>{wordmark}</span>
          </Link>

          <ul className="tray__links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="tray__end">
            {note && <span className="tray__note">{note}</span>}
            {action && (
              <Button
                variant="primary"
                size="sm"
                href={action.href}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

