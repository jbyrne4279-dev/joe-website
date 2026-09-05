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
    title: 'Rebuild costs are outrunning index-linking',
    desc: 'Material prices, labour shortages, and supply-chain pressure have pushed commercial rebuild costs well beyond what standard index-linking captures, widening the gap year after year.',
  },
  {
    title: 'Calculators miss fit-out and services',
    desc: 'Commercial buildings carry significant mechanical, electrical, and specialist fit-out costs that generic online calculators ignore, which leaves reinstatement figures materially understated.',
  },
  {
    title: 'Insurers now expect current RICS figures',
    desc: 'More insurers and lenders want a verifiable, RICS-regulated reinstatement figure before agreeing terms. A rough estimate or calculator output is no longer enough.',
  },
]

const included = [
  { title: 'Full structural rebuild', desc: 'The complete cost of clearing the site and reconstructing the building to its current specification and floor area.' },
  { title: 'Mechanical and electrical services', desc: 'Heating, ventilation, lifts, power, lighting, and fire and security systems — often a large share of a commercial rebuild.' },
  { title: 'Specialist fit-out', desc: 'Trade- and tenant-specific fit-out, from retail shopfronts to office partitioning, needed to make the building usable again.' },
  { title: 'External works and site costs', desc: 'Car parking, hardstanding, boundary walls, drainage, and landscaping that form part of the insured property.' },
  { title: 'Debris removal and professional fees', desc: 'Site clearance after a loss, plus the architect, surveyor, and engineering fees a genuine rebuild requires under current regulations.' },
  { title: 'Inflation over the rebuild period', desc: 'An allowance for cost movement across the design and construction period, so the figure still holds when a claim is made.' },
]

const reasons = [
  'A physical inspection captures fit-out, mechanical and electrical services, and specialist construction accurately.',
  'It is the right approach for high-value, complex, or non-standard commercial premises.',
  'It produces the most defensible figure if a large claim is ever questioned.',
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1A6B4A] mb-5">
              RICS Regulated &middot; Commercial Property
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Commercial reinstatement cost assessments.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              Accurate rebuild costs for offices, warehouses, retail, and mixed-use buildings. RICS-regulated assessments your broker will accept, BCIS-indexed and delivered within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Request a quote
              </Link>
              <Link href="/services" className="bg-zinc-900/[0.06] border border-zinc-900/10 text-primary px-7 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/[0.1] active:scale-[0.97] transition-all text-center">
                Our services
              </Link>
            </div>
            <p className="text-xs font-medium text-secondary">
              RICS Regulated &middot; London &amp; UK
            </p>
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
                A commercial reinstatement cost assessment is a professional calculation of what it would
                cost to rebuild your property from the ground up if it were completely destroyed. It is the
                figure your buildings insurance sum insured should be based on, and it is deliberately
                different from the property&rsquo;s market value. Market value reflects the land, the
                location, and the income a building can generate; rebuild cost reflects only the physical
                work of reconstruction. For commercial buildings, the two are frequently a long way apart.
              </p>
              <p>
                Getting that figure right matters because most commercial policies contain a{' '}
                <strong className="font-semibold text-primary">condition of average</strong>. If your sum
                insured is lower than the true rebuild cost, the insurer can reduce any claim in proportion
                to the shortfall, even for a partial loss. A building insured for 70% of its real rebuild
                cost may see a claim settled at roughly 70% of its value, leaving the owner to fund the
                difference at the worst possible moment.
              </p>
              <p>
                Commercial properties are especially prone to underinsurance because they carry costs that
                generic calculators simply miss: specialist fit-out, mechanical and electrical services,
                external works, and the professional fees and debris-removal costs a real rebuild involves.
                Rebuild costs have also risen faster than routine index-linking has kept pace with. For that
                reason, RICS recommends a full reassessment at least every three years, with index-linking
                used in between.
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
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">
              Common challenges
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Where commercial cover slips out of step.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {challenges.map(({ title, desc }) => (
              <div key={title} className="bg-[#0f3d28] p-8">
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
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
            {[
              { title: 'Specialist commercial surveyors', desc: 'RICS-regulated surveyors experienced across every commercial asset class, from offices and industrial units to retail and mixed-use.' },
              { title: 'Fit-out, services, and site works', desc: 'Every cost element is captured, from specialist services to external works, for a figure that holds up when it is needed.' },
              { title: 'Broker-ready within 48 hours', desc: 'A fully RICS-regulated, BCIS-indexed report, accepted by UK insurers and delivered quickly.' },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-8 border border-zinc-200/80">
                <div className="w-10 h-px bg-[#1A6B4A]/60 mb-5" />
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
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">
              What&rsquo;s included
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
              Everything a genuine rebuild would cost.
            </h2>
            <p className="text-secondary leading-relaxed">
              A reliable reinstatement figure is far more than the cost of walls and a roof. Each assessment
              accounts for every element a real rebuild would incur.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-12">
            {included.map(({ title, desc }) => (
              <div key={title} className="py-6 border-t border-zinc-200">
                <h3 className="text-base font-semibold text-primary mb-1.5">{title}</h3>
                <p className="text-secondary text-[0.95rem] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended service */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">
              Recommended for you
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              The right assessment for commercial property.
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-11 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B4A] mb-2">
              Best fit &middot; On-site survey
            </p>
            <h3 className="text-2xl font-bold text-primary leading-tight mb-4">
              On-site RICS reinstatement cost assessment
            </h3>
            <p className="text-secondary leading-relaxed mb-8 max-w-2xl">
              Commercial buildings rarely fit a standard template. A full on-site survey captures the detail
              a desktop assessment cannot, giving you a rebuild figure that stands up to insurer and legal
              scrutiny.
            </p>
            <ul className="border-y border-zinc-200 divide-y divide-zinc-200 mb-9">
              {reasons.map((reason) => (
                <li key={reason} className="py-4 flex gap-4 items-start">
                  <span className="material-symbols-outlined text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.15rem' }}>check</span>
                  <span className="text-secondary leading-relaxed text-[0.98rem]">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3.5 rounded-full font-semibold active:scale-[0.97] transition-transform text-center sovereign-shadow">
                Request a quote
              </Link>
              <Link href="/services#on-site-survey" className="bg-zinc-900/[0.06] border border-zinc-900/10 text-primary px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-zinc-900/[0.1] active:scale-[0.97] transition-all text-center">
                About on-site surveys
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-reveal bg-zinc-50 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            Get an accurate commercial reinstatement figure.
          </h2>
          <p className="text-secondary leading-relaxed">
            RICS-regulated assessments for offices, warehouses, retail, and mixed-use buildings, covering
            fit-out, services, and external works. Broker-ready within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/contact#contact-form"
              className="btn-shine text-white px-8 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform text-center sovereign-shadow"
            >
              Request a quote
            </Link>
            <Link
              href="/services"
              className="bg-zinc-900/[0.06] border border-zinc-900/10 text-primary px-7 py-4 rounded-full font-semibold hover:bg-zinc-900/[0.1] active:scale-[0.97] transition-all text-center"
            >
              View services
            </Link>
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
