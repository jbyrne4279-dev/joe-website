import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Residential Reinstatement Cost Assessment | RICS Rebuild Cost UK',
  description:
    'RICS reinstatement cost assessment for houses and flats. Accurate rebuild cost - BCIS-indexed, broker-ready, delivered in 48 hours. Avoid underinsurance on your home.',
  alternates: { canonical: '/residential-reinstatement-cost-assessments' },
  openGraph: {
    title: 'Residential Reinstatement Cost Assessment | RICS Rebuild Cost UK',
    description:
      'RICS reinstatement cost assessment for houses and flats. Accurate rebuild cost - BCIS-indexed, broker-ready, delivered in 48 hours. Avoid underinsurance on your home.',
    url: '/residential-reinstatement-cost-assessments',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Residential Reinstatement Cost Assessments', item: `${SITE_URL}/residential-reinstatement-cost-assessments` },
  ],
}

const faqItems = [
  {
    question: 'What is a residential reinstatement cost assessment?',
    answer: 'A residential reinstatement cost assessment is a professional calculation of what it would cost to rebuild your home from the ground up if it were destroyed. It covers demolition and debris removal, the rebuild itself, professional fees, and compliance with current building regulations. It is the figure your buildings insurance sum insured should be based on, and it is different from your home’s market value.',
  },
  {
    question: 'Why is the rebuild cost different from what my house is worth?',
    answer: 'The market value of a home reflects the land and location as well as the building, and in many areas the land is a large part of the price. Rebuild cost reflects only the physical work of reconstructing the building. The two can be very different, which is why your insurance should be based on a proper rebuild figure rather than the purchase price or a mortgage valuation.',
  },
  {
    question: 'What happens if my home is underinsured?',
    answer: 'Most home insurance policies contain a condition of average. If your sum insured is lower than the true rebuild cost, the insurer can reduce any claim payout in proportion to the shortfall, even for a smaller claim such as a kitchen fire. An accurate reinstatement figure protects you from having to fund the gap yourself.',
  },
  {
    question: 'How often should the figure be reviewed?',
    answer: 'RICS guidance recommends a full reinstatement cost assessment at least every three years, with index-linking applied in the years in between. Building costs have risen sharply, so relying on index-linking alone for longer can leave you underinsured without realising it.',
  },
  {
    question: 'Do you assess flats, period homes, and listed buildings?',
    answer: 'Yes. We assess houses, flats, period properties, and listed or non-standard construction across the UK. Standard homes are usually suited to a desktop assessment, while period, listed, or complex homes benefit from an on-site survey for full accuracy.',
  },
  {
    question: 'Will my insurer accept the report?',
    answer: 'Yes. Every assessment is RICS-regulated and BCIS-indexed, and is prepared to be broker-ready and accepted by UK insurers as evidence of an accurate sum insured.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const challenges = [
  {
    img: '/rca-value-vs-rebuild.webp',
    title: 'Value, not rebuild cost',
    desc: 'A purchase price or mortgage valuation includes the land and location, yet rebuilding covers only the work of putting the property back up. Insuring on market value instead of the true rebuild figure is a common cause of underinsurance on UK homes.',
  },
  {
    img: '/rca-index-linking-drift.webp',
    title: 'Index-linking drifts',
    desc: 'Annual index-linking applies a broad national inflation rate that can’t reflect local labour or material prices. Left for a few years, a home’s sum insured quietly falls below what a rebuild would really cost.',
  },
  {
    img: '/rca-calculators-miss-detail.webp',
    title: 'Calculators miss detail',
    desc: 'Free online calculators give rough averages and struggle with period features, extensions, and non-standard construction. A professional RICS assessment reflects the real detail of your home and stands up with insurers.',
  },
]

const help = [
  { icon: 'home_work', title: 'Every type of home', desc: 'Houses, flats, period, and non-standard construction.' },
  { icon: 'architecture', title: 'A complete rebuild figure', desc: 'Fees, debris removal, and regulations, not just the walls.' },
  { icon: 'bolt', title: 'Broker-ready in 48 hours', desc: 'RICS-regulated and BCIS-indexed, accepted by UK insurers.' },
]

const included = [
  'The full rebuild of the home',
  'Demolition and debris removal',
  'Professional and design fees',
  'Building-regulation compliance',
  'Outbuildings and boundaries',
  'Inflation over the rebuild period',
]

const reasons = [
  'Most standard houses and flats can be assessed without a site visit.',
  'Fast and cost-effective, using property records and live BCIS data.',
  'A fully RICS-regulated, broker-ready figure your insurer will accept.',
]

export default function ResidentialReinstatementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <main>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/reinstatement-cost-assessment-uk.webp"
          alt="Residential property in the UK requiring a reinstatement cost assessment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="text-[#1A6B4A]">Residential</span> reinstatement cost assessments.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              Accurate rebuild costs for houses and flats across the UK. RICS-regulated assessments your insurer will accept, BCIS-indexed and delivered within 48 hours.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The basics — prose + image */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4 text-center lg:text-left">
              The basics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8 text-center lg:text-left">
              What is a residential reinstatement cost assessment?
            </h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>
                It&rsquo;s the cost of rebuilding your home from scratch &mdash; not what it would sell for.
                Market value includes the land and location; the rebuild cost is only the work of putting the
                building back, so the two are often very different.
              </p>
              <p>
                It matters because most home policies apply a{' '}
                <strong className="font-semibold text-primary">condition of average</strong>: insure for less
                than the true rebuild cost and the insurer can cut your claim by the same proportion. RICS
                recommends a fresh assessment every three years to keep the figure accurate.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[420px]">
            <Image
              src="/reinstatement-cost-assessments-uk.webp"
              alt="UK home assessed for its rebuild cost"
              fill
              sizes="(max-width: 1024px) 0px, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Common challenges */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">
              Common challenges
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Where home cover quietly slips.
            </h2>
          </div>
          <div className="space-y-5">
            {challenges.map(({ img, title, desc }) => (
              <div key={title} className="flex gap-5 items-center bg-white/[0.04] rounded-2xl p-5 border border-white/10">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0">
                  <Image src={img} alt="" fill sizes="96px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5 leading-snug">{title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="scroll-reveal py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">
              How we help
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              The right rebuild figure for your home.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {help.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-8 border border-zinc-200/80">
                <div className="w-11 h-11 rounded-xl bg-[#1A6B4A]/10 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.3rem' }}>{icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 leading-snug">{title}</h3>
                <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">
              What&rsquo;s included
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              More than walls and a roof.
            </h2>
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

      {/* Recommended service */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">
              Recommended for you
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              The right assessment for your home.
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-2xl mx-auto">
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src="/reinstatement-cost-assessment-uk.webp"
                alt="Residential home assessed for its rebuild cost"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B4A] mb-2">
                Best fit &middot; Desktop assessment
              </p>
              <h3 className="text-2xl font-bold text-primary leading-tight mb-4">
                Desktop reinstatement cost assessment
              </h3>
              <p className="text-secondary leading-relaxed mb-8">
                For most standard homes, a desktop assessment is the ideal choice. Using property records
                and live BCIS cost data, we produce an accurate, RICS-regulated rebuild figure quickly and
                cost-effectively, with no site visit needed. Period, listed, or non-standard homes are
                better suited to an on-site survey.
              </p>
              <ul className="border-y border-zinc-200 divide-y divide-zinc-200 mb-8">
                {reasons.map((reason) => (
                  <li key={reason} className="py-4 flex gap-4 items-start">
                    <span className="material-symbols-outlined text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.15rem' }}>check</span>
                    <span className="text-secondary leading-relaxed text-[0.98rem]">{reason}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform text-center sovereign-shadow block sm:inline-block">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <FaqSection
        description="Common questions about residential reinstatement cost assessments, rebuild cost, and underinsurance."
        items={faqItems}
      />
    </main>
    </>
  )
}
