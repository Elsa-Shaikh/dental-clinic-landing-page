"use client";

import { ChevronDown } from "lucide-react";
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
}

const Select = ({
  placeholder = "Select an option",
  options,
  ...props
}: SelectProps) => {
  return (
    <div className="custom-select">
      <select {...props}>
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown size={16} className="custom-select-icon" />
    </div>
  );
};

export default Select;
