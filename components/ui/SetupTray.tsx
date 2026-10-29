"use client";

import { useState } from "react";
import { KeyGroup, type KeyOption } from "./PlasticKey";
import { Button } from "./Button";
import { Phone, HouseholdScreen } from "./Phone";

export interface SetupTrayProps {
  title?: string;
  lead?: string;
  options?: KeyOption[];
  onComplete?: (selectedOption: string) => void;
  className?: string;
}

const defaultOptions: KeyOption[] = [
  { id: "myself", label: "For myself", helperText: "Manage your personal medication schedule and reminders." },
  { id: "parents", label: "For my parents", helperText: "Coordinate care, track daily adherence, and get family notifications." },
  { id: "child", label: "For a child", helperText: "Keep track of pediatrician prescriptions, courses, and school dosages." },
  { id: "partner", label: "For a partner", helperText: "Shared visibility for daily health routines and reminders." },
];

/**
 * Setup Form in a moulded plastic tray with tactile keys and a responsive phone screen.
 * Hallmark Theme: Dose
 */
export function SetupTray({
  title = "Start by choosing who the tablets are for.",
  lead = "No email required to begin. Dose is built around the household and the person receiving care.",
  options = defaultOptions,
  onComplete,
  className = "",
}: SetupTrayProps) {
  const [selectedKey, setSelectedKey] = useState<string>("parents");

  const currentOption = options.find((o) => o.id === selectedKey) || options[0];

  const recipientMap: Record<string, { name: string; relation: string }> = {
    myself: { name: "Personal Register", relation: "Self · Private schedule" },
    parents: { name: "Eleanor & James", relation: "Parents · Family care circle" },
    child: { name: "Lucas", relation: "Child · Pediatric antibiotic course" },
    partner: { name: "Alex", relation: "Partner · Shared wellness regimen" },
  };

  const recipient = recipientMap[selectedKey] || recipientMap.parents;

  return (
    <section className={`start ${className}`.trim()}>
      <div className="container">
        <div className="start__tray plastic">
          <div className="start__text">
            <h2>{title}</h2>
            <p className="lead">{lead}</p>

            <KeyGroup
              legend="Select recipient:"
              name="recipient-selector"
              options={options}
              value={selectedKey}
              onChange={setSelectedKey}
            />

            <div className="setup__help">{currentOption.helperText}</div>

            <div className="actions" style={{ marginTop: "var(--space-md)" }}>
              <Button
                variant="primary"
                onClick={() => onComplete?.(selectedKey)}
              >
                Continue setup
              </Button>
              <Button variant="secondary">Learn about security</Button>
            </div>
          </div>

          <div className="start__phone">
            <Phone width={320} aspectRatio="360 / 560">
              <HouseholdScreen
                recipientName={recipient.name}
                recipientRelation={recipient.relation}
              />
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}

