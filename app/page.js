import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

export const metadata = {
  title: {
    absolute: 'RICS Reinstatement Cost Assessment London & UK | From £210',
  },
  description:
    'RICS-certified surveyors specialising in Reinstatement Cost Assessments across the UK. Get an accurate rebuild cost valuation from £210, delivered in 48 hours. Trusted by UK insurers and brokers.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment London & UK | From £210',
    description:
      'RICS-certified surveyors specialising in UK Reinstatement Cost Assessments. Accurate rebuild cost valuations from £210, delivered in 48 hours.',
    url: '/',
  },
}

const homeFaqItems = [
  { question: 'How much does a typical RCA cost?', answer: 'Small commercial units start from £450. Large or complex industrial estates and high-net-worth residences are quoted bespoke on a time-charge basis.' },
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
  '@id': `${SITE_URL}/#organization`,
  name: 'Reinstatement Cost Assessment Ltd',
  alternateName: ['RCA Ltd', 'Rebuild Cost Assessment Ltd'],
  url: SITE_URL,
  logo: `${SITE_URL}/rca48.png`,
  image: `${SITE_URL}/rebuild-cost-assessment-london.jpeg`,
  description:
    'RICS-regulated Reinstatement Cost Assessments (Rebuild Cost Assessments) for UK properties. Accurate reinstatement valuations from £210, delivered in 48 hours.',
  telephone: '+44-20-3178-8099',
  email: 'info@rca-ltd.com',
  priceRange: '£210-£675',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5120,
    longitude: -0.1444,
  },
  hasMap: 'https://maps.google.com/?q=17+Hanover+Square,+London+W1S+1BN',
  serviceType: 'Rebuild Cost Assessment',
  knowsAbout: [
    'Rebuild Cost Assessment',
    'Reinstatement Cost Assessment',
    'Building Insurance Valuation',
    'BCIS Construction Costs',
    'RICS Regulated Surveying',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Reinstatement Cost Assessment Ltd',
  publisher: { '@id': `${SITE_URL}/#organization` },
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/rca-for-my-property-london-rebuild.png"
          alt="RICS-regulated Reinstatement Cost Assessment for UK property"
          fill
          priority
          className="object-cover object-right-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="text-shine-red">80%</span> of UK<br />buildings are<br /><span className="text-shine-red">underinsured.</span>
            </h1>
            <p className="text-xl font-semibold text-secondary mb-4 leading-snug">
              Is yours one of them?
            </p>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              Certified Reinstatement Cost Assessments by <span className="whitespace-nowrap">RICS-regulated surveyors.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Get your RICS-Certified RCA
              </Link>
              <Link href="/services" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                Is My Property Underinsured?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is an RCA */}
      <section className="bg-surface pt-12 pb-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-sm font-bold text-[#1A6B4A] uppercase tracking-[0.2em]">The Framework</span>
              <div aria-hidden="true" className="h-6" />
              <h2 className="text-4xl md:text-[3.25rem] font-semibold leading-tight text-primary">
                What is a <span className="text-shine-slow">Reinstatement Cost Assessment?</span>
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                A Reinstatement Cost Assessment (RCA), also known as a Rebuild Cost Assessment, is a detailed professional calculation of the exact cost to rebuild a property from scratch after total destruction.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Unlike generic valuations, our RICS-regulated process accounts for regional labour costs, current material inflation, and professional fees, ensuring your insurance policy is built on facts, not estimates.
              </p>
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/rebuild-cost-assessment-london.jpeg"
                alt="RICS-regulated reinstatement cost assessment of a London commercial property"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl sovereign-shadow"
              />
            </div>
          </div>

          <div className="space-y-6 mt-16 lg:mt-24">
            {[
              { step: '1', title: 'Instruct', desc: 'Provide basic property details through our secure digital portal or request an on-site survey.' },
              { step: '2', title: 'Assess', desc: <>Our experts use <strong className="font-bold text-primary">RICS-certified</strong> data to analyze structural elements, materials, and external site features.</> },
              { step: '3', title: 'Report', desc: 'Receive a comprehensive report ready for your broker or insurer, highlighting the exact reinstatement sum insured.' },
              { step: '4', title: 'Correct', desc: 'Update your policy with total confidence, knowing you are neither over-paying nor dangerously under-protected.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-8 rounded-xl bg-surface-container-low sovereign-shadow border-l-4 border-[#1A6B4A]">
                <span className="btn-shine absolute -left-6 top-6 w-12 h-12 rounded-full text-white flex items-center justify-center font-bold">{step}</span>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-8 bg-[#1A6B4A] rounded-3xl mx-4 md:mx-8 my-8" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/70 block">Pricing</span>
            <h2 className="text-4xl font-bold text-white">Choose your Assessment.</h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">Transparent, fixed pricing with no hidden fees. Every assessment is carried out by a RICS-regulated surveyor.</p>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-stretch">

              {/* Desktop Assessment */}
              <div className="bg-white rounded-2xl p-10 flex flex-col shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="mb-8">
                  <div className="w-14 h-14 bg-[#1A6B4A]/10 flex items-center justify-center rounded-full mb-6">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.4rem' }}>monitor</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary">Desktop Assessment</h3>
                  <p className="text-secondary text-sm">Efficient, data-driven remote valuation.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">£210.00</span>
                  <span className="text-secondary block text-xs font-bold uppercase tracking-wider mt-1">VAT Included</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#1A6B4A] text-lg">bolt</span>
                    <span className="text-secondary">Rapid 5-day turnaround</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#1A6B4A] text-lg">dataset</span>
                    <span className="text-secondary">Remote data modelling</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-zinc-400 text-lg">location_off</span>
                    <span className="text-secondary">Site visit not included</span>
                  </li>
                </ul>
                <Link href="/contact#contact-form" className="w-full py-4 bg-[#1A6B4A] text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Select Desktop</Link>
              </div>

              {/* 3-Year Protection */}
              <div className="bg-white rounded-2xl p-10 flex flex-col relative shadow-2xl scale-105">
                <div className="absolute top-6 right-6">
                  <span className="btn-shine px-4 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest text-white">Best Value</span>
                </div>
                <div className="mb-8">
                  <div className="btn-shine w-14 h-14 flex items-center justify-center rounded-full mb-6">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary">3-Year Protection</h3>
                  <p className="text-secondary text-sm">Desktop RCA included, plus 3 years of annual compliance updates.</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-primary">£498.15</span>
                  <span className="text-secondary block text-xs font-bold uppercase tracking-wider mt-1">VAT Included</span>
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
                <Link href="/contact#contact-form" className="btn-shine w-full py-4 rounded-full font-bold text-white active:scale-[0.97] transition-all text-center block">Protect Now</Link>
              </div>

              {/* On-Site Survey */}
              <div className="bg-white rounded-2xl p-10 flex flex-col shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="mb-8">
                  <div className="w-14 h-14 bg-[#1A6B4A]/10 flex items-center justify-center rounded-full mb-6">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.4rem' }}>location_on</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary">On-Site Survey</h3>
                  <p className="text-secondary text-sm">Precision for complex structures.</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary">£675.00</span>
                  <span className="text-secondary block text-xs font-bold uppercase tracking-wider mt-1">Starts from · VAT Included</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#1A6B4A] text-lg">fact_check</span>
                    <span className="text-secondary">Full physical property inspection</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#1A6B4A] text-lg">architecture</span>
                    <span className="text-secondary">Complex architectural modelling</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#1A6B4A] text-lg">support_agent</span>
                    <span className="text-secondary">Expert surveyor consultancy</span>
                  </li>
                </ul>
                <Link href="/contact#contact-form" className="w-full py-4 border-2 border-[#1A6B4A] text-[#1A6B4A] hover:bg-[#1A6B4A] hover:text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Request On-Site</Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Every Assessment Includes */}
      <section className="py-16 bg-surface-container-low rounded-2xl px-8 md:px-12 mx-4 md:mx-8 mt-8">
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
            <div key={title} className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.08)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.18)] hover:border-[#1A6B4A]/60 transition-all duration-300 flex items-start gap-4">
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

      {/* Why RCA Ltd */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <Image
                className="rounded-xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
                src="/surveyor-reinstatement-cost-assessment-rics.png"
                alt="RICS-regulated surveyor conducting a reinstatement cost assessment inspection"
                width={800}
                height={1000}
              />
              <div className="absolute -bottom-6 -right-6 liquid-glass p-6 rounded-lg z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="btn-shine w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>verified_user</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary font-bold">Regulation</p>
                    <p className="font-bold text-primary">RICS Authenticated</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-6 text-center lg:text-left">Why <span className="text-shine">RCA Ltd?</span></h2>
                <p className="text-secondary text-lg leading-relaxed text-center lg:text-left">With over <strong className="font-bold text-primary">50 years</strong> of collective experience, we have refined a methodology that balances technical precision with high-end client care.</p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'history', title: '50+ Years Experience', desc: 'Decades of navigating evolving building codes, material costs, and insurance market shifts.' },
                  { icon: 'precision_manufacturing', title: 'Technical Precision', desc: 'Utilising proprietary BCIS data and advanced surveying technology to eliminate guesswork.' },
                  { icon: 'policy', title: 'Liability Protection', desc: 'Our reports are legally robust, providing a definitive shield against professional indemnity disputes.' },
                ].map(({ icon, title, desc }) => (
                  <div key={icon} className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.08)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.18)] hover:border-[#1A6B4A]/60 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                    <div className="btn-shine shrink-0 w-11 h-11 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>{icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-primary mb-1">{title}</p>
                      <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="liquid-glass rounded-2xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-16 border border-[#1A6B4A]/30 shadow-[0_0_40px_6px_rgba(26,107,74,0.10)] sovereign-shadow">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" style={{ background: 'rgba(26,107,74,0.08)' }}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" style={{ background: 'rgba(26,107,74,0.06)' }}></div>

            <div className="md:w-1/2 space-y-6 relative z-10 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">The Problem</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
                The Risk of <span className="text-[#991b1b]">Underinsurance.</span>
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                Recent data suggests that over <span className="font-semibold text-primary">80%</span> of UK commercial properties are inadequately insured. In the event of a total loss, the financial gap can be catastrophic for owners and investors alike.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <span className="text-4xl font-bold text-shine-red">£425bn</span>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">Estimated Gap</p>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-bold text-shine-red">80%+</span>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">Underinsured</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-5 relative z-10">
              <div className="liquid-glass rounded-2xl p-7 border border-red-400/20 shadow-[0_0_18px_2px_rgba(239,68,68,0.08)] hover:shadow-[0_0_28px_4px_rgba(239,68,68,0.15)] hover:border-red-400/40 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400 text-xl">report</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">The Averaging Clause Risk</h4>
                  <p className="text-sm text-secondary leading-relaxed">Underinsure by 20% and your insurer pays out 20% less, on every claim, every time.</p>
                </div>
              </div>
              <div className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.22)] hover:border-[#1A6B4A]/60 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">RICS-Regulated Protection</h4>
                  <p className="text-sm text-secondary leading-relaxed">A RICS-regulated RCA gives you the correct rebuild figure, accepted by all UK insurers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4">Who <span className="text-shine">We Serve.</span></h2>
              <p className="text-on-surface-variant leading-relaxed max-w-2xl mx-auto">Dedicated expertise for every tier of the property market, from individual legacy homes to sprawling institutional portfolios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWBDJ70LsQQ5h85h82yf83EDziKtCRsnRZfgrGO4oWFPS8dsId-HyTmiMm-MyrubiWJ38hcFJlBmzI573vmnv2_12J4LWJjLXNO7EC8ijA7TxmUKZtoKUA1282iLrXeRgg9k9lf6WWVNoWMobWwr3rYI9H814zFk4JbuvaB3_h3fLhQp-bXppw_Sge5PfTUerK2ODyxkjMbMgMGnMz6jK9wohy8TpfQqmt4Mb30zRGBT3QY5bNQUfnfRyOjqckg-nOooWHc1knCGE', alt: 'Residential homeowner reinstatement cost assessment for buildings insurance', title: 'Homeowners', desc: 'Protecting your legacy and ensuring accurate coverage for bespoke architectural features.' },
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XW_YI4gh7Lb5mNE7p1aI1bLNEcVW1CDe7bUC8Ag7LVlNaojO7Ayi8RMIuxBGzn7kZKcL1QBbq0g3lgSc4qinZxlAqp2qTOfZtZG4fOIrOFwAOAc7dW6_fEdvb6VSbXA84CCayUI5UKBOiGxH6-Znlcw8eG0YC9mkBvKnJNle7Gc6k_rnPoMGlmVQFJ6jFc9pWy6LfWRjpkPkhQ483fQT0XOjHtrToiOb5voY91FLtpydZ5dFr_WwY_40NT5rtFSTOgb2eUQ3C0c', alt: 'Commercial landlord rebuild cost assessment for office and retail property UK', title: 'Commercial Landlords', desc: 'Minimizing business interruption risks and maintaining rigorous compliance standards.' },
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDguBhebTeI2g-SjCVA57yO5x-hj0YvIwNx5xcqJKYJNh_oR0D6i0UB_nXjfoDcCi0AV5IIvvn8tLaDzCvXuj8Uh83HQPPqaMh6R0diVpfa6P0olh5liAj--KW_r8izD8HduGaAmkIm3rt-8awac4cnqY12aG_kSx0Ulw9M8sMck6yX19VOgMbg603v3P5Or7xVMEBCjM_J7ZMyz4Rxdutpvm1JAClzGilY_ftZPm770hVgeit-ukM7jPdEUMUaV-RhSARPxDxh7ZU', alt: 'Asset manager portfolio reinstatement valuation for multi-site UK property', title: 'Asset Managers', desc: 'Streamlined reporting and audit-ready data for multi-national property portfolios.' },
            ].map(({ src, alt, title, desc }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl h-96 float-card"
                style={{ animationDelay: `${i * 2.3}s` }}
              >
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={src} alt={alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-white text-2xl font-bold mb-2">{title}</h4>
                  <p className="text-white/80 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews Marquee ──────────────────────────────────── */}
      <section className="py-20 bg-[#1A6B4A] overflow-hidden">
        <div className="text-center mb-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say.</h2>
          <div className="flex flex-col items-center gap-1 mt-3">
            <span className="text-shine-yellow text-2xl tracking-wide">{'★★★★★'}</span>
            <span className="text-white/60 text-sm font-medium">Trusted by property owners across the UK</span>
          </div>
        </div>
        <div className="marquee-viewport" style={{ '--marquee-duration': '40s' }}>
          <div className="marquee-track gap-5 px-3">
            {(reviews => [...reviews, ...reviews.map((r, i) => ({ ...r, key: `${i}-clone` }))])([
              { name: 'James H.',  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80', role: 'Homeowner, London',               rating: 5,   text: 'The report came back in 48 hours and flagged we were underinsured by nearly £120,000. Invaluable service.' },
              { name: 'Sarah M.',  photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&auto=format&q=80', role: 'Portfolio Landlord',              rating: 5,   text: 'Used RCA Ltd across four of my properties now. Always thorough, always reliable. A genuine trusted partner.' },
              { name: 'David C.',  initials: 'DC', color: '#1A6B4A',                                                                                    role: 'Commercial Property Owner',      rating: 4,   text: 'Our insurer had us wildly undervalued. The rebuild cost assessment corrected it immediately. Highly recommend.' },
              { name: 'Emma T.',   photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face&auto=format&q=80', role: 'Buy-to-Let Investor, Manchester', rating: 5,   text: 'Clear, jargon-free report. They explained exactly what the reinstatement figure meant for my policy.' },
              { name: 'Robert O.', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&auto=format&q=80', role: 'Property Developer',               rating: 4.5, text: 'Fast turnaround on the desktop assessment. Saved me weeks waiting for an on-site visit. Really impressed.' },
              { name: 'Claire S.', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format&q=80', role: 'Residential Owner, Surrey',      rating: 5,   text: 'Found we were underinsured by 40%. Updating the policy felt like the most important thing I did all year.' },
              { name: 'Tom B.',    initials: 'TB', color: '#0f4a33',                                                                                    role: 'Asset Manager',                  rating: 4,   text: 'RICS-regulated, audit-ready reports across our whole portfolio. Commercially sharp and technically rigorous.' },
              { name: 'Priya S.', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80', role: 'Landlord, Birmingham',           rating: 5,   text: 'Reinstatement cost assessment delivered ahead of schedule. My broker was impressed with the detail.' },
            ]).map(({ name, photo, initials, color, role, rating, text, key }, i) => {
              const full = Math.floor(rating)
              const half = rating % 1 !== 0
              return (
                <div
                  key={key ?? name + i}
                  className="shrink-0 w-80 bg-white rounded-2xl p-6 border border-[#1A6B4A]/10 sovereign-shadow flex flex-col gap-4"
                >
                  <span className="flex items-center leading-none tracking-wide text-lg">
                    {Array.from({ length: full }).map((_, j) => (
                      <span key={`f${j}`} className="text-shine-yellow">★</span>
                    ))}
                    {half && (
                      <span className="relative inline-block" style={{ width: '0.72em' }}>
                        <span style={{ color: '#e5e7eb' }}>★</span>
                        <span className="absolute inset-0 overflow-hidden" style={{ width: '52%' }}>
                          <span className="text-shine-yellow">★</span>
                        </span>
                      </span>
                    )}
                  </span>
                  <p className="text-secondary text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    {photo ? (
                      <img src={photo} alt={name} className="shrink-0 w-9 h-9 rounded-full object-cover" loading="lazy" />
                    ) : (
                      <div
                        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold select-none"
                        style={{ backgroundColor: color }}
                        aria-hidden="true"
                      >
                        {initials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-primary text-sm leading-tight">{name}</p>
                      <p className="text-xs text-secondary">{role}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Get Your RICS-Regulated <span className="text-shine">Reinstatement Cost Assessment</span> Today.
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
