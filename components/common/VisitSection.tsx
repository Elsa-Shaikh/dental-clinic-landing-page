"use client";

import { hours } from "@/lib/dummt";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const VisitSection = () => {
  const [month, setMonth] = useState(new Date());
  const today = new Date();
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
  const weekday = today.toLocaleString("en-US", { weekday: "long" });
  const isOpen =
    today.getDay() !== 0 && !(today.getDay() === 5 && today.getHours() < 14);
  const calendar = useMemo(
    () =>
      Array.from({ length: firstDay + daysInMonth }, (_, i) =>
        i < firstDay ? null : i - firstDay + 1,
      ),
    [firstDay, daysInMonth],
  );
  return (
    <>
      <section id="visit" className="visit-section section-pad">
        <div className="visit-copy">
          <p className="eyebrow">05 / Plan your visit</p>
          <h2>
            Good care,
            <br />
            <i>on your time.</i>
          </h2>
          <p>
            We keep our doors open late on weekdays, with a slower Saturday for
            when your week is full.
          </p>
          <div className="status">
            <span className={isOpen ? "status-dot open" : "status-dot"} />{" "}
            <strong>{isOpen ? "Open today" : "Closed today"}</strong>
            <span>{weekday}</span>
          </div>
          <div className="hours-list">
            {hours.map(([day, time]) => (
              <div key={day} className={day === weekday ? "current-day" : ""}>
                <span>{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="calendar-card">
          <div className="calendar-top">
            <div>
              <p className="eyebrow">Clinic calendar</p>
              <h3>{monthName}</h3>
            </div>
            <div className="calendar-controls">
              <button
                onClick={() =>
                  setMonth(
                    new Date(month.getFullYear(), month.getMonth() - 1, 1),
                  )
                }
                aria-label="Previous month"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={() =>
                  setMonth(
                    new Date(month.getFullYear(), month.getMonth() + 1, 1),
                  )
                }
                aria-label="Next month"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
          <div className="weekdays">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={`${d}-${i}`}>{d}</span>
            ))}
          </div>
          <div className="calendar-grid">
            {calendar.map((day, i) => (
              <span
                key={i}
                className={`${day && i % 7 !== 0 ? "open-day" : ""} ${day === today.getDate() && month.getMonth() === today.getMonth() && month.getFullYear() === today.getFullYear() ? "today" : ""}`}
              >
                {day}
              </span>
            ))}
          </div>
          <div className="legend">
            <span>
              <i className="legend-open" />
              Clinic open
            </span>
            <span>
              <i className="legend-today" />
              Today
            </span>
            <span>
              <i className="legend-closed" />
              Closed
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisitSection;
