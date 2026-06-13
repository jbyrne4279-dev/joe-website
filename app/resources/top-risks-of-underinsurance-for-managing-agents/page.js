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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">Top Risks of Underinsurance for Managing Agents.</h1>
          <p className="text-gray-500 text-lg leading-relaxed">Research consistently shows that the majority of UK commercial and residential blocks carry insufficient reinstatement values on their insurance policies. For managing agents, this is not just a problem for property owners. It creates direct professional and financial risk.</p>
        </div>

        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop&auto=format&q=80"
            alt="Risk and compliance office documents"
            className="w-full h-[280px] md:h-[360px] object-cover rounded-2xl border border-gray-200"
          />
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Proportional Settlement Under the Average Clause.</h2>
            <p>Most commercial building insurance policies include an average clause, which means that if a property is underinsured, the insurer will reduce any claim payout in proportion to the shortfall. If a block has a true reinstatement value of &pound;4 million but is insured for &pound;2.8 million, it is 30% underinsured. A &pound;600,000 claim would be settled at just &pound;420,000. The remaining &pound;180,000 falls on the freeholder and, ultimately, the leaseholders.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Personal Liability for Managing Agents.</h2>
            <p>ARMA guidance and general professional duty of care obligations place a responsibility on managing agents to ensure that block insurance is adequate. Where a managing agent has been on notice that a valuation is outdated, or has simply allowed years to pass without recommending a reassessment, they may face claims from leaseholders following an underinsured loss. This is an increasingly litigated area.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Insurer Challenges at Renewal.</h2>
            <p>Insurers are becoming more rigorous at renewal, particularly on blocks where the declared sum insured has not been supported by a professional assessment within the last three years. Queries, referrals, and potential policy voidance are real risks where no RICS-regulated assessment can be produced on request.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. The Hidden Compounding Problem.</h2>
            <p className="mb-4">Post-2020 construction cost inflation, driven by material shortages, labour cost increases, and supply chain disruption, has been significantly higher than general CPI. Many blocks that appeared adequately insured in 2019 are now materially underinsured, even if annual index linking has been applied. The index simply has not kept pace with actual rebuild cost increases for many property types.</p>
            <p>Studies from BCIS and the ABI have indicated that average underinsurance across UK blocks runs at between 20% and 40% of true reinstatement value. On a &pound;5 million block, that is a &pound;1 million to &pound;2 million exposure that leaseholders and managing agents may be unaware of.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How to Mitigate the Risk.</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>Commission a RICS-regulated reinstatement cost assessment at least every three years.</li>
              <li>Trigger an earlier assessment after any significant works, change of use, or construction cost spike.</li>
              <li>Document your recommendation to clients in writing at each renewal.</li>
              <li>Use a firm that provides BCIS-indexed assessments accepted by all major insurers.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white border border-gray-200 shadow-sm rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Concerned about your managed portfolio?</h3>
          <p className="text-gray-500 mb-6 text-sm">RICS-regulated, BCIS-indexed, broker-ready. Delivered in 5 days.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-block active:scale-[0.97] transition-all">Get in Touch</Link>
        </div>

      </div>
    </main>
  )
}
