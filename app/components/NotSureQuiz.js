'use client'
import { useEffect, useState } from 'react'

const PROPERTY_TYPES = [
  'House',
  'Flat',
  'Block',
  'Commercial',
  'Industrial',
  'Listed',
  'Mixed-use',
  'Portfolio',
  'Other',
]

const LAST_RCA = [
  'Never',
  'Under 1 year',
  '1–3 years',
  '3+ years',
  'Not sure',
]

const COMPLEX = ['Block', 'Commercial', 'Industrial', 'Listed', 'Mixed-use']

function recommend(propertyType, lastRca) {
  if (propertyType === 'Portfolio') return '3-Year Protection Plan'
  if (COMPLEX.includes(propertyType)) return 'On-Site Survey'
  return 'Desktop Assessment'
}

function riskLevel(lastRca) {
  switch (lastRca) {
    case 'Under 1 year':
      return {
        label: 'Low Risk',
        desc: 'Your rebuild figure is likely still current, but construction costs move quickly, keep it under review.',
        color: '#1A6B4A', bg: 'rgba(26,107,74,0.08)', border: 'rgba(26,107,74,0.2)',
      }
    case '1–3 years':
      return {
        label: 'Medium Risk',
        desc: 'At this age your reinstatement figure is very likely out of date. You are probably underinsured.',
        color: '#a16207', bg: 'rgba(212,160,23,0.1)', border: 'rgba(212,160,23,0.25)',
      }
    case '3+ years':
      return {
        label: 'High Risk',
        desc: 'Your reinstatement figure is significantly out of date. Your property is very likely badly underinsured.',
        color: '#991b1b', bg: 'rgba(153,27,27,0.08)', border: 'rgba(153,27,27,0.2)',
      }
    case 'Never':
      return {
        label: 'High Risk',
        desc: 'Without a RICS‑regulated assessment on record, your sum insured has never been independently verified. Your property is very likely underinsured.',
        color: '#991b1b', bg: 'rgba(153,27,27,0.08)', border: 'rgba(153,27,27,0.2)',
      }
    case 'Not sure':
      return {
        label: 'Unknown Risk',
        desc: 'Without a recent assessment on record, we’d recommend checking your figure to be sure.',
        color: '#a16207', bg: 'rgba(212,160,23,0.1)', border: 'rgba(212,160,23,0.25)',
      }
    default:
      return null
  }
}

