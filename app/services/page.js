import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'Reinstatement Cost Assessment Services | Desktop & On-Site',
  },
  description:
    'Choose your RICS Reinstatement Cost Assessment: Desktop, On-Site Survey for listed or complex buildings. All reports broker-ready.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment Services UK | RCA Ltd',
    description:
      'RICS-regulated Reinstatement Cost Assessment services across the UK. Desktop RCA, On-Site Survey. Broker-ready reports accepted by all UK insurers.',
    url: '/services',
  },
}

const servicesFaqItems = [
  { question: 'Which RCA service is right for my property?', answer: 'Desktop Assessments suit standard properties needing fast, cost-effective valuations. On-Site Surveys are best for complex or high-value buildings' },
  { question: 'What is a desktop rebuild cost assessment?', answer: 'A desktop RCA uses remote data, property records, and construction cost modelling to deliver a fast and efficient rebuild valuation, without the need for a site visit.' },
  { question: 'When do I need an on-site survey instead of desktop?', answer: 'On-site surveys are recommended for listed buildings, complex structures, non-standard construction, or high-value assets where accuracy and detail are critical.' },
  { question: 'Is a desktop RCA accurate enough for insurance?', answer: 'For standard properties, yes. Desktop assessments provide reliable valuations using advanced modelling. However, complex properties benefit from on-site inspection for maximum accuracy.' },
  { question: 'How fast can I get my RCA completed?', answer: 'Desktop assessments are typically completed within 5 days. On-site surveys and complex properties may take slightly longer depending on scope and access.' },
  { question: 'Why does an on-site survey cost more?', answer: 'On-site surveys involve a full physical inspection, detailed measurement, and expert analysis of materials and structure. This delivers the highest level of accuracy for complex buildings.' },
  { question: 'What happens if I choose the wrong RCA service?', answer: 'We review every instruction before proceeding. If your property requires a higher level of assessment, we will advise you to ensure your valuation is accurate and compliant.' },
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
      { '@type': 'Offer', name: 'Desktop Assessment', price: '210', priceCurrency: 'GBP', description: 'RICS-regulated desktop Rebuild Cost Assessment delivered within 48 hours.' },
      { '@type': 'Offer', name: 'On-Site Survey', price: '675', priceCurrency: 'GBP', description: 'Full on-site Rebuild Cost Assessment for complex or high-value buildings.' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesOfferJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }} />
    <main className="bg-white">

      {/* Hero */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(26,107,74,0.08) 0%, transparent 65%)'}} aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]">
            <span className="text-shine-red">Insurers profit</span> from<br /><span className="text-shine-red">your underinsurance.</span><br />
            <span className="text-shine-slow" style={{ fontSize: '0.85em' }}>We don&rsquo;t let them.</span>
          </h1>
          <p className="text-gray-500 text-base max-w-md leading-relaxed">
            Most property owners don&rsquo;t find out they&rsquo;re underinsured until it&rsquo;s too late. A RICS-regulated RCA gives you the one figure that keeps your insurer honest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact#contact-form" className="btn-shine text-white px-7 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-all">
              Get your RICS-Certified RCA
            </Link>
            <Link href="/resources" className="bg-gray-900/[0.04] border border-gray-900/[0.08] text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-7 py-3.5 rounded-full font-semibold text-sm transition-all">
              Is My Property Underinsured?
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#1A6B4A]/[0.06] border border-[#1A6B4A]/15 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
              <span className="text-xs text-[#1A6B4A] tracking-wide font-medium">RICS Regulated · London & UK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>payments</span>Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Choose your <span className="text-shine">Assessment.</span></h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">Every assessment is carried out by a RICS-regulated surveyor. Contact us for a tailored quote.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

            {/* Desktop Assessment — Electric Blue */}
            <div id="desktop-rca" className="card-pulse-seq rounded-xl p-8 pb-10 flex flex-col relative min-h-[420px] transition-all hover:scale-[1.01]" style={{ '--card-delay': '0s', background:'linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%)',boxShadow:'0 4px 32px rgba(59,130,246,0.12)'}}>
              <div className="mb-7 mt-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-5" style={{background:'linear-gradient(135deg,#60a5fa,#3b82f6)',boxShadow:'0 2px 12px rgba(59,130,246,0.35)'}}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>monitor</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Desktop Assessment</h3>
                <p className="text-blue-600/70 text-sm">Efficient, data-driven remote valuation.</p>
                <p className="text-gray-500 text-xs leading-relaxed mt-2">Our RICS-regulated Desktop Assessment delivers a certified reinstatement cost figure using live BCIS construction cost data and remote property analysis — no site visit required. Ideal for standard residential, buy-to-let, and commercial properties needing a fast, broker-ready report accepted by all UK insurers.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-blue-400 text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span><span className="text-gray-700">Rapid 5-day turnaround</span></li>
                <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-blue-400 text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span><span className="text-gray-700">Remote data modelling</span></li>
                <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-gray-300 text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>location_off</span><span className="text-gray-400">Site visit not included</span></li>
              </ul>
              <Link href="/contact#contact-form" className="w-full py-3 rounded-full font-semibold text-sm text-white active:scale-[0.97] transition-all text-center block" style={{background:'linear-gradient(90deg,#60a5fa,#3b82f6)',boxShadow:'0 2px 12px rgba(59,130,246,0.35)'}}>Contact RICS Surveyor</Link>
            </div>

            {/* On-Site Survey — Dark Green */}
            <div id="on-site-survey" className="card-pulse-seq rounded-xl p-8 pb-10 flex flex-col relative min-h-[420px] transition-all hover:scale-[1.01]" style={{ '--card-delay': '3.5s', background:'linear-gradient(145deg,#e8f5ee 0%,#d4ede1 100%)',boxShadow:'0 4px 32px rgba(26,107,74,0.18)'}}>
              <div className="mb-7 mt-1">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-5" style={{background:'linear-gradient(135deg,#1A6B4A,#145c3e)',boxShadow:'0 2px 12px rgba(26,107,74,0.35)'}}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>location_on</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">On-Site Survey</h3>
                <p className="text-[#1A6B4A]/70 text-sm">Precision for complex structures.</p>
                <p className="text-gray-500 text-xs leading-relaxed mt-2">Our RICS-surveyor On-Site Assessment involves a full physical property inspection to produce the most accurate reinstatement cost valuation available. Essential for listed buildings, non-standard construction, high-value assets, and any property where remote data alone cannot capture the full rebuild complexity.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-[#1A6B4A] text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>search</span><span className="text-gray-700">Full physical property inspection</span></li>
                <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-[#1A6B4A] text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span><span className="text-gray-700">Complex architectural modelling</span></li>
                <li className="flex items-start gap-3 text-sm"><span className="material-symbols-outlined text-[#1A6B4A] text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span><span className="text-gray-700">Expert surveyor consultancy</span></li>
              </ul>
              <Link href="/contact#contact-form" className="w-full py-3 rounded-full font-semibold text-sm text-white active:scale-[0.97] transition-all text-center block" style={{background:'linear-gradient(90deg,#1A6B4A,#145c3e)',boxShadow:'0 2px 12px rgba(26,107,74,0.4)'}}>Contact RICS Surveyor</Link>
            </div>


          </div>
        </div>
      </section>

      {/* Service Deep-Dives */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto space-y-6">

          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>info</span>Service Details</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">What each service <span className="text-shine">actually involves.</span></h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">Every service produces a RICS-regulated, broker-ready reinstatement figure. Here is exactly what each one covers and who it is designed for.</p>
          </div>

          {/* Desktop Assessment — Electric Blue */}
          <div className="panel-shine-diamond rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{background:'linear-gradient(135deg,#60a5fa,#3b82f6)',boxShadow:'0 2px 12px rgba(59,130,246,0.3)'}}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>monitor</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Desktop Assessment</h3>
                <p className="text-sm text-blue-800 leading-relaxed">A fast, accurate reinstatement figure produced entirely remotely — no site visit required. Ideal for standard residential and commercial properties.</p>
              </div>
              <Link href="/contact#contact-form" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all active:scale-[0.97]" style={{background:'linear-gradient(135deg,#60a5fa,#3b82f6)',boxShadow:'0 2px 10px rgba(59,130,246,0.35)'}}>
                Contact RICS Surveyor <span className="material-symbols-outlined" style={{fontSize:'1rem'}}>arrow_forward</span>
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'data_object', title: 'How it works', desc: 'Our surveyors use property records, floor area data, and live BCIS construction cost indices to model your rebuild value without visiting the site.' },
                { icon: 'group', title: 'Who it is for', desc: 'Standard homes, buy-to-let properties, offices, retail units, and warehouses with straightforward construction and no listed status.' },
                { icon: 'schedule', title: 'Turnaround', desc: 'Delivered within 5 working days of instruction. Faster turnaround available on request — contact us to discuss your deadline.' },
                { icon: 'fact_check', title: 'What you receive', desc: 'A fully RICS-regulated report stating your current reinstatement cost, accepted by all UK insurers and brokers without challenge.' },
              ].map(({ icon, title, desc }, i) => (
                <div key={title} className="card-pulse-blue rounded-xl p-5" style={{ '--card-delay': `${i}s`, background:'rgba(0,0,0,0.04)', border:'1px solid rgba(59,130,246,0.15)' }}>
                  <span className="card-icon material-symbols-outlined text-blue-400 mb-2 block" style={{ fontSize: '1.1rem' }}>{icon}</span>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-blue-800 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* On-Site Survey — Dark Green */}
          <div className="panel-shine rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{background:'linear-gradient(135deg,#22c55e,#16a34a)',boxShadow:'0 2px 12px rgba(34,197,94,0.3)'}}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>location_on</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">On-Site Survey</h3>
                <p className="text-sm text-emerald-100 leading-relaxed">A full physical inspection by a RICS-regulated surveyor. The most accurate assessment available — essential for listed, complex, or high-value buildings.</p>
              </div>
              <Link href="/contact#contact-form" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all active:scale-[0.97]" style={{background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.4)',color:'#fff',boxShadow:'0 2px 10px rgba(0,0,0,0.15)'}}>
                Contact RICS Surveyor <span className="material-symbols-outlined" style={{fontSize:'1rem'}}>arrow_forward</span>
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'data_object', title: 'How it works', desc: 'A RICS-registered surveyor attends your property, measures every element in person, assesses materials and construction, and models the full reinstatement cost on-site.' },
                { icon: 'group', title: 'Who it is for', desc: 'Listed buildings, non-standard construction, complex commercial or industrial premises, high-value assets, and any property where desktop methods cannot capture full detail.' },
                { icon: 'architecture', title: 'Specialist coverage', desc: 'Our surveyors are experienced in listed building requirements, specialist materials, M&E installations, curtilage structures, and large commercial floor plates.' },
                { icon: 'fact_check', title: 'What you receive', desc: 'A comprehensive RICS-regulated report with full site notes, photographic evidence, and a reinstatement figure that will withstand insurer or legal scrutiny.' },
              ].map(({ icon, title, desc }, i) => (
                <div key={title} className="card-pulse-white rounded-xl p-5" style={{ '--card-delay': `${i}s`, background:'rgba(255,255,255,0.10)', border:'1px solid rgba(255,255,255,0.18)' }}>
                  <span className="card-icon material-symbols-outlined text-green-300 mb-2 block" style={{ fontSize: '1.1rem' }}>{icon}</span>
                  <p className="font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-emerald-100 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>compare</span>Which Is Right For Me?</span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Find your <span className="text-shine">perfect assessment.</span></h2>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ minWidth: '560px' }}>
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left pl-6 pr-4 py-5 text-gray-400 font-semibold text-xs uppercase tracking-widest sticky left-0 bg-gray-100 z-10" style={{ minWidth: '140px' }}>Feature</th>
                    <th className="px-4 py-5 text-gray-600 font-semibold text-center text-xs" style={{ minWidth: '120px' }}>Desktop RCA</th>
                    <th className="px-4 py-5 text-gray-600 font-semibold text-center text-xs" style={{ minWidth: '120px' }}>On-Site Survey</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { feature: 'RICS-regulated report', desktop: true, onsite: true },
                    { feature: 'BCIS live cost data', desktop: true, onsite: true },
                    { feature: 'Broker & insurer accepted', desktop: true, onsite: true },
                    { feature: 'Demolition costs included', desktop: true, onsite: true },
                    { feature: 'Professional fees included', desktop: true, onsite: true },
                    { feature: 'Professional indemnity backed', desktop: true, onsite: true },
                    { feature: 'Physical site inspection', desktop: false, onsite: true },
                    { feature: 'Listed / complex buildings', desktop: false, onsite: true },
                    { feature: 'Best for', desktop: 'Standard residential & commercial', onsite: 'Listed, high-value & complex' },
                  ].map(({ feature, desktop, onsite }, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="pl-6 pr-4 py-3.5 font-medium text-gray-600 text-xs sticky left-0 bg-gray-100 z-10 leading-snug">{feature}</td>
                      {[desktop, onsite].map((val, j) => (
                        <td key={j} className="px-4 py-3.5 text-center align-middle">
                          {val === true ? (
                            <span className={`material-symbols-outlined text-base leading-none ${j === 0 ? 'text-[#1A6B4A]' : 'text-blue-400'}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          ) : val === false ? (
                            <span className="material-symbols-outlined text-gray-200 text-base leading-none">cancel</span>
                          ) : (
                            <span className={`text-xs font-medium leading-snug block ${j === 0 ? 'text-slate-500' : 'text-blue-600'}`}>{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-5">Not sure? <Link href="/contact#contact-form" className="text-[#1A6B4A] hover:text-[#22C55E] transition-colors">Contact us</Link> and we&rsquo;ll recommend the right assessment for your property.</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 px-6 bg-[#1A6B4A] border-t border-[#155c3e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-green-300"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>verified</span>Every Assessment Includes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What you always get.</h2>
            <p className="text-green-100 max-w-md mx-auto text-sm leading-relaxed">Regardless of which service you choose, every RCA is delivered to the same RICS-regulated standard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: 'gavel', title: 'RICS Regulated', desc: 'Every report meets the Royal Institution of Chartered Surveyors standards.' },
              { icon: 'analytics', title: 'Live BCIS Data', desc: 'Figures are based on current Building Cost Information Service indices.' },
              { icon: 'description', title: 'Broker-Ready Report', desc: 'Formatted for direct submission to your insurer or broker.' },
              { icon: 'shield', title: 'Professional Indemnity', desc: 'All assessments are backed by full professional indemnity insurance.' },
              { icon: 'support_agent', title: 'Dedicated Support', desc: 'A named surveyor handles your assessment from instruction to delivery.' },
              { icon: 'apartment', title: 'All Property Types', desc: 'Residential, commercial, listed, industrial, and portfolio properties.' },
            ].map(({ icon, title, desc }, i) => (
              <div key={icon} className="card-pulse-seq bg-white/10 rounded-xl p-6 flex items-start gap-4 hover:bg-white/20 transition-all" style={{ '--card-delay': `${i * 3.5}s` }}>
                <div className="bg-white/20 shrink-0 w-9 h-9 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem' }}>{icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-green-100 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
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
