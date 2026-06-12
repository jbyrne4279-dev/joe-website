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

export default function ArticlePage() {
  return (
    <main>
      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&h=600&fit=crop&auto=format&q=80" alt="Residential block of flats South East England" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d28]/90 via-[#0f3d28]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">Case Study</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">Block of Flats Undervalued by £2 Million</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/resources" className="text-xs font-semibold text-[#1A6B4A] uppercase tracking-widest hover:underline">&larr; All Resources</Link>
        </div>

        {/* Credibility tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['RICS Regulated Firm', 'PI Insured', 'BCIS Indexed', 'Broker-Ready Reports'].map(tag => (
            <span key={tag} className="text-xs font-semibold text-[#1A6B4A] bg-[#1A6B4A]/10 px-3 py-1.5 rounded-full">{tag}</span>
          ))}
        </div>

        <p className="text-secondary text-lg leading-relaxed mb-10 border-l-4 border-[#1A6B4A] pl-5">
          A managing agent instructed us to carry out a reinstatement cost assessment on a 24-unit residential block in the South East ahead of the annual renewal. What they found was significantly more serious than expected.
        </p>

        {/* Key figures */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
          {[
            { label: 'Units', value: '24' },
            { label: 'Last Professional RCA', value: '2018' },
            { label: 'Declared Sum Insured', value: '£4.9m' },
            { label: 'True Reinstatement Value', value: '£7.0m' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-zinc-50 border border-[#1A6B4A]/10 rounded-xl p-5">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="text-xs text-secondary mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Shortfall highlight */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-7 mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">Underinsurance Identified</p>
          <p className="text-5xl font-bold text-red-600 my-2">£2.1m</p>
          <p className="text-secondary font-medium">41% shortfall on true reinstatement value</p>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-3">Background</h2>
        <p className="text-secondary leading-relaxed mb-5">The block, a purpose-built residential development comprising 24 flats across four storeys, had last been professionally assessed in 2018. Since then, the managing agent had relied on the insurer's annual index-linking adjustment to maintain the sum insured. On the face of it, this appeared prudent: the declared figure had risen from £4.2 million in 2018 to £4.9 million by 2024, an increase of approximately 17%.</p>

        {/* Image break */}
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=400&fit=crop&auto=format&q=80" alt="Modern residential block exterior" className="w-full h-52 object-cover rounded-2xl mb-10 sovereign-shadow" />

        <h2 className="text-2xl font-bold text-primary mb-3">What the Assessment Found</h2>
        <p className="text-secondary leading-relaxed mb-5">When we carried out a full RICS-regulated reinstatement cost assessment in early 2024, the picture was very different. The true reinstatement value, taking into account current BCIS labour and material indices, demolition and site clearance costs, professional fees, and the block's specific construction specification, came to £7.0 million.</p>
        <p className="text-secondary leading-relaxed mb-10">The shortfall was £2.1 million, representing underinsurance of approximately 41%. The index-linking applied by the insurer had tracked general construction cost movements but had significantly underestimated the true cost inflation for this type of construction in this region between 2020 and 2024.</p>

        <h2 className="text-2xl font-bold text-primary mb-4">Why the Gap Was So Large</h2>
        <div className="space-y-3 mb-10">
          {[
            'The 2018 base figure had been produced using a generic online calculator, not a professional assessment, so index-linking had been applied to an already understated starting point',
            'Post-2020 construction inflation ran significantly above the general index used by the insurer',
            'The block included a basement car park and communal plant rooms, specialist elements that generic indices do not adequately capture',
            'External works, boundary walls, and landscaping had not been included in the original figure',
          ].map(item => (
            <div key={item} className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-red-400 shrink-0 mt-0.5" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>warning</span>
              <p className="text-secondary leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1A6B4A]/5 border border-[#1A6B4A]/20 rounded-2xl p-7 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] mb-2">The Outcome</p>
          <p className="text-secondary leading-relaxed">The managing agent presented our RICS-regulated report to their broker the same day it was received. The broker submitted it directly to the insurer, who accepted the new figure without challenge and updated the policy at renewal. The freeholder and leaseholders were now adequately protected. Had a major claim occurred before this assessment, the shortfall would have fallen entirely on the building's residents.</p>
        </div>

        <div className="bg-[#0f3d28] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Is your block in the same position?</h3>
          <p className="text-white/60 mb-5 text-sm">Send us your portfolio schedule and we will identify which properties are overdue, for free.</p>
          <Link href="/free-portfolio-review" className="btn-shine text-white px-8 py-3 rounded-full font-bold inline-block">Request a Free Portfolio Review</Link>
        </div>
      </div>
    </main>
  )
}
