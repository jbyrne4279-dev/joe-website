import Link from 'next/link'

export const metadata = {
  title: 'When Should Block Insurance Valuations Be Updated? (RICS Guidance)',
  description: 'RICS recommends block insurance valuations are updated every 3 years. Find out why annual index linking alone isn\'t enough and when earlier reassessment is needed.',
  alternates: { canonical: '/resources/when-should-block-insurance-valuations-be-updated' },
  openGraph: {
    title: 'When Should Block Insurance Valuations Be Updated? (RICS Guidance)',
    description: 'RICS recommends block insurance valuations are updated every 3 years. Find out why annual index linking alone isn\'t enough.',
    url: '/resources/when-should-block-insurance-valuations-be-updated',
  },
}

export default function ArticlePage() {
  return (
    <main>
      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&h=600&fit=crop&auto=format&q=80" alt="UK residential block of flats" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d28]/90 via-[#0f3d28]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">RICS Guidance</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">When Should Block Insurance Valuations Be Updated?</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/resources" className="text-xs font-semibold text-[#1A6B4A] uppercase tracking-widest hover:underline">&larr; All Resources</Link>
        </div>

        {/* Credibility tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['RICS Regulated Firm', 'PI Insured', 'BCIS Indexed', 'UK Wide Coverage'].map(tag => (
            <span key={tag} className="text-xs font-semibold text-[#1A6B4A] bg-[#1A6B4A]/10 px-3 py-1.5 rounded-full">{tag}</span>
          ))}
        </div>

        <p className="text-secondary text-lg leading-relaxed mb-10 border-l-4 border-[#1A6B4A] pl-5">
          For managing agents and freeholders, keeping reinstatement cost figures current is both a compliance requirement and a critical financial protection. Yet the majority of UK blocks are operating with valuations that are years out of date.
        </p>

        {/* Key stat */}
        <div className="bg-zinc-50 border border-[#1A6B4A]/15 rounded-2xl p-8 mb-10 text-center">
          <p className="text-5xl font-bold text-[#1A6B4A] mb-2">3 Years</p>
          <p className="text-secondary font-semibold">RICS recommended maximum interval between professional reinstatement cost assessments</p>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-3">The RICS Recommendation</h2>
        <p className="text-secondary leading-relaxed mb-5">The Royal Institution of Chartered Surveyors (RICS) recommends that a full professional reinstatement cost assessment is carried out at least once every three years. In between, annual index-linked adjustments are acceptable as a bridging measure, but they are not a substitute for a professional assessment.</p>
        <p className="text-secondary leading-relaxed mb-10">Many block managers assume that because their insurer applies annual indexation, they are covered. This is a dangerous misconception. Index linking adjusts the existing sum insured by a general construction cost index. It does not account for site-specific factors, changes to the building, or localised cost inflation.</p>

        {/* Image break */}
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=500&fit=crop&auto=format&q=80" alt="Property surveyor reviewing building documentation" className="w-full h-56 object-cover rounded-2xl mb-10 sovereign-shadow" />

        <h2 className="text-2xl font-bold text-primary mb-4">Why Annual Index Linking Is Not Enough</h2>
        <p className="text-secondary leading-relaxed mb-6">General construction indices like the BCIS All-in Tender Price Index track broad market movements. They cannot account for:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            { icon: 'construction', text: 'Changes to the building since the last assessment (extensions, refurbishments, cladding replacement)' },
            { icon: 'location_on', text: 'Regional labour and material cost variations' },
            { icon: 'architecture', text: 'Specialist construction requirements (curtilage structures, listed features, complex M&E)' },
            { icon: 'trending_up', text: 'The compounding effect of index-linking an already inaccurate base figure' },
          ].map(({ icon, text }) => (
            <div key={icon} className="flex gap-4 items-start bg-zinc-50 rounded-xl p-5">
              <span className="material-symbols-outlined text-[#1A6B4A] shrink-0" style={{ fontSize: '1.3rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              <p className="text-secondary text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primary mb-4">Triggers for Earlier Reassessment</h2>
        <p className="text-secondary leading-relaxed mb-6">Even within a three-year cycle, certain events should prompt an immediate reassessment:</p>
        <div className="space-y-3 mb-10">
          {[
            'Major works or refurbishment to the block',
            'Change of use of any part of the building',
            'Significant market shifts (as seen post-2020 with labour and material inflation)',
            'Acquisition of the freehold or change of managing agent',
            'Any insurer query or challenge at renewal',
          ].map(item => (
            <div key={item} className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <p className="text-secondary leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Consequence callout */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-7 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Important</p>
          <h3 className="text-lg font-bold text-primary mb-2">The Consequences of an Outdated Valuation</h3>
          <p className="text-secondary leading-relaxed mb-3">If a block is underinsured at the point of a claim, most policies apply the average clause, meaning the insurer will only pay out in proportion to the degree of underinsurance.</p>
          <p className="text-secondary leading-relaxed font-medium">Example: On a £5 million block insured for £3.5 million, a £500,000 claim could result in a settlement of just £350,000. The leaseholders bear the shortfall.</p>
        </div>

        <div className="bg-[#0f3d28] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Is your block overdue for reassessment?</h3>
          <p className="text-white/60 mb-5 text-sm">We offer a free portfolio review. Upload your schedule and we will flag which buildings need attention.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3 rounded-full font-bold inline-block">Get in Touch</Link>
        </div>
      </div>
    </main>
  )
}
