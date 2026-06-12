import Link from 'next/link'

export const metadata = {
  title: 'Index Linking vs Professional Valuation — What Managing Agents Need to Know',
  description: 'Index linking adjusts your sum insured annually but cannot replace a professional RICS reinstatement cost assessment. Here\'s what managing agents need to understand.',
  alternates: { canonical: '/resources/index-linking-vs-professional-valuation' },
  openGraph: {
    title: 'Index Linking vs Professional Valuation — What Managing Agents Need to Know',
    description: 'Index linking is not a substitute for a professional RICS reinstatement cost assessment. Here\'s why and what managing agents should do about it.',
    url: '/resources/index-linking-vs-professional-valuation',
  },
}

export default function ArticlePage() {
  return (
    <main>
      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&h=600&fit=crop&auto=format&q=80" alt="Insurance and property valuation documents" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d28]/90 via-[#0f3d28]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">Guidance</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 leading-tight">Index Linking vs Professional Valuation</h1>
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
          Many managing agents assume that because their insurer applies annual index linking, their buildings are adequately insured. This assumption is one of the most common and most expensive misunderstandings in UK property management.
        </p>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-[#1A6B4A]/15 mb-12 sovereign-shadow">
          <div className="grid grid-cols-3 bg-[#0f3d28] text-white text-sm font-bold">
            <div className="p-4">Feature</div>
            <div className="p-4 text-center border-x border-white/10">Index Linking</div>
            <div className="p-4 text-center">Professional RCA</div>
          </div>
          {[
            ['Accounts for building changes', 'No', 'Yes'],
            ['Site-specific calculation', 'No', 'Yes'],
            ['RICS regulated', 'No', 'Yes'],
            ['Accepted by all insurers', 'Varies', 'Yes'],
            ['Covers specialist construction', 'No', 'Yes'],
            ['Corrects existing errors', 'No', 'Yes'],
          ].map(([feature, index, rca]) => (
            <div key={feature} className="grid grid-cols-3 border-t border-[#1A6B4A]/10 text-sm">
              <div className="p-4 text-secondary">{feature}</div>
              <div className="p-4 text-center border-x border-[#1A6B4A]/10">
                <span className={`font-semibold ${index === 'No' ? 'text-red-400' : index === 'Yes' ? 'text-[#1A6B4A]' : 'text-amber-500'}`}>{index}</span>
              </div>
              <div className="p-4 text-center">
                <span className={`font-semibold ${rca === 'Yes' ? 'text-[#1A6B4A]' : 'text-secondary'}`}>{rca}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primary mb-3">What Is Index Linking?</h2>
        <p className="text-secondary leading-relaxed mb-5">Index linking is a mechanism used by insurers to automatically adjust the sum insured each year in line with a construction cost index, typically a variant of the BCIS All-in Tender Price Index or a proprietary equivalent. The intention is to prevent a building from drifting into underinsurance due to general cost inflation.</p>
        <p className="text-secondary leading-relaxed mb-10">In practice, the insurer applies a percentage uplift to the existing declared value. No surveyor visits the property. No detailed assessment is carried out. The insured figure simply grows by a fixed multiplier based on a broad market index.</p>

        {/* Image break */}
        <img src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1200&h=400&fit=crop&auto=format&q=80" alt="Property surveyor on site" className="w-full h-52 object-cover rounded-2xl mb-10 sovereign-shadow" />

        <h2 className="text-2xl font-bold text-primary mb-4">Why Index Linking Alone Is Not Sufficient</h2>
        <p className="text-secondary leading-relaxed mb-6">Index linking has one fundamental limitation: it adjusts an existing figure. If that figure was wrong to begin with, index linking makes it slightly less wrong each year but never correct.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            { icon: 'construction', title: 'Building changes ignored', text: 'Extensions, refurbishments, cladding replacement and new plant are not captured by an index.' },
            { icon: 'location_on', title: 'Regional costs missed', text: 'Regional labour costs can diverge significantly from a national index, particularly in London and the South East.' },
            { icon: 'architecture', title: 'Specialist construction', text: 'Listed buildings, non-standard construction and complex M&E carry rebuild cost profiles that generic indices cannot model.' },
            { icon: 'trending_up', title: 'Errors compound over time', text: 'A figure that was 15% too low in 2018 is still roughly 15% too low today, regardless of how many uplift cycles have been applied.' },
          ].map(({ icon, title, text }) => (
            <div key={icon} className="bg-zinc-50 rounded-xl p-5 flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#1A6B4A] shrink-0" style={{ fontSize: '1.3rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              <div>
                <p className="font-semibold text-primary text-sm mb-1">{title}</p>
                <p className="text-secondary text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1A6B4A]/5 border border-[#1A6B4A]/20 rounded-2xl p-7 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] mb-2">The RICS Position</p>
          <p className="text-secondary leading-relaxed">RICS is unambiguous: index linking is a maintenance tool, not an assessment. Their guidance recommends a full professional reinstatement cost assessment every three years as a minimum, with index linking used only as an interim adjustment between assessments. This position is shared by the ABI and most major brokers.</p>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-4">The Practical Recommendation</h2>
        <div className="space-y-3 mb-10">
          {[
            'Commission a RICS-regulated reinstatement cost assessment at least every three years per block',
            'Use index linking only as a bridge between assessments, never as a permanent substitute',
            'Document the date and source of the last professional assessment in your management records',
            'Treat any insurer query about the sum insured as an immediate trigger for professional reassessment',
            'Where the last assessment used a generic online calculator, treat the figure as unverified',
          ].map(item => (
            <div key={item} className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <p className="text-secondary leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0f3d28] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need a reinstatement assessment?</h3>
          <p className="text-white/60 mb-5 text-sm">RICS-regulated, BCIS-indexed, broker-ready. Delivered in 5 days.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3 rounded-full font-bold inline-block">Get in Touch</Link>
        </div>
      </div>
    </main>
  )
}
