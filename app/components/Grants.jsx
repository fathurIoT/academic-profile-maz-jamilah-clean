"use client";

import { useState } from "react";

export default function Grants() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">
          Research Grants
        </h2>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Principal Researcher
        </h3>

        <ul className="space-y-2 text-gray-700 mb-4">
          <li>FRGS – Undiagnosed Type 2 Diabetes Mellitus (RM44,600)</li>
          <li>DAMAT Commercialization Grant (RM20,000)</li>
          <li>Industrial & MTUN Research Grants</li>
        </ul>

        {/* SLIDE-DOWN CONTENT */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
            ${open ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Co-Researcher / Project Team
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>Yayasan Hasanah & Ministry of Finance Projects (RM4.9M+)</li>
              <li>PERKESO National Employees Social Security Survey</li>
              <li>FRGS, PRGS, TRGS & Community-Based Research Grants</li>
            </ul>
          </div>
        </div>

        {/* TOGGLE */}
        <button
        onClick={() => setOpen(!open)}
        className="mt-6 flex items-center gap-2 text-blue-900 font-medium hover:underline"
        >
        {open ? "Show less" : "Show more"}

        <svg
        className={`w-4 h-4 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        </button>

      </div>
    </section>
  );
}