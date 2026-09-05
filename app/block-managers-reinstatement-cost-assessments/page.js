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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/rca-for-landlords-property-owners.webp"
          alt="UK residential apartment block reinstatement cost assessment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2 mb-4">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>apartment</span>
              RICS Regulated &middot; Block Management
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Reinstatement Cost Assessments for <span className="text-shine">Block Managers.</span>
            </h1>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              Protect leaseholders from underinsurance. RICS-regulated assessments accepted by all major insurers &mdash; BCIS-indexed and delivered in 48 hours.
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
              Why block managers need an <span className="text-shine">accurate reinstatement figure.</span>
            </h2>
          </div>
          <div className="space-y-5 text-secondary leading-relaxed text-[1.05rem]">
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
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[360px]">
            <Image
              src="/reinstatement-cost-assessment-uk.webp"
              alt="UK residential apartment block requiring a reinstatement cost assessment"
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
              Problems we solve for block managers.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: 'warning',
                title: 'Leaseholders exposed to underinsurance.',
                desc: 'Without a current RICS assessment, the sum insured on a block policy may fall well short of the true rebuild cost - leaving every leaseholder exposed if a major claim arises.',
              },
              {
                icon: 'trending_up',
                title: 'Index linking drifts from true costs.',
                desc: 'Automatic index-linking adjustments do not account for local labour shortages, material inflation, or changes in build complexity. Over time, the gap between the insured figure and reality widens.',
              },
              {
                icon: 'gavel',
                title: 'Insurers querying sums insured.',
                desc: 'When insurers challenge the adequacy of a sum insured at renewal - without a RICS-regulated report to support it - block managers face delays, increased premiums, and reputational risk.',
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
      <section className="scroll-reveal py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>check_circle</span>
              How We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Our solution for <span className="text-shine">block managers.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'shield', title: 'RICS assessment per block', desc: 'A full RICS-regulated reinstatement assessment for each building, protecting every leaseholder with an accurate sum insured.' },
              { icon: 'account_balance', title: 'Accepted by all major insurers', desc: 'BCIS-indexed figures produced to be accepted at renewal without challenge, avoiding queries and disputes.' },
              { icon: 'bolt', title: 'Delivered in 48 hours', desc: 'Desktop or on-site, turned around fast - so overdue blocks can be brought up to date quickly.' },
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

      {/* Recommended service */}
      <section className="scroll-reveal py-20 px-6 bg-[#0f3d28]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>recommend</span>
              Recommended For You
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The right assessment for block managers.
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 btn-shine rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1A6B4A]">Best fit</span>
                <h3 className="text-xl font-bold text-primary leading-tight">3-Year RICS Protection Plan</h3>
              </div>
            </div>
            <p className="text-secondary leading-relaxed mb-6">
              Blocks need to stay accurately insured year after year, not just once. The 3-Year Protection plan pairs a full RICS assessment with annual indexed updates &mdash; keeping leaseholders covered with no repeat admin.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'A full RICS reinstatement assessment now, with indexed updates for three years.',
                'Keeps leaseholders protected as rebuild costs rise between assessments.',
                'Removes the cost and hassle of re-instructing a new valuation each year.',
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
              <Link href="/services#three-year-protection" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                Learn about 3-Year Protection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="scroll-reveal bg-zinc-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
            Ready to protect your leaseholders?
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Get a RICS-regulated reinstatement cost assessment for your block - fast, accurate, and insurer-ready.
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
        description="Common questions about reinstatement cost assessments for blocks of flats, sums insured, and leaseholder protection."
        items={faqItems}
      />

      <ContactSection />
    </main>
    </>
  )
}