export default function NotSureQuiz() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [propertyType, setPropertyType] = useState('')
  const [lastRca, setLastRca] = useState('')

  const rec = propertyType ? recommend(propertyType, lastRca) : ''
  const risk = lastRca ? riskLevel(lastRca) : null

  // Allow other components (e.g. hero CTAs) to open this quiz by dispatching
  // window.dispatchEvent(new Event('open-rca-quiz')).
  useEffect(() => {
    function handleOpen() { setOpen(true) }
    window.addEventListener('open-rca-quiz', handleOpen)
    return () => window.removeEventListener('open-rca-quiz', handleOpen)
  }, [])

  function close() {
    setOpen(false)
    setTimeout(() => { setStep(0); setPropertyType(''); setLastRca('') }, 200)
  }

  return (
    <>
      {/* Sticky floating quiz button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Check if you need a RCA"
          className="quiz-fab fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 text-[#0f3d28] pl-4 pr-5 py-3.5 rounded-full font-bold text-sm ring-2 ring-white/70 hover:-translate-y-0.5 active:scale-[0.97] transition-transform cursor-pointer"
          style={{ background: '#f5b301' }}
        >
          <span className="material-symbols-outlined text-[#0f3d28]" style={{ fontSize: '1.3rem' }}>quiz</span>
          <span>Check if you need a RCA</span>
          <span className="material-symbols-outlined text-[#0f3d28]" style={{ fontSize: '1.3rem' }}>ads_click</span>
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Which assessment quiz"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />
          <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-zinc-200 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 sm:px-8 pt-5 pb-4 border-b border-zinc-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-secondary">Step {step + 1} of 3</span>
                <button type="button" onClick={close} aria-label="Close" className="inline-flex items-center justify-center w-9 h-9 -mr-2 rounded-full text-zinc-500 hover:bg-zinc-100 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.3rem' }}>close</span>
                </button>
              </div>
              <div className="h-2.5 w-full rounded-full bg-zinc-200 overflow-hidden">
                <div
                  className="btn-shine h-full rounded-full transition-[width] duration-500 ease-out"
                  style={{ width: `${((step + 1) / 3) * 100}%` }}
                />
              </div>
            </div>

            <form action="https://formspree.io/f/xkokvlpr" method="POST" className="px-6 sm:px-8 py-6">
              <input type="hidden" name="_next" value="https://reinstatementcostassessment.org/thank-you" />
              <input type="hidden" name="_subject" value="Website quiz enquiry" />
              <input type="hidden" name="enquiry_source" value="Which-assessment quiz" />
              <input type="hidden" name="property_type" value={propertyType} />
              <input type="hidden" name="last_assessment" value={lastRca} />
              <input type="hidden" name="recommended_service" value={rec} />

              {/* Step 1, property type */}
              <div hidden={step !== 0}>
                <h3 className="text-xl font-bold text-primary mb-5">What type of property is it?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROPERTY_TYPES.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { setPropertyType(opt); setStep(1) }}
                      className={`text-left text-sm font-medium rounded-xl border px-4 py-3 transition-all cursor-pointer ${propertyType === opt ? 'border-[#1A6B4A] bg-[#1A6B4A]/10 text-[#1A6B4A]' : 'border-zinc-200 text-secondary hover:border-[#1A6B4A]/40 hover:bg-zinc-50'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2, last RCA */}
              <div hidden={step !== 1}>
                <h3 className="text-xl font-bold text-primary mb-5">When was your last assessment?</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {LAST_RCA.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { setLastRca(opt); setStep(2) }}
                      className={`text-left text-sm font-medium rounded-xl border px-4 py-3 transition-all cursor-pointer ${lastRca === opt ? 'border-[#1A6B4A] bg-[#1A6B4A]/10 text-[#1A6B4A]' : 'border-zinc-200 text-secondary hover:border-[#1A6B4A]/40 hover:bg-zinc-50'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <button type="button" onClick={() => setStep(0)} className="mt-5 text-sm font-semibold text-secondary hover:text-primary inline-flex items-center gap-1 cursor-pointer">
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_back</span> Back
                </button>
              </div>

              {/* Step 3, contact */}
              <div hidden={step !== 2}>
                {risk && (
                  <div className="mb-3 rounded-2xl p-4" style={{ background: risk.bg, border: `1px solid ${risk.border}` }}>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: risk.color }}>Underinsurance risk</p>
                    <p className="font-bold" style={{ color: risk.color }}>{risk.label}</p>
                    <p className="text-secondary text-xs mt-1">{risk.desc}</p>
                  </div>
                )}
                {rec && (
                  <div className="mb-5 rounded-2xl bg-[#1A6B4A]/8 border border-[#1A6B4A]/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#1A6B4A] mb-1">Our suggestion</p>
                    <p className="text-primary font-bold">{rec}</p>
                    <p className="text-secondary text-xs mt-1">Leave your details and a RICS‑regulated surveyor will confirm the right fit and quote.</p>
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="quiz-name" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Full name <span className="text-red-400">*</span></label>
                    <input id="quiz-name" name="name" required type="text" placeholder="John Smith" className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="quiz-email" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Email address <span className="text-red-400">*</span></label>
                    <input id="quiz-email" name="email" required type="email" placeholder="john@example.com" className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="quiz-phone" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Phone number <span className="text-red-400">*</span></label>
                    <input id="quiz-phone" name="phone" required type="tel" autoComplete="tel" placeholder="07123 456789" className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="quiz-notes" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Notes <span className="text-red-400">*</span></label>
                    <textarea id="quiz-notes" name="notes" required rows="3" placeholder="Tell us about the property: address, approximate floor area, and anything unusual..." className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all resize-none" />
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <button type="button" onClick={() => setStep(1)} className="text-sm font-semibold text-secondary hover:text-primary inline-flex items-center gap-1 cursor-pointer">
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_back</span> Back
                  </button>
                  <button type="submit" className="btn-shine text-white px-6 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-transform sovereign-shadow flex-1 cursor-pointer">
                    Send my enquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
