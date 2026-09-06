import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import StepIcon from '../components/StepIcon'

export const metadata = {
  title: 'Building Reinstatement Valuation for Managing Agents | RICS',
  description:
    'RICS building reinstatement valuation for managing agents. BCIS-indexed, insurer-accepted rebuild cost assessments that keep every property in your portfolio compliant and fully insured.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
  openGraph: {
    title: 'Building Reinstatement Valuation for Managing Agents | RICS',
    description:
      'RICS building reinstatement valuation for managing agents. BCIS-indexed, insurer-accepted rebuild cost assessments that keep every property in your portfolio compliant and fully insured.',
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
    question: 'What is a building reinstatement valuation?',
    answer: 'A building reinstatement valuation is a professional, RICS‑regulated calculation of the full cost of rebuilding a property from scratch — the figure the buildings insurance sum insured should be based on. A building reinstatement valuation covers demolition, debris removal, professional fees, and compliance with current building regulations, and it is deliberately different from a property’s market value.',
  },
  {
    question: 'What is an insurance reinstatement valuation for managing agents?',
    answer: 'It is a professional, RICS‑regulated calculation of the full rebuild cost of each property in a managed portfolio — the figure the buildings insurance sum insured should be based on. It covers demolition, debris removal, professional fees, and compliance with current building regulations, and it is deliberately different from a property’s market value.',
  },
  {
    question: 'Why should managing agents commission assessments across a portfolio?',
    answer: 'Managing agents place buildings insurance on behalf of freeholders and leaseholders, so an inaccurate sum insured is a direct exposure. Most policies contain a condition of average, which means an underinsured building can have any claim reduced in proportion to the shortfall. Keeping accurate, current RICS‑regulated valuations across the portfolio protects clients, reduces disputes, and supports good management practice.',
  },
  {
    question: 'How does underinsurance create liability for managing agents?',
    answer: 'If a building is underinsured and a major claim is settled short under a condition of average, leaseholders can face significant unexpected costs, and questions naturally follow about whether the sum insured was kept adequate. A programme of regular RICS‑regulated reinstatement cost assessments demonstrates that reasonable steps were taken to keep valuations accurate.',
  },
  {
    question: 'How often should portfolio valuations be reviewed?',
    answer: 'RICS guidance recommends a full reinstatement cost assessment at least every three years for each property, with index‑linking applied in the years in between. Given recent construction‑cost inflation, relying on index‑linking alone for longer can leave a material underinsurance gap.',
  },
  {
    question: 'Can you handle assessments across a large portfolio?',
    answer: 'Yes. We carry out RICS‑regulated, BCIS‑indexed assessments across multiple properties, using desktop assessments for standard buildings and on‑site surveys where complexity or value requires it, so an entire portfolio can be brought up to date efficiently.',
  },
  {
    question: 'Are the reports accepted by insurers?',
    answer: 'Yes. Every report is RICS‑regulated and BCIS‑indexed, and is prepared to be broker‑ready and accepted by UK insurers as evidence of an accurate sum insured at renewal.',
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
    img: '/rca-outdated-portfolio.webp',
    title: 'Outdated portfolio figures',
    desc: 'Keeping an accurate figure on every building in a portfolio is difficult, and any gaps become the managing agent’s exposure. A rolling review programme keeps each sum insured current and defensible.',
  },
  {
    img: '/rca-index-linking-drift.webp',
    title: 'Index‑linking misses local costs',
    desc: 'National index‑linking misses regional variation in labour and material costs, so a blanket adjustment can leave individual buildings under‑insured. Periodic reassessment corrects that drift across the portfolio.',
  },
  {
    img: '/rca-liability-claim.webp',
    title: 'Liability at claim',
    desc: 'If an underinsured property suffers a major loss, questions follow about whether the sum insured was kept adequate. A documented review programme evidences a managing agent’s duty of care.',
  },
]

const help = [
  { icon: 'summarize', title: 'Consolidated portfolio reports', desc: 'One report, with a rebuild figure per property.' },
  { icon: 'verified', title: 'RICS‑regulated and insurer accepted', desc: 'BCIS‑indexed figures accepted without challenge.' },
  { icon: 'support_agent', title: 'A named surveyor throughout', desc: 'One point of contact from instruction to delivery.' },
]

const reasons = [
  { icon: 'event_repeat', text: 'Keeps every property compliant without re‑instructing each year.' },
  { icon: 'trending_up', text: 'Automatic BCIS‑indexed annual updates track rising costs.' },
  { icon: 'summarize', text: 'One defensible figure per building, ready for every renewal.' },
]

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
      <Breadcrumbs showSchema={false} items={[{ name: 'Insurance Valuations for Managing Agents' }]} accent="#1A6B4A" />

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
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Insurance valuations for <span className="text-[#1A6B4A]">managing agents</span>.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              Stay compliant and protect the properties you manage. A RICS building reinstatement valuation your insurers will accept, BCIS‑indexed, fully documented, and delivered within 48 hours.
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
              Why managing agents rely on an accurate building reinstatement valuation.
            </h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>
                When you manage buildings for other people, the insurance has to be right &mdash; and a
                building reinstatement valuation is how you show it is. It&rsquo;s the cost of rebuilding a
                property from scratch, and it&rsquo;s not what the building would sell for.
              </p>
              <p>
                Most policies apply a{' '}
                <strong className="font-semibold text-primary">condition of average</strong>, so one
                underinsured building can see its claim cut and the shortfall land on leaseholders. A regular
                programme of{' '}
                <Link href="/services" className="text-[#1A6B4A] underline underline-offset-2 hover:text-[#1A6B4A]/80">
                  RICS‑regulated, BCIS‑indexed assessments
                </Link>{' '}
                keeps a portfolio accurate and defensible &mdash; see our guide to the{' '}
                <Link href="/resources/top-risks-of-underinsurance-for-managing-agents" className="text-[#1A6B4A] underline underline-offset-2 hover:text-[#1A6B4A]/80">
                  top risks of underinsurance for managing agents
                </Link>.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[420px]">
            <Image
              src="/managing-agents-office-block.jpg"
              alt="Modern commercial building in a managed property portfolio"
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
              Where portfolio cover slips out of step.
            </h2>
            <p className="text-white/70 leading-relaxed mt-5">
              Around <strong className="font-semibold text-white">76% of UK buildings are underinsured</strong>, rising to roughly <strong className="font-semibold text-white">79%</strong> for commercial property (<a href="https://www.rebuildcostassessment.com/post/buildings-underinsurance-annual-infographic-2024" target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200">Rebuild Cost Assessment</a>) — leaving the agents who manage them exposed to proportional claim cuts and duty-of-care questions.
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
              One accurate figure for every building.
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
              The right assessment for managing agents.
            </h2>
          </div>
          <Link href="/contact?service=3year#contact-form" className="group block bg-white rounded-3xl shadow-lg overflow-hidden max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src="/surveyor-reinstatement-cost-assessment-rics.webp"
                alt="RICS surveyor managing reinstatement valuations across a portfolio"
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
                Managing a portfolio means keeping many figures accurate at once. The 3‑year protection plan
                does the heavy lifting: a full RICS assessment now, then automatic indexed updates each year,
                so nothing across the portfolio slips out of date between renewals.
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
        description="Common questions about building reinstatement valuations and reinstatement cost assessments across managed portfolios."
        items={faqItems}
      />
    </main>
    </>
  )
}
