import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

const servicesFaqItems = [
  { question: 'Which RCA service is right for my property?', answer: 'Desktop Assessments suit standard properties needing fast, cost-effective valuations. On-Site Surveys are best for complex or high-value buildings. Our 3-Year Protection plan is ideal for long-term compliance with automatic updates.' },
  { question: 'What is a desktop reinstatement cost assessment?', answer: 'A desktop RCA uses remote data, property records, and construction cost modelling to deliver a fast and efficient rebuild valuation — without the need for a site visit.' },
  { question: 'When do I need an on-site survey instead of desktop?', answer: 'On-site surveys are recommended for listed buildings, complex structures, non-standard construction, or high-value assets where accuracy and detail are critical.' },
  { question: 'What is included in the 3-year protection plan?', answer: 'Our 3-Year Protection plan includes a full RCA plus automated annual updates, ensuring your rebuild value stays accurate and compliant as construction costs change.' },
  { question: 'Do I really need annual updates to my RCA?', answer: 'Yes. Construction costs change rapidly. Without updates, your policy can quickly become inaccurate. Our automated updates keep your valuation aligned with current market rates.' },
  { question: 'Is a desktop RCA accurate enough for insurance?', answer: 'For standard properties, yes. Desktop assessments provide reliable valuations using advanced modelling. However, complex properties benefit from on-site inspection for maximum accuracy.' },
  { question: 'How fast can I get my RCA completed?', answer: 'Desktop assessments are typically completed within 5 days. On-site surveys and complex properties may take slightly longer depending on scope and access.' },
  { question: 'Why does an on-site survey cost more?', answer: 'On-site surveys involve a full physical inspection, detailed measurement, and expert analysis of materials and structure — delivering the highest level of accuracy for complex buildings.' },
  { question: 'What happens if I choose the wrong RCA service?', answer: 'We review every instruction before proceeding. If your property requires a higher level of assessment, we will advise you — ensuring your valuation is accurate and compliant.' },
  { question: 'Is the 3-year plan better value than single assessments?', answer: 'Yes. The 3-Year Protection plan spreads cost while ensuring ongoing compliance and accuracy — removing the risk of outdated valuations between assessments.' },
]

