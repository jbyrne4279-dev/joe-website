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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0f3d28] to-[#1A6B4A]">
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
              RICS Regulated &middot; Commercial Property
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6 text-center">
              Commercial Reinstatement Cost Assessments.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              Accurate rebuild costs for offices, warehouses, retail, and mixed-use. RICS-regulated assessments your broker will accept - delivered fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact#contact-form"
                className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/10 border border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding / prose explainer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              The Basics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight">
              What is a commercial reinstatement cost assessment?
            </h2>
          </div>
          <div className="space-y-5 text-zinc-700 leading-relaxed text-[1.05rem]">
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
              <strong className="text-[#0f3d28]">condition of average</strong>. If your sum insured is
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
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              Common Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight text-center">
              Problems we solve for commercial property owners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'construction',
                title: 'Commercial rebuild costs rising faster than index linking keeps up.',
                desc: 'Material costs, labour shortages, and supply chain pressures have driven commercial rebuild costs well above what standard index linking captures - widening the underinsurance gap year on year.',
              },
              {
                icon: 'calculate',
                title: 'Generic online calculators miss specialist fitout and M&E costs.',
                desc: 'Commercial buildings contain significant mechanical, electrical, and specialist fitout costs that generic calculators ignore entirely - leading to materially understated reinstatement figures.',
              },
              {
                icon: 'verified_user',
                title: 'Insurers and lenders requiring up-to-date RICS assessments.',
                desc: 'Increasingly, commercial insurers and lenders require a verifiable RICS-regulated reinstatement figure before agreeing terms - a generic estimate or calculator output is no longer sufficient.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/20 hover:border-[#1A6B4A]/50 hover:shadow-[0_0_20px_2px_rgba(26,107,74,0.10)] transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 btn-shine rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>
                    {icon}
                  </span>
                </div>
                <h3 className="font-bold text-[#0f3d28] text-base mb-2 text-center">{title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              How We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight text-center">
              Our solution for commercial properties.
            </h2>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 sovereign-shadow">
            <Image
              src="/commercial-reinstatement-cost-assessment.png"
              alt="Commercial property reinstatement cost assessment"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'Specialist commercial surveyors - all asset classes',
              'Fitout, M&E, and external works included',
              'RICS-regulated report ready in 48 hours',
            ].map((point, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#1A6B4A]/20 bg-zinc-50 hover:border-[#1A6B4A]/40 transition-all duration-300"
              >
                <div className="w-8 h-8 btn-shine rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '0.95rem', fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                </div>
                <p className="text-[#0f3d28] font-semibold leading-snug text-center">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              What&rsquo;s Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight text-center">
              What a commercial RCA accounts for.
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
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
                className="bg-white rounded-2xl p-7 border border-[#1A6B4A]/15 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 btn-shine rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '0.95rem', fontVariationSettings: "'FILL' 1" }}>
                      check
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0f3d28] text-base">{title}</h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#0f3d28] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center">
            Get an accurate commercial reinstatement figure today.
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-center">
            RICS-regulated assessments for offices, warehouses, retail, and mixed-use - covering fitout, M&E, and external works. Broker-ready in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact#contact-form"
              className="bg-white text-[#1A6B4A] px-8 py-4 rounded-full font-bold hover:bg-zinc-100 active:scale-[0.97] transition-all text-center sovereign-shadow"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
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
