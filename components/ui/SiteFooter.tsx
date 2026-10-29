import Link from "next/link";

export interface FooterLink {
  label: string;
  href: string;
}

export interface SiteFooterProps {
  wordmark?: string;
  links?: FooterLink[];
  legalText?: string;
  creditsText?: string;
  className?: string;
}

const defaultLinks: FooterLink[] = [
  { label: "Định hướng", href: "#dinh-huong" },
  { label: "Kỹ năng", href: "#ky-nang" },
  { label: "Dự án", href: "#du-an" },
  { label: "Lịch thực tập", href: "#lich-thuc-tap" },
  { label: "Liên hệ", href: "#lien-he" },
];

/**
 * Quiet ruled close footer with wordmark, links, legal, and credits.
 * Hallmark Theme: Dose
 */
export function SiteFooter({
  wordmark = "Dose",
  links = defaultLinks,
  legalText = "© 2026 Hallmark Dose. Care Register v2.8.0. Committed to privacy.",
  creditsText = "A theme for medical schedules, transparent plastic compartments, and family care networks.",
  className = "",
}: SiteFooterProps) {
  return (
    <footer className={`foot ${className}`.trim()}>
      <div className="container">
        <div className="foot__grid">
          <div className="foot__mark">{wordmark}</div>

          <ul className="foot__links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="foot__legal">{legalText}</div>

          <div className="foot__credits">
            <span>{creditsText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

