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
    <main>
      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=600&fit=crop&auto=format&q=80" alt="Managing agent reviewing insurance documents" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d28]/90 via-[#0f3d28]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">Risk & Compliance</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">Top Risks of Underinsurance for Managing Agents</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/resources" className="text-xs font-semibold text-[#1A6B4A] uppercase tracking-widest hover:underline">&larr; All Resources</Link>
        </div>

        {/* Credibility tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['RICS Regulated Firm', 'PI Insured', 'ARMA Familiar', 'UK Wide Coverage'].map(tag => (
            <span key={tag} className="text-xs font-semibold text-[#1A6B4A] bg-[#1A6B4A]/10 px-3 py-1.5 rounded-full">{tag}</span>
          ))}
        </div>

        <p className="text-secondary text-lg leading-relaxed mb-10 border-l-4 border-[#1A6B4A] pl-5">
          Research consistently shows that the majority of UK commercial and residential blocks carry insufficient reinstatement values on their insurance policies. For managing agents, this creates direct professional and financial risk.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12 text-center">
          {[
            { stat: '20-40%', label: 'Average underinsurance shortfall across UK blocks' },
            { stat: '£1m+', label: 'Typical exposure on a £5m block' },
            { stat: '3 yrs', label: 'RICS recommended reassessment interval' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-zinc-50 border border-[#1A6B4A]/10 rounded-xl p-5">
              <p className="text-2xl md:text-3xl font-bold text-[#1A6B4A]">{stat}</p>
              <p className="text-xs text-secondary mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Risk cards */}
        <div className="space-y-6 mb-12">
          {[
            {
              n: '1',
              title: 'Proportional Settlement Under the Average Clause',
              body: 'Most commercial building insurance policies include an average clause, which means that if a property is underinsured, the insurer will reduce any claim payout in proportion to the shortfall. If a block has a true reinstatement value of £4 million but is insured for £2.8 million, it is 30% underinsured. A £600,000 claim would be settled at just £420,000. The remaining £180,000 falls on the freeholder and leaseholders.',
              icon: 'gavel',
            },
            {
              n: '2',
              title: 'Personal Liability for Managing Agents',
              body: 'ARMA guidance and general professional duty of care obligations place a responsibility on managing agents to ensure that block insurance is adequate. Where a managing agent has allowed years to pass without recommending a reassessment, they may face claims from leaseholders following an underinsured loss. This is an increasingly litigated area.',
              icon: 'person',
            },
            {
              n: '3',
              title: 'Insurer Challenges at Renewal',
              body: 'Insurers are becoming more rigorous at renewal, particularly on blocks where the declared sum insured has not been supported by a professional assessment within the last three years. Queries, referrals, and potential policy voidance are real risks where no RICS-regulated assessment can be produced on request.',
              icon: 'policy',
            },
            {
              n: '4',
              title: 'The Hidden Compounding Problem',
              body: 'Post-2020 construction cost inflation has been significantly higher than general CPI. Many blocks that appeared adequately insured in 2019 are now materially underinsured, even if annual index linking has been applied. The index simply has not kept pace with actual rebuild cost increases for many property types.',
              icon: 'trending_up',
            },
          ].map(({ n, title, body, icon }) => (
            <div key={n} className="liquid-glass border border-[#1A6B4A]/15 rounded-2xl p-7 sovereign-shadow">
              <div className="flex items-start gap-5">
                <div className="btn-shine shrink-0 w-11 h-11 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A6B4A] uppercase tracking-widest mb-1">Risk {n}</p>
                  <h3 className="font-bold text-primary text-lg mb-2">{title}</h3>
                  <p className="text-secondary leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image break */}
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=400&fit=crop&auto=format&q=80" alt="UK property portfolio aerial view" className="w-full h-52 object-cover rounded-2xl mb-10 sovereign-shadow" />

        <h2 className="text-2xl font-bold text-primary mb-4">How to Mitigate the Risk</h2>
        <div className="space-y-3 mb-10">
          {[
            'Commission a RICS-regulated reinstatement cost assessment at least every three years',
            'Trigger an earlier assessment after any significant works, change of use, or construction cost spike',
            'Document your recommendation to clients in writing at each renewal',
            'Use a firm that provides BCIS-indexed assessments accepted by all major insurers',
          ].map(item => (
            <div key={item} className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <p className="text-secondary leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0f3d28] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Concerned about your managed portfolio?</h3>
          <p className="text-white/60 mb-5 text-sm">We offer a free portfolio review. Send us your schedule and we will identify which buildings are overdue.</p>
          <Link href="/free-portfolio-review" className="btn-shine text-white px-8 py-3 rounded-full font-bold inline-block">Request a Free Portfolio Review</Link>
        </div>
      </div>
    </main>
  )
}
