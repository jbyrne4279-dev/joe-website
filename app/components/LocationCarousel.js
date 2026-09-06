/**
 * Infinite, seamless marquee of location pills. Pure CSS animation.
 *
 * The list is rendered twice inside a track that is animated from 0 to -50%,
 * so the second copy scrolls exactly into the position of the first for a
 * seamless loop. Pauses on hover; respects prefers-reduced-motion.
 *
 * @param {{ locations: string[], accent?: string, dark?: boolean }} props
 *   dark — style the pills for a dark section background (translucent white
 *   pills with white text) instead of the default light pills.
 */
export default function LocationCarousel({ locations = [], accent = '#1A6B4A', dark = false }) {
  const doubled = [...locations, ...locations]
  const pillClass = dark
    ? 'inline-flex shrink-0 items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm font-medium text-white/90'
    : 'inline-flex shrink-0 items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-secondary'
  return (
    <div className="location-marquee relative w-full overflow-hidden py-1">
      <div className="location-track flex w-max gap-2.5" aria-hidden="true">
        {doubled.map((area, i) => (
          <span key={`${area}-${i}`} className={pillClass}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: dark ? '#ffffff' : accent }}>location_on</span>
            {area}
          </span>
        ))}
      </div>
      {/* Accessible, non-animated list for screen readers */}
      <ul className="sr-only">
        {locations.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
    </div>
  )
}
