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
    answer: 'It is a professional calculation of the full cost of rebuilding a residential block from the ground up if it were destroyed, including demolition, debris removal, professional fees, and compliance with current building regulations. It is the figure the block’s buildings insurance sum insured should be based on, and it protects every leaseholder if a major claim arises.',
  },
  {
    question: 'Why is an accurate sum insured so important for leaseholders?',
    answer: 'Most block policies contain a condition of average. If the sum insured is lower than the true rebuild cost, the insurer can reduce a claim payout in proportion to the shortfall, even for a partial loss such as a fire in a single flat. That shortfall usually falls back on leaseholders through the service charge, so an inaccurate figure exposes every resident in the building.',
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
    answer: 'Yes. Every assessment is RICS-regulated and BCIS-indexed, and is prepared to be accepted by all major insurers as evidence of an adequate sum insured, which helps avoid queries, delays, and disputes at renewal.',
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

const challenges = [
  {
    title: 'Leaseholders exposed to underinsurance',
    desc: 'Without a current RICS assessment, the sum insured on a block policy can fall well short of the true rebuild cost, leaving every leaseholder exposed if a major claim arises.',
  },
  {
    title: 'Index-linking drifting from real costs',
    desc: 'Automatic index-linking cannot account for local labour shortages, material inflation, or changes in build complexity, so the gap between the insured figure and reality widens over time.',
  },
  {
    title: 'Insurers querying sums insured',
    desc: 'When an insurer challenges the adequacy of a sum insured at renewal, and there is no RICS-regulated report to support it, block managers face delays, higher premiums, and reputational risk.',
  },
]

const reasons = [
  'A full RICS reinstatement assessment now, with indexed updates for the next three years.',
  'Leaseholders stay protected as rebuild costs rise between assessments.',
  'It removes the cost and hassle of re-instructing a new valuation each year.',
]

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
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1A6B4A] mb-5">
              RICS Regulated &middot; Block Management
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Reinstatement cost assessments for block managers.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              Protect leaseholders from underinsurance. RICS-regulated assessments accepted by all major insurers, BCIS-indexed and delivered within 48 hours.
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
              Why block managers need an accurate reinstatement figure.
            </h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>
                A reinstatement cost assessment for a block of flats is a professional calculation of what
                it would cost to rebuild the entire building from the ground up if it were destroyed. It
                covers far more than bricks and mortar: demolition and debris removal, professional fees,
                and the cost of meeting current building regulations all form part of the figure. It is not
                the same as the block&rsquo;s market value; it is the number the buildings insurance sum
                insured should be based on.
              </p>
              <p>
                For a block manager, getting that figure right is a duty owed to every leaseholder. Most
                block policies contain a <strong className="font-semibold text-primary">condition of
                average</strong>: if the sum insured is lower than the true rebuild cost, the insurer can
                reduce a claim in proportion to the shortfall, even for a partial loss such as a fire
                confined to one flat. That shortfall usually flows back to leaseholders through the service
                charge, so an inaccurate sum insured puts the whole building at financial risk.
              </p>
              <p>
                Annual index-linking helps, but it applies a broad inflation adjustment that cannot capture
                local labour shortages, material price spikes, or regulatory changes, so the insured figure
                can drift well below reality over a few years. That is why{' '}
                <Link href="/resources/when-should-block-insurance-valuations-be-updated" className="text-[#1A6B4A] underline underline-offset-2 hover:text-[#1A6B4A]/80">
                  RICS recommends a full reassessment at least every three years
                </Link>
                , with index-linking used only in between, and why insurers increasingly expect a current
                RICS-regulated report to support the sum insured at renewal.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[420px]">
            <Image
              src="/reinstatement-cost-assessment-uk.webp"
              alt="UK residential apartment block requiring a reinstatement cost assessment"
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
              Where block cover slips out of step.
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
              Keeping every block accurately insured.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'A RICS assessment per block', desc: 'A full RICS-regulated reinstatement assessment for each building, protecting every leaseholder with an accurate sum insured.' },
              { title: 'Accepted by all major insurers', desc: 'BCIS-indexed figures prepared to be accepted at renewal without challenge, avoiding queries and disputes.' },
              { title: 'Delivered within 48 hours', desc: 'Desktop or on-site, turned around quickly so overdue blocks can be brought up to date without delay.' },
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

      {/* Recommended service */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">
              Recommended for you
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              The right assessment for block managers.
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-11 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B4A] mb-2">
              Best fit &middot; 3-year protection
            </p>
            <h3 className="text-2xl font-bold text-primary leading-tight mb-4">
              3-year RICS protection plan
            </h3>
            <p className="text-secondary leading-relaxed mb-8 max-w-2xl">
              Blocks need to stay accurately insured year after year, not just once. The 3-year protection
              plan pairs a full RICS assessment with annual indexed updates, keeping leaseholders covered
              with no repeat admin.
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
              <Link href="/services#three-year-protection" className="bg-zinc-900/[0.06] border border-zinc-900/10 text-primary px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-zinc-900/[0.1] active:scale-[0.97] transition-all text-center">
                About 3-year protection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-reveal bg-zinc-50 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            Ready to protect your leaseholders?
          </h2>
          <p className="text-secondary leading-relaxed">
            Get a RICS-regulated reinstatement cost assessment for your block: fast, accurate, and ready for
            your insurer.
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
        description="Common questions about reinstatement cost assessments for blocks of flats, sums insured, and leaseholder protection."
        items={faqItems}
      />
    </main>
    </>
  )
}
