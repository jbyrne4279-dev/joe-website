import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import StepIcon from '../components/StepIcon'

export const metadata = {
  title: 'Desktop Reinstatement Cost Assessment UK | RICS Rebuild Cost',
  description:
    'RICS desktop reinstatement cost assessment across the whole UK. No site visit, BCIS-indexed and broker-ready, delivered in 48 hours. Accurate rebuild cost for houses, flats and commercial units.',
  alternates: { canonical: '/desktop-reinstatement-cost-assessment-uk' },
  openGraph: {
    title: 'Desktop Reinstatement Cost Assessment UK | RICS Rebuild Cost',
    description:
      'RICS-regulated desktop reinstatement cost assessment across the whole UK. No site visit required, BCIS-indexed, broker-ready, delivered in 48 hours.',
    url: '/desktop-reinstatement-cost-assessment-uk',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'
const PAGE_URL = `${SITE_URL}/desktop-reinstatement-cost-assessment-uk`

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Desktop Reinstatement Cost Assessment UK', item: PAGE_URL },
  ],
}

const faqItems = [
  {
    question: 'What is a desktop reinstatement cost assessment?',
    answer: 'A desktop reinstatement cost assessment is a RICS-regulated calculation of what it would cost to rebuild your property, produced remotely without a site visit. Our surveyors use property records, floor area data and live BCIS construction cost indices to establish an accurate rebuild figure for your buildings insurance sum insured.',
  },
  {
    question: 'Is a desktop assessment accurate enough for my property?',
    answer: 'For standard-construction houses, flats, buy-to-let units, HMOs, retail units and warehouses anywhere in the UK, a desktop assessment is accurate, cost-effective and accepted by insurers. Listed buildings, non-standard construction and complex or high-value properties are better suited to an on-site survey where full detail can be captured.',
  },
  {
    question: 'How quickly can you deliver a desktop assessment?',
    answer: 'Most desktop reinstatement cost assessments are delivered within 48 hours of instruction. Expedited turnaround is available on request if you are working to a renewal deadline.',
  },
  {
    question: 'Will my insurer accept a desktop RICS assessment?',
    answer: 'Yes. Every desktop assessment is RICS-regulated and BCIS-indexed, and prepared to be broker-ready and accepted by all UK insurers as evidence of an accurate sum insured.',
  },
  {
    question: 'Where in the UK do you cover?',
    answer: 'The whole of the UK. Because a desktop assessment needs no physical site visit, we assess properties in England, Scotland, Wales and Northern Ireland with the same speed and accuracy — from London and the South East to the Midlands, the North and beyond.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Desktop Reinstatement Cost Assessment',
  name: 'Desktop Reinstatement Cost Assessment UK',
  description: 'RICS-regulated desktop reinstatement cost assessment for properties across the whole UK, produced remotely using property records and live BCIS data. Broker-ready and delivered in 48 hours.',
  url: PAGE_URL,
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
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
  { icon: 'instruct', title: 'You instruct us', desc: 'Send the property address and a few basic details. No appointment or access to the building is needed.' },
  { icon: 'gather-data', title: 'We gather the data', desc: 'We pull property records, floor areas and construction details, then apply live BCIS cost indices for the property’s location.' },
  { icon: 'calculate', title: 'We calculate the rebuild', desc: 'A RICS surveyor produces a full rebuild figure covering demolition, professional fees and regulations.' },
  { icon: 'report', title: 'You receive the report', desc: 'A broker-ready, RICS-regulated report lands in your inbox within 48 hours, ready for your insurer.' },
]

const whoNeedsIt = [
  { icon: 'home', title: 'Homeowners & landlords', desc: 'Standard houses and flats where a fast, accurate rebuild figure protects against underinsurance.' },
  { icon: 'apartment', title: 'Buy-to-let & HMOs', desc: 'Portfolio landlords who need compliant sums insured across multiple standard units nationwide.' },
  { icon: 'storefront', title: 'Retail & warehouse units', desc: 'Straightforward commercial premises of standard construction with no listed status.' },
  { icon: 'gavel', title: 'Brokers & managing agents', desc: 'Professionals needing a quick, defensible figure to place or renew cover with confidence.' },
]

const included = [
  { label: 'The full rebuild of the property', detail: 'Rebuilding the whole structure from the ground up — foundations, walls, roof and floors — to today’s standards, not just patching up damage.' },
  { label: 'Demolition and debris removal', detail: 'Safely clearing and disposing of what’s left after a total loss, which has to happen before any rebuilding can begin.' },
  { label: 'Professional and design fees', detail: 'The architects, engineers and surveyors needed to design and sign off the rebuild — often 10–15% of the total cost.' },
  { label: 'Building-regulation compliance', detail: 'Meeting current building regulations, which are usually stricter than when the property was first built.' },
  { label: 'Outbuildings and boundaries', detail: 'Garages, sheds, walls, fences and gates that also have to be rebuilt or replaced.' },
  { label: 'Inflation over the rebuild period', detail: 'An allowance for building costs rising while the claim is settled and the work is carried out.' },
]

const coverageAreas = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol',
  'Sheffield', 'Newcastle', 'Nottingham', 'Leicester', 'Southampton',
  'Brighton', 'Cardiff', 'Edinburgh', 'Glasgow', 'Belfast',
]

