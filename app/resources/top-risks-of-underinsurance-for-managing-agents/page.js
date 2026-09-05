import Link from 'next/link'

export const metadata = {
  title: 'Top Risks of Underinsurance for Managing Agents | RCA Ltd',
  description: 'Underinsurance exposes managing agents to liability, proportional claim settlements, and ARMA compliance failures. Understand the key risks and how to mitigate them.',
  alternates: { canonical: '/resources/top-risks-of-underinsurance-for-managing-agents' },
  openGraph: {
    title: 'Top Risks of Underinsurance for Managing Agents',
    description: 'Underinsurance exposes managing agents to liability, proportional claim settlements, and ARMA compliance failures.',
    url: '/resources/top-risks-of-underinsurance-for-managing-agents',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const articleBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
    { '@type': 'ListItem', position: 3, name: 'Top Risks of Underinsurance for Managing Agents', item: `${SITE_URL}/resources/top-risks-of-underinsurance-for-managing-agents` },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Top Risks of Underinsurance for Managing Agents',
  description: 'Underinsurance exposes managing agents to liability, proportional claim settlements, and ARMA compliance failures. Understand the key risks and how to mitigate them.',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop&auto=format&q=80',
  url: `${SITE_URL}/resources/top-risks-of-underinsurance-for-managing-agents`,
  inLanguage: 'en-GB',
  author: { '@type': 'Organization', name: 'Reinstatement Cost Assessment Ltd', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/rca48.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/resources/top-risks-of-underinsurance-for-managing-agents` },
  about: [
    { '@type': 'Thing', name: 'Underinsurance' },
    { '@type': 'Thing', name: 'Managing Agent Liability' },
    { '@type': 'Thing', name: 'Block Insurance Compliance' },
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
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop&auto=format&q=80"
          alt="Risk and compliance office documents"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-28">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-14 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Risk &amp; Compliance</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-primary mb-6">
              Top risks of underinsurance for managing agents.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              Research consistently shows that the majority of UK commercial and residential blocks carry insufficient reinstatement values. For managing agents, this is not just a problem for property owners &mdash; it creates direct professional and financial risk.
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

      {/* The four risks */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">The exposure</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Four risks that land on the agent.</h2>
          </div>
          <div className="space-y-6">
            {[
              { n: '01', title: 'Proportional settlement under the average clause', desc: 'Most commercial building insurance policies include an average clause, which means that if a property is underinsured, the insurer will reduce any claim payout in proportion to the shortfall. If a block has a true reinstatement value of £4 million but is insured for £2.8 million, it is 30% underinsured. A £600,000 claim would be settled at just £420,000 — the remaining £180,000 falls on the freeholder and, ultimately, the leaseholders.' },
              { n: '02', title: 'Personal liability for managing agents', desc: 'ARMA guidance and general professional duty of care obligations place a responsibility on managing agents to ensure that block insurance is adequate. Where a managing agent has been on notice that a valuation is outdated, or has simply allowed years to pass without recommending a reassessment, they may face claims from leaseholders following an underinsured loss. This is an increasingly litigated area.' },
              { n: '03', title: 'Insurer challenges at renewal', desc: 'Insurers are becoming more rigorous at renewal, particularly on blocks where the declared sum insured has not been supported by a professional assessment within the last three years. Queries, referrals, and potential policy voidance are real risks where no RICS‑regulated assessment can be produced on request.' },
              { n: '04', title: 'The hidden compounding problem', desc: 'Post‑2020 construction cost inflation, driven by material shortages, labour cost increases, and supply chain disruption, has been significantly higher than general CPI. Many blocks that appeared adequately insured in 2019 are now materially underinsured, even if annual index linking has been applied. Studies from BCIS and the ABI indicate average underinsurance across UK blocks runs between 20% and 40% of true reinstatement value — on a £5 million block, a £1 million to £2 million exposure.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="grow-card rounded-2xl bg-white p-8 border border-zinc-200/80 flex flex-col sm:flex-row gap-5 sm:gap-7">
                <span className="text-3xl font-black text-[#1A6B4A]/25 leading-none shrink-0">{n}</span>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2 leading-snug">{title}.</h3>
                  <p className="text-secondary leading-relaxed text-[0.98rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitigation */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">How to mitigate</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">Protect the portfolio and yourself.</h2>
          </div>
          <div className="space-y-4">
            {[
              'Commission a RICS-regulated reinstatement cost assessment at least every three years.',
              'Trigger an earlier assessment after any significant works, change of use, or construction cost spike.',
              'Document your recommendation to clients in writing at each renewal.',
              'Use a firm that provides BCIS-indexed assessments accepted by all major insurers.',
            ].map((item) => (
              <div key={item} className="flex gap-4 items-start bg-white/[0.04] rounded-2xl p-5 sm:p-6 border border-white/10">
                <span className="material-symbols-outlined text-emerald-300 shrink-0 mt-0.5" style={{ fontSize: '1.25rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-reveal py-24 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">Concerned about your managed portfolio?</h2>
          <p className="text-secondary mb-8 max-w-lg leading-relaxed">RICS‑regulated, BCIS‑indexed, broker‑ready. Delivered in 48 hours.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow inline-block">Get your assessment</Link>
        </div>
      </section>

    </main>
    </>
  )
}
