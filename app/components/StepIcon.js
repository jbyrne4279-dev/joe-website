// Custom vector illustrations for the "how it works" / lifecycle steps on the
// service pages. Each icon is stroke-based line art drawn with currentColor, so
// it inherits the accent colour set on its wrapper (blue / green / gold).

const paths = {
  // Desktop — you instruct us: a document being filled in with a pen
  instruct: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
      <path d="M8 8h5M8 12h3" />
      <path d="M17.5 3.5a1.6 1.6 0 0 1 2.3 2.3L15 10.6l-2.7.6.6-2.7z" />
    </>
  ),
  // Desktop — we gather the data: magnifier over a bar chart
  'gather-data': (
    <>
      <path d="M4 20V10M9 20V6M14 20v-5" />
      <circle cx="17" cy="11" r="3.2" />
      <path d="m19.4 13.4 2.1 2.1" />
    </>
  ),
  // Desktop — we calculate the rebuild: calculator
  calculate: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8.5 12h0M12 12h0M15.5 12h0M8.5 16h0M12 16h0M15.5 16h0" />
    </>
  ),
  // Desktop — you receive the report: envelope with a check
  report: (
    <>
      <path d="M4 6h16a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1z" />
      <path d="m4 7 8 6 8-6" />
      <path d="m9.5 14.5 1.8 1.8 3.2-3.4" />
    </>
  ),

  // On-site — we arrange access: calendar with a check
  'arrange-access': (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  // On‑site — we measure on site: a tape/ruler over a building outline
  measure: (
    <>
      <path d="M4 20V9l6-4 6 4" />
      <path d="M8 20v-5h4v5" />
      <path d="M15 12h6v6h-6z" />
      <path d="M17 12v2M19 12v3M21 12v2" />
    </>
  ),
  // On‑site — we evidence everything: camera
  evidence: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="12.5" r="3.3" />
    </>
  ),
  // On‑site — we deliver the report: shield with a check
  deliver: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  // 3‑year — inception: a flag planted on a base
  inception: (
    <>
      <path d="M6 21V4" />
      <path d="M6 4h11l-2 3.5L17 11H6" />
      <path d="M4 21h6" />
    </>
  ),
  // 3-year — annual update: circular refresh arrows
  'annual-update': (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v4h-4" />
    </>
  ),
  // 3-year — continued indexation: rising line chart with arrow
  'continued-index': (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 3.5-3.5 3 3L20 8" />
      <path d="M20 8v3.5M20 8h-3.5" />
    </>
  ),
  // 3‑year — maintained compliance: award rosette
  maintained: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13-1.5 7 5-2.5 5 2.5-1.5-7" />
      <path d="m10 9 1.4 1.4 2.6-2.8" />
    </>
  ),

  // How‑we‑help concepts
  home_work: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  architecture: (
    <>
      <circle cx="12" cy="5" r="1.6" />
      <path d="M12 6.6v1.4" />
      <path d="M12 8 7 20M12 8l5 12" />
      <path d="M9.2 15h5.6" />
    </>
  ),
  bolt: (
    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
  ),
  engineering: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.6 5.6l1.9 1.9M16.5 16.5l1.9 1.9M18.4 5.6l-1.9 1.9M7.5 16.5l-1.9 1.9" />
    </>
  ),
  summarize: (
    <>
      <path d="M7 3h8l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h4" />
    </>
  ),
  verified: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  support_agent: (
    <>
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2z" />
      <path d="M20 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2z" />
      <path d="M18 17v1a3 3 0 0 1-3 3h-3" />
    </>
  ),
  apartment: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 21V9h4a1 1 0 0 1 1 1v11" />
      <path d="M7 8h2M11 8h1M7 12h2M11 12h1M7 16h2M11 16h1" />
      <path d="M3 21h18" />
    </>
  ),
}

export default function StepIcon({ name, size = 26, className, style }) {
  const glyph = paths[name]
  if (!glyph) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {glyph}
    </svg>
  )
}