export default function DesktopAssessmentUKPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/desktop-reinstatement-cost-assessment.jpg"
          alt="Surveyor producing a desktop reinstatement cost assessment from property records and a 3D building model"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">Desktop Assessment</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span style={{ color: '#1e40af' }}>Desktop</span> <span className="sm:whitespace-nowrap">reinstatement cost</span> assessment.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              An accurate, RICS-regulated rebuild cost for houses, flats and standard commercial units anywhere in the UK &mdash; produced entirely remotely, BCIS-indexed and delivered within 48 hours. No site visit required.
            </p>
            <div className="flex justify-center">
              <Link href="/contact?service=desktop#contact-form" className="text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}>
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">What it is</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">A full rebuild cost, without the site visit.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              A desktop reinstatement cost assessment establishes the true cost of rebuilding your property from
              scratch &mdash; not its market value. Rather than sending a surveyor to site, we draw on detailed
              property records, floor area data and live BCIS construction cost indices to reach an accurate,
              defensible figure for the property&rsquo;s location.
            </p>
            <p>
              For the majority of standard-construction homes and commercial units, this is the fastest and most
              cost-effective route to a RICS-regulated sum insured. Every figure is prepared to the same
              professional standard as a full survey and is accepted by UK insurers without challenge.
            </p>
            <p>
              Behind every desktop figure is a team of RICS-regulated chartered surveyors with more than 50 years
              of combined experience, focused solely on reinstatement cost assessments. That single specialism
              &mdash; rather than valuation as a sideline to general surveying &mdash; is why our remote figures
              stand up to an insurer&rsquo;s scrutiny just as well as a site visit would.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#eaf0fb' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Four steps, forty-eight hours.</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {steps.map(({ icon, title, desc }, i) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.12)' }}>
                  <StepIcon name={icon} size={44} style={{ color: '#1e40af' }} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#1e40af]/60 mb-1">Step {i + 1}</p>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">Who needs it</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">Ideal for standard UK property.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whoNeedsIt.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start rounded-2xl p-6 border border-[#c9d8f5]" style={{ background: '#dbe6fb' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.3rem', color: '#1e40af' }}>{icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#eaf0fb' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img src="/desktop-why-it-matters.jpg" alt="House under construction being rebuilt" className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl object-cover border border-black/5 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">Why it matters</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Underinsurance is a nationwide problem.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              Rebuild costs have risen sharply right across the UK &mdash; labour, materials and regulatory
              requirements all push construction prices up, and they vary widely by region. A sum insured based on
              a purchase price, a mortgage valuation, or an old online calculator almost always understates the
              real cost of rebuilding.
            </p>
            <p>
              Most policies apply a <strong className="font-semibold text-primary">condition of average</strong>:
              if you are insured for less than the true rebuild cost, the insurer can cut your claim by the same
              proportion &mdash; even on a small loss. A desktop RICS assessment closes that gap quickly and gives
              you a figure you can stand behind at renewal.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">What&rsquo;s included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">More than walls and a roof.</h2>
          </div>
          <p className="text-secondary text-sm mb-2 sm:mb-0">Hover or tap each item for a plain-English explanation.</p>
          <ul className="grid sm:grid-cols-2 gap-x-12">
            {included.map(({ label, detail }) => (
              <li key={label} tabIndex={0} className="group py-4 border-t border-zinc-200 flex gap-3 items-start cursor-default outline-none">
                <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: '1.15rem', color: '#1e40af' }}>check</span>
                <span>
                  <span className="text-primary font-medium">{label}</span>
                  <span className="block overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-1.5 group-focus:max-h-40 group-focus:opacity-100 group-focus:mt-1.5 transition-all duration-300 text-secondary text-sm leading-relaxed">{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* London coverage */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#eaf0fb' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img src="/uk-coverage-map.jpg" alt="Map of the United Kingdom" className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl object-contain bg-white p-2 border border-black/5 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">UK-wide coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">Anywhere in the UK, remotely assessed.</h2>
          <p className="text-secondary leading-relaxed mb-8 max-w-2xl text-[1.05rem]">
            Because a desktop assessment needs no physical visit, we cover the whole of the UK with the same
            speed and accuracy &mdash; from London and the South East to the Midlands, the North, Scotland,
            Wales and Northern Ireland.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {coverageAreas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-secondary">
                <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: '#1e40af' }}>location_on</span>
                {area}
              </span>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af] mb-4">Not quite right?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Explore our other assessments.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/on-site-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem' }}>location_on</span>
              <h3 className="text-lg font-semibold text-white mb-2">On-Site RICS Survey</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">For listed, complex or high-value London buildings where full detail matters.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/three-year-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #a16207 0%, #d4a017 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h3 className="text-lg font-semibold text-white mb-2">3-Year Protection Plan</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A full assessment plus three years of BCIS-indexed annual updates.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection
        accent="#1e40af"
        tintRgb="37,99,235"
        buttonStyle={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}
      />

      <FaqSection
        bg="#10265c"
        description="Common questions about desktop reinstatement cost assessments for UK property."
        items={faqItems}
      />
    </main>
    </>
  )
}
