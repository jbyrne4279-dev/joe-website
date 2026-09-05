import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'RICS Reinstatement Cost Assessment for Managing Agents | Rebuild Cost',
  description:
    'RICS reinstatement cost assessment for managing agents. Rebuild cost assessments - BCIS-indexed and insurer-accepted. Stay compliant and fully insured across your portfolio.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment for Managing Agents | Rebuild Cost',
    description:
      'RICS reinstatement cost assessment for managing agents. Rebuild cost assessments - BCIS-indexed and insurer-accepted. Stay compliant and fully insured across your portfolio.',
    url: '/managing-agents-insurance-valuations',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Insurance Valuations for Managing Agents', item: `${SITE_URL}/managing-agents-insurance-valuations` },
  ],
}

const faqItems = [
  {
    question: 'What is an insurance reinstatement valuation for managing agents?',
    answer: 'It is a professional, RICS-regulated calculation of the full rebuild cost of each property in a managed portfolio - the figure the buildings insurance sum insured should be based on. It covers demolition, debris removal, professional fees, and compliance with current building regulations, and is deliberately different from a property’s market value.',
  },
  {
    question: 'Why should managing agents commission RCAs across their portfolio?',
    answer: 'Managing agents place buildings insurance on behalf of freeholders and leaseholders, so an inaccurate sum insured is a direct exposure. Most policies contain a "condition of average", meaning an underinsured building can have any claim reduced in proportion to the shortfall. Keeping accurate, current RICS-regulated valuations across the portfolio protects clients, reduces disputes, and supports good management practice.',
  },
  {
    question: 'How does underinsurance create liability for managing agents?',
    answer: 'If a building is underinsured and a major claim is settled short under a condition of average, leaseholders can face significant unexpected costs - and questions naturally follow about whether the sum insured was kept adequate. A programme of regular RICS-regulated reinstatement cost assessments demonstrates that reasonable steps were taken to keep valuations accurate.',
  },
  {
    question: 'How often should portfolio valuations be reviewed?',
    answer: 'RICS guidance recommends a full reinstatement cost assessment at least every three years for each property, with index-linking applied in the intervening years. Given recent construction-cost inflation, relying on index-linking alone for longer periods can leave a material underinsurance gap.',
  },
  {
    question: 'Can you handle assessments across a large portfolio?',
    answer: 'Yes. We carry out RICS-regulated, BCIS-indexed assessments across multiple properties, using desktop assessments for standard buildings and on-site surveys where complexity or value requires it, so an entire portfolio can be brought up to date efficiently.',
  },
  {
    question: 'Are the reports accepted by insurers?',
    answer: 'Yes. Every report is RICS-regulated and BCIS-indexed, produced to be broker-ready and accepted by UK insurers as evidence of an accurate sum insured at renewal.',
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

export default function ManagingAgentsPage() {
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
          src="/surveyor-reinstatement-cost-assessment-rics.webp"
          alt="RICS surveyor preparing reinstatement cost assessments for a managed portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2 mb-4">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>corporate_fare</span>
              RICS Regulated &middot; Managing Agents
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Insurance Valuations for <span className="text-shine">Managing Agents.</span>
            </h1>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              Stay compliant and protect managed properties. RICS reinstatement valuations your insurers will accept &mdash; BCIS-indexed, fully documented, and delivered in 48 hours.
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>menu_book</span>
              The Basics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Why managing agents rely on <span className="text-shine">RICS reinstatement valuations.</span>
            </h2>
          </div>
          <div className="space-y-5 text-secondary leading-relaxed text-[1.05rem]">
            <p>
              A reinstatement cost assessment (RCA) is a professional calculation of what it would cost to
              rebuild a property from the ground up if it were destroyed &mdash; including demolition,
              debris removal, professional fees, and compliance with current building regulations. It is
              the figure a building&rsquo;s insurance sum insured should be based on, and it is distinct
              from market value. For a managing agent responsible for placing cover across a portfolio,
              keeping that figure accurate on every property is central to protecting clients.
            </p>
            <p>
              The risk sits in the detail of the policy. Most buildings insurance contains a{' '}
              <strong className="text-[#0f3d28]">condition of average</strong>: if a property is insured
              for less than its true rebuild cost, the insurer can scale down any claim in proportion to
              the shortfall &mdash; even for a partial loss. Across a portfolio, a handful of underinsured
              buildings can translate into significant unexpected costs for leaseholders and difficult
              questions about whether sums insured were kept adequate.
            </p>
            <p>
              Index-linking alone rarely keeps pace. It applies a general inflation figure that cannot
              reflect local labour shortages, material price movements, or regulatory change, so insured
              values drift over time. RICS recommends a full reassessment at least every three years, with
              index-linking used in between. A structured programme of{' '}
              <Link href="/services" className="text-[#1A6B4A] underline hover:text-[#1A6B4A]/80">
                RICS-regulated, BCIS-indexed assessments
              </Link>{' '}
              keeps an entire portfolio current, defensible at renewal, and aligned with good management
              practice. You can read more in our guide to the{' '}
              <Link href="/resources/top-risks-of-underinsurance-for-managing-agents" className="text-[#1A6B4A] underline hover:text-[#1A6B4A]/80">
                top risks of underinsurance for managing agents
              </Link>.
            </p>
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
              Problems we solve for managing agents.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: 'domain',
                title: 'Portfolios with outdated valuations.',
                desc: 'Keeping accurate, current reinstatement figures across a managed portfolio is complex. Outdated figures create compliance gaps and expose landlords and managing agents to liability.',
              },
              {
                icon: 'trending_up',
                title: 'Index linking misses local inflation.',
                desc: 'Generic national indices miss regional variation in labour costs and material availability. A property in London or the South East can diverge sharply from a blanket index-linked figure.',
              },
              {
                icon: 'gavel',
                title: 'Liability exposure at claim.',
                desc: 'If an underinsured property suffers a major loss, managing agents face serious questions about whether they fulfilled their duty of care in maintaining adequate insurance.',
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
              Our solution for <span className="text-shine">managing agents.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'summarize', title: 'Consolidated portfolio reports', desc: 'One clear report across your portfolio with per-property rebuild cost breakdowns, ready to evidence at renewal.' },
              { icon: 'account_balance', title: 'RICS-regulated & insurer accepted', desc: 'Every figure BCIS-indexed and produced to be accepted by UK insurers without challenge.' },
              { icon: 'support_agent', title: 'A named surveyor throughout', desc: 'One RICS-regulated point of contact from instruction to delivery, so the whole programme runs smoothly.' },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-11 h-11 btn-shine rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>
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

      {/* CTA Strip */}
      <section className="bg-[#0f3d28] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center">
            Protect every property you manage.
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-center">
            RICS-regulated insurance valuations tailored for managing agents - consolidated reporting, insurer accepted, delivered fast.
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
        description="Common questions about reinstatement cost assessments and insurance valuations across managed portfolios."
        items={faqItems}
      />

      <ContactSection />
    </main>
    </>
  )
}
