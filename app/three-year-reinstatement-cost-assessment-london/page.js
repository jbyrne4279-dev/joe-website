import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import StepIcon from '../components/StepIcon'

export const metadata = {
  title: '3‑Year Reinstatement Cost Assessment London | RICS Protection Plan',
  description:
    '3-Year RICS reinstatement cost assessment for London property: a full rebuild cost assessment plus three years of BCIS-indexed annual updates. Continuous RICS compliance with no repeat instruction.',
  alternates: { canonical: '/three-year-reinstatement-cost-assessment-london' },
  openGraph: {
    title: '3‑Year Reinstatement Cost Assessment London | RICS Protection Plan',
    description:
      'A full RICS reinstatement cost assessment for London property plus three years of BCIS-indexed annual rebuild cost updates. Ongoing compliance, broker-ready.',
    url: '/three-year-reinstatement-cost-assessment-london',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'
const PAGE_URL = `${SITE_URL}/three-year-reinstatement-cost-assessment-london`

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: '3-Year Reinstatement Cost Assessment London', item: PAGE_URL },
  ],
}

const faqItems = [
  {
    question: 'What is the 3‑Year Reinstatement Cost Assessment plan?',
    answer: 'The 3‑Year plan combines a full RICS reinstatement cost assessment at inception with three years of BCIS‑indexed annual rebuild cost updates. You get an accurate starting figure and automatic yearly updates that keep your sum insured aligned with construction cost inflation, without commissioning a new assessment each year.',
  },
  {
    question: 'Why choose a 3‑Year plan over a single assessment?',
    answer: 'RICS recommends a full assessment at least every three years, with index‑linking in between. The 3‑Year plan builds that entire cycle into one instruction: you stay continuously compliant, your figure is professionally maintained rather than left to a generic insurer index, and you avoid the risk of drifting into underinsurance between assessments.',
  },
  {
    question: 'Who is the 3‑Year plan best suited to?',
    answer: 'It is ideal for London landlords, portfolio managers, managing agents, freeholders and property owners who need ongoing RICS reinstatement compliance across one or many buildings without repeat instructions each year.',
  },
  {
    question: 'What do the annual updates include?',
    answer: 'Each annual update applies the latest BCIS construction cost indices to your rebuild figure, keeping the reinstatement cost assessment accurate as material and labour costs change. You receive a fresh update certificate each year that is broker‑ready and accepted by UK insurers.',
  },
  {
    question: 'Is the plan accepted by insurers and brokers?',
    answer: 'Yes. Both the inception report and each annual update are RICS‑regulated, BCIS‑indexed and broker‑ready, accepted by all UK insurers as evidence of an accurate, maintained sum insured.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '3-Year Reinstatement Cost Assessment Plan',
  name: '3-Year Reinstatement Cost Assessment London',
  description: 'A full RICS reinstatement cost assessment for London property plus three years of BCIS-indexed annual rebuild cost updates, providing continuous RICS compliance.',
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

const timeline = [
  { icon: 'inception', label: 'Inception', title: 'Full RICS assessment', desc: 'We establish an accurate, BCIS‑indexed rebuild figure for your London property at the start of the plan.' },
  { icon: 'annual-update', label: 'Year 1', title: 'Annual BCIS update', desc: 'Your figure is refreshed against the latest construction cost indices and reissued as a certificate.' },
  { icon: 'continued-index', label: 'Year 2', title: 'Continued indexation', desc: 'Ongoing monitoring keeps your sum insured aligned with real‑world London cost inflation.' },
  { icon: 'maintained', label: 'Year 3', title: 'Maintained compliance', desc: 'A third indexed update completes the RICS‑recommended cycle, ready for a fresh assessment.' },
]

const whoNeedsIt = [
  { icon: 'real_estate_agent', title: 'Landlords & property owners', desc: 'Owners who want their rebuild figure professionally maintained, not left to a generic insurer index.' },
  { icon: 'domain', title: 'Portfolio & managing agents', desc: 'Professionals managing many London buildings who need continuous compliance without annual re‑instructions.' },
  { icon: 'apartment', title: 'Freeholders & blocks', desc: 'Block freeholders protecting leaseholders from the drift into underinsurance between assessments.' },
  { icon: 'event_repeat', title: 'Anyone on a renewal cycle', desc: 'Those who want to walk into every renewal with a current, defensible, RICS‑regulated figure.' },
]

const included = [
  { label: 'Full RICS assessment at inception', detail: 'A complete, professional rebuild‑cost assessment at the start, setting your accurate baseline figure.' },
  { label: 'Three annual BCIS‑indexed updates', detail: 'Each year we re‑index your figure to current construction costs, so your cover never quietly drifts out of date.' },
  { label: 'Broker‑ready report and certificates', detail: 'Documents formatted so your broker or insurer can accept them straight away, with no back‑and‑forth.' },
  { label: 'Continuous RICS‑recommended compliance', detail: 'Keeps you on the three‑year review cycle RICS recommends, without you having to keep track of it.' },
  { label: 'No repeat instruction each year', detail: 'One instruction covers three years, so there’s no need to commission and pay for a new assessment annually.' },
  { label: 'Accepted by all UK insurers', detail: 'Every report and yearly update is recognised right across the UK insurance market.' },
]

const londonAreas = [
  'City of London', 'Westminster', 'Camden', 'Islington', 'Hackney',
  'Tower Hamlets', 'Southwark', 'Lambeth', 'Wandsworth', 'Kensington & Chelsea',
  'Croydon', 'Ealing', 'Barnet', 'Bromley', 'Newham', 'Brent',
]

export default function ThreeYearAssessmentLondonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main>
      <Breadcrumbs showSchema={false} items={[{ name: 'Services', href: '/services' }, { name: '3-Year Reinstatement Cost Assessment London' }]} accent="#a16207" />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/three-year-reinstatement-cost-assessment.jpg"
          alt="Architectural model, plans and calculator for a 3-year reinstatement cost assessment plan in London"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <div className="flex items-center justify-center mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207]">Ongoing RICS Compliance</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span style={{ color: '#a16207' }}>3‑year</span> <span className="sm:whitespace-nowrap">reinstatement cost</span> assessment.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              A full RICS rebuild cost assessment plus three years of BCIS‑indexed annual updates. Continuous compliance for London property owners &mdash; with no repeat instruction required.
            </p>
            <div className="flex justify-center">
              <Link href="/contact?service=3year#contact-form" className="text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center" style={{ background: 'linear-gradient(135deg, #a16207 0%, #d4a017 100%)' }}>
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207] mb-4">What it is</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">One instruction, three years of cover.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              The 3‑Year Protection Plan wraps the entire RICS‑recommended assessment cycle into a single service.
              We carry out a full reinstatement cost assessment at the outset, then deliver BCIS‑indexed annual
              rebuild cost updates automatically for each of the next three years.
            </p>
            <p>
              Instead of relying on your insurer&rsquo;s generic index &mdash; or forgetting to review the figure
              at all &mdash; your London sum insured is professionally maintained throughout. You walk into every
              renewal with a current, defensible, broker‑ready figure.
            </p>
            <p>
              The plan is looked after by a RICS‑regulated practice with over 50 years of experience between its
              surveyors, working exclusively on reinstatement cost assessments. Because rebuild valuation is the
              only thing we do, each yearly update is handled with the same specialist care as the first
              assessment &mdash; and always by people who know your building.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="scroll-reveal relative py-24 px-6 overflow-hidden">
        <img src="/rc.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(251,243,217,0.82)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207] mb-4">The three‑year cycle</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Accurate at inception, maintained every year.</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {timeline.map(({ icon, label, title, desc }) => (
              <div key={label} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(212,160,23,0.16)' }}>
                  <StepIcon name={icon} size={44} style={{ color: '#a16207' }} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#a16207]/70 mb-1">{label}</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207] mb-4">Who needs it</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">For owners who never want to fall behind.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whoNeedsIt.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start rounded-2xl p-6 border border-[#e6d59a]" style={{ background: '#f5e6bf' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.3rem', color: '#a16207' }}>{icon}</span>
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
      <section className="scroll-reveal py-24 px-6" style={{ background: '#fbf3d9' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img src="/three-year-why-it-matters.jpg" alt="Surveyor maintaining a reinstatement cost figure" className="shrink-0 w-44 h-44 sm:w-96 sm:h-96 rounded-2xl object-cover border border-black/5 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207] mb-4">Why it matters</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Index‑linking alone isn&rsquo;t enough.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              Many London owners assume that because their insurer applies an annual index, their cover keeps pace.
              But a general index cannot see your building, and post‑2020 construction inflation has run well ahead
              of it. Applied to an already inaccurate base figure, index‑linking simply compounds the error year
              after year.
            </p>
            <p>
              The 3‑Year plan fixes this. You start from a professionally assessed figure, and each year that figure
              is re‑indexed against the latest BCIS data &mdash; keeping you continuously compliant and protecting
              you from the slow drift into underinsurance that catches so many blocks and portfolios at claim time.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207] mb-4">What&rsquo;s included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Everything, for three years.</h2>
          </div>
          <p className="text-secondary text-sm mb-2 sm:mb-0">Hover or tap each item for a plain‑English explanation.</p>
          <ul className="grid sm:grid-cols-2 gap-x-12">
            {included.map(({ label, detail }) => (
              <li key={label} tabIndex={0} className="group py-4 border-t border-zinc-200 flex gap-3 items-start cursor-default outline-none">
                <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: '1.15rem', color: '#a16207' }}>check</span>
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
      <section className="scroll-reveal py-24 px-6" style={{ background: '#fbf3d9' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img src="/three-year-coverage-london.jpg" alt="Prime London property with a view of Big Ben" className="shrink-0 w-44 h-44 sm:w-96 sm:h-96 rounded-2xl object-cover border border-black/5 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207] mb-4">London coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">Portfolios protected across London.</h2>
          <p className="text-secondary leading-relaxed mb-8 max-w-2xl text-[1.05rem]">
            From single buildings to large managed portfolios, we keep London sums insured current across every
            borough &mdash; ideal for agents and freeholders juggling multiple renewal dates.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {londonAreas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50 text-sm font-medium text-secondary">
                <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: '#a16207' }}>location_on</span>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a16207] mb-4">Prefer a one‑off?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Explore our other assessments.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/desktop-reinstatement-cost-assessment-uk" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem' }}>monitor</span>
              <h3 className="text-lg font-semibold text-white mb-2">Desktop Assessment</h3>
              <p className="text-white/85 text-[0.95rem] leading-relaxed flex-1">A fast, remote rebuild figure for standard London houses, flats and units.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/on-site-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem' }}>location_on</span>
              <h3 className="text-lg font-semibold text-white mb-2">On‑Site RICS Survey</h3>
              <p className="text-white/85 text-[0.95rem] leading-relaxed flex-1">For listed, complex or high‑value London buildings where full detail matters.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection
        accent="#a16207"
        tintRgb="212,160,23"
        buttonStyle={{ background: 'linear-gradient(135deg, #a16207 0%, #d4a017 100%)' }}
      />

      <FaqSection
        bg="#3b2c08"
        description="Common questions about the 3-year reinstatement cost assessment plan for London property."
        items={faqItems}
      />
    </main>
    </>
  )
}
