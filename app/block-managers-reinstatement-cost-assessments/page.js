import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import StepIcon from '../components/StepIcon'

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
    question: 'Isn’t annual index‑linking enough to keep the figure accurate?',
    answer: 'Index‑linking helps, but it applies a general inflation adjustment and cannot account for local labour shortages, material price spikes, or changes to building regulations. Over several years the insured figure can drift well below the true rebuild cost. This is why RICS recommends a full reinstatement cost assessment at least every three years, with index‑linking used only in the intervening years.',
  },
  {
    question: 'How often should a block reinstatement cost assessment be updated?',
    answer: 'RICS guidance recommends a full reassessment at least every three years. Earlier reassessment is sensible after significant works, an extension, a change in construction, or a period of unusually high construction‑cost inflation.',
  },
  {
    question: 'Will insurers accept the report at renewal?',
    answer: 'Yes. Every assessment is RICS‑regulated and BCIS‑indexed, and is prepared to be accepted by all major insurers as evidence of an adequate sum insured, which helps avoid queries, delays, and disputes at renewal.',
  },
  {
    question: 'Do you offer desktop or on‑site assessments for blocks?',
    answer: 'Both. Standard blocks can often be assessed accurately by desktop using property records and BCIS cost data, while larger, complex, or non‑standard blocks benefit from an on‑site survey. We advise on the right approach for each building.',
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
    img: '/rca-leaseholders-exposed.webp',
    title: 'Leaseholders left exposed',
    desc: 'Without a recent valuation, a block’s sum insured can fall well short of the true rebuild cost, and any shortfall passes to leaseholders through the service charge. An accurate figure protects every resident.',
  },
  {
    img: '/rca-index-linking-drift.webp',
    title: 'Index‑linking drifts',
    desc: 'Annual index‑linking uses a broad inflation rate that can’t track a block’s real local build costs. A full review every three years keeps the sum insured aligned with reality.',
  },
  {
    img: '/rca-verified-rics-figure.webp',
    title: 'Insurers query the figure',
    desc: 'Without a RICS‑regulated report to support the sum insured, insurers can query cover at renewal, causing delays and higher premiums. A current figure keeps renewals straightforward.',
  },
]

const help = [
  { icon: 'apartment', title: 'A RICS assessment per block', desc: 'An accurate sum insured that protects every leaseholder.' },
  { icon: 'verified', title: 'Accepted by all major insurers', desc: 'BCIS‑indexed figures ready for renewal, without challenge.' },
  { icon: 'bolt', title: 'Delivered in 48 hours', desc: 'Desktop or on‑site, so overdue blocks are quickly up to date.' },
]

const reasons = [
  { icon: 'shield', text: 'A full RICS assessment now, plus indexed updates for three years.' },
  { icon: 'groups', text: 'Leaseholders stay protected as rebuild costs rise.' },
  { icon: 'event_repeat', text: 'No need to re‑instruct a new valuation each year.' },
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
      <Breadcrumbs showSchema={false} items={[{ name: 'Reinstatement Cost Assessments for Block Managers' }]} accent="#1A6B4A" />

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="sm:whitespace-nowrap">Reinstatement cost</span> assessments for <span className="text-[#1A6B4A]">block managers</span>.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              Protect leaseholders from underinsurance. RICS‑regulated assessments accepted by all major insurers, BCIS‑indexed and delivered within 48 hours.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The basics — prose + image */}
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
                It&rsquo;s the cost of rebuilding the whole block from scratch &mdash; structure, fees,
                debris removal, and current building regulations. That&rsquo;s the figure the buildings
                insurance should be based on, not the block&rsquo;s market value.
              </p>
              <p>
                Most block policies apply a{' '}
                <strong className="font-semibold text-primary">condition of average</strong>, so if the sum
                insured is too low, a claim is cut by the same proportion &mdash; and that shortfall lands on
                leaseholders through the service charge. That&rsquo;s why{' '}
                <Link href="/resources/when-should-block-insurance-valuations-be-updated" className="text-[#1A6B4A] underline underline-offset-2 hover:text-[#1A6B4A]/80">
                  RICS recommends a full reassessment every three years
                </Link>.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[420px]">
            <Image
              src="/managing-agents-office-block.jpg"
              alt="Large modern apartment and commercial block"
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
              Where block cover slips out of step.
            </h2>
            <p className="text-white/70 leading-relaxed mt-5">
              An estimated <strong className="font-semibold text-white">76% of UK buildings are underinsured</strong>, and those that are carry cover for just <strong className="font-semibold text-white">63%</strong> of their true rebuild cost on average (<a href="https://www.insuranceage.co.uk/insight/7955419/six-year-low-but-76-of-uk-properties-still-underinsured" target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200">Insurance Age</a>) — a gap that quietly widens across a block every year it goes unassessed.
            </p>
          </div>
          <div className="space-y-5">
            {challenges.map(({ img, title, desc }) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white/[0.04] rounded-2xl p-5 sm:p-6 border border-white/10">
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0">
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
              Keeping every block accurately insured.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {help.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-8 border border-zinc-200/80">
                <div className="w-11 h-11 rounded-xl bg-[#1A6B4A]/10 flex items-center justify-center mb-5">
                  <StepIcon name={icon} size={24} className="text-[#1A6B4A]" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 leading-snug">{title}</h3>
                <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-10">
            <img loading="lazy" decoding="async" src="/rics-logo.webp" alt="Regulated by RICS" className="h-16 w-auto object-contain" />
          </div>
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
              The right assessment for block managers.
            </h2>
          </div>
          <Link href="/contact?service=3year#contact-form" className="group block bg-white rounded-3xl shadow-lg overflow-hidden max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src="/rca-for-landlords-property-owners.webp"
                alt="UK residential apartment block covered by a 3-year protection plan"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A6B4A] mb-2">
                Best fit &middot; 3‑year protection
              </p>
              <h3 className="text-2xl font-bold text-primary leading-tight mb-4">
                3‑year RICS protection plan
              </h3>
              <p className="text-secondary leading-relaxed mb-8">
                Blocks need to stay accurately insured year after year, not just once. The 3‑year protection
                plan pairs a full RICS assessment now with automatic indexed updates each year, so
                leaseholders stay properly covered as costs rise, with no repeat admin for you.
              </p>
              <ul className="border-y border-zinc-200 divide-y divide-zinc-200 mb-8">
                {reasons.map((reason) => (
                  <li key={reason.text} className="py-4 flex gap-4 items-start">
                    <span className="material-symbols-outlined logo-shine text-[#1A6B4A] shrink-0 mt-0.5" style={{ fontSize: '1.15rem' }}>{reason.icon}</span>
                    <span className="text-secondary leading-relaxed text-[0.98rem]">{reason.text}</span>
                  </li>
                ))}
              </ul>
              <span className="btn-shine text-white px-8 py-4 rounded-full font-semibold text-center sovereign-shadow block sm:inline-block group-hover:brightness-95 transition">
                Request a quote
              </span>
            </div>
          </Link>
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