export default function ServicesPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-8">

      {/* Hero */}
      <section className="py-16 md:py-24 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block" style={{ letterSpacing: '0.3em' }}>Our Services</span>
        <h1 className="text-5xl md:text-[5rem] font-bold tracking-tight text-primary" style={{ lineHeight: '1.08' }}>
          <span className="text-shine-red">Insurers profit</span> from<br />your underinsurance.
          <br />
          <span className="text-shine-slow" style={{ fontSize: '0.85em' }}>We don&rsquo;t let them.</span>
        </h1>
        <div className="w-12 h-0.5" aria-hidden="true"></div>
        <p className="text-lg text-secondary max-w-md leading-relaxed">
          Most property owners don&rsquo;t find out they&rsquo;re underinsured until it&rsquo;s too late. A RICS-regulated RCA gives you the one figure that keeps your insurer honest.
        </p>
      </section>

      {/* Which service */}
      <section className="py-16" id="which">
        <div className="text-center mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Right for you?</span>
          <h2 className="text-4xl font-bold text-primary">Which service do I need?</h2>
          <p className="text-secondary max-w-xl mx-auto leading-relaxed">Not sure where to start? Here&rsquo;s a quick guide to help you choose the right assessment.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { icon: 'monitor', name: 'Desktop Assessment', price: 'From £210', desc: 'Best for standard residential or commercial properties needing a fast, accurate figure. No unusual features, no listed status, no complex architecture.' },
            { icon: 'verified', fill: true, name: '3-Year Protection', price: 'Best Value', desc: 'Ideal for landlords and asset managers who need ongoing RICS compliance without repeat instruction costs. Includes annual indexation updates.' },
            { icon: 'location_on', name: 'On-Site Survey', price: 'From £675', desc: 'Essential for listed buildings, complex architecture, unusual construction, or high-value assets where physical inspection is required for accuracy.' },
          ].map(({ icon, fill, name, price, desc }) => (
            <div key={name} className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.08)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.18)] hover:border-[#1A6B4A]/60 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="btn-shine shrink-0 w-11 h-11 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem', ...(fill ? { fontVariationSettings: "'FILL' 1" } : {}) }}>{icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <p className="font-bold text-primary">{name}</p>
                  <span className="text-xs font-bold text-[#1A6B4A] bg-[#1A6B4A]/10 px-2.5 py-0.5 rounded-full">{price}</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16" id="pricing">
        <div className="text-center mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Pricing</span>
          <h2 className="text-4xl font-bold text-primary">Choose your assessment</h2>
          <p className="text-secondary max-w-xl mx-auto leading-relaxed">Transparent, fixed pricing with no hidden fees. Every assessment is carried out by a RICS-regulated surveyor.</p>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-stretch">

            {/* Desktop Assessment */}
            <div className="liquid-glass rounded-2xl p-10 flex flex-col sovereign-shadow border border-[#1A6B4A]/20 hover:border-[#1A6B4A]/50 hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.15)] transition-all duration-500">
              <div className="mb-8">
                <div className="w-14 h-14 bg-[#1A6B4A]/10 flex items-center justify-center rounded-full mb-6">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.4rem' }}>monitor</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Desktop Assessment</h3>
                <p className="text-secondary text-sm">Efficient, data-driven remote valuation.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">£210.00</span>
                <span className="text-secondary block text-xs font-bold uppercase tracking-wider mt-1">+ VAT per assessment</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">check_circle</span>
                  <span className="text-secondary">Rapid 5-day turnaround</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">check_circle</span>
                  <span className="text-secondary">Remote data modelling</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-outline-variant text-lg">cancel</span>
                  <span className="text-secondary">Site visit not included</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full py-4 bg-[#1A6B4A] text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Select Desktop</Link>
            </div>

            {/* 3-Year Protection */}
            <div className="liquid-glass rounded-2xl p-10 flex flex-col relative border-2 border-[#1A6B4A] shadow-[0_0_32px_6px_rgba(26,107,74,0.20)] scale-105">
              <div className="absolute top-6 right-6">
                <span className="btn-shine px-4 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest text-white">Best Value</span>
              </div>
              <div className="mb-8">
                <div className="btn-shine w-14 h-14 flex items-center justify-center rounded-full mb-6">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">3-Year Protection</h3>
                <p className="text-secondary text-sm">Comprehensive multi-year coverage.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">£298.15</span>
                <span className="text-secondary block text-xs font-bold uppercase tracking-wider mt-1">+ VAT (Includes updates)</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">update</span>
                  <span className="text-secondary">Automated annual updates</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">security</span>
                  <span className="text-secondary">3-year valuation compliance</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">analytics</span>
                  <span className="text-secondary">Advanced market index tracking</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-shine w-full py-4 rounded-full font-bold text-white active:scale-[0.97] transition-all text-center block">Protect Now</Link>
            </div>

            {/* On-Site Survey */}
            <div className="liquid-glass rounded-2xl p-10 flex flex-col sovereign-shadow border border-[#1A6B4A]/20 hover:border-[#1A6B4A]/50 hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.15)] transition-all duration-500">
              <div className="mb-8">
                <div className="w-14 h-14 bg-[#1A6B4A]/10 flex items-center justify-center rounded-full mb-6">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.4rem' }}>location_on</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">On-Site Survey</h3>
                <p className="text-secondary text-sm">Precision for complex structures.</p>
              </div>
              <div className="mb-8">
                <span className="text-sm font-bold uppercase tracking-widest text-secondary block mb-1">Starts from</span>
                <span className="text-4xl font-bold text-primary">£675.00</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">check_circle</span>
                  <span className="text-secondary">Full physical property inspection</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">check_circle</span>
                  <span className="text-secondary">Complex architectural modelling</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg">check_circle</span>
                  <span className="text-secondary">Expert surveyor consultancy</span>
                </li>
              </ul>
              <Link href="/contact" className="w-full py-4 border-2 border-[#1A6B4A] text-[#1A6B4A] hover:bg-[#1A6B4A] hover:text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Request On-Site</Link>
            </div>

          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-surface-container-low rounded-2xl px-8 md:px-12 mt-8">
        <div className="text-center mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Every Assessment Includes</span>
          <h2 className="text-4xl font-bold text-primary">What you always get</h2>
          <p className="text-secondary max-w-xl mx-auto leading-relaxed">Regardless of which service you choose, every RCA is delivered to the same RICS-regulated standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { icon: 'gavel', title: 'RICS Regulated', desc: 'Every report meets the Royal Institution of Chartered Surveyors standards.' },
            { icon: 'analytics', title: 'Live BCIS Data', desc: 'Figures are based on current Building Cost Information Service indices.' },
            { icon: 'description', title: 'Broker-Ready Report', desc: 'Formatted for direct submission to your insurer or broker.' },
            { icon: 'shield', title: 'Professional Indemnity', desc: 'All assessments are backed by full professional indemnity insurance.' },
            { icon: 'support_agent', title: 'Dedicated Support', desc: 'A named surveyor handles your assessment from instruction to delivery.' },
            { icon: 'apartment', title: 'All Property Types', desc: 'Residential, commercial, listed, industrial, and portfolio properties.' },
          ].map(({ icon, title, desc }) => (
            <div key={icon} className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.08)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.18)] hover:border-[#1A6B4A]/60 transition-all duration-300 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.1rem' }}>{icon}</span>
              </div>
              <div>
                <p className="font-bold text-primary text-sm mb-1">{title}</p>
                <p className="text-secondary text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection heading="Protect Your Property Today." />
      </div>
      <FaqSection
        description="Everything you need to choose the right RCA service, stay compliant, and protect your property from underinsurance."
        items={servicesFaqItems}
      />

    </main>
  )
}
