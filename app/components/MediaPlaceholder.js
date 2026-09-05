// Small rounded-square image placeholder used beside section text on the
// service pages. Swap the inner icon for an <img>/<Image> when a real asset
// is available. `accent` tints the icon; `tint` fills the square.

export default function MediaPlaceholder({ accent = '#1A6B4A', tint = 'rgba(26,107,74,0.10)', className = '' }) {
  return (
    <div
      className={`shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center border border-black/5 ${className}`}
      style={{ background: tint }}
      aria-hidden="true"
    >
      <span className="material-symbols-outlined" style={{ color: accent, fontSize: '1.9rem' }}>image</span>
    </div>
  )
}
