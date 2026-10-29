"use client";

import { useState, type CSSProperties } from "react";
import { PharmacyLabel, type PharmacyLabelProps } from "./PharmacyLabel";
import { KinChips, RippleEffect, type KinMember } from "./KinChips";
import type { Tint } from "./Plastic";

export interface OrganiserDay {
  id: string;
  name: string;
  letter: string;
  tint: Tint;
  medication?: string;
  dosage?: string;
  time?: string;
  isCompleted?: boolean;
}

export const defaultOrganiserDays: OrganiserDay[] = [
  { id: "mon", name: "Monday", letter: "M", tint: "mon", medication: "Metformin", dosage: "500mg", time: "08:00", isCompleted: true },
  { id: "tue", name: "Tuesday", letter: "T", tint: "tue", medication: "Metformin", dosage: "500mg", time: "08:00", isCompleted: true },
  { id: "wed", name: "Wednesday", letter: "W", tint: "wed", medication: "Metformin", dosage: "500mg", time: "08:00", isCompleted: true },
  { id: "thu", name: "Thursday", letter: "T", tint: "thu", medication: "Amoxicillin", dosage: "500mg", time: "08:00", isCompleted: true },
  { id: "fri", name: "Friday", letter: "F", tint: "fri", medication: "Amoxicillin", dosage: "500mg", time: "08:00", isCompleted: false },
  { id: "sat", name: "Saturday", letter: "S", tint: "sat", medication: "Vitamin D3", dosage: "1000IU", time: "09:00", isCompleted: false },
  { id: "sun", name: "Sunday", letter: "S", tint: "sun", medication: "Omega-3", dosage: "1000mg", time: "09:00", isCompleted: false },
];

export interface Organiser3DProps {
  days?: OrganiserDay[];
  initialActiveDayId?: string;
  interactive?: boolean;
  showKinChips?: boolean;
  showRipple?: boolean;
  showWindowLight?: boolean;
  activeLabelProps?: Partial<PharmacyLabelProps>;
  kinMembers?: KinMember[];
  className?: string;
  onDayChange?: (day: OrganiserDay) => void;
}

/**
 * Hallmark Theme Dose 3D Organiser
 * Seven tinted plastic compartments in CSS 3D on window-lit paper with opening lids,
 * light pooling, and a rising pharmacy prescription label.
 */
export function Organiser3D({
  days = defaultOrganiserDays,
  initialActiveDayId = "thu",
  interactive = true,
  showKinChips = true,
  showRipple = true,
  showWindowLight = true,
  activeLabelProps,
  kinMembers,
  className = "",
  onDayChange,
}: Organiser3DProps) {
  const [activeDayId, setActiveDayId] = useState<string>(initialActiveDayId);

  const activeDay = days.find((d) => d.id === activeDayId) || days[3];

  const handleDayClick = (day: OrganiserDay) => {
    if (!interactive) return;
    setActiveDayId(day.id);
    onDayChange?.(day);
  };

  return (
    <div className={`hero__visual ${className}`.trim()}>
      {showWindowLight && <div className="hero__window" aria-hidden="true" />}

      {showRipple && <RippleEffect isActive={true} />}

      <div className="scene" aria-hidden="true">
        <div className="org">
          <div className="org__shade" />

          {days.map((day, index) => {
            const isOpen = day.id === activeDayId;
            const style = {
              "--i": index,
              "--t": `var(--p-${day.tint})`,
            } as CSSProperties;

            return (
              <div
                key={day.id}
                className={`box ${isOpen ? "is-open" : ""}`}
                style={style}
              >
                <i className="box__pool" />
                <i className="box__floor" />
                <i className="box__wall box__wall--front" />
                <i className="box__wall box__wall--back" />
                <i className="box__wall box__wall--l" />
                <i className="box__wall box__wall--r" />

                <button
                  type="button"
                  className="lid"
                  aria-label={`${day.name} compartment, ${isOpen ? "open" : "closed"}`}
                  onClick={() => handleDayClick(day)}
                  style={{ pointerEvents: interactive ? "auto" : "none" }}
                >
                  <span className="lid__top">
                    <b data-l={day.letter} />
                  </span>
                  <span className="lid__under">{day.letter}</span>
                  <span className="lid__edge" />
                  <span className="lid__tab" />
                </button>

                {isOpen && (
                  <PharmacyLabel
                    title={activeLabelProps?.title || day.medication || "Amoxicillin"}
                    regimen={activeLabelProps?.regimen || `${day.dosage || "500 mg"} · Once daily`}
                    tag={`${day.name.toUpperCase()} · ${day.time || "08:00"}`}
                    tint={day.tint}
                    stamp={
                      activeLabelProps?.stamp || {
                        kind: day.isCompleted ? "given" : "due",
                        title: day.isCompleted ? "GIVEN" : "DUE",
                        subtitle: day.isCompleted ? "08:32 · LOGGED" : "PENDING LOG",
                        isStamped: true,
                      }
                    }
                    {...activeLabelProps}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showKinChips && <KinChips members={kinMembers} />}
    </div>
  );
}

