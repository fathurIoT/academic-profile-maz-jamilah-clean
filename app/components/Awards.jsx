"use client";
import { useState } from "react";

export default function Awards() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-bgSoft py-20 fade-soft">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6 relative inline-block">
          🏆 Awards & Recognition
          <span className="absolute left-0 -bottom-2 w-12 h-0.5 bg-accent"></span>
        </h2>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <ul className="space-y-3 text-textMain">
            <li>Gold Medal & WIIPA Special Award – IPITEx Bangkok (2024)</li>
            <li>Social Entrepreneur Award – Malaysian Commercialization Year</li>
          </ul>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 text-textSoft">
              <li>Multiple Gold, Silver & Bronze Medals (Innovation)</li>
              <li>National & International Recognition</li>
            </ul>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="mt-6 flex items-center gap-2 text-accent font-medium"
          >
            {open ? "Show less" : "Show more"}
            <svg
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}