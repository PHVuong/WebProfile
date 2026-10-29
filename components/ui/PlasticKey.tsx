"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

export interface KeyOption {
  id: string;
  label: string;
  helperText?: string;
  icon?: ReactNode;
}

export interface KeyGroupProps {
  legend?: string;
  name: string;
  options: KeyOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * Tactile Moulded Plastic Radio Keys
 * Physical pressed state, glossy gradient, rim shadow, and active bevel.
 * Hallmark Theme: Dose
 */
export function KeyGroup({
  legend,
  name,
  options,
  value,
  onChange,
  className = "",
}: KeyGroupProps) {
  return (
    <fieldset className={`keys ${className}`.trim()}>
      {legend && <legend>{legend}</legend>}
      {options.map((option) => {
        const isChecked = value === option.id;
        const inputId = `${name}-${option.id}`;
        return (
          <div key={option.id} style={{ display: "inline-flex" }}>
            <input
              type="radio"
              id={inputId}
              name={name}
              value={option.id}
              checked={isChecked}
              onChange={() => onChange(option.id)}
            />
            <label htmlFor={inputId} className={isChecked ? "is-checked" : ""}>
              {option.icon && <span style={{ marginRight: 8 }}>{option.icon}</span>}
              {option.label}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}

export interface PlasticKeyProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isSelected?: boolean;
}

export function PlasticKey({
  label,
  isSelected,
  id,
  className = "",
  ...rest
}: PlasticKeyProps) {
  const inputId = id || `key-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div style={{ display: "inline-flex" }} className={className}>
      <input type="checkbox" id={inputId} checked={isSelected} {...rest} />
      <label htmlFor={inputId} className={isSelected ? "is-checked" : ""}>
        {label}
      </label>
    </div>
  );
}

