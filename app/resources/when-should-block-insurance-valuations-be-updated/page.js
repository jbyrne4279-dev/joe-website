import Link from 'next/link'

export const metadata = {
  title: 'When Should Block Insurance Valuations Be Updated? (RICS Guidance)',
  description: "RICS recommends block insurance valuations are updated every 3 years. Find out why annual index linking alone isn't enough and when earlier reassessment is needed.",
  alternates: { canonical: '/resources/when-should-block-insurance-valuations-be-updated' },
  openGraph: {
    title: 'When Should Block Insurance Valuations Be Updated? (RICS Guidance)',
    description: "RICS recommends block insurance valuations are updated every 3 years. Find out why annual index linking alone isn't enough.",
    url: '/resources/when-should-block-insurance-valuations-be-updated',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const articleBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
    { '@type': 'ListItem', position: 3, name: 'When Should Block Insurance Valuations Be Updated?', item: `${SITE_URL}/resources/when-should-block-insurance-valuations-be-updated` },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'When Should Block Insurance Valuations Be Updated? (RICS Guidance)',
  description: "RICS recommends block insurance valuations are updated every 3 years. Find out why annual index linking alone isn't enough and when earlier reassessment is needed.",
  image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=500&fit=crop&auto=format&q=80',
  url: `${SITE_URL}/resources/when-should-block-insurance-valuations-be-updated`,
  inLanguage: 'en-GB',
  author: { '@type': 'Organization', name: 'Reinstatement Cost Assessment Ltd', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/rca48.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/resources/when-should-block-insurance-valuations-be-updated` },
  about: [
    { '@type': 'Thing', name: 'Block Insurance Valuation' },
    { '@type': 'Thing', name: 'RICS Regulated Surveying' },
    { '@type': 'Thing', name: 'Reinstatement Cost Assessment' },
  ],
}

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    <main>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop&auto=format&q=80"
          alt="UK residential buildings and property"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-28">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-14 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">RICS Guidance</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-primary mb-6">
              When should block insurance valuations be updated?
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              For managing agents and freeholders, keeping reinstatement cost figures current is both a compliance requirement and a critical financial protection. Yet the majority of UK blocks are operating with valuations that are years out of date.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Get your assessment
              </Link>
              <Link href="/resources" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                All resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The recommendation */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">The recommendation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Every three years, as a minimum.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>The <a href="https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/building-surveying-standards/reinstatement-cost-assessment-of-buildings" target="_blank" rel="noopener noreferrer" className="text-[#1A6B4A] underline underline-offset-2 hover:text-[#1A6B4A]/80">Royal Institution of Chartered Surveyors (RICS)</a> recommends that a full professional reinstatement cost assessment is carried out at least once every three years. In between, annual index‑linked adjustments are acceptable as a bridging measure, but they are not a substitute for a professional assessment.</p>
            <p>Many block managers assume that because their insurer applies annual indexation, they are covered. This is a dangerous misconception. Index linking adjusts the existing sum insured by a general construction cost index. It does not account for site‑specific factors, changes to the building, or localised cost inflation.</p>
          </div>
        </div>
      </section>

      {/* Why index linking isn't enough */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">Why index linking isn&apos;t enough</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight mb-5">A general index can&apos;t see your building.</h2>
            <p className="text-white/70 leading-relaxed">General construction indices like the BCIS All‑in Tender Price Index track broad market movements. They cannot account for:</p>
          </div>
          <div className="space-y-4">
            {[
              'Changes to the building since the last assessment (extensions, refurbishments, cladding replacement).',
              'Regional labour and material cost variations.',
              'Specialist construction requirements (curtilage structures, listed features, complex M&E).',
              'The compounding effect of index-linking an already inaccurate base figure.',
            ].map((item) => (
              <div key={item} className="flex gap-4 items-start bg-white/[0.04] rounded-2xl p-5 sm:p-6 border border-white/10">
                <span className="material-symbols-outlined text-emerald-300 shrink-0 mt-0.5" style={{ fontSize: '1.25rem' }}>error</span>
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 leading-relaxed mt-8 max-w-2xl">If the original sum insured was wrong, and in our experience a significant proportion are, index linking simply perpetuates and compounds that error year on year.</p>
        </div>
      </section>

      {/* Triggers */}
      <section className="scroll-reveal py-24 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Early triggers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">Don&apos;t always wait for the three‑year mark.</h2>
          <p className="text-secondary leading-relaxed mb-8 text-[1.05rem]">Even within a three‑year cycle, certain events should prompt an immediate reassessment:</p>
          <ul className="border-y border-zinc-200 divide-y divide-zinc-200">
            {[
              'Major works or refurbishment to the block.',
              'Change of use of any part of the building.',
              'Significant market shifts (as seen post-2020 with labour and material inflation).',
              'Acquisition of the freehold or change of managing agent.',
              'Any insurer query or challenge at renewal.',
            ].map((item) => (
              <li key={item} className="py-4 flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.15rem' }}>bolt</span>
                <span className="text-secondary leading-relaxed text-[0.98rem]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Consequences */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">The consequences</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">What an outdated valuation actually costs.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>If a block is underinsured at the point of a claim, most policies apply what is known as the average clause, meaning the insurer will only pay out in proportion to the degree of underinsurance. On a &pound;5 million block insured for &pound;3.5 million, a &pound;500,000 claim could result in a settlement of just &pound;350,000. The leaseholders bear the shortfall.</p>
            <p>For managing agents, allowing a known outdated valuation to persist can also create personal liability exposure under ARMA guidance and general professional duty of care obligations.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">Is your block overdue for reassessment?</h2>
          <p className="text-white/70 mb-8 max-w-lg leading-relaxed">We carry out RICS‑regulated reinstatement cost assessments, delivered in 48 hours.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow inline-block">Get your assessment</Link>
        </div>
      </section>

    </main>
    </>
  )
}
