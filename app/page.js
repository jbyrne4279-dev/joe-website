import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

export const metadata = {
  title: {
    absolute: 'RICS Reinstatement Cost Assessment UK | From £210 | 48hrs',
  },
  description:
    'Is your building insured for the right amount? 80% of UK properties are underinsured. Get a RICS Reinstatement Cost Assessment from £210 — broker-ready, delivered in 48 hours.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment London & UK | From £210',
    description:
      '80% of UK buildings carry the wrong reinstatement cost on their policy. RICS Reinstatement Cost Assessment from £210 for homes, commercial, and listed buildings. Delivered in 48 hours across London and the UK.',
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
  '@id': `${SITE_URL}/`,
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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Desktop RCA from £210',
      description: 'Fast, data-driven Reinstatement Cost Assessment for standard UK residential and commercial properties. RICS-regulated, BCIS-indexed, and broker-ready within 5 days.',
      url: `${SITE_URL}/services`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '3-Year Protection from £498',
      description: 'Full Reinstatement Cost Assessment with automated annual BCIS index updates for three years. Designed for UK landlords and portfolio managers who need ongoing RICS compliance without repeat instruction costs.',
      url: `${SITE_URL}/services`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'On-Site Survey from £675',
      description: 'Full physical inspection by a RICS-regulated surveyor for listed buildings, complex architecture, non-standard construction, and high-value UK property. The highest accuracy RCA available.',
      url: `${SITE_URL}/services`,
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLinksJsonLd) }}
      />
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/reinstatement-cost-assessments-uk.png"
          alt="RICS-regulated Reinstatement Cost Assessment for UK property"
          fill
          priority
          className="object-cover object-right-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
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
      <section className="bg-surface pt-6 pb-20 px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#1A6B4A] uppercase tracking-widest flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>schema</span>The Framework</span>
            <h2 className="text-4xl md:text-[3.25rem] font-semibold leading-tight text-primary">
              What is a <span className="text-shine-slow">Reinstatement Cost Assessment?</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              A detailed, RICS-regulated calculation of the exact cost to rebuild your property from scratch, accounting for regional labour, material inflation, and professional fees. Built on facts, not estimates.
            </p>
          </div>

          {/* Image + Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* Image */}
            <div className="flex flex-col">
            <div className="relative flex-1 min-h-[420px] rounded-2xl overflow-hidden sovereign-shadow">
              <Image
                src="/rebuild-cost-assessment-london.jpeg"
                alt="RICS-regulated reinstatement cost assessment of a London commercial property"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-sm">RICS-regulated surveyors</p>
              </div>
            </div>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-[#1A6B4A]/25 to-transparent hidden sm:block" aria-hidden="true" />
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Instruct', desc: 'Provide basic property details through our secure digital portal or request an on-site survey.' },
                  { step: '2', title: 'Assess', desc: <>Our experts use <strong className="font-bold text-primary">RICS-certified</strong> data to analyze structural elements, materials, and external site features.</> },
                  { step: '3', title: 'Report', desc: 'Receive a comprehensive report ready for your broker or insurer, highlighting the exact reinstatement sum insured.' },
                  { step: '4', title: 'Correct', desc: 'Update your policy with total confidence, knowing you are neither over-paying nor dangerously under-protected.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-center gap-0">
                    <div className="btn-shine shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm z-10">{step}</div>
                    <div className="w-5 h-px bg-[#1A6B4A]/30 shrink-0" aria-hidden="true" />
                    <div className="liquid-glass flex-1 p-6 rounded-2xl border border-[#1A6B4A]/20 hover:border-[#1A6B4A]/50 hover:shadow-[0_0_20px_2px_rgba(26,107,74,0.10)] transition-all duration-300">
                      <h4 className="text-base font-bold text-primary mb-1">{title}</h4>
                      <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Which service */}
      <section className="pt-10 pb-20 px-8 bg-[#0f3d28]" id="which">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>quiz</span>Right for you?</span>
            <h2 className="text-4xl font-bold text-white">Which service do I need?</h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">Not sure where to start? Here&rsquo;s a quick guide to help you choose the right assessment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'monitor', name: 'Desktop Assessment', price: 'From £210', fill: false, desc: 'Best for standard residential or commercial properties needing a fast, accurate figure. No unusual features, no listed status, no complex architecture.' },
              { icon: 'verified', fill: true, name: '3-Year Protection', price: 'Best Value', desc: 'Ideal for landlords and asset managers who need ongoing RICS compliance without repeat instruction costs. Includes annual indexation updates.' },
              { icon: 'location_on', fill: false, name: 'On-Site Survey', price: 'From £675', desc: 'Essential for listed buildings, complex architecture, unusual construction, or high-value assets where physical inspection is required for accuracy.' },
            ].map(({ icon, fill, name, price, desc }) => (
              <div key={name} className="flex flex-col items-center text-center gap-4 rounded-2xl p-7 bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center gap-3">
                  <div className="btn-shine shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem', ...(fill ? { fontVariationSettings: "'FILL' 1" } : {}) }}>{icon}</span>
                  </div>
                  <span className="text-xs font-bold text-[#1A6B4A] bg-[#1A6B4A]/10 px-2.5 py-0.5 rounded-full">{price}</span>
                </div>
                <div>
                  <p className="font-bold text-primary text-base mb-2">{name}</p>
                  <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-secondary uppercase mb-3">Client Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-secondary text-sm">Trusted by property buyers across the UK</p>
          </div>

          <div className="relative">
            <div className="reviews-track flex gap-6 w-max animate-scroll-reviews">
              {[
                { stars: 5, text: "Our insurer flagged we were underinsured at renewal. RCA Ltd came back within the week with a full reinstatement assessment — turned out we were short by nearly £200k. Sorted now.", name: "James H.", role: "Landlord, Manchester", photo: "https://randomuser.me/api/portraits/men/32.jpg", google: true },
                { stars: 5, text: "Used them for three properties now. Each report is thorough, clearly laid out, and my broker accepts them without question. Makes renewal so much easier.", name: "Sarah M.", role: "Portfolio Landlord, Leeds", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
                { stars: 4, text: "Needed a reinstatement figure for a listed building — most surveyors wouldn't touch it. These guys knew exactly what they were doing. Very happy with the result.", name: "David C.", role: "Owner, Grade II Listed Property", initials: "DC", color: "bg-emerald-600", google: true },
                { stars: 5, text: "My mortgage lender required an up-to-date RCA before completion. Got it back fast, no fuss, and the report was accepted first time. Would definitely use again.", name: "Emma T.", role: "Homebuyer, Bristol", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
                { stars: 5, text: "We manage a mixed-use block and had been using the same insured figure for years. The assessment flagged a significant gap. Really glad we got it done before any claim arose.", name: "Robert O.", role: "Property Manager, Birmingham", photo: "https://randomuser.me/api/portraits/men/75.jpg", google: true },
                { stars: 5, text: "The desktop assessment was great value. Clear methodology, BCIS-indexed, and the surveyor walked me through the figures on a call afterwards. Exactly what I needed.", name: "Claire S.", role: "Buy-to-Let Investor, London", photo: "https://randomuser.me/api/portraits/women/21.jpg" },
                { stars: 4, text: "Had a dilapidations dispute on a commercial lease and needed a solid reinstatement figure to back our position. The report held up without issue.", name: "Tom B.", role: "Commercial Tenant, Edinburgh", initials: "TB", color: "bg-indigo-600" },
                { stars: 5, text: "Straightforward process from start to finish. Submitted the details online, had the report in a few days, and my insurer was satisfied. No complaints at all.", name: "Priya S.", role: "Residential Landlord, Leicester", photo: "https://randomuser.me/api/portraits/women/55.jpg", google: true },
                // Duplicates for seamless loop
                { stars: 5, text: "Our insurer flagged we were underinsured at renewal. RCA Ltd came back within the week with a full reinstatement assessment — turned out we were short by nearly £200k. Sorted now.", name: "James H.", role: "Landlord, Manchester", photo: "https://randomuser.me/api/portraits/men/32.jpg", google: true },
                { stars: 5, text: "Used them for three properties now. Each report is thorough, clearly laid out, and my broker accepts them without question. Makes renewal so much easier.", name: "Sarah M.", role: "Portfolio Landlord, Leeds", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
                { stars: 4, text: "Needed a reinstatement figure for a listed building — most surveyors wouldn't touch it. These guys knew exactly what they were doing. Very happy with the result.", name: "David C.", role: "Owner, Grade II Listed Property", initials: "DC", color: "bg-emerald-600", google: true },
                { stars: 5, text: "My mortgage lender required an up-to-date RCA before completion. Got it back fast, no fuss, and the report was accepted first time. Would definitely use again.", name: "Emma T.", role: "Homebuyer, Bristol", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
              ].map((review, i) => (
                <div key={i} className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className={`w-4 h-4 ${s < review.stars ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                    {review.google && (
                      <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    {review.photo
                      ? <img src={review.photo} alt={review.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                      : <div className={`w-9 h-9 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{review.initials}</div>
                    }
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pt-10 pb-16 px-8 bg-zinc-50" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>sell</span>Pricing</span>
            <h2 className="text-4xl font-bold text-primary">Choose your <span className="text-shine">Assessment.</span></h2>
            <p className="text-secondary max-w-xl mx-auto leading-relaxed">Transparent, fixed pricing with no hidden fees. Every assessment is carried out by a RICS-regulated surveyor.</p>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-stretch">

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
              <div className="liquid-glass rounded-2xl p-10 flex flex-col relative border-2 border-[#1A6B4A] shadow-[0_0_32px_6px_rgba(26,107,74,0.20)] md:scale-105">
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

      {/* Why RCA Ltd */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight mb-6">Why <span className="text-shine">RCA Ltd?</span></h2>
                <p className="text-secondary text-lg leading-relaxed">With over <strong className="font-bold text-primary">50 years</strong> of collective experience, we have refined a methodology that balances technical precision with high-end client care.</p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'history', title: '50+ Years Experience', desc: 'Decades of navigating evolving building codes, material costs, and insurance market shifts.' },
                  { icon: 'precision_manufacturing', title: 'Technical Precision', desc: 'Utilising proprietary BCIS data and advanced surveying technology to eliminate guesswork.' },
                  { icon: 'policy', title: 'Liability Protection', desc: 'Our reports are legally robust, providing a definitive shield against professional indemnity disputes.' },
                ].map(({ icon, title, desc }) => (
                  <div key={icon} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-[#1A6B4A]/15 bg-surface-container-low hover:border-[#1A6B4A]/40 hover:shadow-[0_4px_24px_rgba(26,107,74,0.10)] transition-all duration-300">
                    <div className="btn-shine shrink-0 w-11 h-11 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>{icon}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-base text-primary">{title}</p>
                      <p className="text-sm text-secondary leading-relaxed">{desc}</p>
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
          <div className="bg-[#7f1d1d] rounded-2xl p-6 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" style={{ background: 'rgba(255,255,255,0.04)' }}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" style={{ background: 'rgba(0,0,0,0.15)' }}></div>

            <div className="md:w-1/2 space-y-6 relative z-10 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center md:justify-start gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>warning</span>The Problem</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                The Risk of Underinsurance.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Recent data suggests that over <span className="font-semibold text-white">80%</span> of UK commercial properties are inadequately insured. In the event of a total loss, the financial gap can be catastrophic for owners and investors alike.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 space-y-1 min-w-0">
                  <span className="text-2xl font-bold text-white block truncate">£425bn</span>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Estimated Gap</p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 space-y-1 min-w-0">
                  <span className="text-2xl font-bold text-white block">80%+</span>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Underinsured</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-5 relative z-10">
              <div className="bg-white/10 rounded-2xl p-7 border border-white/15 hover:bg-white/15 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">report</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Financial Consequences</h4>
                  <p className="text-sm text-white/70 leading-relaxed">The &lsquo;Condition of Average&rsquo; clause means if you are <span className="font-semibold text-white">20% underinsured</span>, your claim payout could be reduced by the same amount, even for partial damage.</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-7 border border-white/15 hover:bg-white/15 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Our Resolution</h4>
                  <p className="text-sm text-white/70 leading-relaxed">We provide RICS-regulated Reinstatement Cost Assessments that align with current construction costs and inflationary trends. This gives you a figure you can rely on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}

      <section className="pt-10 pb-24 px-8 bg-[#0f3d28] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center md:justify-start gap-2 mb-4"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>groups</span>Our Clients</span>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Who We Serve.</h2>
              <p className="text-white/60 leading-relaxed">Dedicated expertise for every tier of the property market, from individual legacy homes to sprawling institutional portfolios.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWBDJ70LsQQ5h85h82yf83EDziKtCRsnRZfgrGO4oWFPS8dsId-HyTmiMm-MyrubiWJ38hcFJlBmzI573vmnv2_12J4LWJjLXNO7EC8ijA7TxmUKZtoKUA1282iLrXeRgg9k9lf6WWVNoWMobWwr3rYI9H814zFk4JbuvaB3_h3fLhQp-bXppw_Sge5PfTUerK2ODyxkjMbMgMGnMz6jK9wohy8TpfQqmt4Mb30zRGBT3QY5bNQUfnfRyOjqckg-nOooWHc1knCGE', alt: 'Residential homeowner reinstatement cost assessment for buildings insurance', title: 'Homeowners', desc: 'Protecting your legacy and ensuring accurate coverage for bespoke architectural features.' },
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XW_YI4gh7Lb5mNE7p1aI1bLNEcVW1CDe7bUC8Ag7LVlNaojO7Ayi8RMIuxBGzn7kZKcL1QBbq0g3lgSc4qinZxlAqp2qTOfZtZG4fOIrOFwAOAc7dW6_fEdvb6VSbXA84CCayUI5UKBOiGxH6-Znlcw8eG0YC9mkBvKnJNle7Gc6k_rnPoMGlmVQFJ6jFc9pWy6LfWRjpkPkhQ483fQT0XOjHtrToiOb5voY91FLtpydZ5dFr_WwY_40NT5rtFSTOgb2eUQ3C0c', alt: 'Commercial landlord rebuild cost assessment for office and retail property UK', title: 'Commercial Landlords', desc: 'Minimizing business interruption risks and maintaining rigorous compliance standards.' },
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDguBhebTeI2g-SjCVA57yO5x-hj0YvIwNx5xcqJKYJNh_oR0D6i0UB_nXjfoDcCi0AV5IIvvn8tLaDzCvXuj8Uh83HQPPqaMh6R0diVpfa6P0olh5liAj--KW_r8izD8HduGaAmkIm3rt-8awac4cnqY12aG_kSx0Ulw9M8sMck6yX19VOgMbg603v3P5Or7xVMEBCjM_J7ZMyz4Rxdutpvm1JAClzGilY_ftZPm770hVgeit-ukM7jPdEUMUaV-RhSARPxDxh7ZU', alt: 'Asset manager portfolio reinstatement valuation for multi-site UK property', title: 'Asset Managers', desc: 'Streamlined reporting and audit-ready data for multi-national property portfolios.' },
            ].map(({ src, alt, title, desc }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl h-96"
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
