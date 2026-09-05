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
    answer: 'A commercial reinstatement cost assessment is a professional calculation of the full cost of rebuilding a commercial property from the ground up if it were destroyed. It covers demolition and debris removal, the rebuild itself, mechanical and electrical services, professional fees, and compliance with current building regulations. It is the figure your buildings insurance sum insured should be based on - not the property’s market value.',
  },
  {
    question: 'Why is rebuild cost different from market value?',
    answer: 'Market value reflects what a property would sell for, including the land, location, and income potential. Rebuild cost reflects only what it would cost to physically reconstruct the building. For commercial property the two figures are often very different - a building can have a low market value but a high rebuild cost, or vice versa. Insurance should always be based on rebuild cost, which is what a reinstatement cost assessment establishes.',
  },
  {
    question: 'What happens if my commercial property is underinsured?',
    answer: 'Most commercial policies contain a "condition of average". If your sum insured is lower than the true rebuild cost, the insurer can reduce any claim payout in proportion to the shortfall - even for a partial loss. For example, if a building is insured for only 70% of its true rebuild cost, a claim may be settled at around 70% of its value, leaving you to fund the rest.',
  },
  {
    question: 'How often should a commercial reinstatement cost assessment be reviewed?',
    answer: 'RICS guidance recommends a full reinstatement cost assessment at least every three years, with index-linking applied in the intervening years. Because commercial rebuild costs have moved sharply with material and labour inflation, relying on index-linking alone for longer periods can leave a significant underinsurance gap.',
  },
  {
    question: 'What types of commercial property do you assess?',
    answer: 'We assess offices, warehouses and industrial units, retail premises, and mixed-use buildings across the UK. Each assessment accounts for the specialist fitout, mechanical and electrical installations, and external works relevant to that asset class.',
  },
  {
    question: 'Will my insurer and broker accept the report?',
    answer: 'Yes. Our assessments are RICS-regulated and BCIS-indexed, and are produced to be broker-ready and accepted by UK insurers as evidence of an accurate sum insured.',
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
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2 mb-4">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>verified</span>
              RICS Regulated &middot; Commercial Property
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="text-shine">Commercial</span> Reinstatement Cost Assessments.
            </h1>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              Accurate rebuild costs for offices, warehouses, retail, and mixed-use. RICS-regulated assessments your broker will accept &mdash; BCIS-indexed and delivered in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Request a Quote
              </Link>
              <Link href="/services" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                Our Services
              </Link>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white/60 text-xs font-semibold text-secondary">
                <span className="w-2 h-2 rounded-full bg-[#1A6B4A] inline-block"></span>
                RICS Regulated &middot; London &amp; UK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding / prose explainer */}
      <section className="scroll-reveal py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div>
          <div className="text-center lg:text-left mb-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center lg:justify-start gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>menu_book</span>
              The Basics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              What is a commercial <span className="text-shine">reinstatement cost assessment?</span>
            </h2>
          </div>
          <div className="space-y-5 text-secondary leading-relaxed text-[1.05rem]">
            <p>
              A commercial reinstatement cost assessment (RCA) is a professional calculation of what it
              would cost to rebuild your property from the ground up if it were completely destroyed. It
              is the figure your buildings insurance sum insured should be based on &mdash; and it is
              deliberately different from the property&rsquo;s market value. Market value reflects land,
              location, and income potential; rebuild cost reflects only the physical work of
              reconstruction. For commercial buildings the two figures are frequently a long way apart.
            </p>
            <p>
              Getting that figure right matters because most commercial policies contain a{' '}
              <strong className="text-primary">condition of average</strong>. If your sum insured is
              lower than the true rebuild cost, the insurer can scale down any claim in proportion to the
              shortfall &mdash; even for a partial loss. A building insured for 70% of its real rebuild
              cost may see a claim settled at roughly 70% of its value, leaving the owner to fund the
              difference at the worst possible time.
            </p>
            <p>
              Commercial properties are especially prone to underinsurance because they carry costs that
              generic online calculators simply miss: specialist fitout, mechanical and electrical (M&amp;E)
              installations, external works, and the professional fees and debris-removal costs that a real
              rebuild involves. Rebuild costs have also risen faster than routine index-linking has kept
              pace with, widening the gap year on year. RICS guidance recommends a full reassessment at
              least every three years, with index-linking applied in between.
            </p>
          </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[360px]">
            <Image
              src="/reinstatement-cost-assessments-uk.webp"
              alt="Commercial property in the UK requiring a reinstatement cost assessment"
              fill
              sizes="(max-width: 1024px) 0px, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="scroll-reveal py-20 px-6 bg-[#0f3d28]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>warning</span>
              Common Challenges
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Problems we solve for commercial owners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: 'construction',
                title: 'Rebuild costs outrunning index linking.',
                desc: 'Material costs, labour shortages, and supply chain pressures have driven commercial rebuild costs well above what standard index linking captures - widening the underinsurance gap year on year.',
              },
              {
                icon: 'calculate',
                title: 'Calculators miss fitout and M&E costs.',
                desc: 'Commercial buildings contain significant mechanical, electrical, and specialist fitout costs that generic calculators ignore entirely - leading to materially understated reinstatement figures.',
              },
              {
                icon: 'verified_user',
                title: 'Insurers requiring up-to-date RICS figures.',
                desc: 'Increasingly, commercial insurers and lenders require a verifiable RICS-regulated reinstatement figure before agreeing terms - a generic estimate or calculator output is no longer sufficient.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-11 h-11 btn-shine rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>
                    {icon}
                  </span>
                </div>
                <h3 className="font-bold text-primary text-base mb-2">{title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="scroll-reveal py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>check_circle</span>
              How We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Our solution for <span className="text-shine">commercial properties.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'engineering', title: 'Specialist commercial surveyors', desc: 'RICS-regulated surveyors experienced across every commercial asset class - offices, industrial, retail and mixed-use.' },
              { icon: 'architecture', title: 'Fitout, M&E and external works', desc: 'Every cost element captured, from specialist services to site works, for a figure that stands up at claim time.' },
              { icon: 'bolt', title: 'Broker-ready in 48 hours', desc: 'A fully RICS-regulated, BCIS-indexed report accepted by UK insurers - delivered fast.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-11 h-11 btn-shine rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h3 className="font-bold text-primary text-base mb-2">{title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="scroll-reveal py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>fact_check</span>
              What&rsquo;s Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              What a commercial RCA <span className="text-shine">accounts for.</span>
            </h2>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
              A robust reinstatement figure is more than the cost of walls and a roof. Our assessments
              capture every element a genuine rebuild would incur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Full structural rebuild',
                desc: 'The complete cost of demolishing what remains and reconstructing the building to its current specification and floor area.',
              },
              {
                title: 'Mechanical & electrical (M&E)',
                desc: 'HVAC, lifts, power distribution, lighting, fire and security systems - often a substantial share of a commercial rebuild that calculators ignore.',
              },
              {
                title: 'Specialist fitout',
                desc: 'Trade-specific and tenant fitout, from retail shopfronts to office partitioning, that must be reinstated to make the building usable again.',
              },
              {
                title: 'External works & site costs',
                desc: 'Car parking, hardstanding, boundary walls, drainage, and landscaping that form part of the insured property.',
              },
              {
                title: 'Debris removal & professional fees',
                desc: 'Site clearance after a loss, plus the architect, surveyor, and engineering fees a real rebuild requires - and the cost of meeting current building regulations.',
              },
              {
                title: 'Inflation over the rebuild period',
                desc: 'An allowance for cost movement across the design and construction period, so the figure holds up when a claim actually happens.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-zinc-50 rounded-2xl p-7 border border-[#1A6B4A]/10 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 btn-shine rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '0.95rem', fontVariationSettings: "'FILL' 1" }}>
                      check
                    </span>
                  </div>
                  <h3 className="font-bold text-primary text-base">{title}</h3>
                </div>
                <p className="text-sm text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended service */}
      <section className="scroll-reveal py-20 px-6 bg-[#0f3d28]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>recommend</span>
              Recommended For You
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The right assessment for commercial property.
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 btn-shine rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>location_on</span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1A6B4A]">Best fit</span>
                <h3 className="text-xl font-bold text-primary leading-tight">On-Site RICS Reinstatement Cost Assessment</h3>
              </div>
            </div>
            <p className="text-secondary leading-relaxed mb-6">
              Commercial buildings rarely fit a standard template. A full on-site survey captures the detail a desktop assessment can&rsquo;t &mdash; giving you a rebuild figure that stands up to insurer and legal scrutiny.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Physical inspection captures fitout, M&E, and specialist construction accurately.',
                'Essential for high-value, complex, or non-standard commercial premises.',
                'Produces the most defensible figure if a large claim is ever challenged.',
              ].map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#1A6B4A] shrink-0" style={{ fontSize: '1.2rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm text-secondary leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3.5 rounded-full font-bold active:scale-[0.97] transition-transform text-center sovereign-shadow">
                Request a Quote
              </Link>
              <Link href="/services#on-site-survey" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                Learn about On-Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="scroll-reveal bg-zinc-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
            Get an accurate commercial reinstatement figure.
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            RICS-regulated assessments for offices, warehouses, retail, and mixed-use &mdash; covering fitout, M&amp;E, and external works. Broker-ready in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact#contact-form"
              className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform text-center sovereign-shadow"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-8 py-4 rounded-full font-semibold hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        description="Common questions about commercial reinstatement cost assessments, rebuild cost, and underinsurance."
        items={faqItems}
      />

      <ContactSection />
    </main>
    </>
  )
}
