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
    answer: 'A residential reinstatement cost assessment is a professional calculation of what it would cost to rebuild your home from the ground up if it were destroyed - including demolition, debris removal, professional fees, and compliance with current building regulations. It is the figure your buildings insurance sum insured should be based on, and it is different from your home’s market value.',
  },
  {
    question: 'Why is the rebuild cost different from what my house is worth?',
    answer: 'The market value of a home reflects the land and location as well as the building - and in many areas the land is a large part of the price. Rebuild cost reflects only the physical work of reconstructing the building. The two can be very different, which is why your insurance should be based on a proper rebuild figure, not the purchase price or a mortgage valuation.',
  },
  {
    question: 'What happens if my home is underinsured?',
    answer: 'Most home insurance policies contain a "condition of average". If your sum insured is lower than the true rebuild cost, the insurer can reduce any claim payout in proportion to the shortfall - even for a smaller claim such as a kitchen fire. An accurate reinstatement figure protects you from having to fund the gap yourself.',
  },
  {
    question: 'How often should the figure be reviewed?',
    answer: 'RICS guidance recommends a full reinstatement cost assessment at least every three years, with index-linking applied in the intervening years. Building costs have risen sharply, so relying on index-linking alone for longer can leave you underinsured without realising.',
  },
  {
    question: 'Do you assess flats, period homes and listed buildings?',
    answer: 'Yes. We assess houses, flats, period properties, and listed or non-standard construction across the UK. Standard homes are usually suited to a desktop assessment, while period, listed, or complex homes benefit from an on-site survey for full accuracy.',
  },
  {
    question: 'Will my insurer accept the report?',
    answer: 'Yes. Every assessment is RICS-regulated and BCIS-indexed, produced to be broker-ready and accepted by UK insurers as evidence of an accurate sum insured.',
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
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2 mb-4">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>home</span>
              RICS Regulated &middot; Residential Property
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="text-shine">Residential</span> Reinstatement Cost Assessments.
            </h1>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              Accurate rebuild costs for houses and flats across the UK. RICS-regulated assessments your insurer will accept &mdash; BCIS-indexed and delivered in 48 hours.
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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-stretch">
          <div>
          <div className="text-center lg:text-left mb-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center lg:justify-start gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>menu_book</span>
              The Basics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              What is a residential <span className="text-shine">reinstatement cost assessment?</span>
            </h2>
          </div>
          <div className="space-y-6 text-secondary leading-relaxed text-[1.05rem]">
            <p>
              A residential reinstatement cost assessment (RCA) is a professional estimate of what it would
              genuinely cost to rebuild your home if the worst happened &mdash; clearing the site, the
              rebuild itself, the professional fees, and bringing everything up to today&rsquo;s building
              regulations. It&rsquo;s the number your buildings insurance should be based on, and it&rsquo;s
              not the same as what your home is worth on the open market.
            </p>
            <p>
              That difference catches a lot of homeowners out. A market value or mortgage valuation includes
              the land and the location; the rebuild cost is only the bricks-and-mortar work of putting the
              building back. Base your cover on the wrong number and you can end up badly underinsured
              without ever realising it.
            </p>
            <p>
              It matters because most home policies contain a{' '}
              <strong className="text-primary">condition of average</strong>: if your sum insured is lower
              than the true rebuild cost, the insurer can cut any claim by the same proportion &mdash; even a
              smaller one. Costs don&rsquo;t stand still either, and index-linking only goes so far, which is
              why RICS recommends a full reassessment at least every three years with index-linking in
              between.
            </p>
          </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[360px]">
            <Image
              src="/reinstatement-cost-assessments-uk.webp"
              alt="UK home assessed for its rebuild cost"
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
              Problems we solve for homeowners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: 'sell',
                title: 'Insuring for market value, not rebuild cost.',
                desc: 'Many homeowners insure for the purchase price or a mortgage valuation. Those include the land and location - the rebuild cost is a different figure entirely, and getting it wrong means underinsurance.',
              },
              {
                icon: 'trending_up',
                title: 'Index linking drifting from real costs.',
                desc: 'Automatic index-linking applies a broad inflation figure that cannot track local labour shortages or material price spikes, so your sum insured slowly falls behind the true cost to rebuild.',
              },
              {
                icon: 'calculate',
                title: 'Online calculators missing the detail.',
                desc: 'Generic rebuild calculators struggle with period features, extensions, and non-standard construction, producing rough figures that can leave your home significantly under-insured.',
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
              Our solution for <span className="text-shine">homeowners.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'home_work', title: 'Every type of home', desc: 'RICS-regulated surveyors experienced with houses, flats, period properties, and listed or non-standard construction.' },
              { icon: 'architecture', title: 'A complete rebuild figure', desc: 'Debris removal, professional fees, and building-regulation compliance all included - not just the cost of the walls.' },
              { icon: 'bolt', title: 'Broker-ready in 48 hours', desc: 'A fully RICS-regulated, BCIS-indexed report accepted by UK insurers - desktop or on-site.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center border border-[#1A6B4A]/10">
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
              The right assessment for your home.
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 btn-shine rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>monitor</span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1A6B4A]">Best fit</span>
                <h3 className="text-xl font-bold text-primary leading-tight">Desktop Reinstatement Cost Assessment</h3>
              </div>
            </div>
            <p className="text-secondary leading-relaxed mb-6">
              For most standard homes, a desktop assessment gives you an accurate, RICS-regulated rebuild figure quickly and cost-effectively &mdash; no site visit needed. (Period, listed, or non-standard homes are better suited to an on-site survey.)
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Most standard houses and flats can be assessed accurately without a site visit.',
                'Fast and cost-effective, using property records and live BCIS cost data.',
                'A fully RICS-regulated, broker-ready figure your insurer will accept.',
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
              <Link href="/services#desktop-rca" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                Learn about Desktop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="scroll-reveal bg-zinc-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
            Make sure your home is properly insured.
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Get an accurate, RICS-regulated rebuild cost for your house or flat &mdash; BCIS-indexed, broker-ready, and delivered in 48 hours.
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

      <ContactSection />

      <FaqSection
        description="Common questions about residential reinstatement cost assessments, rebuild cost, and underinsurance."
        items={faqItems}
      />
    </main>
    </>
  )
}
