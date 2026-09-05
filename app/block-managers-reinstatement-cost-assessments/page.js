import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Rebuild Cost Assessment for Block Managers | RICS Reinstatement',
  description:
    'RICS reinstatement cost assessment for block managers. Accurate rebuild cost assessments - BCIS-indexed, insurer-accepted, delivered in 48 hours. Protect leaseholders from underinsurance.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
  openGraph: {
    title: 'Rebuild Cost Assessment for Block Managers | RICS Reinstatement',
    description:
      'RICS reinstatement cost assessment for block managers. Accurate rebuild cost assessments - BCIS-indexed, insurer-accepted, delivered in 48 hours. Protect leaseholders from underinsurance.',
    url: '/block-managers-reinstatement-cost-assessments',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Reinstatement Cost Assessments for Block Managers', item: `${SITE_URL}/block-managers-reinstatement-cost-assessments` },
  ],
}

const faqItems = [
  {
    question: 'What is a reinstatement cost assessment for a block of flats?',
    answer: 'It is a professional calculation of the full cost of rebuilding a residential block from the ground up if it were destroyed - including demolition, debris removal, professional fees, and compliance with current building regulations. It is the figure the block’s buildings insurance sum insured should be based on, and it protects every leaseholder if a major claim arises.',
  },
  {
    question: 'Why is an accurate sum insured so important for leaseholders?',
    answer: 'Most block policies contain a "condition of average". If the sum insured is lower than the true rebuild cost, the insurer can reduce a claim payout in proportion to the shortfall - even for a partial loss such as a fire in a single flat. That shortfall typically falls back on leaseholders through the service charge, so an inaccurate figure exposes every resident in the building.',
  },
  {
    question: 'Isn’t annual index-linking enough to keep the figure accurate?',
    answer: 'Index-linking helps, but it applies a general inflation adjustment and cannot account for local labour shortages, material price spikes, or changes to building regulations. Over several years the insured figure can drift well below the true rebuild cost. This is why RICS recommends a full reinstatement cost assessment at least every three years, with index-linking used only in the intervening years.',
  },
  {
    question: 'How often should a block reinstatement cost assessment be updated?',
    answer: 'RICS guidance recommends a full reassessment at least every three years. Earlier reassessment is sensible after significant works, an extension, a change in construction, or a period of unusually high construction-cost inflation.',
  },
  {
    question: 'Will insurers accept the report at renewal?',
    answer: 'Yes. Our assessments are RICS-regulated and BCIS-indexed, produced to be accepted by all major insurers as evidence of an adequate sum insured - which helps avoid queries, delays, and disputes at renewal.',
  },
  {
    question: 'Do you offer desktop or on-site assessments for blocks?',
    answer: 'Both. Standard blocks can often be assessed accurately by desktop using property records and BCIS cost data, while larger, complex, or non-standard blocks benefit from an on-site survey. We advise on the right approach for each building.',
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

export default function BlockManagersPage() {
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
              RICS Regulated &middot; Block Management
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6 text-center">
              Reinstatement Cost Assessments for Block Managers.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              Protect leaseholders from underinsurance. RICS-regulated assessments accepted by all major insurers - delivered in 48 hours.
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

      {/* Banner Image */}
      <div className="px-6 max-w-5xl mx-auto mt-10">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 sovereign-shadow">
          <Image
            src="/rca-for-landlords-property-owners.png"
            alt="UK residential apartment block reinstatement cost assessment"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Understanding / prose explainer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              The Basics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight">
              Why block managers need an accurate reinstatement figure.
            </h2>
          </div>
          <div className="space-y-5 text-zinc-700 leading-relaxed text-[1.05rem]">
            <p>
              A reinstatement cost assessment (RCA) for a block of flats is a professional calculation of
              what it would cost to rebuild the entire building from the ground up if it were destroyed.
              It covers far more than bricks and mortar &mdash; demolition and debris removal, professional
              fees, and the cost of meeting current building regulations all form part of the figure. It
              is not the same as the block&rsquo;s market value; it is the number the buildings insurance
              sum insured should be based on.
            </p>
            <p>
              For a block manager, getting that figure right is a duty owed to every leaseholder. Most
              block policies contain a <strong className="text-[#0f3d28]">condition of average</strong>: if
              the sum insured is lower than the true rebuild cost, the insurer can reduce a claim payout in
              proportion to the shortfall &mdash; even for a partial loss such as a fire confined to one
              flat. That shortfall usually flows back to leaseholders through the service charge, so an
              inaccurate sum insured puts the whole building at financial risk.
            </p>
            <p>
              Annual index-linking helps, but it applies a broad inflation adjustment that cannot capture
              local labour shortages, material price spikes, or regulatory changes. Over a few years the
              insured figure can drift well below reality. That is why{' '}
              <Link href="/resources/when-should-block-insurance-valuations-be-updated" className="text-[#1A6B4A] underline hover:text-[#1A6B4A]/80">
                RICS recommends a full reassessment at least every three years
              </Link>
              , with index-linking used only in between &mdash; and why insurers increasingly expect a
              current RICS-regulated report to support the sum insured at renewal.
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
              Problems we solve for block managers.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'warning',
                title: 'Leaseholders exposed to underinsurance risk.',
                desc: 'Without a current RICS assessment, the sum insured on a block policy may fall well short of the true rebuild cost - leaving every leaseholder exposed if a major claim arises.',
              },
              {
                icon: 'trending_up',
                title: 'Index linking drifts from true rebuild costs.',
                desc: 'Automatic index-linking adjustments do not account for local labour shortages, material inflation, or changes in build complexity. Over time, the gap between the insured figure and reality widens.',
              },
              {
                icon: 'gavel',
                title: 'Insurers querying sums insured at renewal.',
                desc: 'When insurers challenge the adequacy of a sum insured at renewal - without a RICS-regulated report to support it - block managers face delays, increased premiums, and reputational risk.',
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
              Our solution for block managers.
            </h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'Full RICS-regulated reinstatement assessment per block',
              'BCIS-indexed figures accepted by all major insurers',
              'Delivered in 48 hours - desktop or on-site',
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

      {/* CTA Strip */}
      <section className="bg-[#0f3d28] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center">
            Ready to protect your leaseholders?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-center">
            Get a RICS-regulated reinstatement cost assessment for your block - fast, accurate, and insurer-ready.
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
        description="Common questions about reinstatement cost assessments for blocks of flats, sums insured, and leaseholder protection."
        items={faqItems}
      />

      <ContactSection />
    </main>
    </>
  )
}
