"use client";

import { useState } from "react";

export default function Publications() {
  const [open, setOpen] = useState(false);

  return (
    <section id="publications" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">
          Publications & Indexing
        </h2>

        <p className="text-gray-700 mb-6">
          Actively publishing in peer-reviewed journals indexed by Scopus,
          Web of Science and MyCite, with research focus on statistics,
          health analytics, decision science and educational innovation.
        </p>

        <ul className="space-y-2 text-gray-700 mb-4">
          <li><strong>Google Scholar:</strong> H-index 13 | Citations 690+</li>
          <li><strong>Scopus:</strong> H-index 10 | Documents 30+</li>
          <li><strong>Web of Science:</strong> H-index 8</li>
          <li><strong>ResearchGate:</strong> H-index 13</li>
          <li><strong>ORCID:</strong> 0000-0002-7371-7278</li>
        </ul>

        {/* SLIDE-DOWN CONTENT */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
            ${open ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="text-gray-700">
            <p className="mb-2 font-medium">Selected Publication Areas:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Applied Statistical Modelling</li>
              <li>Health & Medical Data Analytics</li>
              <li>Small Sample Machine Learning</li>
              <li>Game-Based Learning (DAMAT)</li>
              <li>Decision Science & Spatial Analysis</li>
            </ul>

            <p className="mt-4">
              Full publication list is available via Google Scholar and
              Scopus profiles.
            </p>
          </div>
        </div>

        {/* TOGGLE */}
        <button
            onClick={() => setOpen(!open)}
            className="mt-6 flex items-center gap-2 text-blue-900 font-medium hover:underline"
            >
            {open ? "Show less" : "Show more"}

            {/* CHEVRON ICON */}
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