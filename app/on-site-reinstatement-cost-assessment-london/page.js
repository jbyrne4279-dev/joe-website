import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import StepIcon from '../components/StepIcon'

export const metadata = {
  title: 'On-Site Reinstatement Cost Assessment London | RICS Surveyor',
  description:
    'On-site RICS reinstatement cost assessment in London by a chartered surveyor. Full physical inspection for listed, non-standard, complex and high-value buildings. BCIS-indexed and broker-ready.',
  alternates: { canonical: '/on-site-reinstatement-cost-assessment-london' },
  openGraph: {
    title: 'On-Site Reinstatement Cost Assessment London | RICS Surveyor',
    description:
      'On-site RICS reinstatement cost assessment in London. A full physical survey for listed, complex and high-value buildings, BCIS-indexed and accepted by all UK insurers.',
    url: '/on-site-reinstatement-cost-assessment-london',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'
const PAGE_URL = `${SITE_URL}/on-site-reinstatement-cost-assessment-london`

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'On-Site Reinstatement Cost Assessment London', item: PAGE_URL },
  ],
}

const faqItems = [
  {
    question: 'What is an on-site reinstatement cost assessment?',
    answer: 'An on-site reinstatement cost assessment is a full physical survey carried out by a RICS-regulated surveyor who attends your property, measures every element in person, and assesses specification and construction. It is the most accurate way to establish a rebuild cost, and is essential for listed, complex or high-value buildings.',
  },
  {
    question: 'When do I need an on-site survey rather than a desktop assessment?',
    answer: 'An on-site survey is recommended for listed buildings, non-standard or period construction, complex commercial and industrial premises, and high-value assets where a desktop assessment cannot capture the full detail. If your London property has specialist materials, curtilage structures, M&E installations or a large floor plate, an on-site survey is the right choice.',
  },
  {
    question: 'How long does an on-site assessment take in London?',
    answer: 'The inspection itself typically takes a few hours depending on the size and complexity of the building. The full written report, including site notes and photographic evidence, is usually delivered shortly after the visit. We arrange appointments across London to suit access and management schedules.',
  },
  {
    question: 'Will the report stand up to insurer or legal scrutiny?',
    answer: 'Yes. An on-site RICS assessment provides a comprehensive, evidenced rebuild figure with full site notes and photographs. It is BCIS-indexed, broker-ready, and prepared to withstand insurer challenge or legal scrutiny.',
  },
  {
    question: 'Do you survey listed and period buildings in London?',
    answer: 'Yes. Our surveyors are experienced in listed building requirements, specialist materials, period detailing, curtilage structures and complex M&E, which are common across central and inner London.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'On-Site Reinstatement Cost Assessment',
  name: 'On-Site Reinstatement Cost Assessment London',
  description: 'On-site RICS reinstatement cost assessment for London properties, carried out by a chartered surveyor with a full physical inspection. Essential for listed, complex and high-value buildings.',
  url: PAGE_URL,
  areaServed: { '@type': 'City', name: 'London' },
  provider: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/rca48.png` },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const steps = [
  { icon: 'arrange-access', title: 'We arrange access', desc: 'We book a convenient appointment and coordinate access with owners, tenants or managing agents.' },
  { icon: 'measure', title: 'We measure on site', desc: 'A RICS surveyor attends, measures every element in person and records the construction and specification.' },
  { icon: 'evidence', title: 'We evidence everything', desc: 'Detailed site notes and photographic evidence capture specialist materials, M&E and curtilage structures.' },
  { icon: 'deliver', title: 'We deliver the report', desc: 'A comprehensive, BCIS-indexed rebuild figure that will withstand insurer or legal scrutiny.' },
]

const whoNeedsIt = [
  { icon: 'account_balance', title: 'Listed & period buildings', desc: 'Heritage detailing and traditional materials that generic indices cannot value accurately.' },
  { icon: 'foundation', title: 'Non-standard construction', desc: 'Timber frame, steel frame, concrete and other builds that need expert on-site judgement.' },
  { icon: 'factory', title: 'Complex commercial & industrial', desc: 'Large floor plates, plant rooms, M&E installations and mixed-use premises across London.' },
  { icon: 'diamond', title: 'High-value assets', desc: 'Prime central London property where an accurate, evidenced figure protects a significant sum.' },
]

const included = [
  'Full physical site inspection',
  'Measured survey of every element',
  'Specification and construction assessment',
  'Detailed site notes and photographs',
  'Specialist materials and M&E',
  'Curtilage structures and boundaries',
]

const londonAreas = [
  'City of London', 'Westminster', 'Kensington & Chelsea', 'Camden', 'Islington',
  'Mayfair', 'Belgravia', 'Chelsea', 'Hampstead', 'Richmond', 'Greenwich',
  'Southwark', 'Hackney', 'Wandsworth', 'Barnet', 'Bromley',
]

export default function OnSiteAssessmentLondonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/on-site-reinstatement-cost-assessment-survey.jpg"
          alt="RICS surveyor carrying out an on-site reinstatement cost assessment survey in London"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">On-Site Survey &middot; London</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              On-site reinstatement cost assessment in London.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              The most accurate rebuild cost available &mdash; a full physical survey by a RICS-regulated surveyor. Essential for London&rsquo;s listed, period, complex and high-value buildings, delivered with full site evidence.
            </p>
            <div className="flex justify-center">
              <Link href="/contact?service=onsite#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Contact a surveyor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">What it is</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">A surveyor on site, measuring every detail.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              An on-site reinstatement cost assessment is the gold standard. A RICS-regulated surveyor attends your
              London property in person, measures every element, and assesses the specification and construction
              first-hand. Nothing is estimated from records alone.
            </p>
            <p>
              This level of detail matters most where a building is out of the ordinary &mdash; a listed
              townhouse, a period conversion, a mixed-use block, or an industrial unit with significant plant. The
              result is a comprehensive, evidenced rebuild figure that stands up to insurer and legal scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="scroll-reveal py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">From site visit to signed report.</h2>
          </div>
          <div className="max-w-3xl space-y-5">
            {steps.map(({ icon, title, desc }, i) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shrink-0 flex items-center justify-center bg-[#1A6B4A]/10 text-[#1A6B4A]">
                  <StepIcon name={icon} size={44} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#1A6B4A]/60 mb-1">Step {i + 1}</p>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">Who needs it</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">Built for London&rsquo;s harder buildings.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whoNeedsIt.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start bg-white/[0.04] rounded-2xl p-6 border border-white/10">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-emerald-300" style={{ fontSize: '1.3rem' }}>{icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5 leading-snug">{title}</h3>
                  <p className="text-white/70 leading-relaxed text-[0.95rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Why it matters</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Detail is where the value hides.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              London holds some of the most complex building stock in the country &mdash; Georgian and Victorian
              terraces, mansion blocks, converted warehouses and prime commercial premises. On these buildings,
              generic calculators and desktop indices routinely miss six-figure sums in specialist materials,
              heritage detailing and services.
            </p>
            <p>
              Underinsurance on a high-value asset is a serious exposure. Under a policy&rsquo;s condition of
              average, a shortfall reduces every claim proportionally. An on-site survey removes the guesswork and
              gives owners, freeholders and managing agents a figure they can defend with total confidence.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="scroll-reveal py-24 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">What&rsquo;s included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">A complete, evidenced survey.</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-12">
            {included.map((item) => (
              <li key={item} className="py-4 border-t border-zinc-200 flex gap-3 items-center">
                <span className="material-symbols-outlined text-[#1A6B4A] shrink-0" style={{ fontSize: '1.15rem' }}>check</span>
                <span className="text-primary font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* London coverage */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">London coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">Surveyors across the capital.</h2>
          <p className="text-secondary leading-relaxed mb-8 max-w-2xl text-[1.05rem]">
            We attend properties throughout Greater London, with particular experience in the listed and
            high-value stock of the central and inner boroughs.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {londonAreas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-secondary">
                <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>location_on</span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="scroll-reveal py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Not quite right?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Explore our other assessments.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/desktop-reinstatement-cost-assessment-uk" className="grow-card rounded-2xl bg-white p-8 border border-zinc-200/80 flex flex-col hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined mb-4" style={{ fontSize: '1.6rem', color: '#1e40af' }}>monitor</span>
              <h3 className="text-lg font-semibold text-primary mb-2">Desktop Assessment</h3>
              <p className="text-secondary text-[0.95rem] leading-relaxed flex-1">A fast, remote rebuild figure for standard London houses, flats and units.</p>
              <span className="inline-flex items-center gap-1 text-[#1e40af] text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/three-year-reinstatement-cost-assessment-london" className="grow-card rounded-2xl bg-white p-8 border border-zinc-200/80 flex flex-col hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-[#8a6d1a] mb-4" style={{ fontSize: '1.6rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h3 className="text-lg font-semibold text-primary mb-2">3-Year Protection Plan</h3>
              <p className="text-secondary text-[0.95rem] leading-relaxed flex-1">A full assessment plus three years of BCIS-indexed annual updates.</p>
              <span className="inline-flex items-center gap-1 text-[#8a6d1a] text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />

      <FaqSection
        description="Common questions about on-site reinstatement cost assessments for London property."
        items={faqItems}
      />
    </main>
    </>
  )
}
