import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

export const metadata = {
  title: {
    absolute: 'RICS Reinstatement Cost Assessment UK | 48-Hour Delivery',
  },
  description:
    'Is your building insured for the right amount? 80% of UK properties are underinsured. Get a RICS Reinstatement Cost Assessment   broker-ready, delivered in 48 hours.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment London & UK | From £210',
    description:
      '80% of UK buildings carry the wrong reinstatement cost on their policy. RICS Reinstatement Cost Assessment for homes, commercial, and listed buildings. Delivered in 48 hours across London and the UK.',
    url: '/',
  },
}

const homeFaqItems = [
  { question: 'How much does a typical RCA cost?', answer: 'Pricing depends on property type and size. Please get in touch for a bespoke quote.' },
  { question: 'Is RCA Ltd regulated by RICS?', answer: 'Yes. Reinstatement Cost Assessment Ltd is a RICS Regulated Firm. Every assessment is conducted by or under the supervision of a RICS-registered member, ensuring full regulatory compliance and professional accountability.' },
  { question: 'What areas of the UK do you cover?', answer: 'We provide Reinstatement Cost Assessments across the whole of the United Kingdom. Desktop assessments are available nationally. On-site surveys are available throughout England, Scotland, Wales, and Northern Ireland.' },
  { question: 'What information do you need to get started?', answer: 'We need the property address, approximate floor area, construction type, and your contact details. Once received, we confirm your instruction and get started within one business day.' },
  { question: 'Are VAT costs included in the assessment?', answer: "Yes. We specify whether the figure is inclusive or exclusive of VAT, based on the property owner's VAT status and building type." },
  { question: 'Do you assess listed buildings?', answer: 'Absolutely. Listed buildings require specialist RCA knowledge. Authentic materials and skilled craftsmen significantly inflate rebuild costs and demand expert handling.' },
  { question: 'How long does a site visit take?', answer: 'A typical 10,000 sq ft office takes 90 minutes to 2 hours on-site to ensure every structural detail is accurately captured.' },
  { question: 'Can you provide RCAs for a multi-asset portfolio?', answer: 'Yes. We specialise in national portfolio valuations and provide a consolidated report with individual breakdown schedules for each asset.' },
  { question: 'Do RCAs cover outbuildings and fences?', answer: 'Yes. Our assessments include curtilage assets such as external parking, boundary walls, and ancillary structures, unless explicitly excluded by the client.' },
  { question: 'Can I instruct you directly or do I go through a broker?', answer: 'You can instruct us directly. Many clients come to us independently before placing or renewing their insurance. We also work alongside brokers and insurers where required.' },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/`,
  name: 'Reinstatement Cost Assessment Ltd',
  alternateName: ['RCA Ltd', 'Rebuild Cost Assessment Ltd'],
  url: SITE_URL,
  logo: `${SITE_URL}/rca48.png`,
  image: `${SITE_URL}/rebuild-cost-assessment-london.jpeg`,
  description: 'RICS-regulated Reinstatement Cost Assessments (Rebuild Cost Assessments) for UK properties. Accurate reinstatement valuations, delivered in 48 hours.',
  telephone: '+44-20-3178-8099',
  email: 'info@rca-ltd.com',
  priceRange: undefined,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Hanover Square',
    addressLocality: 'London',
    postalCode: 'W1S 1BN',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'City', name: 'London' },
    { '@type': 'AdministrativeArea', name: 'Greater London' },
    { '@type': 'AdministrativeArea', name: 'South East England' },
  ],
  geo: { '@type': 'GeoCoordinates', latitude: 51.5120, longitude: -0.1444 },
  hasMap: 'https://maps.google.com/?q=17+Hanover+Square,+London+W1S+1BN',
  serviceType: 'Rebuild Cost Assessment',
  knowsAbout: ['Rebuild Cost Assessment', 'Reinstatement Cost Assessment', 'Building Insurance Valuation', 'BCIS Construction Costs', 'RICS Regulated Surveying'],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/`,
  url: SITE_URL,
  name: 'Reinstatement Cost Assessment Ltd',
  publisher: { '@id': `${SITE_URL}/` },
  inLanguage: 'en-GB',
}

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const serviceLinksJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Reinstatement Cost Assessment Services',
  description: 'RICS-regulated Reinstatement Cost Assessment services for UK property owners: residential, commercial, and listed buildings.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Desktop RCA', description: 'Fast, data-driven Reinstatement Cost Assessment for standard UK residential and commercial properties.', url: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 2, name: 'On-Site Survey', description: 'Full physical inspection by a RICS-regulated surveyor for listed buildings, complex architecture, non-standard construction, and high-value UK property.', url: `${SITE_URL}/services` },
  ],
}

