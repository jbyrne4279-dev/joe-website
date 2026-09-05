import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Commercial Rebuild Cost Assessment | RICS Reinstatement Cost Assessment',
  description:
    'Accurate commercial rebuild cost assessment for offices, warehouses and retail. RICS reinstatement cost assessment - BCIS-indexed, broker-ready, delivered in 48 hours.',
  alternates: { canonical: '/commercial-reinstatement-costs' },
  openGraph: {
    title: 'Commercial Rebuild Cost Assessment | RICS Reinstatement Cost Assessment',
    description:
      'Accurate commercial rebuild cost assessment for offices, warehouses and retail. RICS reinstatement cost assessment - BCIS-indexed, broker-ready, delivered in 48 hours.',
    url: '/commercial-reinstatement-costs',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Commercial Reinstatement Cost Assessments', item: `${SITE_URL}/commercial-reinstatement-costs` },
  ],
}

const faqItems = [
  {
    question: 'What is a commercial reinstatement cost assessment?',
    answer: 'A commercial reinstatement cost assessment is a professional calculation of the full cost of rebuilding a commercial property from the ground up if it were destroyed. It covers demolition and debris removal, the rebuild itself, mechanical and electrical services, professional fees, and compliance with current building regulations. It is the figure your buildings insurance sum insured should be based on, rather than the property’s market value.',
  },
  {
    question: 'Why is rebuild cost different from market value?',
    answer: 'Market value reflects what a property would sell for, including the land, its location, and its income potential. Rebuild cost reflects only what it would take to physically reconstruct the building. For commercial property the two figures are often a long way apart, so insurance should always be based on rebuild cost — which is exactly what a reinstatement cost assessment establishes.',
  },
  {
    question: 'What happens if my commercial property is underinsured?',
    answer: 'Most commercial policies contain a condition of average. If your sum insured is lower than the true rebuild cost, the insurer can reduce any claim payout in proportion to the shortfall, even for a partial loss. A building insured for 70% of its true rebuild cost, for example, may see a claim settled at around 70% of its value, leaving you to fund the rest.',
  },
  {
    question: 'How often should a commercial reinstatement cost assessment be reviewed?',
    answer: 'RICS guidance recommends a full reinstatement cost assessment at least every three years, with index-linking applied in the years in between. Commercial rebuild costs have moved sharply with material and labour inflation, so relying on index-linking alone for longer can leave a significant underinsurance gap.',
  },
  {
    question: 'What types of commercial property do you assess?',
    answer: 'We assess offices, warehouses and industrial units, retail premises, and mixed-use buildings across the UK. Each assessment accounts for the specialist fit-out, mechanical and electrical installations, and external works relevant to that type of building.',
  },
  {
    question: 'Will my insurer and broker accept the report?',
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
    img: '/rca-index-linking-drift.webp',
    title: 'Costs outrun index-linking',
    desc: 'Material and labour inflation has pushed rebuild costs beyond what index-linking captures.',
  },
  {
    img: '/rca-calculators-miss-detail.webp',
    title: 'Calculators miss the detail',
    desc: 'Generic tools ignore mechanical, electrical, and specialist fit-out costs.',
  },
  {
    img: '/rca-verified-rics-figure.webp',
    title: 'Insurers expect RICS figures',
    desc: 'More insurers now want a verifiable RICS figure before agreeing terms.',
  },
]

const help = [
  { icon: 'engineering', title: 'Specialist commercial surveyors', desc: 'Experienced across offices, industrial, retail, and mixed-use.' },
  { icon: 'architecture', title: 'Every cost captured', desc: 'Fit-out, services, and external works, not just the shell.' },
  { icon: 'bolt', title: 'Broker-ready in 48 hours', desc: 'RICS-regulated and BCIS-indexed, accepted by UK insurers.' },
]

const included = [
  'Full structural rebuild',
  'Mechanical and electrical services',
  'Specialist fit-out',
  'External works and site costs',
  'Debris removal and professional fees',
  'Inflation over the rebuild period',
]

const reasons = [
  'Captures fit-out, services, and specialist construction accurately.',
  'The right fit for high-value, complex, or non-standard premises.',
  'Produces the most defensible figure if a claim is ever questioned.',
]

export default function CommercialReinstatementPage() {
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
          src="/commercial-reinstatement-cost-assessment.webp"
          alt="Commercial property reinstatement cost assessment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="text-[#1A6B4A]">Commercial</span> reinstatement cost assessments.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              Accurate rebuild costs for offices, warehouses, retail, and mixed-use buildings. RICS-regulated assessments your broker will accept, BCIS-indexed and delivered within 48 hours.
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
              What is a commercial reinstatement cost assessment?
            </h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>
                It&rsquo;s the cost of rebuilding your property from scratch &mdash; the structure, the
                services, professional fees, and today&rsquo;s building regulations. That&rsquo;s the figure
                your insurance should be based on, and it&rsquo;s not the same as market value.
              </p>
              <p>
                The gap matters. Most policies apply a{' '}
                <strong className="font-semibold text-primary">condition of average</strong>, so if
                you&rsquo;re insured for less than the true rebuild cost, the insurer can cut your claim by
                the same proportion. RICS recommends a fresh assessment every three years to keep that
                figure honest.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[420px]">
            <Image
              src="/reinstatement-cost-assessments-uk.webp"
              alt="Commercial property in the UK requiring a reinstatement cost assessment"
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
              Where commercial cover slips out of step.
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
              A rebuild figure you can stand behind.
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
              The right assessment for commercial property.
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-2xl mx-auto">
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src="/commercial-reinstatement-cost-assessment.webp"
                alt="Commercial building assessed on site by a RICS surveyor"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B4A] mb-2">
                Best fit &middot; On-site survey
              </p>
              <h3 className="text-2xl font-bold text-primary leading-tight mb-4">
                On-site RICS reinstatement cost assessment
              </h3>
              <p className="text-secondary leading-relaxed mb-8">
                For commercial buildings, an on-site survey is the most reliable choice. A RICS-regulated
                surveyor inspects the property in person and captures the fit-out, services, and specialist
                construction a desktop assessment can miss, so the rebuild figure holds up under insurer or
                legal scrutiny.
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
        description="Common questions about commercial reinstatement cost assessments, rebuild cost, and underinsurance."
        items={faqItems}
      />
    </main>
    </>
  )
}
