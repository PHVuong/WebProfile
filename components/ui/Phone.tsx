import type { HTMLAttributes, ReactNode } from "react";

export interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  aspectRatio?: string;
  children: ReactNode;
}

/**
 * Authentic Phone mockup chassis (with Hallmark lift shadow and radius).
 */
export function Phone({
  width,
  aspectRatio,
  children,
  className = "",
  style,
  ...rest
}: PhoneProps) {
  const customStyle = {
    ...(width ? { "--w": typeof width === "number" ? `${width}px` : width } : {}),
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style,
  };

  return (
    <div className={`phone ${className}`.trim()} style={customStyle} {...rest}>
      {children}
    </div>
  );
}

/* =========================================================================
   Screen 1: ScheduleDayScreen
   Daily dosage list with status chips ("Given" or "Due")
   ========================================================================= */

export interface DoseItem {
  time: string;
  medicine: string;
  amount: string;
  status: "given" | "due" | "upcoming";
  loggedBy?: string;
}

export interface ScheduleDayScreenProps {
  dayName?: string;
  title?: string;
  doses?: DoseItem[];
}

export function ScheduleDayScreen({
  dayName = "Thursday",
  title = "Morning & Evening",
  doses = [
    { time: "08:00", medicine: "Amoxicillin", amount: "500 mg", status: "given", loggedBy: "Sarah at 08:32" },
    { time: "13:00", medicine: "Probiotic", amount: "1 capsule", status: "given", loggedBy: "Elena at 13:04" },
    { time: "20:00", medicine: "Amoxicillin", amount: "500 mg", status: "due" },
    { time: "22:00", medicine: "Magnesium", amount: "200 mg", status: "upcoming" },
  ],
}: ScheduleDayScreenProps) {
  return (
    <div className="ui ph">
      <div className="ph__top">
        <span className="ph__day">{dayName}</span>
        <h3 className="ph__title">{title}</h3>
      </div>

      <ul className="ph__doses">
        {doses.map((dose, idx) => {
          const isGiven = dose.status === "given";
          return (
            <li key={idx} className={isGiven ? "is-given" : ""}>
              <span className="ph__time dose">{dose.time}</span>
              <div className="ph__what">
                <span>{dose.medicine}</span>
                <span className="dose">{dose.amount}</span>
              </div>
              <span className="ph__chip">
                {isGiven ? "Given" : dose.status === "due" ? "Due" : "Upcoming"}
              </span>
              {dose.loggedBy && (
                <div className="ph__by">
                  Logged by <span className="dose">{dose.loggedBy}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* =========================================================================
   Screen 2: DueNowScreen
   Prominent dosage alert with big time, details, and action buttons
   ========================================================================= */

export interface DueNowScreenProps {
  time?: string;
  medicine?: string;
  amount?: string;
  instructions?: string;
  onTake?: () => void;
  onWait?: () => void;
}

export function DueNowScreen({
  time = "08:00",
  medicine = "Amoxicillin",
  amount = "500 mg · 1 capsule",
  instructions = "Take with a full glass of water. Take with food if stomach upset occurs.",
  onTake,
  onWait,
}: DueNowScreenProps) {
  return (
    <div className="ui ph">
      <div className="due">
        <div className="due__time dose">{time}</div>
        <h3 className="due__what">{medicine}</h3>
        <div className="due__amt dose">{amount}</div>
      </div>

      <div className="due__note">{instructions}</div>

      <div className="due__acts">
        <button type="button" className="due__go" onClick={onTake}>
          Take dose
        </button>
        <button type="button" className="due__wait" onClick={onWait}>
          Wait 15 min
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   Screen 3: GivenScreen
   Confirmation screen showing big green checkmark and timestamp
   ========================================================================= */

export interface GivenScreenProps {
  medicine?: string;
  timeLogged?: string;
  nextDose?: string;
}

export function GivenScreen({
  medicine = "Amoxicillin",
  timeLogged = "Given at 08:32",
  nextDose = "Next dose at 20:00 (11 hours left)",
}: GivenScreenProps) {
  return (
    <div className="ui ph">
      <div className="given">
        <div className="given__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="given__what">{medicine}</h3>
        <div className="given__when dose">{timeLogged}</div>
      </div>

      <div className="given__note">{nextDose}</div>
    </div>
  );
}

/* =========================================================================
   Screen 4: LockScreen
   Minimal lockscreen clock and active dose card
   ========================================================================= */

export interface LockScreenProps {
  time?: string;
  date?: string;
  reminderTitle?: string;
  reminderSubtitle?: string;
}

export function LockScreen({
  time = "08:14",
  date = "Thursday, 29 October",
  reminderTitle = "Morning Dose Due in 15m",
  reminderSubtitle = "Amoxicillin 500mg with breakfast",
}: LockScreenProps) {
  return (
    <div className="ui lock ph">
      <span className="lock__day">{date}</span>
      <div className="lock__time dose">{time}</div>

      <div className="lock__note">
        <b>{reminderTitle}</b>
        <span>{reminderSubtitle}</span>
      </div>
    </div>
  );
}

/* =========================================================================
   Screen 5: HouseholdScreen
   Care team & household members management
   ========================================================================= */

export interface HouseholdMember {
  name: string;
  role: string;
  status: string;
}

export interface HouseholdScreenProps {
  recipientName?: string;
  recipientRelation?: string;
  members?: HouseholdMember[];
  onAddMember?: () => void;
}

export function HouseholdScreen({
  recipientName = "Eleanor",
  recipientRelation = "Mother · Primary recipient",
  members = [
    { name: "Sarah (You)", role: "Admin", status: "Active" },
    { name: "David", role: "Caregiver", status: "Active" },
    { name: "Dr. Henderson", role: "Physician", status: "Read only" },
  ],
  onAddMember,
}: HouseholdScreenProps) {
  return (
    <div className="ui ph hh">
      <div className="hh__lead ph__top">
        <h3 className="ph__what">{recipientName}</h3>
        <span className="ph__by">{recipientRelation}</span>
      </div>

      <ul className="ph__doses ph__doses--feed">
        {members.map((m, idx) => (
          <li key={idx}>
            <div>
              <b>{m.name}</b>
              <div className="ph__by">{m.role}</div>
            </div>
            <span className="ph__chip">{m.status}</span>
          </li>
        ))}
      </ul>

      <button type="button" className="hh__add" onClick={onAddMember}>
        + Add caregiver
      </button>
    </div>
  );
}
