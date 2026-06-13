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
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-8">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors">
            <span className="material-symbols-outlined" style={{fontSize:'0.85rem'}}>arrow_back</span>All Resources
          </Link>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">Case Study: Block of Flats Undervalued by &pound;2 Million.</h1>
          <p className="text-gray-500 text-lg leading-relaxed">A managing agent instructed us to carry out a reinstatement cost assessment on a 24-unit residential block in the South East ahead of the annual renewal. What they found was significantly more serious than expected.</p>
        </div>

        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=500&fit=crop&auto=format&q=80"
            alt="UK block of flats apartment building"
            className="w-full h-[280px] md:h-[360px] object-cover rounded-2xl border border-gray-200"
          />
        </div>

        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Units', value: '24' },
            { label: 'Last Professional RCA', value: '2018' },
            { label: 'Declared Sum Insured', value: '£4.9m' },
            { label: 'True Reinstatement Value', value: '£7.0m' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Background.</h2>
            <p>The block, a purpose-built residential development comprising 24 flats across four storeys, had last been professionally assessed in 2018. Since then, the managing agent had relied on the insurer&rsquo;s annual index-linking adjustment to maintain the sum insured. On the face of it, this appeared prudent: the declared figure had risen from &pound;4.2 million in 2018 to &pound;4.9 million by 2024, an increase of approximately 17%.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What the Assessment Found.</h2>
            <p className="mb-4">When we carried out a full RICS-regulated reinstatement cost assessment in early 2024, the picture was very different. The true reinstatement value, taking into account current BCIS labour and material indices, demolition and site clearance costs, professional fees, and the block&rsquo;s specific construction specification, came to &pound;7.0 million.</p>
            <p>The shortfall was &pound;2.1 million, representing underinsurance of approximately 41%. The index-linking applied by the insurer had tracked general construction cost movements but had significantly underestimated the true cost inflation for this type of construction in this region between 2020 and 2024, a period marked by exceptional material price increases and a severe shortage of skilled trades.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Why the Gap Was So Large.</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>The 2018 base figure had been produced using a generic online calculator, not a professional assessment, meaning index-linking had been applied to an already understated starting point.</li>
              <li>Post-2020 construction inflation ran significantly above the general index used by the insurer.</li>
              <li>The block included a basement car park and communal plant rooms, specialist elements that generic indices do not adequately capture.</li>
              <li>External works, boundary walls, and landscaping had not been included in the original figure.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">The Outcome.</h2>
            <p>The managing agent presented our RICS-regulated report to their broker the same day it was received. The broker submitted it directly to the insurer, who accepted the new figure without challenge and updated the policy at renewal. The freeholder and leaseholders were now adequately protected. Had a major claim occurred before this assessment, the shortfall would have fallen entirely on the building&rsquo;s residents.</p>
          </div>
        </div>

        <div className="mt-12 bg-white border border-gray-200 shadow-sm rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Is your block in the same position?</h3>
          <p className="text-gray-500 mb-6 text-sm">RICS-regulated, BCIS-indexed, broker-ready. Delivered in 5 days.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-block active:scale-[0.97] transition-all">Get in Touch</Link>
        </div>

      </div>
    </main>
  )
}
