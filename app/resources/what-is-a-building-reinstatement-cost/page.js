import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import ContactSection from '../../components/ContactSection'
import StepIcon from '../../components/StepIcon'

export const metadata = {
  title: 'What Is a Building Reinstatement Cost? (RICS Explained)',
  description:
    'A plain-English guide to what a building reinstatement cost is, how it differs from market value, how it is calculated and why an accurate figure protects your buildings insurance.',
  alternates: { canonical: '/resources/what-is-a-building-reinstatement-cost' },
  openGraph: {
    title: 'What Is a Building Reinstatement Cost? (RICS Explained)',
    description:
      'What a building reinstatement cost is, how it differs from market value and how it is calculated by a RICS-regulated surveyor.',
    url: '/resources/what-is-a-building-reinstatement-cost',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'
const PAGE_URL = `${SITE_URL}/resources/what-is-a-building-reinstatement-cost`

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
    { '@type': 'ListItem', position: 3, name: 'What Is a Building Reinstatement Cost?', item: PAGE_URL },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is a Building Reinstatement Cost? (RICS Explained)',
  description:
    'A plain-English guide to what a building reinstatement cost is, how it differs from market value, how it is calculated and why an accurate figure protects your buildings insurance.',
  image: `${SITE_URL}/rebuild-cost-assessment-london.jpeg`,
  url: PAGE_URL,
  inLanguage: 'en-GB',
  author: { '@type': 'Organization', name: 'Reinstatement Cost Assessment Ltd', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/rca48.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  about: [
    { '@type': 'Thing', name: 'Building Reinstatement Cost' },
    { '@type': 'Thing', name: 'Reinstatement Cost Assessment' },
    { '@type': 'Thing', name: 'Building Insurance Valuation' },
  ],
}

const steps = [
  { icon: 'instruct', title: 'Measure the building', desc: 'A surveyor establishes the gross internal floor area, construction type, age and number of storeys.' },
  { icon: 'gather-data', title: 'Apply live cost data', desc: 'Current build‑cost rates from live BCIS data for the property’s type and location are applied to the floor area.' },
  { icon: 'calculate', title: 'Add the essentials', desc: 'Demolition, professional and design fees, outbuildings, boundaries and an inflation allowance are added on.' },
  { icon: 'report', title: 'Produce the figure', desc: 'A RICS‑regulated sum insured is documented, ready to present to your insurer at renewal.' },
]

const compare = [
  { icon: 'sell', title: 'Market value', desc: 'What a buyer would pay for the property today — including the land, the location and demand. It rises and falls with the property market.' },
  { icon: 'construction', title: 'Reinstatement cost', desc: 'What it would cost to physically rebuild the structure — land and location stripped out entirely. It tracks construction costs, not the housing market.' },
]

export default function WhatIsBuildingReinstatementCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <main>
      <Breadcrumbs showSchema={false} items={[{ name: 'Resources', href: '/resources' }, { name: 'What is a building reinstatement cost?' }]} accent="#1A6B4A" />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          fetchPriority="high"
          decoding="async"
          src="/rebuild-cost-assessment-london.jpeg"
          alt="UK building being assessed for its reinstatement cost"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">RICS Explained</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              What is a <span style={{ color: '#1A6B4A' }}>building</span> <span className="sm:whitespace-nowrap">reinstatement cost?</span>
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              It is the single most important figure on your buildings insurance policy &mdash; and the one most often
              wrong. Here is what it means, how it is worked out and why it matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact#contact-form" className="text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>
                Get your assessment
              </Link>
              <Link href="/building-reinstatement-cost" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                The full guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">The definition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">The cost to rebuild from scratch.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              A building reinstatement cost is the total amount it would cost to rebuild a property completely if it
              were destroyed &mdash; for example by fire, flood or collapse. It covers demolition and debris removal,
              the full rebuild to current standards, professional and design fees, and an allowance for inflation over
              the time it takes to settle a claim and complete the work.
            </p>
            <p>
              This figure &mdash; not the market value &mdash; is what your buildings insurance{' '}
              <strong className="font-semibold text-primary">sum insured</strong> should be based on. It is usually
              established by a RICS‑regulated surveyor and reviewed regularly so it keeps pace with construction costs.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Not the market value */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">A common confusion</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">It is not the same as market value.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {compare.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start rounded-2xl p-6 border border-[#c5ddd0]" style={{ background: '#e3efe9' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.3rem', color: '#1A6B4A' }}>{icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-secondary leading-relaxed mt-8 max-w-2xl text-[1.05rem]">In some areas the reinstatement cost is higher than the market value; in others it is lower. Insuring at the market value is one of the most common causes of underinsurance.</p>
        </div>
      </section>

      {/* How it's worked out */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#eaf3ee' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">How it&rsquo;s worked out</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">From floor area to final figure.</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {steps.map(({ icon, title, desc }, i) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(26,107,74,0.12)' }}>
                  <StepIcon name={icon} size={44} style={{ color: '#1A6B4A' }} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#1A6B4A]/60 mb-1">Step {i + 1}</p>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img width={384} height={384} loading="lazy" decoding="async" src="/desktop-why-it-matters.jpg" alt="Building under construction being rebuilt" className="shrink-0 w-44 h-44 sm:w-96 sm:h-96 rounded-2xl object-cover border border-black/5 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Why it matters</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Get it wrong and your claim shrinks.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>Most buildings policies apply a <strong className="font-semibold text-primary">condition of average</strong>. If the sum insured is lower than the true reinstatement cost, the insurer can reduce every claim by the same proportion &mdash; even a small, partial one. A property insured for 80% of its rebuild cost may see a claim cut by a fifth.</p>
            <p>The only reliable protection is an accurate building reinstatement cost, established professionally and reviewed regularly. RICS guidance is a full assessment at least every three years, with annual index‑linking in between.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Learn more / other services */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#eaf3ee' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Ready to get yours?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Three ways to establish your figure.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/desktop-reinstatement-cost-assessment-uk" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem' }}>desktop_windows</span>
              <h3 className="text-lg font-semibold text-white mb-2">Desktop Assessment</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A fast, remote RICS figure for standard houses, flats and commercial units anywhere in the UK.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/on-site-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem' }}>location_on</span>
              <h3 className="text-lg font-semibold text-white mb-2">On‑Site Survey</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A full site visit for listed, complex or high‑value buildings where detail matters.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/three-year-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #a16207 0%, #d4a017 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h3 className="text-lg font-semibold text-white mb-2">3‑Year Protection Plan</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A full assessment plus three years of BCIS‑indexed annual updates to keep the figure current.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection
        accent="#1A6B4A"
        tintRgb="26,107,74"
        buttonStyle={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}
      />
    </main>
    </>
  )
}
