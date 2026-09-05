import Link from 'next/link'

export const metadata = {
  title: 'Case Study: Block of Flats Undervalued by £2 Million | RCA Ltd',
  description: 'A 24-unit residential block in the South East was index-linked annually but found to be underinsured by £2.1 million. A real-world case study in reinstatement cost assessment.',
  alternates: { canonical: '/resources/case-study-block-of-flats-undervalued' },
  openGraph: {
    title: 'Case Study: Block of Flats Undervalued by £2 Million',
    description: 'A 24-unit residential block was index-linked annually but found to be underinsured by £2.1 million. See how a professional RCA uncovered the gap.',
    url: '/resources/case-study-block-of-flats-undervalued',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const articleBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
    { '@type': 'ListItem', position: 3, name: 'Case Study: Block of Flats Undervalued by £2 Million', item: `${SITE_URL}/resources/case-study-block-of-flats-undervalued` },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Case Study: Block of Flats Undervalued by £2 Million',
  description: 'A 24-unit residential block in the South East was index-linked annually but found to be underinsured by £2.1 million. A real-world case study in reinstatement cost assessment.',
  image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=500&fit=crop&auto=format&q=80',
  url: `${SITE_URL}/resources/case-study-block-of-flats-undervalued`,
  inLanguage: 'en-GB',
  author: { '@type': 'Organization', name: 'Reinstatement Cost Assessment Ltd', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/rca48.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/resources/case-study-block-of-flats-undervalued` },
  about: [
    { '@type': 'Thing', name: 'Reinstatement Cost Assessment' },
    { '@type': 'Thing', name: 'Underinsurance' },
    { '@type': 'Thing', name: 'Block of Flats Insurance Valuation' },
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
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&h=900&fit=crop&auto=format&q=80"
          alt="UK block of flats apartment building"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-28">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-14 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Case Study</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-primary mb-6">
              Block of flats undervalued by &pound;2 million.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              A managing agent instructed us to carry out a reinstatement cost assessment on a 24‑unit residential block in the South East ahead of the annual renewal. What they found was significantly more serious than expected.
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

      {/* Key figures */}
      <section className="scroll-reveal py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-8 text-center">The numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Units', value: '24' },
              { label: 'Last Professional RCA', value: '2018' },
              { label: 'Declared Sum Insured', value: '£4.9m' },
              { label: 'True Reinstatement Value', value: '£7.0m' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-white p-7 border border-zinc-200/80 flex flex-col items-center text-center">
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="text-xs text-secondary mt-2 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background & findings */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Background</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Six years of index linking.</h2>
            <p className="text-secondary leading-[1.75] text-[1.05rem]">The block, a purpose‑built residential development comprising 24 flats across four storeys, had last been professionally assessed in 2018. Since then, the managing agent had relied on the insurer&rsquo;s annual index‑linking adjustment to maintain the sum insured. On the face of it, this appeared prudent: the declared figure had risen from &pound;4.2 million in 2018 to &pound;4.9 million by 2024, an increase of approximately 17%.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">What we found</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">A &pound;2.1 million shortfall.</h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>When we carried out a full RICS‑regulated reinstatement cost assessment in early 2024, the picture was very different. The true reinstatement value, taking into account current BCIS labour and material indices, demolition and site clearance costs, professional fees, and the block&rsquo;s specific construction specification, came to &pound;7.0 million.</p>
              <p>The shortfall was &pound;2.1 million, representing underinsurance of approximately 41%. The index‑linking applied by the insurer had tracked general construction cost movements but had significantly underestimated the true cost inflation for this type of construction in this region between 2020 and 2024, a period marked by exceptional material price increases and a severe shortage of skilled trades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why the gap was so large */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">Why the gap was so large</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">Four factors the index missed.</h2>
          </div>
          <div className="space-y-4">
            {[
              'The 2018 base figure had been produced using a generic online calculator, not a professional assessment, meaning index-linking had been applied to an already understated starting point.',
              'Post-2020 construction inflation ran significantly above the general index used by the insurer.',
              'The block included a basement car park and communal plant rooms — specialist elements that generic indices do not adequately capture.',
              'External works, boundary walls, and landscaping had not been included in the original figure.',
            ].map((item) => (
              <div key={item} className="flex gap-4 items-start bg-white/[0.04] rounded-2xl p-5 sm:p-6 border border-white/10">
                <span className="material-symbols-outlined text-emerald-300 shrink-0 mt-0.5" style={{ fontSize: '1.25rem' }}>error</span>
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">The outcome</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Accepted by the insurer, same day.</h2>
          <p className="text-secondary leading-[1.75] text-[1.05rem]">The managing agent presented our RICS‑regulated report to their broker the same day it was received. The broker submitted it directly to the insurer, who accepted the new figure without challenge and updated the policy at renewal. The freeholder and leaseholders were now adequately protected. Had a major claim occurred before this assessment, the shortfall would have fallen entirely on the building&rsquo;s residents.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">Is your block in the same position?</h2>
          <p className="text-white/70 mb-8 max-w-lg leading-relaxed">RICS‑regulated, BCIS‑indexed, broker‑ready. Delivered in 48 hours.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow inline-block">Get your assessment</Link>
        </div>
      </section>

    </main>
    </>
  )
}
