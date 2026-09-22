'use client'
import { useEffect, useState } from 'react'

// Minimal cookie consent banner. Reuses the site's existing colour tokens and
// button styling only — no new visual design system.
//
// Persists the visitor's choice in localStorage and calls Google's
// `gtag('consent', 'update', ...)` API so that non-essential (advertising)
// cookies from the Google tag already configured in app/layout.js only run
// once consent has been given. The default consent state (set in
// app/layout.js, before the Google tag loads) is "denied" for all
// non-essential categories, so nothing non-essential runs before a choice is
// made here.

const STORAGE_KEY = 'rca-cookie-consent'

function applyConsent(granted) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  })
}

function readStoredConsent() {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export default function CookieConsent() {
  // Lazy initial state, so whether the banner shows is decided once during
  // the first client render rather than via a setState call inside an
  // effect. `readStoredConsent` returns null during SSR (window is
  // undefined there), which safely resolves to "hidden" until hydration.
  const [visible, setVisible] = useState(() => {
    const stored = readStoredConsent()
    return stored !== 'granted' && stored !== 'denied'
  })
  const [managing, setManaging] = useState(false)
  const [analyticsChecked, setAnalyticsChecked] = useState(false)

  useEffect(() => {
    // Side effect only (no setState here): if consent was already granted
    // on a previous visit, tell Google's consent API so non-essential
    // cookies are allowed on this page load too.
    if (readStoredConsent() === 'granted') {
      applyConsent(true)
    }
  }, [])

  function save(granted) {
    try {
      window.localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
    } catch {
      // ignore storage errors
    }
    applyConsent(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[95] p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-zinc-200 p-5 sm:p-6">
        <p className="text-sm text-secondary leading-relaxed mb-4">
          We use strictly necessary cookies to run this website, and, only with your consent, cookies for advertising measurement (Google Ads). See our{' '}
          <a href="/cookie-policy" className="text-[#1A6B4A] font-semibold hover:underline">Cookie Policy</a>{' '}
          for details.
        </p>

        {managing && (
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-outline-variant/40 px-4 py-3">
            <input
              id="cc-analytics"
              type="checkbox"
              checked={analyticsChecked}
              onChange={(e) => setAnalyticsChecked(e.target.checked)}
              className="w-4 h-4 accent-[#1A6B4A] cursor-pointer"
            />
            <label htmlFor="cc-analytics" className="text-sm text-secondary cursor-pointer">
              Advertising &amp; analytics cookies (Google Ads)
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => save(true)}
            className="btn-shine text-white px-6 py-3 rounded-full font-bold text-sm active:scale-[0.97] transition-transform cursor-pointer"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => save(false)}
            className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all cursor-pointer"
          >
            Reject non-essential
          </button>
          {managing ? (
            <button
              type="button"
              onClick={() => save(analyticsChecked)}
              className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all cursor-pointer"
            >
              Save preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setManaging(true)}
              className="text-secondary px-6 py-3 rounded-full font-semibold text-sm hover:text-primary transition-colors cursor-pointer"
            >
              Manage preferences
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
