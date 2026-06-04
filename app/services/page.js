import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'RICS Reinstatement Cost Assessment Services UK | RCA Ltd',
  },
  description:
    'RICS-regulated Reinstatement Cost Assessment services across the UK. Desktop RCA from £210, On-Site Survey from £675, and 3-Year Protection with annual BCIS updates. Broker-ready reports accepted by all UK insurers.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment Services UK | RCA Ltd',
    description:
      'RICS-regulated Reinstatement Cost Assessment services across the UK. Desktop RCA from £210, On-Site Survey from £675, and 3-Year Protection with annual BCIS updates. Broker-ready reports accepted by all UK insurers.',
    url: '/services',
  },
}

const servicesFaqItems = [
  { question: 'Which RCA service is right for my property?', answer: 'Desktop Assessments suit standard properties needing fast, cost-effective valuations. On-Site Surveys are best for complex or high-value buildings. Our 3-Year Protection plan is ideal for long-term compliance with automatic updates.' },
  { question: 'What is a desktop rebuild cost assessment?', answer: 'A desktop RCA uses remote data, property records, and construction cost modelling to deliver a fast and efficient rebuild valuation, without the need for a site visit.' },
  { question: 'When do I need an on-site survey instead of desktop?', answer: 'On-site surveys are recommended for listed buildings, complex structures, non-standard construction, or high-value assets where accuracy and detail are critical.' },
  { question: 'What is included in the 3-year protection plan?', answer: 'Our 3-Year Protection plan includes a full RCA plus automated annual updates, ensuring your rebuild value stays accurate and compliant as construction costs change.' },
  { question: 'Do I really need annual updates to my RCA?', answer: 'Yes. Construction costs change rapidly. Without updates, your policy can quickly become inaccurate. Our automated updates keep your valuation aligned with current market rates.' },
  { question: 'Is a desktop RCA accurate enough for insurance?', answer: 'For standard properties, yes. Desktop assessments provide reliable valuations using advanced modelling. However, complex properties benefit from on-site inspection for maximum accuracy.' },
  { question: 'How fast can I get my RCA completed?', answer: 'Desktop assessments are typically completed within 5 days. On-site surveys and complex properties may take slightly longer depending on scope and access.' },
  { question: 'Why does an on-site survey cost more?', answer: 'On-site surveys involve a full physical inspection, detailed measurement, and expert analysis of materials and structure. This delivers the highest level of accuracy for complex buildings.' },
  { question: 'What happens if I choose the wrong RCA service?', answer: 'We review every instruction before proceeding. If your property requires a higher level of assessment, we will advise you to ensure your valuation is accurate and compliant.' },
  { question: 'Is the 3-year plan better value than single assessments?', answer: 'Yes. The 3-Year Protection plan spreads cost while ensuring ongoing compliance and accuracy, removing the risk of outdated valuations between assessments.' },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const servicesBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
}

const servicesOfferJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Rebuild Cost Assessment',
  provider: { '@type': 'ProfessionalService', name: 'RCA Ltd', url: SITE_URL },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Rebuild Cost Assessment Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Desktop Assessment',
        price: '210',
        priceCurrency: 'GBP',
        description: 'RICS-regulated desktop Rebuild Cost Assessment delivered within 48 hours.',
      },
      {
        '@type': 'Offer',
        name: '3-Year Protection',
        price: '498.15',
        priceCurrency: 'GBP',
        description: 'Full RCA with automated annual updates for three years.',
      },
      {
        '@type': 'Offer',
        name: 'On-Site Survey',
        price: '675',
        priceCurrency: 'GBP',
        description: 'Full on-site Rebuild Cost Assessment for complex or high-value buildings.',
      },
    ],
  },
}

const servicesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: servicesFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesOfferJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }}
      />
    <main>

      {/* Hero */}
      <section className="py-16 md:py-24 px-8 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2" style={{ letterSpacing: '0.3em' }}><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>home_repair_service</span>Our Services</span>
        <h1 className="text-3xl sm:text-4xl md:text-[5rem] font-bold tracking-tight text-primary" style={{ lineHeight: '1.08' }}>
          <span className="text-shine-red">Insurers profit</span> from<br /><span className="text-shine-red">your underinsurance.</span>
          <br />
          <span className="text-shine-slow" style={{ fontSize: '0.85em' }}>We don&rsquo;t let them.</span>
        </h1>
        <div className="w-12 h-0.5" aria-hidden="true"></div>
        <p className="text-lg text-secondary max-w-md leading-relaxed">
          Most property owners don&rsquo;t find out they&rsquo;re underinsured until it&rsquo;s too late. A RICS-regulated RCA gives you the one figure that keeps your insurer honest.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="pt-10 pb-16 px-8 bg-[#0f3d28]" id="pricing">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>sell</span>Pricing</span>
          <h2 className="text-4xl font-bold text-white">Choose your Assessment.</h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">Transparent, fixed pricing with no hidden fees. Every assessment is carried out by a RICS-regulated surveyor.</p>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-stretch">

            {/* Desktop Assessment */}
            <div id="desktop-rca" className="bg-white rounded-2xl p-10 flex flex-col shadow-md hover:shadow-lg transition-all duration-300">
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
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                  <span className="text-secondary">Rapid 5-day turnaround</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                  <span className="text-secondary">Remote data modelling</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-zinc-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>location_off</span>
                  <span className="text-secondary">Site visit not included</span>
                </li>
              </ul>
              <Link href="/contact#contact-form" className="w-full py-4 bg-[#1A6B4A] text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Select Desktop</Link>
            </div>

            {/* 3-Year Protection */}
            <div id="three-year-protection" className="bg-white rounded-2xl p-10 flex flex-col relative border-2 border-[#1A6B4A] shadow-[0_0_32px_6px_rgba(26,107,74,0.20)] md:scale-105">
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
                <span className="text-5xl font-bold text-primary">£498.15</span>
                <span className="text-secondary block text-xs font-bold uppercase tracking-wider mt-1">+ VAT (Includes updates)</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>update</span>
                  <span className="text-secondary">Automated annual updates</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  <span className="text-secondary">3-year valuation compliance</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                  <span className="text-secondary">Advanced market index tracking</span>
                </li>
              </ul>
              <Link href="/contact#contact-form" className="btn-shine w-full py-4 rounded-full font-bold text-white active:scale-[0.97] transition-all text-center block">Protect Now</Link>
            </div>

            {/* On-Site Survey */}
            <div id="on-site-survey" className="bg-white rounded-2xl p-10 flex flex-col shadow-md hover:shadow-lg transition-all duration-300">
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
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
                  <span className="text-secondary">Full physical property inspection</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                  <span className="text-secondary">Complex architectural modelling</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                  <span className="text-secondary">Expert surveyor consultancy</span>
                </li>
              </ul>
              <Link href="/contact#contact-form" className="w-full py-4 border-2 border-[#1A6B4A] text-[#1A6B4A] hover:bg-[#1A6B4A] hover:text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Request On-Site</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pt-10 pb-16 px-8 md:px-12 mt-8">
        <div className="max-w-5xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>compare_arrows</span>Which is right for me?</span>
            <h2 className="text-3xl font-bold text-primary">Find your <span className="text-shine">perfect assessment.</span></h2>
          </div>
          <div className="rounded-2xl border border-[#1A6B4A]/20 shadow-[0_0_24px_2px_rgba(26,107,74,0.07)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ minWidth: '560px' }}>
                <thead>
                  <tr className="bg-[#1A6B4A]">
                    <th className="text-left pl-5 pr-3 py-5 text-white/70 font-semibold text-xs uppercase tracking-widest sticky left-0 bg-[#1A6B4A] z-10" style={{ minWidth: '140px' }}>Feature</th>
                    <th className="px-3 py-5 text-white font-bold text-center text-xs leading-snug" style={{ minWidth: '120px' }}>Desktop RCA<br /><span className="text-white/60 font-normal">£210 + VAT</span></th>
                    <th className="px-3 py-5 text-white font-bold text-center text-xs leading-snug relative" style={{ minWidth: '130px' }}>
                      <span className="inline-block bg-white text-[#1A6B4A] text-[0.55rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1">Best Value</span><br />
                      3-Year Protection<br /><span className="text-white/60 font-normal">£498.15 + VAT</span>
                    </th>
                    <th className="px-3 py-5 text-white font-bold text-center text-xs leading-snug" style={{ minWidth: '120px' }}>On-Site Survey<br /><span className="text-white/60 font-normal">From £675 + VAT</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-100">
                  {[
                    { feature: 'RICS-regulated report', desktop: true, protect: true, onsite: true },
                    { feature: 'BCIS live cost data', desktop: true, protect: true, onsite: true },
                    { feature: 'Broker & insurer accepted', desktop: true, protect: true, onsite: true },
                    { feature: 'Demolition costs included', desktop: true, protect: true, onsite: true },
                    { feature: 'Professional fees included', desktop: true, protect: true, onsite: true },
                    { feature: 'Professional indemnity backed', desktop: true, protect: true, onsite: true },
                    { feature: 'Physical site inspection', desktop: false, protect: false, onsite: true },
                    { feature: 'Annual BCIS index update', desktop: false, protect: true, onsite: false },
                    { feature: '3-year RICS compliance', desktop: false, protect: true, onsite: false },
                    { feature: 'Listed / complex buildings', desktop: false, protect: false, onsite: true },
                    { feature: 'Best for', desktop: 'Standard residential & commercial', protect: 'Landlords & portfolio managers', onsite: 'Listed, high-value & complex' },
                  ].map(({ feature, desktop, protect, onsite }, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                      <td className={`pl-5 pr-3 py-3.5 font-semibold text-primary text-xs sticky left-0 z-10 leading-snug ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}>{feature}</td>
                      {[desktop, protect, onsite].map((val, j) => (
                        <td key={j} className={`px-3 py-3.5 text-center align-middle ${j === 1 ? 'bg-[#1A6B4A]/5' : ''}`}>
                          {val === true ? (
                            <span className="material-symbols-outlined text-[#1A6B4A] text-lg leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          ) : val === false ? (
                            <span className="material-symbols-outlined text-zinc-300 text-lg leading-none">cancel</span>
                          ) : (
                            <span className="text-secondary text-xs font-medium leading-snug block">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-secondary mt-5">Not sure? <Link href="/contact#contact-form" className="text-[#1A6B4A] font-semibold hover:underline">Contact us</Link> and we&rsquo;ll recommend the right assessment for your property.</p>
        </div>
      </section>

      {/* What's included */}
      <section className="pt-10 pb-20 px-8 md:px-12 bg-[#0f3d28]">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>checklist</span>Every Assessment Includes</span>
          <h2 className="text-4xl font-bold text-white">What you always get.</h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">Regardless of which service you choose, every RCA is delivered to the same RICS-regulated standard.</p>
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
            <div key={icon} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="btn-shine shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>{icon}</span>
              </div>
              <div>
                <p className="font-bold text-primary text-sm mb-1">{title}</p>
                <p className="text-secondary text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Start Your RICS-Certified <span className="text-shine">Rebuild Cost Assessment</span> Today.
          </>
        }
      />
      <FaqSection
        description="Everything you need to choose the right RCA service, stay compliant, and protect your property from underinsurance."
        items={servicesFaqItems}
      />

    </main>
    </>
  )
}