const reviews = [
  { stars: 5, text: "Our insurer flagged we were underinsured at renewal. RCA Ltd came back within the week with a full reinstatement assessment — turned out we were short by nearly £200k. Sorted now.", name: "James H.", role: "Landlord, Manchester", photo: "https://randomuser.me/api/portraits/men/32.jpg", google: true },
  { stars: 5, text: "Used them for three properties now. Each report is thorough, clearly laid out, and my broker accepts them without question. Makes renewal so much easier.", name: "Sarah M.", role: "Portfolio Landlord, Leeds", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { stars: 4, text: "Needed a reinstatement figure for a listed building — most surveyors wouldn't touch it. These guys knew exactly what they were doing. Very happy with the result.", name: "David C.", role: "Owner, Grade II Listed Property", initials: "DC", color: "bg-emerald-700", google: true },
  { stars: 5, text: "My mortgage lender required an up-to-date RCA before completion. Got it back fast, no fuss, and the report was accepted first time. Would definitely use again.", name: "Emma T.", role: "Homebuyer, Bristol", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
  { stars: 5, text: "We manage a mixed-use block and had been using the same insured figure for years. The assessment flagged a significant gap. Really glad we got it done before any claim arose.", name: "Robert O.", role: "Property Manager, Birmingham", photo: "https://randomuser.me/api/portraits/men/75.jpg", google: true },
  { stars: 5, text: "The desktop assessment was great value. Clear methodology, BCIS-indexed, and the surveyor walked me through the figures on a call afterwards. Exactly what I needed.", name: "Claire S.", role: "Buy-to-Let Investor, London", photo: "https://randomuser.me/api/portraits/women/21.jpg" },
  { stars: 4, text: "Had a dilapidations dispute on a commercial lease and needed a solid reinstatement figure to back our position. The report held up without issue.", name: "Tom B.", role: "Commercial Tenant, Edinburgh", initials: "TB", color: "bg-indigo-700" },
  { stars: 5, text: "Straightforward process from start to finish. Submitted the details online, had the report in a few days, and my insurer was satisfied. No complaints at all.", name: "Priya S.", role: "Residential Landlord, Leicester", photo: "https://randomuser.me/api/portraits/women/55.jpg", google: true },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLinksJsonLd) }} />

    <main className="bg-white">

      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section className="relative bg-white pt-24 pb-0 overflow-hidden">
        {/* Radial green glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(26,107,74,0.08) 0%, transparent 65%)'}} aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.04] tracking-tight mb-6">
            <span className="text-shine-red">80%</span> of UK buildings<br />are <span className="text-shine-red">underinsured.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
            Is yours one of them? Certified Reinstatement Cost Assessments by <span className="whitespace-nowrap">RICS-regulated surveyors</span>, broker-ready and delivered in 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/contact#contact-form" className="btn-shine text-white px-7 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-all">
              Get your RICS-Certified RCA
            </Link>
            <Link href="/services" className="bg-gray-900/[0.04] border border-gray-900/[0.08] text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-7 py-3.5 rounded-full font-semibold text-sm transition-all">
              Is My Property Underinsured?
            </Link>
          </div>

          {/* Pill — below CTAs, centred */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1A6B4A]/[0.06] border border-[#1A6B4A]/15 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" aria-hidden="true" />
              <span className="text-xs text-[#1A6B4A] tracking-wide font-medium">RICS Regulated &middot; London &amp; UK</span>
            </div>
          </div>
        </div>

        {/* Hero image — contained, floating */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <div className="absolute inset-x-20 bottom-0 h-48 pointer-events-none" style={{background:'radial-gradient(ellipse at center bottom, rgba(26,107,74,0.10) 0%, transparent 70%)'}} aria-hidden="true" />
          <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-gray-200">
            <Image
              src="/reinstatement-cost-assessments-uk.png"
              alt="RICS-regulated Reinstatement Cost Assessment for UK property"
              width={1200}
              height={700}
              priority
              className="w-full h-auto object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHICH SERVICE ═══════════════════════════ */}
      <section className="py-24 px-6 bg-white border-t border-gray-100" id="which">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>help</span>Right For You?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Which service does your property need?</h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">Not sure where to start? Here&rsquo;s a quick guide to help you choose the right assessment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Desktop Assessment — Electric Blue */}
            <div className="card-pulse-seq rounded-xl p-7 flex flex-col gap-4 transition-all hover:scale-[1.01]" style={{ '--card-delay': '0s', background:'linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%)', boxShadow:'0 2px 16px rgba(59,130,246,0.12)' }}>
              <div className="flex items-start justify-between gap-2">
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#60a5fa,#3b82f6)'}}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem' }}>monitor</span>
                </div>
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full shrink-0">Fast &amp; Efficient</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1.5">Desktop Assessment</p>
                <p className="text-blue-800 text-sm leading-relaxed">Best for standard residential or commercial properties needing a fast, accurate figure. No unusual features, no listed status, no complex architecture.</p>
              </div>
            </div>

            {/* On-Site Survey — Dark Green */}
            <div className="card-pulse-seq rounded-xl p-7 flex flex-col gap-4 transition-all hover:scale-[1.01]" style={{ '--card-delay': '3.5s', background:'linear-gradient(145deg,#e8f5ee 0%,#d4ede1 100%)', boxShadow:'0 2px 16px rgba(26,107,74,0.12)' }}>
              <div className="flex items-start justify-between gap-2">
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#1A6B4A,#145c3e)'}}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem' }}>location_on</span>
                </div>
                <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1A6B4A] bg-[#1A6B4A]/10 px-2.5 py-0.5 rounded-full shrink-0">Complex Properties</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1.5">On-Site Survey</p>
                <p className="text-[#1A6B4A] text-sm leading-relaxed">Essential for listed buildings, complex architecture, unusual construction, or high-value assets where physical inspection is required for accuracy.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════ PRICING ═══════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>payments</span>Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Choose your <span className="text-shine">Assessment.</span></h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">Every assessment is carried out by a RICS-regulated surveyor. Contact us for a tailored quote.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

            {/* Desktop Reinstatement Cost Assessment — Electric Blue */}
            <div className="rounded-2xl flex flex-col relative transition-all hover:scale-[1.005] overflow-hidden" style={{background:'#ffffff',border:'1px solid #e2e8f0',boxShadow:'0 8px 40px rgba(59,130,246,0.10), 0 2px 8px rgba(0,0,0,0.06)'}}>
              {/* Card header band */}
              <div className="px-8 pt-8 pb-6" style={{background:'linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%)'}}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl" style={{background:'linear-gradient(135deg,#60a5fa,#3b82f6)',boxShadow:'0 4px 14px rgba(59,130,246,0.4)'}}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem', fontVariationSettings: "'FILL' 1" }}>monitor</span>
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-600 bg-white/80 px-3 py-1 rounded-full border border-blue-200">No Site Visit</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Desktop Assessment</h3>
                <p className="text-blue-700/60 text-xs font-semibold uppercase tracking-wider">Reinstatement Cost Assessment</p>
              </div>
              {/* Card body */}
              <div className="px-8 py-6 flex flex-col flex-grow">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">A certified rebuild valuation produced entirely from remote data using live BCIS indices — delivered in 5 days, accepted by all UK insurers. No site visit required.</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {[
                    { icon: 'speed',        label: '5-day broker-ready report',              sub: 'From instruction to delivery' },
                    { icon: 'analytics',    label: 'BCIS-indexed rebuild cost modelling',    sub: 'Industry-standard data, insurer accepted' },
                    { icon: 'verified',     label: 'RICS-regulated & PI insured',            sub: 'Signed off by a registered surveyor' },
                    { icon: 'home_work',    label: 'Residential & commercial properties',    sub: 'Standard construction, no listed status' },
                  ].map(({ icon, label, sub }) => (
                    <li key={icon} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-400 shrink-0" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                      <div>
                        <p className="text-gray-800 text-sm font-medium leading-none mb-0.5">{label}</p>
                        <p className="text-gray-400 text-xs">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/contact#contact-form" className="w-full py-3.5 rounded-xl font-semibold text-sm text-white active:scale-[0.98] transition-all text-center block" style={{background:'linear-gradient(90deg,#60a5fa,#3b82f6)',boxShadow:'0 4px 14px rgba(59,130,246,0.35)'}}>
                  Get a Quote →
                </Link>
              </div>
            </div>

            {/* On-Site Reinstatement Cost Assessment — Dark Green */}
            <div className="rounded-2xl flex flex-col relative transition-all hover:scale-[1.005] overflow-hidden" style={{background:'#ffffff',border:'1px solid #e2e8f0',boxShadow:'0 8px 40px rgba(26,107,74,0.12), 0 2px 8px rgba(0,0,0,0.06)'}}>
              {/* Card header band */}
              <div className="px-8 pt-8 pb-6" style={{background:'linear-gradient(135deg,#e8f5ee 0%,#d4ede1 100%)'}}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl" style={{background:'linear-gradient(135deg,#1A6B4A,#145c3e)',boxShadow:'0 4px 14px rgba(26,107,74,0.4)'}}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem', fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1A6B4A] bg-white/80 px-3 py-1 rounded-full border border-[#1A6B4A]/20">Physical Inspection</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">On-Site Survey</h3>
                <p className="text-[#1A6B4A]/60 text-xs font-semibold uppercase tracking-wider">Reinstatement Cost Assessment</p>
              </div>
              {/* Card body */}
              <div className="px-8 py-6 flex flex-col flex-grow">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">A full physical inspection by a RICS-registered surveyor — the most accurate assessment available. Essential for listed buildings, complex structures, and high-value assets.</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {[
                    { icon: 'search',       label: 'Full site inspection & photography',     sub: 'Every element measured in person' },
                    { icon: 'architecture', label: 'Complex & specialist cost modelling',    sub: 'M&E, curtilage, non-standard materials' },
                    { icon: 'gavel',        label: 'RICS-regulated & PI insured',            sub: 'Signed off by a registered surveyor' },
                    { icon: 'domain',       label: 'Listed, high-value & complex buildings', sub: 'The only suitable assessment type' },
                  ].map(({ icon, label, sub }) => (
                    <li key={icon} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#1A6B4A] shrink-0" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                      <div>
                        <p className="text-gray-800 text-sm font-medium leading-none mb-0.5">{label}</p>
                        <p className="text-gray-400 text-xs">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/contact#contact-form" className="w-full py-3.5 rounded-xl font-semibold text-sm text-white active:scale-[0.98] transition-all text-center block" style={{background:'linear-gradient(90deg,#1A6B4A,#145c3e)',boxShadow:'0 4px 14px rgba(26,107,74,0.4)'}}>
                  Get a Quote →
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHAT'S INCLUDED ═══════════════════════════ */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>verified</span>Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">What every assessment includes.</h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">Regardless of which service you choose, every RCA is delivered to the same RICS-regulated standard — built for professionals who need compliance they can rely on.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {[
              { icon: 'gavel', title: 'RICS Regulated Firm', desc: 'Every assessment is conducted by or under the supervision of a RICS-registered member. Full regulatory compliance, every time.', bg: 'linear-gradient(135deg,#1A6B4A,#145c3e)', shadow: 'rgba(26,107,74,0.35)' },
              { icon: 'analytics', title: 'Live BCIS Data', desc: 'Rebuild costs are calculated using live BCIS construction cost indices — the same data used by major UK insurers.', bg: 'linear-gradient(135deg,#3b82f6,#2563eb)', shadow: 'rgba(59,130,246,0.35)' },
              { icon: 'description', title: 'Broker-Ready Reports', desc: 'Every report is formatted for direct submission to your insurer or broker, accepted without question across the UK.', bg: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', shadow: 'rgba(139,92,246,0.35)' },
              { icon: 'shield', title: 'Professional Indemnity Insured', desc: 'We carry comprehensive PI insurance on every instruction, giving you and your clients full protection.', bg: 'linear-gradient(135deg,#f59e0b,#d97706)', shadow: 'rgba(245,158,11,0.35)' },
              { icon: 'support_agent', title: 'Dedicated Named Surveyor', desc: 'A named RICS surveyor handles your assessment from instruction to delivery — no call centres, no handoffs.', bg: 'linear-gradient(135deg,#06b6d4,#0891b2)', shadow: 'rgba(6,182,212,0.35)' },
              { icon: 'apartment', title: 'All Property Types', desc: 'Residential, commercial, listed, industrial, blocks of flats, mixed-use portfolios, and high-value assets.', bg: 'linear-gradient(135deg,#ec4899,#db2777)', shadow: 'rgba(236,72,153,0.35)' },
            ].map(({ icon, title, desc, bg, shadow }, i) => (
              <div key={icon} className="card-pulse-seq bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex items-start gap-4 transition-all" style={{ '--card-delay': `${i * 3.5}s` }}>
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: bg, boxShadow: `0 2px 10px ${shadow}` }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-7 mb-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] mb-6">Our Assessment Methodology</p>
            <div className="flex flex-col md:flex-row gap-0 items-stretch">
              {[
                { n: '1', label: 'Instruction & Data Gathering', desc: 'We collect property details, floor areas, construction type, and any specialist features.' },
                { n: '2', label: 'BCIS-Indexed Modelling', desc: 'Rebuild costs are calculated using live BCIS indices — the same data used by major insurers.' },
                { n: '3', label: 'RICS-Reviewed Report', desc: 'A RICS-registered surveyor signs off every report before it is delivered to you.' },
              ].map(({ n, label, desc }, i, arr) => (
                <div key={n} className="flex flex-col md:flex-row items-stretch flex-1">
                  <div className="flex-1 p-5 text-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3" style={{ background: ['linear-gradient(135deg,#1A6B4A,#145c3e)','linear-gradient(135deg,#3b82f6,#2563eb)','linear-gradient(135deg,#8b5cf6,#7c3aed)'][Number(n)-1] }}>{n}</div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:flex items-center px-1 text-gray-200">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sample Report CTA */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">Want to see what you&rsquo;re getting?</p>
              <p className="text-gray-500 text-sm">Download a redacted sample report to see our format, methodology, and RICS sign-off.</p>
            </div>
            <a href="/sample-report.pdf" className="shrink-0 btn-shine text-white px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap">Download Sample Report</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ REVIEWS ═══════════════════════════ */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mb-14 text-center">
          <p className="text-xs font-bold tracking-widest text-[#1A6B4A] uppercase mb-3">Client Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">What Our Clients Say.</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <p className="text-gray-400 text-sm">Trusted by property owners across the UK.</p>
        </div>

        <div className="relative">
          <div className="flex gap-4 w-max animate-scroll-reviews">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="flex-shrink-0 w-72 bg-white border border-gray-200 shadow-sm rounded-xl p-5">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className={`w-3.5 h-3.5 ${s < review.stars ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                  {review.google && (
                    <svg className="w-3.5 h-3.5 ml-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  {review.photo
                    ? <img src={review.photo} alt={review.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                    : <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{review.initials}</div>
                  }
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════ WHAT IS AN RCA ═══════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>info</span>The Framework</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              What is a <span className="text-shine-slow">Reinstatement Cost Assessment?</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
              A detailed, RICS-regulated calculation of the exact cost to rebuild your property from scratch, accounting for regional labour, material inflation, and professional fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-100" style={{minHeight:'360px'}}>
              <Image
                src="/rebuild-cost-assessment-london.jpeg"
                alt="RICS-regulated reinstatement cost assessment of a London commercial property"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-medium text-xs">RICS-regulated surveyors</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {[
                { step: '1', stepBg: 'linear-gradient(135deg,#1A6B4A,#145c3e)', stepShadow: 'rgba(26,107,74,0.35)',   title: 'Fully comprehensive.', desc: <>Our RCAs calculate <strong className="font-semibold text-gray-900">every cost</strong> — demolition, materials, labour, professional fees, and VAT. Nothing estimated. Nothing missed.</> },
                { step: '2', stepBg: 'linear-gradient(135deg,#3b82f6,#2563eb)', stepShadow: 'rgba(59,130,246,0.35)',  title: 'RICS-certified accuracy.', desc: <>Every report is issued under <strong className="font-semibold text-gray-900">RICS regulations</strong> and benchmarked against live BCIS construction data — giving you a figure your insurer cannot dispute.</> },
                { step: '3', stepBg: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', stepShadow: 'rgba(139,92,246,0.35)', title: 'Accepted by all UK insurers.', desc: 'Our broker-ready reports are submitted directly to insurers and accepted without challenge. No back-and-forth, no delays — just a compliant, insurer-approved valuation.' },
                { step: '4', stepBg: 'linear-gradient(135deg,#f59e0b,#d97706)', stepShadow: 'rgba(245,158,11,0.35)',  title: 'Backed by professional indemnity.', desc: 'Every assessment carries full PI insurance, meaning your reinstatement figure has real legal weight.' },
              ].map(({ step, stepBg, stepShadow, title, desc }, i) => (
                <div key={step} className="card-pulse-seq bg-white shadow-sm rounded-xl p-5 flex gap-4 items-start hover:shadow-md transition-all" style={{ '--card-delay': `${i * 4}s` }}>
                  <div className="shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style={{ background: stepBg, boxShadow: `0 2px 8px ${stepShadow}` }}>{step}</div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHY US ═══════════════════════════ */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-14">
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">50+ years of collective experience.</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">With over <strong className="font-semibold text-gray-900">50 years</strong> of collective experience, we have refined a methodology that balances technical precision with high-end client care.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: 'history',               bg: 'linear-gradient(135deg,#64748b,#475569)', shadow: 'rgba(100,116,139,0.35)', title: '50+ Years Experience', desc: 'Decades of navigating evolving building codes, material costs, and insurance market shifts.' },
                { icon: 'precision_manufacturing', bg: 'linear-gradient(135deg,#f97316,#ea580c)', shadow: 'rgba(249,115,22,0.35)',   title: 'Technical Precision', desc: 'Utilising proprietary BCIS data and advanced surveying technology to eliminate guesswork.' },
                { icon: 'policy',                  bg: 'linear-gradient(135deg,#f59e0b,#d97706)', shadow: 'rgba(245,158,11,0.35)',   title: 'Liability Protection', desc: 'Our reports are legally robust, providing a definitive shield against professional indemnity disputes.' },
              ].map(({ icon, title, desc, bg, shadow }) => (
                <div key={icon} className="bg-white border border-gray-200 shadow-sm rounded-xl p-7 flex flex-col items-center text-center gap-4 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: bg, boxShadow: `0 2px 10px ${shadow}` }}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ THE PROBLEM ═══════════════════════════ */}
      <section className="py-24 px-6 relative overflow-hidden" style={{background:'linear-gradient(135deg,#7f1d1d 0%,#991b1b 40%,#7f1d1d 100%)'}}>
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30" style={{background:'radial-gradient(circle,#ef4444,transparent)',filter:'blur(60px)'}} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-20" style={{background:'radial-gradient(circle,#dc2626,transparent)',filter:'blur(60px)'}} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Eyebrow + heading */}
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-300">
              <span className="material-symbols-outlined" style={{fontSize:'1rem',fontVariationSettings:"'FILL' 1"}}>warning</span>The Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">The hidden cost of getting it wrong.</h2>
            <p className="text-red-200 text-sm leading-relaxed max-w-lg mx-auto">
              Over <span className="font-semibold text-white">80% of UK properties</span> carry an inaccurate reinstatement figure. Most owners won&rsquo;t find out until they make a claim.
            </p>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { val: '£425bn', label: 'Estimated UK Gap' },
              { val: '80%+',   label: 'Properties at Risk' },
              { val: '30%+',   label: 'Build Cost Rise Since 2020' },
            ].map(({ val, label }) => (
              <div key={label} className="rounded-2xl px-8 py-5 text-center" style={{background:'rgba(0,0,0,0.25)',border:'1px solid rgba(255,255,255,0.15)'}}>
                <span className="text-3xl font-bold text-white block">{val}</span>
                <p className="text-red-300 text-xs font-semibold uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Reason cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: 'report',
                title: 'The Condition of Average.',
                desc: <>If you are <span className="font-semibold text-white">20% underinsured</span>, your insurer can reduce your payout by 20% — even on a partial claim. Standard across all UK policies.</>,
              },
              {
                icon: 'trending_up',
                title: 'Construction costs are rising fast.',
                desc: <>BCIS data shows UK build costs have risen <span className="font-semibold text-white">over 30% since 2020</span>. A valuation from three years ago is almost certainly out of date.</>,
              },
              {
                icon: 'verified',
                title: 'One accurate RCA fixes this.',
                desc: <><span className="font-semibold text-white">RICS-certified</span> gives you a compliant, insurer-accepted figure. <Link href="/services" className="text-red-300 underline underline-offset-2 hover:text-white transition-colors">See our services →</Link></>,
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 flex flex-col gap-4" style={{background:'rgba(0,0,0,0.22)',border:'1px solid rgba(255,255,255,0.12)'}}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.18)'}}>
                  <span className="material-symbols-outlined text-white text-base" style={{fontVariationSettings:"'FILL' 1"}}>{icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-2">{title}</h4>
                  <p className="text-red-200 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHO WE SERVE ═══════════════════════════ */}
      <section className="py-24 px-6 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>groups</span>Who We Serve</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Reinstatement Cost Assessments<br />for every property type.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">From London homes to national commercial portfolios — RICS-regulated reinstatement cost assessments delivered across the UK.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWBDJ70LsQQ5h85h82yf83EDziKtCRsnRZfgrGO4oWFPS8dsId-HyTmiMm-MyrubiWJ38hcFJlBmzI573vmnv2_12J4LWJjLXNO7EC8ijA7TxmUKZtoKUA1282iLrXeRgg9k9lf6WWVNoWMobWwr3rYI9H814zFk4JbuvaB3_h3fLhQp-bXppw_Sge5PfTUerK2ODyxkjMbMgMGnMz6jK9wohy8TpfQqmt4Mb30zRGBT3QY5bNQUfnfRyOjqckg-nOooWHc1knCGE',
                alt: 'Homeowner reinstatement cost assessment London',
                title: 'Homeowners',
                label: 'Residential RCA',
                desc: 'Accurate reinstatement cost assessments for London and UK homeowners — covering standard homes, period properties, and listed buildings.',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XW_YI4gh7Lb5mNE7p1aI1bLNEcVW1CDe7bUC8Ag7LVlNaojO7Ayi8RMIuxBGzn7kZKcL1QBbq0g3lgSc4qinZxlAqp2qTOfZtZG4fOIrOFwAOAc7dW6_fEdvb6VSbXA84CCayUI5UKBOiGxH6-Znlcw8eG0YC9mkBvKnJNle7Gc6k_rnPoMGlmVQFJ6jFc9pWy6LfWRjpkPkhQ483fQT0XOjHtrToiOb5voY91FLtpydZ5dFr_WwY_40NT5rtFSTOgb2eUQ3C0c',
                alt: 'Commercial landlord reinstatement cost assessment',
                title: 'Commercial Landlords',
                label: 'Commercial RCA',
                desc: 'RICS-certified reinstatement cost assessments for offices, retail units, and mixed-use properties across London and the UK.',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDguBhebTeI2g-SjCVA57yO5x-hj0YvIwNx5xcqJKYJNh_oR0D6i0UB_nXjfoDcCi0AV5IIvvn8tLaDzCvXuj8Uh83HQPPqaMh6R0diVpfa6P0olh5liAj--KW_r8izD8HduGaAmkIm3rt-8awac4cnqY12aG_kSx0Ulw9M8sMck6yX19VOgMbg603v3P5Or7xVMEBCjM_J7ZMyz4Rxdutpvm1JAClzGilY_ftZPm770hVgeit-ukM7jPdEUMUaV-RhSARPxDxh7ZU',
                alt: 'Asset manager portfolio reinstatement cost assessment',
                title: 'Asset Managers',
                label: 'Portfolio RCA',
                desc: 'Consolidated reinstatement cost assessments for multi-site portfolios. Broker-ready reports with individual asset schedules and annual BCIS indexation.',
              },
            ].map(({ src, alt, title, label, desc }, i) => (
              <div key={title} className="card-pulse-seq group relative overflow-hidden rounded-xl h-[26rem]" style={{ '--card-delay': `${i * 3.5}s` }}>
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={src} alt={alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/50">{label}</span>
                  <h3 className="text-white text-xl font-bold">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-white/40 hover:text-white transition-colors pt-1">View services <span className="material-symbols-outlined" style={{fontSize:'0.85rem'}}>arrow_forward</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Get Your RICS-Regulated<br /><span className="text-shine">Reinstatement Cost Assessment</span><br />Today.
          </>
        }
      />
      <FaqSection
        description="Everything you need to know about Reinstatement Cost Assessments, RICS compliance, and how we protect your assets."
        items={homeFaqItems}
      />
    </main>
    </>
  )
}
