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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0f3d28] to-[#1A6B4A]">
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
              RICS Regulated &middot; Managing Agents
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6 text-center">
              Insurance Valuations for Managing Agents.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              Stay compliant and protect managed properties. RICS reinstatement valuations your insurers will accept - fast, accurate, and fully documented.
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
              Why managing agents rely on RICS reinstatement valuations.
            </h2>
          </div>
          <div className="space-y-5 text-zinc-700 leading-relaxed text-[1.05rem]">
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
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              Common Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight text-center">
              Problems we solve for managing agents.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'domain',
                title: 'Managing multiple properties with outdated valuations.',
                desc: 'Keeping accurate, current reinstatement figures across a managed portfolio is complex. Outdated figures create compliance gaps and expose landlords and managing agents to liability.',
              },
              {
                icon: 'trending_up',
                title: "Index linking doesn't account for local build cost inflation.",
                desc: 'Generic national indices miss regional variation in labour costs and material availability. A property in London or the South East can diverge sharply from a blanket index-linked figure.',
              },
              {
                icon: 'shield_question',
                title: 'Liability exposure if a property is underinsured at claim.',
                desc: 'If an underinsured property suffers a major loss, managing agents face serious questions about whether they fulfilled their duty of care in maintaining adequate insurance.',
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
              Our solution for managing agents.
            </h2>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 sovereign-shadow">
            <Image
              src="/surveyor-reinstatement-cost-assessment-rics.webp"
              alt="RICS surveyor preparing reinstatement cost assessments for a managed portfolio"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'Consolidated portfolio reports with per-property breakdowns',
              'RICS-regulated and BCIS-indexed - insurer accepted',
              'Named surveyor from instruction to delivery',
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
