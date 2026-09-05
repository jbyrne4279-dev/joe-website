import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'

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

export default function WhatIsBuildingReinstatementCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main>
        <Breadcrumbs showSchema items={[{ name: 'Resources', href: '/resources' }, { name: 'What is a building reinstatement cost?' }]} accent="#1A6B4A" />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src="/rebuild-cost-assessment-london.jpeg"
            alt="UK building being assessed for its reinstatement cost"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
          <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-28">
            <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-14 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">RICS explained</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-primary mb-6">
                What is a building reinstatement cost?
              </h1>
              <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
                It is the single most important figure on your buildings insurance policy &mdash; and the one most often
                wrong. Here is what it means, how it is worked out and why it matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                  Get your assessment
                </Link>
                <Link href="/building-reinstatement-cost" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                  The full guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section className="scroll-reveal py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
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
        </section>

        {/* Not the market value */}
        <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">A common confusion</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight mb-5">It is not the same as market value.</h2>
              <p className="text-white/70 leading-relaxed">Market value and reinstatement cost answer two different questions:</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white/[0.04] rounded-2xl p-6 sm:p-7 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Market value</h3>
                <p className="text-white/75 leading-relaxed text-[0.98rem]">What a buyer would pay for the property today &mdash; including the land, the location and demand. It rises and falls with the property market.</p>
              </div>
              <div className="bg-white/[0.04] rounded-2xl p-6 sm:p-7 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Reinstatement cost</h3>
                <p className="text-white/75 leading-relaxed text-[0.98rem]">What it would cost to physically rebuild the structure &mdash; land and location stripped out entirely. It tracks construction costs, not the housing market.</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mt-8 max-w-2xl">In some areas the reinstatement cost is higher than the market value; in others it is lower. Insuring at the market value is one of the most common causes of underinsurance.</p>
          </div>
        </section>

        {/* How it's worked out */}
        <section className="scroll-reveal py-24 px-6 bg-zinc-50">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">How it&rsquo;s worked out</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">From floor area to final figure.</h2>
            <p className="text-secondary leading-relaxed mb-8 text-[1.05rem]">A RICS‑regulated surveyor builds the figure up from measurable facts about the building:</p>
            <ul className="border-y border-zinc-200 divide-y divide-zinc-200">
              {[
                'The gross internal floor area, construction type, age and number of storeys.',
                'Current build-cost rates from live BCIS data for the property’s type and location.',
                'Demolition, debris removal and professional or design fees.',
                'Outbuildings, garages, walls, fences and other structures on the site.',
                'An allowance for inflation over the rebuild period.',
              ].map((item) => (
                <li key={item} className="py-4 flex gap-4 items-start">
                  <span className="material-symbols-outlined text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.15rem' }}>check</span>
                  <span className="text-secondary leading-relaxed text-[0.98rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why it matters */}
        <section className="scroll-reveal py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Get it wrong and your claim shrinks.</h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>Most buildings policies apply a <strong className="font-semibold text-primary">condition of average</strong>. If the sum insured is lower than the true reinstatement cost, the insurer can reduce every claim by the same proportion &mdash; even a small, partial one. A property insured for 80% of its rebuild cost may see a claim cut by a fifth.</p>
              <p>The only reliable protection is an accurate building reinstatement cost, established professionally and reviewed regularly. RICS guidance is a full assessment at least every three years, with annual index‑linking in between.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">Know your building&rsquo;s reinstatement cost.</h2>
            <p className="text-white/70 mb-8 max-w-lg leading-relaxed">We carry out RICS‑regulated reinstatement cost assessments across the UK, delivered in 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow inline-block">Get your assessment</Link>
              <Link href="/building-reinstatement-cost" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/15 active:scale-[0.97] transition-all inline-block">Read the full guide</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
