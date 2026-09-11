"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  minDate?: Date;
}

const DatePicker = ({
  value,
  onChange,
  placeholder = "Select a date",
  minDate,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(value || new Date());
  const pickerRef = useRef<HTMLDivElement>(null);

  const selectedDate = value;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();

  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();

  const monthName = month.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendar = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1,
  );

  const isSameDay = (date1: Date, date2: Date) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const isBeforeMinDate = (day: number) => {
    if (!minDate) return false;

    const date = new Date(month.getFullYear(), month.getMonth(), day);

    const minimum = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate(),
    );

    return date < minimum;
  };

  const handleDateSelect = (day: number) => {
    if (isBeforeMinDate(day)) return;

    const selected = new Date(month.getFullYear(), month.getMonth(), day);

    onChange(selected);
    setOpen(false);
  };

  const displayValue = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : placeholder;

  return (
    <div className="custom-date-picker" ref={pickerRef}>
      <button
        type="button"
        className="date-picker-trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={selectedDate ? "" : "date-placeholder"}>
          {displayValue}
        </span>

        <CalendarDays size={17} />
      </button>

      {open && (
        <div className="date-picker-popup">
          <div className="date-picker-top">
            <div>
              <p className="date-picker-eyebrow">Choose date</p>
              <h4>{monthName}</h4>
            </div>

            <div className="date-picker-controls">
              <button
                type="button"
                aria-label="Previous month"
                onClick={() =>
                  setMonth(
                    new Date(month.getFullYear(), month.getMonth() - 1, 1),
                  )
                }
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                aria-label="Next month"
                onClick={() =>
                  setMonth(
                    new Date(month.getFullYear(), month.getMonth() + 1, 1),
                  )
                }
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="date-picker-weekdays">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <span key={`${day}-${index}`}>{day}</span>
            ))}
          </div>

          <div className="date-picker-grid">
            {calendar.map((day, index) => {
              if (!day) {
                return <span key={index} />;
              }

              const currentDate = new Date(
                month.getFullYear(),
                month.getMonth(),
                day,
              );

              const today = new Date();

              const isToday = isSameDay(currentDate, today);

              const isSelected =
                selectedDate && isSameDay(currentDate, selectedDate);

              const disabled = isBeforeMinDate(day);

              return (
                <button
                  type="button"
                  key={day}
                  disabled={disabled}
                  className={[
                    "date-picker-day",
                    isToday ? "today" : "",
                    isSelected ? "selected" : "",
                    disabled ? "disabled" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => handleDateSelect(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
