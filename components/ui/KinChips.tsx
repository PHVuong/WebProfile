export interface KinMember {
  name: string;
  time?: string;
  status?: string;
  isTicked?: boolean;
}

export interface KinChipsProps {
  members?: KinMember[];
  className?: string;
}

const defaultMembers: KinMember[] = [
  { name: "Dad", time: "08:32", status: "Notified", isTicked: true },
  { name: "Sarah", time: "08:32", status: "Notified", isTicked: true },
  { name: "Elena", time: "08:32", status: "Notified", isTicked: true },
];

/**
 * Family Kin notification chips showing the confirmation tick arriving on household phones.
 * Hallmark Theme: Dose
 */
export function KinChips({ members = defaultMembers, className = "" }: KinChipsProps) {
  return (
    <ul className={`kin ${className}`.trim()}>
      {members.map((member, i) => (
        <li key={i} className={`chip ${member.isTicked !== false ? "is-ticked" : ""}`}>
          <div className="chip__screen" aria-hidden="true">
            <svg viewBox="0 0 12 12" fill="none">
              <path d="M2 6.2L4.6 9L10 3" />
            </svg>
          </div>
          <div className="chip__text">
            <b>{member.name}</b>
            <span>{member.time ? `${member.time} · ${member.status || "Seen"}` : member.status}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * Ripple pulse effect radiating out when a dose is logged.
 */
export function RippleEffect({ isActive = true, className = "" }: { isActive?: boolean; className?: string }) {
  return <div className={`ripple ${isActive ? "is-on" : ""} ${className}`.trim()} aria-hidden="true" />;
}

